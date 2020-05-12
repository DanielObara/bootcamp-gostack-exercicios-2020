"use strict";
/**
 * To create User
 * @param name
 * @param email
 * @param password
 */
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var _b = _a.name, name = _b === void 0 ? "" : _b, email = _a.email, password = _a.password;
    var user = {
        name: name,
        email: email,
        password: password,
    };
    return user;
}
exports.default = createUser;
