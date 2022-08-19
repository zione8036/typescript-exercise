export const validateIsbn = (...num: any[]) => {
    if( num.length > 10){
        return false;
    }
    let sum: number = 0;
    for(let n = 0; n < num.length; n++){
        if( num[num.length - 1] === 'X'){
            num[n] = 10;
        }
        sum += (n + 1) * num[n];
    }
    let result =  sum % 11 === 0? true : false;
    return result;
    
}

console.log(validateIsbn(1,1,1,2,2,2,3,3,3,9));
console.log(validateIsbn(1,1,1,2,2,2,3,3,3))
console.log(validateIsbn(1,1,1,2,2,2,3,3,3,9, 'X'))
console.log(validateIsbn(1,2,3,4,5,5,4,3,2,1))
console.log(validateIsbn(1,2,3,4,5,1,2,3,4,5))
console.log(validateIsbn(0,4,8,6,6,5,0,8,8, 'X'))
console.log(validateIsbn('X',1,2,1,0,0,0,0,0,0))