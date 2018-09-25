module.exports = function parse(json, reviver, defaultValue) {
    
    // backwards-compatibleness, defaultValue used
    // to be fixed to `null`
    if (arguments.length < 3)
        defaultValue = null;
    
    try {
        return JSON.parse(json);
    } catch (e) {
        return defaultValue;
    }
}
