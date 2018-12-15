
const storage = {
    set(k, v) {
        localStorage.setItem(k, JSON.stringify(v));
    },
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    },
    remove(key) {
        localStorage.removeItem(key);
    }
}

export default storage;