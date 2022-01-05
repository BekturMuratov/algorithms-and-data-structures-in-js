function cashFunction(fn){
    const cash = [];
    return function(n){
        console.log('Взято из кэша',cash[n]);
        if(cash[n]){
            return cash[n]
        }

        let result = fn(n)
        console.log('Прочитала функция -', result)
        cash[n] = result
        return result
    }
}


function factorial(n){
    let result = 1;
    while(n !=1){
        result *= n
        n -=1
    }
    return result;
}

console.log(factorial(5))

const cashFactorial = cashFunction(factorial);

cashFactorial(5)
cashFactorial(6)
cashFactorial(2)
cashFactorial(3)