//Partículas 
tsParticles.load("tsparticles", {
    background: {
      color: { value: "#000000" }
    },
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          area: 400
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 1
      },
      size: {
        value: 0.3
      },
      move: {
        enable: true,
        speed: {
          min: -2,
          max: 9  
        },
        direction: "right",
        straight: true
      }
    },
    detectRetina: true
  });


// Efeito de digitação 
const texto = "</Desenvolvedor de Software>";
const elemento = document.getElementById("typewriter");
let i = 0;

function digitar() {
  if (i < texto.length) {
    elemento.innerHTML += texto.charAt(i);
    i++;
    setTimeout(digitar, 75); // tempo entre letras (em ms)
  }
}

digitar();
  