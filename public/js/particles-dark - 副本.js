particlesJS('particles-js', {
  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 2 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: { enable: true, speed: 1 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "grab" }
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: { opacity: 0.5 }
      }
    }
  },
  retina_detect: true
});
