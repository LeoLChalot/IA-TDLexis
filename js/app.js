/* =========================================================================
   VARIABLES D'ÉTAT & GESTION DE SESSION
   ========================================================================= */
let currentLevel = 'ce2';
let currentTextIndex = 0;
let currentFont = 'lexend';
let currentFontSize = 18;
let currentLineHeight = 1.8;
let currentLetterSpacing = 'normal';
let currentTheme = 'dark'; // Thème Sombre activé par défaut conformément à la demande
let maskActive = false;
let timerInterval = null;
let timerSeconds = 0;

/* =========================================================================
   INITIALISATION AU CHARGEMENT
   ========================================================================= */
window.addEventListener('DOMContentLoaded', () => {
  // Récupération du thème sauvegardé ou thème clair reposant par défaut (WCAG AAA)
  const savedTheme = (typeof localStorage !== 'undefined' && localStorage.getItem('ortho_theme')) || 'default';
  setTheme(savedTheme);
  setFont('lexend');
  loadSettings();
  renderTextSelector();
  renderCurrentText();
  setupReadingMask();
  preparePrintView();
});

/* =========================================================================
   GESTION DE LA NAVIGATION : NIVEAUX & TEXTES
   ========================================================================= */
function selectLevel(levelKey) {
  currentLevel = levelKey;
  currentTextIndex = 0;

  // Mise à jour visuelle des onglets de niveaux avec contraste élevé
  document.querySelectorAll('.level-tab').forEach(btn => {
    btn.className = "level-tab px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all app-btn-inactive";
  });
  const activeBtn = document.getElementById(`nav-btn-${levelKey}`);
  if (activeBtn) {
    activeBtn.className = "level-tab px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all app-btn-active";
  }

  renderTextSelector();
  renderCurrentText();
}

function selectText(index) {
  currentTextIndex = index;
  renderTextSelector();
  renderCurrentText();
}

function renderTextSelector() {
  const container = document.getElementById('text-selector-container');
  const texts = DATABASE[currentLevel];
  container.innerHTML = '';

  texts.forEach((txt, idx) => {
    const btn = document.createElement('button');
    const isActive = idx === currentTextIndex;
    btn.className = `px-3 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${isActive
        ? 'app-btn-active'
        : 'app-subcard app-text-muted border app-border hover:opacity-90'
      }`;
    btn.innerHTML = `<span>Texte ${idx + 1} :</span> <span class="font-normal opacity-90">${txt.theme}</span>`;
    btn.onclick = () => selectText(idx);
    container.appendChild(btn);
  });
}

function renderCurrentText() {
  const textData = DATABASE[currentLevel][currentTextIndex];
  if (!textData) return;

  // Calcul de la longueur
  const totalWords = textData.lines.join(' ').split(/\s+/).length;

  // Métadonnées du texte (Écran & Impression)
  document.getElementById('text-title').textContent = textData.title;
  document.getElementById('text-theme-badge').textContent = textData.themeTag;
  document.getElementById('text-level-badge').textContent = getLevelLabel(currentLevel);

  // Synchronisation des métadonnées pour l'impression A4 formelle
  document.querySelectorAll('.print-level-auto').forEach(el => el.textContent = getLevelLabel(currentLevel));
  document.querySelectorAll('.print-title-auto').forEach(el => el.textContent = textData.title);
  document.querySelectorAll('.print-theme-auto').forEach(el => el.textContent = textData.themeTag);
  document.querySelectorAll('.print-length-auto').forEach(el => el.textContent = `${textData.lines.length} lignes (~${totalWords} mots)`);

  document.getElementById('text-length-stats').textContent = `Longueur : ${textData.lines.length} lignes | ~${totalWords} mots`;

  // Rendu des lignes numérotées
  const textContainer = document.getElementById('text-reading-container');
  textContainer.innerHTML = '';

  textData.lines.forEach((line, index) => {
    const row = document.createElement('div');
    row.className = 'line-row py-1 px-1 flex items-baseline';

    /*     const num = document.createElement('span');
        num.className = 'line-num';
        num.textContent = (index + 1).toString().padStart(2, '0'); */

    const content = document.createElement('span');
    content.className = 'flex-1 pl-1 cursor-text';
    content.textContent = line;

    // row.appendChild(num);
    row.appendChild(content);
    textContainer.appendChild(row);
  });

  // Rendu des justifications psycholinguistiques
  document.getElementById('psycho-readability').textContent = `${textData.psycho.flesch} / 100`;
  document.getElementById('psycho-readability-desc').textContent = textData.psycho.fleschDesc;
  document.getElementById('psycho-lme').textContent = textData.psycho.lme;
  document.getElementById('psycho-manulex').textContent = textData.psycho.manulex;
  document.getElementById('psycho-manulex-desc').textContent = textData.psycho.manulexDetails;
  document.getElementById('psycho-syntax-desc').textContent = textData.psycho.syntaxDetails;
  document.getElementById('psycho-anaphora-desc').textContent = textData.psycho.anaphoraDetails;

  // Rendu des 5 questions orales
  renderQuestions(textData.questions);

  // Chargement du bloc-notes patient
  loadClinicalNotes();
}

