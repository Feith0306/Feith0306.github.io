particlesJS('particles-js', {
  particles: {
    number: { value: 50 },
    color: { value: ["#ff6b6b", "#6bc9ff", "#ffd93b", "#a29bfe"] },
    shape: { type: "circle" },
    opacity: { value: 0.3 },
    size: {
      value: 8,
      random: true
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "top",
      out_mode: "out"
    },
    line_linked: { enable: false }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "bubble" }
    },
    modes: {
      bubble: {
        distance: 100,
        size: 10,
        duration: 2,
        opacity: 0.8
      }
    }
  },
  retina_detect: true
});

