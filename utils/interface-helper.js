// Cambia el color de cada personaje si está cerca de atacar
export function updateBorderColor(elementClass, color) {
  if(elementClass && elementClass.startsWith('.')) {
    elementClass = elementClass.slice(1);
  }
  const element = document.getElementById(elementClass);
  if (element) {
    element.style.borderColor = color;
  }
}

// Actualizar la barra de vida en la interfaz
export function updateHealth(progressElementId, health, hpValueElementId) {
  document.getElementById(progressElementId).value = health;
  document.getElementById(hpValueElementId).textContent = health;
}

// Agregar y remover una clase a un elemento
export function addAndRemoveClass(elementId, className, timeout) {
  const element = document.getElementById(elementId);
  element.classList.add(className);
  setTimeout(() => element.classList.remove(className), timeout);
}