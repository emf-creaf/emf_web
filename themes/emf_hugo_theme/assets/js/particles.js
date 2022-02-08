import * as params from '@params';

const vectors = [params.sigma];
const random = Math.floor(Math.random() * vectors.length);


tsParticles.load("tsparticles", {
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    detectRetina: false,
    fpsLimit: 15,
    fullScreen: {
      enable: false,
      zIndex: 1
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "bubble"
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 40,
          duration: 2,
          opacity: 8,
          size: 10,
          speed: 3
        }
      }
    },
    particles: {
      color: {
        value: [
          "#4fbec8",
          "#8ccfa6",
          "#cae085",
          "#f4ec6d"
        ],
        animation: {
          enable: false,
          speed: 20,
          sync: true
        }
      },
      links: {
        color: "random",
        enable: true,
        opacity: 1,
        distance: 35,
        width: 2,
        blink: false,
        consent: false
      },
      move: {
        attract: {
          enable: false,
          rotate: {
            x: 600,
            y: 1200
          }
        },
        enable: true,
        direction: "none",
        outModes: "bounce",
        random: true,
        speed: 0.2,
        straight: false,
        distance: 100
      },
      number: {
        density: {
          enable: false,
          area: 2000
        },
        limit: 100,
        value: 75
      },
      opacity: {
        animation: {
          enable: true,
          minimumValue: 0.4,
          speed: 0.5,
          sync: false
        },
        random: false,
        value: 1
      },
      shape: {
        type: "circle"
      },
      size: {
        animation: {
          enable: true,
          speed: 0.5,
          sync: false
        },
        random: {
          enable: true,
          minimumValue: 3
        },
        value: 6
      }
    },
    polygon: {
      draw: {
        enable: false,
        lineColor: "#33333",
        lineWidth: 2
      },
      move: {
        radius: 10
      },
      inlineArrangement: "equidistant",
      scale: 0.7,
      type: "inline",
      url: vectors[random]
    }
  });
  