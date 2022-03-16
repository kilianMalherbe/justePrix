let formulaire = document.getElementById('formulaire');
let input = document.getElementById('prix');
let instructions = document.getElementById('instructions');
let warningMessage = document.getElementsByTagName('small');
let button = document.querySelector('button.btn');
let coups = 0;
let nombreChoisi;
let nombreRandom = Math.floor(Math.random() * 1001);

warningMessage[0].style.display = "none";

function verifier(nombre) {
  let div = document.createElement("div");
  div.classList.add('instruction');

  if (nombre == nombreRandom) {
    div.classList.add('fini');
    div.textContent = "Bravo ! 🎉 Vous avez trouvez le juste prix après " + coups + " coups.";
    input.disabled = true;
  } else if (nombre > nombreRandom) {
    div.classList.add('moins');
    div.textContent = nombre + " | ⬇️ C'est moins."
  } else {
    div.classList.add('plus');
    div.textContent = nombre + " | ⬆️ C'est plus."
  }

  instructions.prepend(div)
}

input.addEventListener('keyup', () => {
  if (! isNaN(input.value)) {
    warningMessage[0].style.display = "none"
  } else {
    warningMessage[0].style.display = "inline"
  }
})

button.addEventListener('click', (e) => {
})


formulaire.addEventListener('submit', (e) => {
  e.preventDefault();

  if (! isNaN(input.value) && input.value.length > 0) {
    input.style.borderColor = "initial";
    coups++;
    nombreChoisi = input.value;
    input.value = "";
    verifier(nombreChoisi);
  } else {
    input.style.borderColor = "red";
  }
})