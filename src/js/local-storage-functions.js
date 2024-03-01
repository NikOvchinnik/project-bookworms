export function addToLS(key, value) {
  try {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
  } catch (error) {
    console.error('Error adding to localStorage:', error);
  }
}

export function removeFromLocalStorage(key) {
  try {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
    }
  } catch (error) {
    console.error('Error removing from localStorage:', error);
  }
}

export function getFromLS(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error getting from localStorage:', error);
    return null;
  }
}
