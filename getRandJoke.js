"use strict";
exports.__esModule = true;
exports.fetchJokes = void 0;
var node_fetch_1 = require("node-fetch");
var fetchJokes = function () {
    (0, node_fetch_1["default"])('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    }).then(function (response) {
        /* convert Stringified JSON response to Javascript Object */
        return response.json();
    }).then(function (data) {
        return data;
    })["catch"](function (error) {
        console.log(error);
    });
};
exports.fetchJokes = fetchJokes;
