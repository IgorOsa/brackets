function check(str, bracketsConfig) {
    let prevStr;

    while (str !== prevStr) {
        prevStr = str;
        bracketsConfig.map(([open, close]) => {
            str = str.replace(`${open}${close}`, '');
        });
    }

    return !str;
}

module.exports = check;