function renderQuestions(questions) {
  const container = document.getElementById('questions-list-container');
  container.innerHTML = '';

  questions.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'app-subcard rounded-xl border app-border overflow-hidden text-xs transition-shadow print-question-item';

    card.innerHTML = `
      <div class="p-3.5 border-b app-border flex items-start gap-2.5">
        <span class="w-5 h-5 rounded-md app-btn-active font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5 no-print">
          ${idx + 1}
        </span>
        <div class="flex-1">
          <div class="print-only print-q-header">Question ${idx + 1} — ${escapeHtml(item.type)}</div>
          <span class="text-[10px] font-bold uppercase tracking-wider app-text-dim block mb-1 no-print">${escapeHtml(item.type)}</span>
          <p class="font-bold text-sm leading-snug print-q-text">« ${escapeHtml(item.q)} »</p>
        </div>
      </div>
      <div class="p-3.5 space-y-2.5" style="background-color: var(--subcard-inner-bg);">
        <div>
          <span class="font-semibold flex items-center gap-1.5 text-[11px] mb-1 no-print" style="color: var(--badge-success-text);">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Attendu clinique cible :
          </span>
          <div class="print-q-attendu">
            <strong class="print-only text-[8pt] text-slate-900">Attendu clinique cible : </strong>
            <span class="text-[11px] leading-relaxed app-text-muted">${escapeHtml(item.attendu)}</span>
          </div>
        </div>
        <div class="p-2.5 rounded-lg border app-border" style="background-color: var(--badge-accent-bg); border-color: var(--badge-accent-border);">
          <span class="font-semibold flex items-center gap-1.5 text-[10px] uppercase tracking-wide mb-0.5 no-print" style="color: var(--badge-accent-text);">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            Piste d'étayage & Relance TDL :
          </span>
          <div class="print-q-scaffold">
            <strong class="print-only text-[7.5pt] text-slate-800">Piste d'étayage TDL : </strong>
            <span class="text-[11px] leading-tight italic app-text-muted">${escapeHtml(item.scaffold)}</span>
          </div>
        </div>
        <!-- Ligne formelle de cotation clinique exclusive à l'impression avec cases à cocher nettes -->
        <div class="print-only print-scoring-line">
          <span class="font-bold text-slate-800 mr-2">Cotation :</span>
          <span><span class="print-checkbox"></span> Réussite autonome</span>
          <span><span class="print-checkbox"></span> Après étayage</span>
          <span><span class="print-checkbox"></span> Non validé</span>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function getLevelLabel(lvl) {
  const map = {
    ce2: "CE2 (8-9 ans)",
    cm1: "CM1 (9-10 ans)",
    cm2: "CM2 (10-11 ans)",
    "6eme": "6ème (11-12 ans)",
    "5eme": "5ème (12-13 ans)",
    "4eme": "4ème (13-14 ans)",
    "3eme": "3ème (14-15 ans)"
  };
  return map[lvl] || lvl;
}

/* =========================================================================
   GESTION DES THÈMES & ACCESSIBILITÉ VISUELLE (WCAG AAA)
   ========================================================================= */
function setTheme(theme) {
  currentTheme = theme;
  try {
    localStorage.setItem('ortho_theme', theme);
  } catch (e) { }

  document.body.classList.remove('theme-cream', 'theme-dark');

  const btnDefault = document.getElementById('theme-btn-default');
  const btnCream = document.getElementById('theme-btn-cream');
  const btnDark = document.getElementById('theme-btn-dark');

  [btnDefault, btnCream, btnDark].forEach(btn => {
    if (btn) btn.classList.remove('active');
  });

  if (theme === 'cream') {
    document.body.classList.add('theme-cream');
    if (btnCream) btnCream.classList.add('active');
  } else if (theme === 'dark') {
    document.body.classList.add('theme-dark');
    if (btnDark) btnDark.classList.add('active');
  } else {
    if (btnDefault) btnDefault.classList.add('active');
  }
}

function setFont(fontName) {
  currentFont = fontName;
  const textContainer = document.getElementById('text-reading-container');
  textContainer.classList.remove('font-lexend', 'font-dyslexic', 'font-inter');

  ['lexend', 'dys', 'inter'].forEach(f => {
    const btn = document.getElementById(`font-${f}-btn`);
    if (btn) {
      if (f === fontName) {
        btn.className = "app-btn-active px-2.5 py-1 rounded font-medium shadow-xs";
      } else {
        btn.className = "app-btn-inactive px-2.5 py-1 rounded font-medium";
      }
    }
  });

  if (fontName === 'lexend') textContainer.classList.add('font-lexend');
  if (fontName === 'dys') textContainer.classList.add('font-dyslexic');
  if (fontName === 'inter') textContainer.classList.add('font-inter');
}

function changeFontSize(delta) {
  currentFontSize = Math.min(28, Math.max(14, currentFontSize + delta));
  applyFontSize();
}

function resetFontSize() {
  currentFontSize = 18;
  applyFontSize();
  showToast("Taille réinitialisée à 18px");
}

function applyFontSize() {
  document.getElementById('font-size-label').textContent = `${currentFontSize}px`;
  document.getElementById('text-reading-container').style.fontSize = `${currentFontSize}px`;
  updateMaskSlitHeight();
}

function toggleLineHeight() {
  if (currentLineHeight === 1.8) currentLineHeight = 2.2;
  else if (currentLineHeight === 2.2) currentLineHeight = 1.5;
  else currentLineHeight = 1.8;

  document.getElementById('line-height-label').textContent = `Interligne: ${currentLineHeight}`;
  document.getElementById('text-reading-container').style.lineHeight = currentLineHeight.toString();
  updateMaskSlitHeight();
}

function toggleLetterSpacing() {
  const container = document.getElementById('text-reading-container');
  const label = document.getElementById('spacing-label');

  if (currentLetterSpacing === 'normal') {
    currentLetterSpacing = 'wide';
    container.style.letterSpacing = '0.05em';
    label.textContent = "Lettres: Large";
  } else if (currentLetterSpacing === 'wide') {
    currentLetterSpacing = 'extrawide';
    container.style.letterSpacing = '0.1em';
    label.textContent = "Lettres: Très large";
  } else {
    currentLetterSpacing = 'normal';
    container.style.letterSpacing = 'normal';
    label.textContent = "Lettres: Normal";
  }
}

function loadSettings() {
  document.getElementById('font-size-label').textContent = `${currentFontSize}px`;
  document.getElementById('text-reading-container').style.fontSize = `${currentFontSize}px`;
  document.getElementById('text-reading-container').style.lineHeight = currentLineHeight.toString();
}

/* =========================================================================
   MASQUE DE LECTURE INTERACTIF (RÈGLE OPHTALMIQUE)
   ========================================================================= */
function toggleReadingMask() {
  maskActive = !maskActive;
  const mask = document.getElementById('reading-mask');
  const btn = document.getElementById('mask-toggle-btn');
  const status = document.getElementById('mask-status-text');

  if (maskActive) {
    mask.classList.add('active');
    btn.classList.add('app-btn-active');
    btn.classList.remove('app-text-muted');
    status.textContent = "Masque : On";
    showToast("Règle de lecture activée (suivez avec le pointeur)");
  } else {
    mask.classList.remove('active');
    btn.classList.remove('app-btn-active');
    btn.classList.add('app-text-muted');
    status.textContent = "Masque : Off";
  }
}

function updateMaskSlitHeight() {
  const slitHeight = currentFontSize * currentLineHeight * 1.5;
  document.getElementById('mask-window').style.height = `${slitHeight}px`;
}

function setupReadingMask() {
  const top = document.getElementById('mask-top');
  const win = document.getElementById('mask-window');
  const bottom = document.getElementById('mask-bottom');

  window.addEventListener('mousemove', (e) => {
    if (!maskActive) return;
    const slitH = currentFontSize * currentLineHeight * 1.5;
    const posY = Math.max(0, e.clientY - (slitH / 2));

    top.style.height = `${posY}px`;
    win.style.top = `${posY}px`;
    win.style.height = `${slitH}px`;
    bottom.style.top = `${posY + slitH}px`;
  });
}

/* =========================================================================
   CHRONOMÈTRE DE PASSATION
   ========================================================================= */
function toggleTimer() {
  const btn = document.getElementById('timer-btn');
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    btn.textContent = "Reprendre";
  } else {
    timerInterval = setInterval(() => {
      timerSeconds++;
      const mins = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
      const secs = (timerSeconds % 60).toString().padStart(2, '0');
      document.getElementById('timer-display').textContent = `${mins}:${secs}`;
    }, 1000);
    btn.textContent = "Pause";
  }
}

function resetTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  timerSeconds = 0;
  document.getElementById('timer-display').textContent = "00:00";
  document.getElementById('timer-btn').textContent = "Démarrer";
}

/* =========================================================================
   SYNTHÈSE VOCALE RALENTIE SPÉCIAL TDL (WEB SPEECH API)
   ========================================================================= */
let currentSpeech = null;
function toggleTextToSpeech() {
  if (!('speechSynthesis' in window)) {
    showToast("Synthèse vocale non prise en charge par ce navigateur.");
    return;
  }

  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    document.getElementById('tts-label').textContent = "Écouter (voix ralentie)";
    return;
  }

  const textData = DATABASE[currentLevel][currentTextIndex];
  const textToRead = textData.lines.join('. ');

  currentSpeech = new SpeechSynthesisUtterance(textToRead);
  currentSpeech.lang = 'fr-FR';
  currentSpeech.rate = 0.84; // Débit ralenti pour favoriser le traitement auditivo-verbal TDL

  currentSpeech.onstart = () => {
    document.getElementById('tts-label').textContent = "Arrêter l'écoute";
  };
  currentSpeech.onend = () => {
    document.getElementById('tts-label').textContent = "Écouter (voix ralentie)";
  };
  currentSpeech.onerror = () => {
    document.getElementById('tts-label').textContent = "Écouter (voix ralentie)";
  };

  window.speechSynthesis.speak(currentSpeech);
}

/* =========================================================================
   BLOC-NOTES CLINIQUE & SAUVEGARDE LOCALE
   ========================================================================= */
function getNoteKey() {
  const textId = DATABASE[currentLevel][currentTextIndex].id;
  const patient = document.getElementById('patient-code-input').value.trim() || 'anonyme';
  return `ortho_tdl_v2_${patient}_${textId}`;
}

function escapeHtml(str) {
  return str
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function updatePrintNotesDisplay() {
  const notesArea = document.getElementById('clinical-notes-area');
  const printDisplay = document.getElementById('print-clinical-notes-display');
  if (!printDisplay) return;

  const notes = notesArea ? notesArea.value.trim() : "";
  let html = "";

  if (notes) {
    html += `
      <div class="print-typed-notes text-slate-900">
        <div class="font-bold text-[8pt] text-slate-700 mb-1">Observations enregistrées en séance :</div>
        ${escapeHtml(notes)}
      </div>
    `;
  }

  // Lignes manuscrites toujours disponibles pour prise de note au stylo
  html += `
    <div class="print-handwriting-lines">
      <div class="text-[7.5pt] italic text-slate-500 mb-1">Remarques complémentaires / Notes manuscrites de séance :</div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="print-signature-block">
      <div>Date de séance : &nbsp;_____ / _____ / 20_____</div>
      <div>Visa / Signature du Praticien : &nbsp;______________________________</div>
    </div>
  `;

  printDisplay.innerHTML = html;
}

function saveClinicalNotes() {
  const key = getNoteKey();
  const val = document.getElementById('clinical-notes-area').value;
  try {
    localStorage.setItem(key, val);
    const status = document.getElementById('save-status');
    status.textContent = "Enregistré";
    status.classList.add('text-emerald-400');
    setTimeout(() => {
      status.textContent = "Auto-sauvegarde active";
      status.classList.remove('text-emerald-400');
    }, 1400);
    updatePrintNotesDisplay();
  } catch (e) {
    console.warn("Stockage local indisponible", e);
  }
}

function loadClinicalNotes() {
  const key = getNoteKey();
  try {
    const saved = localStorage.getItem(key) || "";
    document.getElementById('clinical-notes-area').value = saved;
  } catch (e) {
    document.getElementById('clinical-notes-area').value = "";
  }
  updatePrintNotesDisplay();
}

function updatePatientCode() {
  const code = document.getElementById('patient-code-input').value.trim();
  const displayVal = code || "______________________";
  document.querySelectorAll('.print-patient-auto').forEach(el => el.textContent = displayVal);
  loadClinicalNotes();
}

function insertNoteTag(tag) {
  const area = document.getElementById('clinical-notes-area');
  const start = area.selectionStart;
  const end = area.selectionEnd;
  const val = area.value;

  area.value = val.substring(0, start) + tag + " " + val.substring(end);
  area.focus();
  area.selectionStart = area.selectionEnd = start + tag.length + 1;
  saveClinicalNotes();
}

function clearClinicalNotes() {
  document.getElementById('clinical-notes-area').value = "";
  saveClinicalNotes();
  updatePrintNotesDisplay();
  showToast("Observations effacées.");
}

function copyClinicalNotes() {
  const textData = DATABASE[currentLevel][currentTextIndex];
  const patient = document.getElementById('patient-code-input').value.trim() || "Anonyme";
  const notes = document.getElementById('clinical-notes-area').value;

  const bilan = `=== BILAN DE SÉANCE ORTHOPHONIQUE (TDL) ===\nPatient : ${patient}\nNiveau scolaire : ${getLevelLabel(currentLevel)}\nTexte support : "${textData.title}" (${textData.theme})\nDate : ${new Date().toLocaleDateString('fr-FR')}\n\nOBSERVATIONS CLINIQUES :\n${notes || "Aucune observation saisie."}\n===========================================`;

  const tempArea = document.createElement("textarea");
  tempArea.value = bilan;
  document.body.appendChild(tempArea);
  tempArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempArea);

  showToast("Bilan de séance copié dans le presse-papier !");
}

/* =========================================================================
   ACCORDÉONS & UTILITAIRES DIVERS
   ========================================================================= */
function togglePsychoSection() {
  const details = document.getElementById('psycho-details-container');
  const icon = document.querySelector('#psycho-toggle-icon svg');
  if (details.classList.contains('hidden')) {
    details.classList.remove('hidden');
    icon.classList.remove('rotate-180');
  } else {
    details.classList.add('hidden');
    icon.classList.add('rotate-180');
  }
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toast-message');
  msgEl.textContent = msg;
  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');
  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 2400);
}

/* =========================================================================
   GESTION DE L'IMPRESSION A4 CLINIQUE (PAGE 1 : TEXTE, PAGE 2 : PRATICIEN)
   ========================================================================= */
function preparePrintView() {
  const textData = DATABASE[currentLevel] ? DATABASE[currentLevel][currentTextIndex] : null;
  const patientInput = document.getElementById('patient-code-input');
  const patient = (patientInput && patientInput.value.trim()) || "______________________";
  const today = new Date().toLocaleDateString('fr-FR');
  const levelLabel = getLevelLabel(currentLevel);

  document.querySelectorAll('.print-date-auto').forEach(el => el.textContent = today);
  document.querySelectorAll('.print-patient-auto').forEach(el => el.textContent = patient);
  document.querySelectorAll('.print-level-auto').forEach(el => el.textContent = levelLabel);

  if (textData) {
    const totalWords = textData.lines.join(' ').split(/\s+/).length;
    document.querySelectorAll('.print-title-auto').forEach(el => el.textContent = textData.title);
    document.querySelectorAll('.print-theme-auto').forEach(el => el.textContent = textData.themeTag);
    document.querySelectorAll('.print-length-auto').forEach(el => el.textContent = `${textData.lines.length} lignes (~${totalWords} mots)`);
  }

  updatePrintNotesDisplay();
}

window.addEventListener('beforeprint', preparePrintView);

// Exposition explicite sur window pour les gestionnaires inline du DOM
if (typeof window !== 'undefined') {
  window.selectLevel = selectLevel;
  window.selectText = selectText;
  window.renderTextSelector = renderTextSelector;
  window.renderCurrentText = renderCurrentText;
  window.renderQuestions = renderQuestions;
  window.getLevelLabel = getLevelLabel;
  window.setTheme = setTheme;
  window.setFont = setFont;
  window.changeFontSize = changeFontSize;
  window.resetFontSize = resetFontSize;
  window.applyFontSize = applyFontSize;
  window.toggleLineHeight = toggleLineHeight;
  window.toggleLetterSpacing = toggleLetterSpacing;
  window.loadSettings = loadSettings;
  window.toggleReadingMask = toggleReadingMask;
  window.updateMaskSlitHeight = updateMaskSlitHeight;
  window.setupReadingMask = setupReadingMask;
  window.toggleTimer = toggleTimer;
  window.resetTimer = resetTimer;
  window.toggleTextToSpeech = toggleTextToSpeech;
  window.getNoteKey = getNoteKey;
  window.saveClinicalNotes = saveClinicalNotes;
  window.loadClinicalNotes = loadClinicalNotes;
  window.updatePatientCode = updatePatientCode;
  window.insertNoteTag = insertNoteTag;
  window.clearClinicalNotes = clearClinicalNotes;
  window.copyClinicalNotes = copyClinicalNotes;
  window.togglePsychoSection = togglePsychoSection;
  window.showToast = showToast;
  window.preparePrintView = preparePrintView;
  window.updatePrintNotesDisplay = updatePrintNotesDisplay;
}
