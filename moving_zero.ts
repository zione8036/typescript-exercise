

export const addNumbers = (...data: any[]) => {
    let numbers: number[] = []
    let zero: number = 0;
    if(data.length <= 0 ) {
        return console.log("invalid")
    }
    data.forEach((item: any) => {
        if(item === "0" || item === 0){
            zero += 1;
        }else {
            numbers.push(item)
        }
    })
    if(zero > 0) {
        for(let i = 1; i <= zero; i++) {
            numbers.push(0);
        }
    }

    return numbers;
}

console.log(addNumbers(0,false, "1", "0", "4", "5", "5"));