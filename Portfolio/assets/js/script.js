// document.getElementById('menu-toggle').addEventListener('click', function() {
//   const nav = document.getElementById('fullscreen-nav');
//   nav.classList.toggle('active');
// });

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000); // Adjust the delay to match the preloader hiding animation
  });
});


const navItems = document.querySelectorAll('.nav__list-item');
const hoverSound = new Audio('assets/audios/nav.mp3');

navItems.forEach(item => {
  item.addEventListener('mouseenter', ()=> {
    hoverSound.currentTime = 0;
    hoverSound.play()
  })
})


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
const hiddenLeftElements = document.querySelectorAll(".hidden-down");
const hiddenRightElements = document.querySelectorAll(".hidden-right");
hiddenElements.forEach((el) => observer.observe(el));
hiddenLeftElements.forEach((el) => observer.observe(el));
hiddenRightElements.forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", function () {
  var menuIcons = document.querySelectorAll(".menu-icon");
  var navs = document.querySelectorAll(".nav");
  var navItems = document.querySelectorAll(".nav__list-item");

  menuIcons.forEach(function (menuIcon) {
    menuIcon.addEventListener("click", function () {
      navs.forEach(function (nav) {
        if (nav.classList.contains("nav--open")) {
          // Hide links immediately when closing
          navItems.forEach(function (item) {
            item.style.transitionDelay = "0s";
            item.style.opacity = "0";
          });
          setTimeout(function () {
            nav.classList.toggle("nav--open");
            menuIcon.classList.toggle("nav--icon");
          }, 400); // Adjust the delay to match the navbar closing animation
        } else {
          // Show navbar and then reveal links with delay
          nav.classList.toggle("nav--open");
          menuIcon.classList.toggle("nav--icon");
          setTimeout(function () {
            navItems.forEach(function (item, index) {
              item.style.transitionDelay = index * 0.1 + "s";
              item.style.opacity = "1";
            });
          }, 400); // Adjust the delay to match the navbar opening animation
        }
      });
    });
  });
});

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector(".matrix").onmouseover = (event) => {
  let iterations = 0;

  // event.target.innerText = event.target.innerText.split("");
  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return event.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iterations >= event.target.dataset.value.length)
      clearInterval(interval);

    iterations += 1 / 3;
  }, 30);
};




const qoute = document.querySelector('.qoute');
const person = document.querySelector('.person');

const quotes = [
    {
        quote: '"Education is the passport to the future, for tomorrow belongs to those who prepare for it today."',
        person: '-Malcolm X',
    },
    {
        quote: '"Genius without education is like silver in the mine."',
        person: '-Benjamin Franklin',
    },
    {
        quote: '"Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid."',
        person: '-Albert Einstein',
    },
    {
        quote: '"Life is really simple, but we insist on making it complicated."',
        person: '-Confucius'
    },
    {
        quote: '"The way to get started is to quit talking and begin doing."',
        person: '-Walt Disney'
    },
    {
        quote: `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."`,
        person: '-Steve Jobs'
    },
    {
        quote: '"Tell me and I forget. Teach me and I remember. Involve me and I learn"',
        person: '-Benjamin Franklin'
    },
    {
        quote: '"The secret of success is to do the common thing uncommonly well"',
        person: '-Alexander Graham Bell'
    },
    {
        quote: '"Before anything else, preparation is the key to success."',
        person: '-Alexander Graham Bell'
    },
    {
        quote: `"You miss 100% of the shots you don't take"`,
        person: "-Wayne Gretzky"
    },
    {
        quote: `"Nothing is impossible, the word itself says, ‘I'm possible"`,
        person: '"-Audrey Hepburn"'
    },
    {
        quote: 'I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.',
        person: '-Bruce Lee'
    },
    {
        quote: 'Most people can talk without listening. Very few can listen without talking.',
        person: '-Bruce Lee'
    },
    {
        quote: '"The quieter you become, the more you can hear"',
        person: '-Jalal al-Din Rumi'
    },
];

const generateQuote = () => {
    let random = Math.floor(Math.random() * quotes.length);

    qoute.innerText = quotes[random].quote;
    person.innerHTML = quotes[random].person;
}

generateQuote();




const skills = [
  { name: "HTML + CSS", level: 80, desc: "Hitpoints" },
  { name: "JavaScript", level: 60, desc: "Damage per second" },
  { name: "Bootstrap", level: 70, desc: "Damage" },
  { name: "Laravel", level: 60, desc: "Attack speed" },
  { name: "SQL, MySQL", level: 70, desc: "Special ability" },
];

function formatSkillName(name) {
  return name.toLowerCase().replace(/[^\w]+/g, "-");
}

