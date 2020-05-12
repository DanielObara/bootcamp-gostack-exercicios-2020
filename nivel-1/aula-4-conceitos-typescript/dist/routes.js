"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(request, response) {
    var user = CreateUser_1.default({
        email: "ASFDADAF",
        password: "asdadsadads",
        techs: [
            "ReactJS",
            "NodeJS",
            "React Native",
            { title: "Javascript", experience: 100 },
        ],
    });
    return response.json({ msg: "Created!", user: user });
}
exports.helloWorld = helloWorld;
