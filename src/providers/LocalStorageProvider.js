class LocalStorageProvider {
  static load (key) {
    const serializedResult = window.localStorage.getItem(key);

    if (serializedResult) {
      return JSON.parse(serializedResult);
    }

    return null;
  }

  static save (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  static remove (key) {
    window.localStorage.removeItem(key);
  }
}

export default LocalStorageProvider;
