const year = document.querySelector('#year');
if (year) {
  const currentYear = new Date().getFullYear();
  year.textContent = currentYear > 2025 ? `2025–${currentYear}` : '2025';
}

const toggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
  });
}

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  }
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));


// Use the most appropriate SMS link format for the visitor's device.
const smsLink = document.querySelector('#sms-link');
if (smsLink) {
  const ua = navigator.userAgent || navigator.vendor || window.opera || '';
  if (/android/i.test(ua)) {
    smsLink.setAttribute('href', 'smsto:+12025507234');
  } else {
    smsLink.setAttribute('href', 'sms:+12025507234');
  }
}


// Version 11.1.1: Raga quiz. Exact ties are resolved by the most important question.
const RAGA_AUR_TAAL_RAGAS = [{"slug": "yaman", "name": "Yaman", "thaat": "Kalyan", "time": "1st prahar of night / early evening", "mood": "Graceful, peaceful, devotional, expansive", "quiz": "You are reflective, balanced, and drawn to beauty with a quiet devotional feeling."}, {"slug": "kafi", "name": "Kafi", "thaat": "Kafi", "time": "2nd prahar of night / late evening", "mood": "Earthy, warm, expressive, folk-like", "quiz": "You are warm, expressive, approachable, and connected to people and tradition."}, {"slug": "khamaj", "name": "Khamaj", "thaat": "Khamaj", "time": "2nd prahar of night / late evening", "mood": "Sweet, graceful, romantic, lyrical", "quiz": "You are charming, lyrical, and drawn to music with elegance and emotional warmth."}, {"slug": "bhimpalasi", "name": "Bhimpalasi", "thaat": "Kafi", "time": "Afternoon", "mood": "Longing, introspective, gentle, emotional", "quiz": "You are introspective, thoughtful, and drawn to music that carries feeling beneath the surface."}, {"slug": "bageshri", "name": "Bageshri", "thaat": "Kafi", "time": "Late evening / night", "mood": "Tender, romantic, devotional, yearning", "quiz": "You are gentle, expressive, and drawn to quiet emotion and devotion."}, {"slug": "bhupali", "name": "Bhupali", "thaat": "Kalyan", "time": "1st prahar of night / evening", "mood": "Pure, bright, simple, uplifting", "quiz": "You are clear, bright, sincere, and drawn to simplicity with depth."}, {"slug": "desh", "name": "Desh", "thaat": "Khamaj", "time": "Late evening / night", "mood": "Nostalgic, lyrical, monsoon-like, patriotic", "quiz": "You are nostalgic, heartfelt, and drawn to music that carries memory and feeling."}, {"slug": "durga", "name": "Durga", "thaat": "Bilawal", "time": "2nd prahar of night", "mood": "Pure, devotional, steady, peaceful", "quiz": "You are steady, sincere, devotional, and drawn to clarity and inner strength."}, {"slug": "alhaiya-bilawal", "name": "Alhaiya Bilawal", "thaat": "Bilawal", "time": "Morning", "mood": "Bright, dignified, spacious, morning-like", "quiz": "You are composed, bright, disciplined, and drawn to clarity with refinement."}, {"slug": "vrindavani-sarang", "name": "Vrindavani Sarang", "thaat": "Kafi", "time": "Afternoon", "mood": "Bright, devotional, pastoral, serene", "quiz": "You are serene, open-hearted, and drawn to devotion, nature, and gentleness."}, {"slug": "bhairav", "name": "Bhairav", "thaat": "Bhairav", "time": "Early morning", "mood": "Serious, meditative, ancient, devotional", "quiz": "You are meditative, serious, disciplined, and drawn to spiritual depth."}, {"slug": "bihag", "name": "Bihag", "thaat": "Bilawal", "time": "2nd prahar of night", "mood": "Elegant, romantic, luminous, graceful", "quiz": "You are elegant, expressive, and drawn to beauty with a refined sparkle."}, {"slug": "kedar", "name": "Kedar", "thaat": "Kalyan", "time": "1st prahar of night", "mood": "Majestic, devotional, ancient, peaceful", "quiz": "You are peaceful, devotional, dignified, and drawn to classical depth."}, {"slug": "tilak-kamod", "name": "Tilak Kamod", "thaat": "Khamaj", "time": "Night", "mood": "Playful, graceful, sweet, lyrical", "quiz": "You are graceful, expressive, playful, and drawn to sweetness in music."}, {"slug": "asavari", "name": "Asavari", "thaat": "Asavari", "time": "Late morning", "mood": "Serious, plaintive, reflective, devotional", "quiz": "You are thoughtful, grounded, and drawn to music with quiet seriousness."}, {"slug": "bhairavi", "name": "Bhairavi", "thaat": "Bhairavi", "time": "Morning / often sung at the end of a performance", "mood": "Devotional, compassionate, expressive, complete", "quiz": "You are compassionate, devotional, and drawn to expressive music with emotional fullness."}];
const RAGA_AUR_TAAL_QUIZ = [{"q": "What time of day feels most like you?", "options": [{"text": "Early morning — quiet, serious, reflective", "scores": {"bhairav": 3, "asavari": 2, "alhaiya-bilawal": 1}}, {"text": "Morning — bright, clear, and composed", "scores": {"alhaiya-bilawal": 3, "bhairavi": 2, "durga": 1}}, {"text": "Afternoon — warm, open, and thoughtful", "scores": {"bhimpalasi": 3, "vrindavani-sarang": 3, "asavari": 1}}, {"text": "Evening — peaceful, graceful, devotional", "scores": {"yaman": 3, "bhupali": 2, "kedar": 2}}, {"text": "Late night — elegant, emotional, and deep", "scores": {"bageshri": 3, "bihag": 3, "malkauns": 1, "khamaj": 1}}]}, {"q": "Which mood draws you in most?", "options": [{"text": "Peace and beauty", "scores": {"yaman": 3, "kedar": 2, "durga": 1}}, {"text": "Joy and simplicity", "scores": {"bhupali": 3, "durga": 2, "vrindavani-sarang": 1}}, {"text": "Longing and quiet emotion", "scores": {"bageshri": 3, "bhimpalasi": 3, "desh": 1}}, {"text": "Sweetness and charm", "scores": {"khamaj": 3, "tilak-kamod": 3, "bihag": 1}}, {"text": "Devotion and depth", "scores": {"bhairav": 3, "bhairavi": 3, "kedar": 1}}]}, {"q": "Choose a setting.", "options": [{"text": "A temple at sunrise", "scores": {"bhairav": 3, "bhairavi": 2, "asavari": 1}}, {"text": "An evening lamp-lit courtyard", "scores": {"yaman": 3, "kedar": 2, "bhupali": 1}}, {"text": "Rain by the window", "scores": {"desh": 3, "bageshri": 2, "bhimpalasi": 1}}, {"text": "A village festival or folk gathering", "scores": {"kafi": 3, "khamaj": 2, "tilak-kamod": 1}}, {"text": "A calm green garden in the afternoon", "scores": {"vrindavani-sarang": 3, "durga": 2, "alhaiya-bilawal": 1}}]}, {"q": "In a group, you are usually the one who…", "options": [{"text": "Brings calm and balance", "scores": {"yaman": 3, "durga": 2, "kedar": 1}}, {"text": "Thinks deeply before speaking", "scores": {"bhairav": 3, "asavari": 2, "bhimpalasi": 1}}, {"text": "Makes people feel comfortable", "scores": {"kafi": 3, "khamaj": 2, "vrindavani-sarang": 1}}, {"text": "Remembers meaningful moments", "scores": {"desh": 3, "bageshri": 2, "bhairavi": 1}}, {"text": "Adds elegance and sparkle", "scores": {"bihag": 3, "tilak-kamod": 2, "khamaj": 1}}]}, {"q": "What kind of melody do you prefer?", "options": [{"text": "Simple, open, and easy to sing", "scores": {"bhupali": 3, "durga": 3, "vrindavani-sarang": 1}}, {"text": "Curved and classical with special phrases", "scores": {"kedar": 3, "bihag": 2, "alhaiya-bilawal": 2}}, {"text": "Earthy and expressive", "scores": {"kafi": 3, "asavari": 2, "bhairavi": 1}}, {"text": "Sweet and lyrical", "scores": {"khamaj": 3, "tilak-kamod": 3, "desh": 1}}, {"text": "Meditative and serious", "scores": {"bhairav": 3, "bhimpalasi": 2, "bageshri": 1}}]}, {"q": "Pick a color palette.", "options": [{"text": "Gold and deep blue", "scores": {"yaman": 3, "kedar": 2, "bihag": 1}}, {"text": "Saffron and sunrise gray", "scores": {"bhairav": 3, "alhaiya-bilawal": 2, "bhairavi": 1}}, {"text": "Sky blue and white", "scores": {"bhupali": 3, "durga": 2, "vrindavani-sarang": 1}}, {"text": "Rain blue and silver", "scores": {"desh": 3, "bageshri": 2, "bhimpalasi": 1}}, {"text": "Green and earthy brown", "scores": {"kafi": 3, "asavari": 2, "khamaj": 1}}]}, {"q": "What do you value most in music?", "options": [{"text": "Beauty", "scores": {"yaman": 3, "bihag": 3, "khamaj": 1}}, {"text": "Devotion", "scores": {"bhairav": 3, "kedar": 2, "bhairavi": 2}}, {"text": "Purity", "scores": {"durga": 3, "bhupali": 3, "alhaiya-bilawal": 1}}, {"text": "Emotion", "scores": {"bageshri": 3, "bhimpalasi": 3, "desh": 1}}, {"text": "Warmth", "scores": {"kafi": 3, "tilak-kamod": 2, "vrindavani-sarang": 1}}]}, {"q": "Choose a phrase.", "options": [{"text": "Stillness has power.", "scores": {"bhairav": 3, "asavari": 2, "kedar": 1}}, {"text": "Beauty brings peace.", "scores": {"yaman": 3, "bihag": 2, "khamaj": 1}}, {"text": "Joy can be simple.", "scores": {"bhupali": 3, "durga": 3, "vrindavani-sarang": 1}}, {"text": "The heart remembers.", "scores": {"desh": 3, "bageshri": 2, "bhairavi": 1}}, {"text": "Warmth brings people together.", "scores": {"kafi": 3, "tilak-kamod": 2, "khamaj": 1}}]}, {"q": "Which musical path sounds most appealing?", "options": [{"text": "Learning a peaceful evening raga first", "scores": {"yaman": 3, "bhupali": 2, "kedar": 1}}, {"text": "Exploring devotional morning music", "scores": {"bhairav": 3, "bhairavi": 2, "alhaiya-bilawal": 1}}, {"text": "Understanding emotional afternoon ragas", "scores": {"bhimpalasi": 3, "asavari": 2, "vrindavani-sarang": 1}}, {"text": "Singing lyrical and sweet melodies", "scores": {"khamaj": 3, "tilak-kamod": 3, "bihag": 1}}, {"text": "Connecting music with memory and rain", "scores": {"desh": 3, "bageshri": 2, "kafi": 1}}]}, {"q": "Pick the result that feels most like you.", "options": [{"text": "Calm and refined", "scores": {"yaman": 3, "bihag": 2, "kedar": 1}}, {"text": "Sincere and devotional", "scores": {"durga": 3, "bhairav": 2, "bhairavi": 2}}, {"text": "Warm and expressive", "scores": {"kafi": 3, "khamaj": 2, "tilak-kamod": 2}}, {"text": "Thoughtful and emotional", "scores": {"bhimpalasi": 3, "bageshri": 3, "desh": 1}}, {"text": "Bright and clear", "scores": {"bhupali": 3, "alhaiya-bilawal": 2, "vrindavani-sarang": 2}}]}];
const RAGA_RESULT_KEY = 'ragaAurTaalQuizResult';

