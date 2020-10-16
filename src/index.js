module.exports = function check(str, bracketsConfig) {

    function strChecker(string, config) {
        let isIncludes = false;
        config.forEach(element => {
            let joinedEl = element.join('');
            if (string.includes(joinedEl)) {
                isIncludes = true;
            }
        });
        return isIncludes;
    }

    do {
        bracketsConfig.forEach(element => {
            let joinedEl = element.join('');
            while (str.includes(joinedEl)) {
                str = str.replace(joinedEl, '');
            }
        });
    } while (strChecker(str, bracketsConfig));

    if (str.length === 0) {
        return true;
    } else return false;
}
