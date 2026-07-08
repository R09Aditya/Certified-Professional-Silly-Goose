const themeBtn = document.getElementById('themeBtn');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  
  if (themeIcon) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '☕';
  }
  if (themeText) {
    themeText.textContent = theme === 'dark' ? 'Classic Cringe' : 'Midnight Coffee';
  }
}

applyTheme(localStorage.getItem('theme') || 'light');

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

const grassBtn = document.getElementById('grassBtn');
const grassBox = document.getElementById('grassBox');
let grassClicks = 0;

if (grassBtn && grassBox) {
  const teleport = () => {
    const containerRect = grassBox.getBoundingClientRect();
    const btnRect = grassBtn.getBoundingClientRect();
    
    const maxLeft = containerRect.width - btnRect.width - 20;
    const maxTop = containerRect.height - btnRect.height - 20;
    
    const left = Math.max(10, Math.floor(Math.random() * maxLeft));
    const top = Math.max(10, Math.floor(Math.random() * maxTop));
    
    grassBtn.style.position = 'absolute';
    grassBtn.style.left = left + 'px';
    grassBtn.style.top = top + 'px';
    grassBtn.style.transform = `rotate(${Math.floor(Math.random() * 20) - 10}deg)`;
  };

  grassBtn.addEventListener('mouseenter', () => {
    if (grassClicks < 5) teleport();
  });

  grassBtn.addEventListener('click', () => {
    if (grassClicks < 5) {
      grassClicks++;
      teleport();
      if (grassClicks === 5) {
        grassBtn.style.position = 'static';
        grassBtn.style.transform = 'none';
        grassBtn.innerHTML = 'Maybe later 🌱';
        grassBtn.disabled = true;
        grassBtn.style.opacity = '0.7';
      }
    }
  });
}

function triggerConfetti() {
  const colors = ['#ffb7b2', '#b5ead7', '#ffdac1', '#c7ceea', '#e8d7f1', '#ffc6ff', '#e4c16b', '#d95d39'];
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    const startX = Math.random() * window.innerWidth;
    const size = Math.floor(Math.random() * 8) + 6;
    const delay = Math.random() * 0.5;
    const duration = Math.random() * 1.5 + 1.5;
    
    confetti.style.background = color;
    confetti.style.left = startX + 'px';
    confetti.style.width = size + 'px';
    confetti.style.height = size + 'px';
    confetti.style.animationDelay = delay + 's';
    confetti.style.animationDuration = duration + 's';
    
    if (Math.random() > 0.5) {
      confetti.style.borderRadius = '50%';
    }
    
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), (duration + delay) * 1000);
  }
}

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalMsg = document.getElementById('modalMsg');
const closeBtn = document.getElementById('closeBtn');

function openModal(title, message) {
  if (modal && modalTitle && modalMsg) {
    modalTitle.textContent = title;
    modalMsg.textContent = message;
    modal.classList.add('active');
  }
}

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    if (modal) modal.classList.remove('active');
  });
}

const subtitles = [
  "professionally wasting bandwidth since today",
  "yes this is a real website",
  "my therapist told me to express myself",
  "this website exists because normal portfolios are boring",
  "made with 100% pure desperation and cold coffee"
];