// The most important question is: "Which mood draws you in most?"
const RAGA_IMPORTANT_QUESTION_INDEX = 1;

function getRagaBySlug(slug) {
  return RAGA_AUR_TAAL_RAGAS.find((raga) => raga.slug === slug);
}

function renderSavedRagaCards() {
  const savedSlug = localStorage.getItem(RAGA_RESULT_KEY);
  const raga = savedSlug ? getRagaBySlug(savedSlug) : null;
  document.querySelectorAll('[data-saved-raga]').forEach((card) => {
    if (!raga) {
      card.hidden = true;
      card.innerHTML = '';
      return;
    }
    card.hidden = false;
    card.innerHTML = `
      <p><strong>Your saved result:</strong> Raga ${raga.name}</p>
      <p>${raga.quiz}</p>
      <div class="saved-actions">
        <a class="button primary" href="${window.location.pathname.includes('/ragas/') ? '../' : ''}ragas/${raga.slug}.html">View Your Raga</a>
        <a class="button secondary" href="https://ragaaurtaal.com/find-your-raga.html">Take the Test Again</a>
        <button class="button ghost" type="button" data-clear-raga-result>Clear Saved Result</button>
      </div>
    `;
  });
}

document.addEventListener('click', (event) => {
  const clearButton = event.target.closest('[data-clear-raga-result]');
  if (!clearButton) return;
  localStorage.removeItem(RAGA_RESULT_KEY);
  renderSavedRagaCards();
});

