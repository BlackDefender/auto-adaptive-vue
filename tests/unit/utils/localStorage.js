const localStorage = {
    getItem: function (key) {
        return this[key]
    },
    setItem: function (key, value) {
        this[key] = value
    }
}

export default localStorage