const subtitle = document.getElementById('subtitle');
if (subtitle) {
  subtitle.textContent = `"${subtitles[Math.floor(Math.random() * subtitles.length)]}"`;
  subtitle.style.cursor = 'pointer';
  subtitle.addEventListener('click', () => {
    const current = subtitle.textContent.replace(/"/g, '');
    const nextIdx = (subtitles.indexOf(current) + 1) % subtitles.length;
    subtitle.textContent = `"${subtitles[nextIdx]}"`;
  });
}

const enterBtn = document.getElementById('enterBtn');
if (enterBtn) {
  enterBtn.addEventListener('click', () => {
    triggerConfetti();
  });
}

const moods = [
  "☕ Caffeinated",
  "😭 Debugging",
  "💀 Existing Unfortunately",
  "🍕 Hungry",
  "🧠 Thinking Too Much",
  "🐧 Breaking Linux Again",
  "😴 Sleep Loading..."
];
const moodBox = document.getElementById('moodBox');
const moodBtn = document.getElementById('moodBtn');

if (moodBox && moodBtn) {
  const savedMood = localStorage.getItem('mood');
  moodBox.textContent = (savedMood && moods.includes(savedMood)) ? savedMood : moods[0];
  
  moodBtn.addEventListener('click', () => {
    const current = moodBox.textContent;
    const choices = moods.filter(m => m !== current);
    const next = choices[Math.floor(Math.random() * choices.length)];
    
    moodBox.textContent = next;
    localStorage.setItem('mood', next);
    
    moodBox.classList.add('animate-mood');
    setTimeout(() => moodBox.classList.remove('animate-mood'), 400);
  });
}

const quotes = [
  "I'll fix it tomorrow.",
  "If it compiles, don't touch it.",
  "My sleep schedule has left the chat.",
  "Stack Overflow is basically my mentor.",
  "There is no bug. It's an undocumented feature.",
  "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'",
  "There are 10 types of people: those who understand binary, and those who don't.",
  "Weeks of coding can save you hours of planning."
];
const quoteBox = document.getElementById('quoteBox');
const quoteBtn = document.getElementById('quoteBtn');

if (quoteBox && quoteBtn) {
  quoteBox.textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  quoteBtn.addEventListener('click', () => {
    const current = quoteBox.textContent.replace(/"/g, '');
    const choices = quotes.filter(q => q !== current);
    quoteBox.textContent = `"${choices[Math.floor(Math.random() * choices.length)]}"`;
  });
}

const excuses = [
  "The Wi-Fi looked at me funny.",
  "My keyboard wasn't emotionally ready.",
  "I accidentally opened YouTube.",
  "Mercury was definitely involved.",
  "The goose told me not to.",
  "Windows Update started at the worst possible microsecond.",
  "My cat sat on the enter key and it felt like a sign.",
  "The code got scared of the compiler."
];
const excuseBox = document.getElementById('excuseBox');
const excuseBtn = document.getElementById('excuseBtn');

if (excuseBox && excuseBtn) {
  excuseBox.textContent = excuses[Math.floor(Math.random() * excuses.length)];
  excuseBtn.addEventListener('click', () => {
    const current = excuseBox.textContent;
    const choices = excuses.filter(e => e !== current);
    excuseBox.textContent = choices[Math.floor(Math.random() * choices.length)];
  });
}

const tabCount = document.getElementById('tabCount');
if (tabCount) {
  const target = Math.floor(Math.random() * 121) + 30;
  let current = 0;
  const timer = setInterval(() => {
    if (current >= target) {
      tabCount.textContent = target;
      clearInterval(timer);
    } else {
      current += Math.ceil(target / 15);
      if (current > target) current = target;
      tabCount.textContent = current;
    }
  }, 40);
}

const errorCheck = document.getElementById('errorCheck');
const sysCheck = document.getElementById('sysCheck');

if (errorCheck) {
  errorCheck.addEventListener('change', () => {
    if (errorCheck.checked) {
      errorCheck.parentElement.classList.add('checked');
    } else {
      errorCheck.parentElement.classList.remove('checked');
    }
  });
}

if (sysCheck) {
  sysCheck.addEventListener('change', () => {
    if (sysCheck.checked) {
      sysCheck.parentElement.classList.add('checked');
    } else {
      sysCheck.parentElement.classList.remove('checked');
    }
  });
}

const catMeter = document.getElementById('catMeter');
const catVal = document.getElementById('catVal');
if (catMeter && catVal) {
  const target = Math.floor(Math.random() * 21) + 80;
  setTimeout(() => {
    catMeter.style.width = target + '%';
    catVal.textContent = target + '%';
  }, 200);
}

const uselessFacts = [
  "I probably have 80 browser tabs open right now.",
  "I rename my files final_final_REAL_final_v2.",
  "I debug my CSS by adding border: 1px solid red to everything.",
  "I have spent more time customizing my terminal configuration than actually using it.",
  "I solve most of my coding blocks by staring at the screen and blinking aggressively.",
  "I once spent 2 hours writing code to automate a task that takes 5 seconds.",
  "I judge websites entirely by their scrollbar custom designs.",
  "I use dual monitors but just put video tutorials on one and write broken code on the other."
];
const factBox = document.getElementById('factBox');
const factBtn = document.getElementById('factBtn');

if (factBox && factBtn) {
  factBox.textContent = uselessFacts[Math.floor(Math.random() * uselessFacts.length)];
  factBtn.addEventListener('click', () => {
    const current = factBox.textContent;
    const choices = uselessFacts.filter(f => f !== current);
    factBox.textContent = choices[Math.floor(Math.random() * choices.length)];
  });
}

const yesBtn = document.getElementById('yesBtn');
const sureBtn = document.getElementById('sureBtn');

if (yesBtn) {
  yesBtn.addEventListener('click', () => {
    triggerConfetti();
    openModal("🎉 Success!", "Correct answer. Let's make questionable choices together!");
  });
}

if (sureBtn) {
  sureBtn.addEventListener('click', () => {
    triggerConfetti();
    openModal("🎉 Double Success!", "Correct answer. Excellent judgment on your part.");
  });
}

const eggBtn = document.getElementById('eggBtn');
if (eggBtn) {
  eggBtn.addEventListener('click', () => {
    triggerConfetti();
    openModal("🎉 Secret Goose Found!", "Congratulations. You found absolutely nothing. Go eat a waffle.");
  });
}

const visitorCounter = document.getElementById('visitorCounter');
if (visitorCounter) {
  let count = parseInt(localStorage.getItem('visitors') || '481516234');
  count++;
  localStorage.setItem('visitors', count);
  let formatted = String(count).padStart(12, '0');
  visitorCounter.textContent = formatted;
}

const respectsBtn = document.getElementById('respectsBtn');
const respectsCount = document.getElementById('respectsCount');
if (respectsBtn && respectsCount) {
  let count = parseInt(localStorage.getItem('respects') || '256');
  respectsCount.textContent = count;
  respectsBtn.addEventListener('click', () => {
    count++;
    localStorage.setItem('respects', count);
    respectsCount.textContent = count;
    openModal("🫡 Respects Paid!", "Press F to pay respects complete.");
  });
}

const ratingButtons = document.querySelectorAll('.rate-btn');
ratingButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    openModal("Thanks for the honest review! 👍", "You rated this website 10/10! (This was the only scientifically acceptable answer anyway)");
  });
});

