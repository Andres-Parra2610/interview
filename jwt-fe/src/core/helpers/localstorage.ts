export const getLocalStorage = <T>(key: string): T | undefined => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  } catch (error) {
    console.error('Error reading localStorage:', error);
    return undefined;
  }
};

export const setLocalStorage = <T>(key: string, value: T | undefined) => {
  try {
    if (value === undefined) {
      localStorage.removeItem(key);
      return;
    }
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};