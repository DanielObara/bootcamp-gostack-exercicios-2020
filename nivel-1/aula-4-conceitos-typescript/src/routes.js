"use strict";
exports.__esModule = true;
var CreateUser_1 = require("./services/CreateUser");
function helloWorld(request, response) {
    var user = CreateUser_1["default"]({
        email: "ASFDADAF",
        password: "asdadsadads",
        techs: [
            "ReactJS",
            "NodeJS",
            "React Native",
            { title: "Javascript", experience: 100 },
        ]
    });
    return response.json({ msg: "Created!", user: user });
}
exports.helloWorld = helloWorld;