const testSubmitBtn = document.getElementById('testSubmitBtn');
if (testSubmitBtn) {
  testSubmitBtn.addEventListener('click', () => {
    openModal("Result: 100% Silly Goose", "Congratulations! You are officially a Silly Goose. There is no cure for this condition.");
  });
}

const fanJoinBtn = document.getElementById('fanJoinBtn');
const fanName = document.getElementById('fanName');
if (fanJoinBtn && fanName) {
  fanJoinBtn.addEventListener('click', () => {
    if (fanName.value.trim() !== "") {
      openModal("Welcome to the flock! 🪿", `Congratulations ${fanName.value}! You are now an official Goose Fan Club member. (We sold your email for two pieces of dry breadcrumbs)`);
      fanName.value = "";
      const fanBreed = document.getElementById('fanBreed');
      if (fanBreed) fanBreed.value = "";
    }
  });
}

const gbookSubmitBtn = document.getElementById('gbookSubmitBtn');
const gbookName = document.getElementById('gbookName');
const gbookMsg = document.getElementById('gbookMsg');
const gbookList = document.getElementById('gbookList');

function renderGuestbook() {
  if (!gbookList) return;
  const entries = JSON.parse(localStorage.getItem('guestbook') || '[]');
  if (entries.length === 0) {
    gbookList.innerHTML = '<div class="guestbook-entry">No signatures yet. Be the first to vandalize!</div>';
  } else {
    gbookList.innerHTML = entries.map(e => `
      <div class="guestbook-entry">
        <strong>✍️ ${e.name}</strong>: ${e.msg}
      </div>
    `).join('');
  }
}

if (gbookSubmitBtn && gbookName && gbookMsg) {
  renderGuestbook();
  gbookSubmitBtn.addEventListener('click', () => {
    const name = gbookName.value.trim();
    const msg = gbookMsg.value.trim();
    if (name && msg) {
      const entries = JSON.parse(localStorage.getItem('guestbook') || '[]');
      entries.unshift({ name, msg });
      localStorage.setItem('guestbook', JSON.stringify(entries));
      gbookName.value = "";
      gbookMsg.value = "";
      renderGuestbook();
      openModal("Signed!", "Thanks for signing the guestbook! 📝");
    }
  });
}

