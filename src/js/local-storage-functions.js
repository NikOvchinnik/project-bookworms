export function addToLS(key, value) {
  localStorage.setItem(key, value);
}

export function removeFromLocalStorage(key) {
  localStorage.removeItem(key);
}
