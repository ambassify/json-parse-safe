module.exports = function parse(json, reviver) {
    try {
        return JSON.parse(json);
    } catch (e) {
        return null;
    }
}
