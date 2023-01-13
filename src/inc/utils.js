export const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`Request Timed Out`));
        }, s * 1000);
    });
};