const emailItems = document.querySelectorAll('.email-item');
const emailBodyBox = document.getElementById('emailBodyBox');
const emailBodies = {
  crumbs: `From: Prince Honk (prince@geese-palace.kingdom)
Subject: URGENT: Inherit 500k Breadcrumbs

Dear Friend,
I need to transfer 500,000 royal breadcrumbs out of Canada immediately.
Please send your bank details and 3 pieces of fresh lettuce.
Sincerely, Prince Honk.`,
  coffee: `From: Coffee Inc Billings (billing@caffeine-addicts.com)
Subject: Coffee Bill Overdue

Your coffee subscription is overdue by $9,999.50.
Please pay in cash or write a very convincing excuse.
Failure to pay will result in immediate sleep deprivation.`,
  mom: `From: Mom (mymom@parental-supervision.gov)
Subject: Did you touch grass?

Honey, please turn off the computer and look at a tree.
Your eyes look like screen pixels.
Love, Mom.`
};

emailItems.forEach(item => {
  item.addEventListener('click', () => {
    const emailKey = item.getAttribute('data-email');
    if (emailBodyBox && emailBodies[emailKey]) {
      emailBodyBox.style.display = 'block';
      emailBodyBox.textContent = emailBodies[emailKey];
      item.classList.add('read');
    }
  });
});

const dlButtons = document.querySelectorAll('.dl-btn');
dlButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.getAttribute('data-item');
    openModal("Download Started...", `Attempting to download ${item}... just kidding! That's impossible. Please send free pizza instead.`);
  });
});

const scanBtn = document.getElementById('scanBtn');
const scanMeter = document.getElementById('scanMeter');
const scanVal = document.getElementById('scanVal');
const scanConsole = document.getElementById('scanConsole');

if (scanBtn && scanMeter && scanVal && scanConsole) {
  scanBtn.addEventListener('click', () => {
    let progress = 0;
    scanMeter.style.width = '0%';
    scanVal.textContent = '0%';
    scanConsole.innerHTML = "Initializing virus definition scan...";
    scanBtn.disabled = true;
    
    const logs = [
      "Checking RAM for traces of braincells...",
      "Analyzing index.html formatting errors...",
      "Scanning script.js for illegal loop structures...",
      "Alert! Critical structural damage detected in CSS file...",
      "CRITICAL: Found 1 Emotional Damage. Quarantine failed."
    ];
    
    const interval = setInterval(() => {
      progress += 10;
      scanMeter.style.width = progress + '%';
      scanVal.textContent = progress + '%';
      
      const logIdx = Math.min(Math.floor(progress / 20), logs.length - 1);
      scanConsole.innerHTML += `<br>> ${logs[logIdx]}`;
      scanConsole.scrollTop = scanConsole.scrollHeight;
      
      if (progress >= 100) {
        clearInterval(interval);
        scanBtn.disabled = false;
        openModal("Scan Completed!", "Warning: 1 Emotional Damage detected. Please quarantine immediately by eating cookies.");
      }
    }, 200);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const ramMeter = document.getElementById('ramMeter');
  if (ramMeter) {
    setTimeout(() => { ramMeter.style.width = '92%'; }, 150);
  }
  
  const projMeter = document.getElementById('projMeter');
  if (projMeter) {
    setTimeout(() => { projMeter.style.width = '83%'; }, 200);
  }
  
  const energyMeter = document.getElementById('energyMeter');
  if (energyMeter) {
    setTimeout(() => { energyMeter.style.width = '4%'; }, 250);
  }
  
  const statCreativity = document.getElementById('statCreativity');
  if (statCreativity) {
    setTimeout(() => { statCreativity.style.width = '90%'; }, 100);
  }
  
  const statCoffee = document.getElementById('statCoffee');
  if (statCoffee) {
    setTimeout(() => { statCoffee.style.width = '100%'; }, 200);
  }
  
  const statCuriosity = document.getElementById('statCuriosity');
  if (statCuriosity) {
    setTimeout(() => { statCuriosity.style.width = '100%'; }, 300);
  }
  
  const statSocial = document.getElementById('statSocial');
  if (statSocial) {
    setTimeout(() => { statSocial.style.width = '30%'; }, 400);
  }
  
  const statSleep = document.getElementById('statSleep');
  if (statSleep) {
    setTimeout(() => { statSleep.style.width = '10%'; }, 500);
  }
  
  const statGrass = document.getElementById('statGrass');
  if (statGrass) {
    setTimeout(() => { statGrass.style.width = '0%'; }, 600);
  }
});
