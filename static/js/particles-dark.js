// particlesJS('particles-js', {
//   particles: {
//     number: { value: 80 },
//     color: { value: "#ffffff" },
//     shape: { type: "circle" },
//     opacity: { value: 0.5 },
//     size: { value: 2 },
//     line_linked: {
//       enable: true,
//       distance: 150,
//       color: "#ffffff",
//       opacity: 0.4,
//       width: 1
//     },
//     move: { enable: true, speed: 1 }
//   },
//   interactivity: {
//     events: {
//       onclick: { enable: true, mode: "push" }
//     },
//     modes: {
//       push: {
//         particles_nb: 4
//       }
//     },
//     modes: {
//       grab: {
//         distance: 140,
//         line_linked: { opacity: 0.5 }
//       }
//     }
//   },
//   retina_detect: true
// });
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5,
      random: false
    },
    size: {
      value: 2,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      // 吸引功能（默认关闭），需要可以取消注释
      /*
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
      */
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: ["grab", "repulse"]  // 悬停时抓线和排斥
      },
      onclick: {
        enable: true,
        mode: "push"               // 点击添加粒子
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.5
        }
      },
      repulse: {
        distance: 100,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});
