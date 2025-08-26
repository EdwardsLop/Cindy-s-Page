// Mostrar modal después de 5 segundos
setTimeout(() => {
  document.getElementById('miModal').classList.add('show');
}, 5000);

// Función de respuesta
function respuesta(event, tipo) {
  let botones = document.querySelectorAll('.boton');
  botones.forEach(btn => btn.classList.remove('animacion-si','animacion-todavia','animacion-espera'));
  
  if (tipo === 'si') {
    event.target.classList.add('animacion-si');
    alert("💖 Pues empecemos a escribir esto juntos.");
  } else if (tipo === 'todavia') {
    event.target.classList.add('animacion-todavia');
    alert("😊 Bien, aun toca planear de que se tratara.");
  } else {
    event.target.classList.add('animacion-espera');
    alert("🌹 Perfecto, ¿donde firmo?.");
  }
}

// Generar flores y corazones flotando
function crearElemento(clase) {
  let el = document.createElement('div');
  el.className = clase;
  el.style.left = Math.random() * 100 + "vw";
  el.style.animationDuration = (5 + Math.random() * 5) + "s";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 10000);
}

setInterval(() => crearElemento('flores'), 2000);
setInterval(() => crearElemento('corazon'), 3000);