function renderSkills() {
  let skillsHTML = skills
    .map(
      (skill, index) => `
    <div class="skill-bar-wrapper mb-3">
      <div class="skill mb-3 d-flex align-items-center">
       <label class="me-3 coc skill-name">${skill.name} (${skill.desc})</label>
        <div class="custom-progress flex-grow-1">
          <div id="progress-bar-${index}" class="progress-bar shadow-bar progress-bar-${formatSkillName(
        skill.name
      )}" style="width: ${skill.level}%;">
          </div>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  // ${Math.floor(skill.level / 10)} lvl

  const skillsContainer = document.getElementById("skills-container");
  skillsContainer.innerHTML = skillsHTML;

  // Ensure the upgrade sound element is correctly defined in your HTML
  const upgradeSound = document.getElementById("upgrade-sound");

  document.getElementById("upgrade-all-btn").addEventListener("click", () => {
    skills.forEach((skill, index) => {
      if (skill.level < 100) {
        skill.level = Math.min(skill.level + 10, 100);

        const progressBar = document.getElementById(`progress-bar-${index}`);
        progressBar.style.width = `${skill.level}%`;

        // Optional: Update skill level display
        // progressBar.textContent = `${Math.floor(skill.level / 10)} lvl`;

        // Play upgrade sound
        if (upgradeSound) {
          upgradeSound.currentTime = 0;
          upgradeSound.play();
        }

        // Update button text if max level reached
        if (skill.level === 100) {
          const upgradeBtn = document.querySelector(
            `button[data-index="${index}"]`
          );
          upgradeBtn.querySelector(".upgrade-text").textContent = "Max Level";
        }
      }
    });
  });
}

function renderCards() {
  let cardsHTML = skills
    .map(
      (skill, index) => `
    <div class="col-md-4">
      <div class="skill-car card-${index}">
        <h1>${skill.name}</h1>
      </div>
    </div>
  `
    )
    .join("");

  const cardsContainer = document.getElementById("skill-cards-container");
  cardsContainer.innerHTML = cardsHTML;
}

renderSkills();
renderCards();

function hideSkillLab() {
  const skillLab = document.getElementById("skill-lab");
  skillLab.classList.toggle("hidden");
}

document.getElementById("hideBtn").addEventListener("click", hideSkillLab);

// I didn't mean these layout let me guide you
// const skills = [
//   { name: "HTML + CSS", level: 90 },
//   { name: "JavaScript", level: 85 },
//   { name: "Bootstrap", level: 80 },
//   { name: "Laravel", level: 80 },
//   { name: "SQL, MySQL", level: 80 }
// ];

// // Get the container where you want to display the skills
// const skillsContainer = document.getElementById("skills-container");

// // Generate HTML for all skills and set it as the innerHTML of the container
// let skillsHTML = skills.map(skill => `
//   <div class="skill mb-3 d-flex align-items-center">
//     <label class="me-3">${skill.name}</label> this label must be on the bar not in one row with bars
//     <div class="custom-progress flex-grow-1">
//       <div class="progress-bar" style="width: ${skill.level}%;"></div>
//     </div>
//     <div class="ms-3">${skill.level}%</div>
//     <button class="btn btn-primary upgrade-btn ms-3">Upgrade</button>
//   </div>
// `).join('');

// skillsContainer.innerHTML = skillsHTML;








// CountDown

const countdownEls = document.querySelectorAll(".countdown");
countdownEls.forEach((countdownEl) => createCountdown(countdownEl));

function createCountdown(countdownEl) {
  const target = new Date(
    new Date(countdownEl.dataset.targetDate).toLocaleString("en")
  );
  const parts = {
    days: { text: ["days", "day"], dots: 30 },
    hours: { text: ["hours", "hour"], dots: 24 },
    minutes: { text: ["minutes", "minute"], dots: 60 },
    seconds: { text: ["seconds", "second"], dots: 60 },
  };

  Object.entries(parts).forEach(([key, value]) => {
    const partEl = document.createElement("div");
    partEl.classList.add("part", key);
    partEl.style.setProperty("--dots", value.dots);
    value.element = partEl;

    const remainingEl = document.createElement("div");
    remainingEl.classList.add("remaining");
    remainingEl.innerHTML = `
      <span class="number"></span>
      <span class="text"></span>
    `;
    partEl.append(remainingEl);
    for (let i = 0; i < value.dots; i++) {
      const dotContainerEl = document.createElement("div");
      dotContainerEl.style.setProperty("--dot-idx", i);
      dotContainerEl.classList.add("dot-container");
      const dotEl = document.createElement("div");
      dotEl.classList.add("dot");
      dotContainerEl.append(dotEl);
      partEl.append(dotContainerEl);
    }
    countdownEl.append(partEl);
  });
  getRemainingTime(target, parts);
}

function getRemainingTime(target, parts, first = true) {
  const now = new Date();
  if (first) console.log({ target, now });
  const remaining = {};
  let seconds = Math.floor((target - now) / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  hours = hours - days * 24;
  minutes = minutes - days * 24 * 60 - hours * 60;
  seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
  Object.entries({ days, hours, minutes, seconds }).forEach(([key, value]) => {
    const remaining = parts[key].element.querySelector(".number");
    const text = parts[key].element.querySelector(".text");
    remaining.innerText = value;
    text.innerText = parts[key].text[Number(value == 1)];
    const dots = parts[key].element.querySelectorAll(".dot");
    dots.forEach((dot, idx) => {
      dot.dataset.active = idx <= value;
      dot.dataset.lastactive = idx == value;
    });
  });
  if (now <= target) {
    window.requestAnimationFrame(() => {
      getRemainingTime(target, parts, false);
    });
  }
}



