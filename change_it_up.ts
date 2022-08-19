export const changeLetter = (str: string) => {
    let result: string = "";
    let newStr: string = ""
    let vowels: RegExp = /[aeiouAEIOU]/;
    let isLetter: RegExp = /[a-zA-Z]/;
    if(str.length > 0){
        for(let i = 0; i < str.length; i++) {
            if(isLetter.test(str.charAt(i))){
                let code = str.charCodeAt(i)
                if(code === 90) {
                    newStr += String.fromCharCode(65);
                }else if(code === 122) {
                    newStr += String.fromCharCode(97);
                }else{
                    newStr += String.fromCharCode(code + 1);
                }
                
                if(vowels.test(newStr.charAt(i))){
                    result += newStr.charAt(i).toUpperCase();
                }else {
                    result += newStr.charAt(i).toLocaleLowerCase();
                }
            }else{
                newStr += str.charAt(i);
                result += str.charAt(i);
            }
        }

    }else {
        result = "parameter is required!";
    }

    return result;
    
}

console.log(changeLetter("duoSJHz7800"))
console.log(changeLetter("HJhhkjHKJjuhujjbn30"))