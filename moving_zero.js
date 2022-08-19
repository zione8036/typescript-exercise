"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNumbers = void 0;
const addNumbers = (...data) => {
    let numbers = [];
    let zero = 0;
    if (data.length <= 0) {
        return console.log("invalid");
    }
    data.forEach((item) => {
        if (item === "0" || item === 0) {
            zero += 1;
        }
        else {
            numbers.push(item);
        }
    });
    if (zero > 0) {
        for (let i = 1; i <= zero; i++) {
            numbers.push(0);
        }
    }
    return numbers;
};
exports.addNumbers = addNumbers;
console.log((0, exports.addNumbers)(0, false, "1", "0", "4", "5", "5"));
