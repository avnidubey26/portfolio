// AOS
AOS.init({ duration: 1000 });

// typing effect
const text = "Web Developer | JavaScript | WordPress";
let i = 0;

function typing() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 40);
  }
}
typing();

// cursor glow
const cursor = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// 🔥 PARTICLES 
particlesJS("particles-js", {
  particles: {
    number: { value: 140 }, // 🔥 zyada particles

    color: { value: "#ff2e9f" },

    shape: { type: "circle" },

    opacity: {
      value: 0.9, // 🔥 bright
      random: false
    },

    size: {
      value: 4, // 🔥 bigger dots
      random: true
    },

    line_linked: {
      enable: true,
      distance: 160,
      color: "#c8a2ff",
      opacity: 0.7, // 🔥 more visible lines
      width: 1.5
    },

    move: {
      enable: true,
      speed: 2, // thoda fast
      direction: "none",
      out_mode: "out"
    }
  },

  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse" // 🔥 push effect (cool feel)
      }
    },
    modes: {
      repulse: {
        distance: 120,
        duration: 0.4
      }
    }
  }
});

document.querySelectorAll(".magnetic").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * 10;
    const rotateY = (x / rect.width - 0.5) * -10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});

const bars = document.querySelectorAll(".progress-bar");

function animateBars() {
  bars.forEach(bar => {
    const width = bar.getAttribute("data-width");
    bar.style.width = width;
  });
}

window.addEventListener("scroll", () => {
  const section = document.getElementById("skills");
  const position = section.getBoundingClientRect().top;

  if (position < window.innerHeight - 100) {
    animateBars();
  }
});

const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  document.querySelectorAll("section").forEach(section => {
    const top = section.offsetTop;
    if (scrollY >= top - 100) {
      current = section.getAttribute("id");
    }
  });

  links.forEach(a => {
    a.style.color = "#ff2e9f";
    if (a.getAttribute("href") === "#" + current) {
      a.style.color = "#c8a2ff";
    }
  });
});