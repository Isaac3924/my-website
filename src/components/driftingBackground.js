import Drift from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const DriftBackground = () => {
  const driftInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const driftLoaded = useCallback(async (container) => {

  }, [])
  return <div className="DriftBackground">
    <Drift
      id="drift-tsparticles"
      init={driftInit}
      loaded={driftLoaded} 
      options=
      {
        {
          autoPlay: true,
          background: {
            color: {
              value: "#141414"
            },
            image: "",
            position: "",
            repeat: "",
            size: "",
            opacity: 1
          },
          backgroundMask: {
            composite: "destination-out",
            cover: {
              color: {
                value: "#fff"
              },
              opacity: 1
            },
            enable: false
          },
          defaultThemes: {},
          delay: 0,
          fullScreen: {
            enable: true,
            zIndex: -1
          },
          detectRetina: true,
          duration: 0,
          fpsLimit: 120,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: {
                enable: true,
                mode: "repulse"
              },
              onHover: {
                enable: false,
                mode: "repulse"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                links: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 0.8,
              },
              repulse: {
                distance: 200
              },
              push: {
                quantity: 4,
                groups: ["z5000", "z7500", "z2500", "z1000"],
              },
              remove: {
                quantity: 2
              },
            }
          },
          manualParticles: [],
          particles: {
            groups: {
              z5000: {
                number: {
                  value: 70
                },
                zIndex: {
                  value: 5000
                }
              },
              z7500: {
                number: {
                  value: 30
                },
                zIndex: {
                  value: 75
                }
              },
              z2500: {
                number: {
                  value: 50
                },
                zIndex: {
                  value: 25
                }
              },
              z1000: {
                number: {
                  value: 40
                },
                zIndex: {
                  value: 10
                }
              }
            },
            number: {
              value: 200,
              density: {
                enable: false,
                area: 800
              }
            },
            color: {
              value: "#fff",
              animation: {
                enable: false,
                speed: 10,
                sync: true
              }
            },
            shape: {
              type: "square"
            },
            opacity: {
              value: { min: 0.1, max: 1 },
              random: false,
              animation: {
                enable: false,
                speed: 3,
                sync: false
              }
            },
            size: {
              value: 3
            },
            move: {
              angle: {
                value: 10,
                offset: 0
              },
              enable: true,
              speed: 1,
              direction: "bottom",
              random: false,
              straight: true,
              outModes: "out"
            },
            zIndex: {
              value: 5,
              opacityRate: 0.5
            }
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
          responsive: [],
          smooth: false,
          style: {},
          themes: [],
          zLayers: 100,
          emitters: [],
          motion: {
            disable: false,
            reduce: {
              factor: 4,
              value: true
            }
          }
        }
      }
    />
  </div>
};

export default DriftBackground;