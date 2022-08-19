"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeLetter = void 0;
const changeLetter = (str) => {
    let result = "";
    let newStr = "";
    let vowels = /[aeiouAEIOU]/;
    let isLetter = /[a-zA-Z]/;
    if (str.length > 0) {
        for (let i = 0; i < str.length; i++) {
            if (isLetter.test(str.charAt(i))) {
                let code = str.charCodeAt(i);
                if (code === 90) {
                    newStr += String.fromCharCode(65);
                }
                else if (code === 122) {
                    newStr += String.fromCharCode(97);
                }
                else {
                    newStr += String.fromCharCode(code + 1);
                }
                if (vowels.test(newStr.charAt(i))) {
                    result += newStr.charAt(i).toUpperCase();
                }
                else {
                    result += newStr.charAt(i).toLocaleLowerCase();
                }
            }
            else {
                newStr += str.charAt(i);
                result += str.charAt(i);
            }
        }
    }
    else {
        result = "parameter is required!";
    }
    return result;
};
exports.changeLetter = changeLetter;
console.log((0, exports.changeLetter)("duoSJHz7800"));
console.log((0, exports.changeLetter)("HJhhkjHKJjuhujjbn30"));
