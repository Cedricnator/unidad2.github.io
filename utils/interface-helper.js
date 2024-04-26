
export function updateBorderColor(elementClass, color) {
  if(elementClass && elementClass.startsWith('.')) {
    elementClass = elementClass.slice(1);
  }
  const element = document.getElementById(elementClass);
  if (element) {
    element.style.borderColor = color;
  }
}
  
export function updateHealth(elementId, health) {
  document.getElementById(elementId).value = health;
}

export function addAndRemoveClass(elementId, className, timeout) {
  const element = document.getElementById(elementId);
  element.classList.add(className);
  setTimeout(() => element.classList.remove(className), timeout);
}