renderSavedRagaCards();

const quizRoot = document.querySelector('#raga-quiz');
if (quizRoot) {
  const questionEl = document.querySelector('#quiz-question');
  const progressText = document.querySelector('#quiz-progress-text');
  const barFill = document.querySelector('#quiz-bar-fill');
  const backButton = document.querySelector('#quiz-back');
  const nextButton = document.querySelector('#quiz-next');
  const resultEl = document.querySelector('#quiz-result');

  let currentIndex = 0;
  const answers = new Array(RAGA_AUR_TAAL_QUIZ.length).fill(null);

  function renderQuestion() {
    const question = RAGA_AUR_TAAL_QUIZ[currentIndex];
    const total = RAGA_AUR_TAAL_QUIZ.length;
    progressText.textContent = `Question ${currentIndex + 1} of ${total}`;
    barFill.style.width = `${((currentIndex + 1) / total) * 100}%`;
    backButton.disabled = currentIndex === 0;
    nextButton.textContent = currentIndex === total - 1 ? 'See My Raga' : 'Next';

    questionEl.innerHTML = `
      <h2 class="quiz-question-title">${question.q}</h2>
      <div class="quiz-options">
        ${question.options.map((option, optionIndex) => `
          <label class="quiz-option">
            <input type="radio" name="quiz-answer" value="${optionIndex}" ${answers[currentIndex] === optionIndex ? 'checked' : ''}>
            <span>${option.text}</span>
          </label>
        `).join('')}
      </div>
    `;
  }

  function calculateScores() {
    const scores = {};
    for (const raga of RAGA_AUR_TAAL_RAGAS) scores[raga.slug] = 0;

    answers.forEach((answerIndex, questionIndex) => {
      const option = RAGA_AUR_TAAL_QUIZ[questionIndex].options[answerIndex];
      if (!option) return;
      for (const [slug, value] of Object.entries(option.scores)) {
        if (scores[slug] !== undefined) scores[slug] += value;
      }
    });

    return scores;
  }

  function getTopMatches(scores) {
    let topScore = -1;
    for (const raga of RAGA_AUR_TAAL_RAGAS) {
      const score = scores[raga.slug] || 0;
      if (score > topScore) topScore = score;
    }
    return RAGA_AUR_TAAL_RAGAS.filter((raga) => (scores[raga.slug] || 0) === topScore);
  }

  function resolveTieWithImportantQuestion(tiedRagas) {
    const importantAnswerIndex = answers[RAGA_IMPORTANT_QUESTION_INDEX];
    const importantQuestion = RAGA_AUR_TAAL_QUIZ[RAGA_IMPORTANT_QUESTION_INDEX];
    const importantOption = importantQuestion && importantQuestion.options[importantAnswerIndex];

    if (!importantOption) return tiedRagas[0];

    let bestRaga = tiedRagas[0];
    let bestImportantScore = -1;

    tiedRagas.forEach((raga) => {
      const importantScore = importantOption.scores[raga.slug] || 0;
      if (importantScore > bestImportantScore) {
        bestImportantScore = importantScore;
        bestRaga = raga;
      }
    });

    return bestRaga;
  }

  function calculateResult() {
    const scores = calculateScores();
    const matches = getTopMatches(scores);
    if (matches.length === 1) return { raga: matches[0], wasTieResolved: false };

    return {
      raga: resolveTieWithImportantQuestion(matches),
      wasTieResolved: true
    };
  }

  function showResult() {
    const result = calculateResult();
    const raga = result.raga;

    localStorage.setItem(RAGA_RESULT_KEY, raga.slug);
    renderSavedRagaCards();

    quizRoot.hidden = true;
    resultEl.hidden = false;
    resultEl.innerHTML = `
      <p class="eyebrow">Your Result</p>
      <h2>You are Raga ${raga.name}</h2>
      <p class="lede">${raga.quiz}</p>
      
      <div class="result-meta">
        <div><span>Thaat</span><strong>${raga.thaat}</strong></div>
        <div><span>Time</span><strong>${raga.time}</strong></div>
        <div><span>Mood</span><strong>${raga.mood}</strong></div>
      </div>
      <div class="result-actions">
        <a class="button primary" href="ragas/${raga.slug}.html">Learn About Raga ${raga.name}</a>
        <a class="button secondary" href="https://ragaaurtaal.com/find-your-raga.html">Take the Test Again</a>
        <a class="button ghost" href="learn-about-ragas.html">Browse All Ragas</a>
      </div>
    `;
window.scrollTo({ top: resultEl.offsetTop - 120, behavior: 'smooth' });
  }

  questionEl.addEventListener('change', (event) => {
    if (event.target.name === 'quiz-answer') {
      answers[currentIndex] = Number(event.target.value);
    }
  });

  backButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      renderQuestion();
    }
  });

  nextButton.addEventListener('click', () => {
    if (answers[currentIndex] === null) {
      questionEl.querySelector('.quiz-options').animate(
        [{ transform: 'translateX(0)' }, { transform: 'translateX(-6px)' }, { transform: 'translateX(6px)' }, { transform: 'translateX(0)' }],
        { duration: 220 }
      );
      return;
    }

    if (currentIndex === RAGA_AUR_TAAL_QUIZ.length - 1) {
      showResult();
    } else {
      currentIndex += 1;
      renderQuestion();
    }
  });

  renderQuestion();
}


// Version 11.2.0: Homepage dynamic third CTA.
// If a visitor has not taken the quiz, show "Find Your Raga".
// If a visitor already has a saved quiz result, show "Contact Form".
const homeRagaAction = document.querySelector('[data-home-raga-action]');
if (homeRagaAction) {
  const savedRaga = localStorage.getItem('ragaAurTaalQuizResult');
  if (savedRaga) {
    homeRagaAction.textContent = 'Contact Form';
    homeRagaAction.setAttribute('href', 'contact.html');
  } else {
    homeRagaAction.textContent = 'Find Your Raga';
    homeRagaAction.setAttribute('href', 'find-your-raga.html');
  }
}


// Version 11.3.0: PWA service worker registration.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').catch(() => {
      // Service worker registration can fail in local preview or unsupported browsers.
    });
  });
}
