function add(num1, num2) {
    let total = 0;
    for(let i = 0; i < [...arguments].length; i++) {
        total = total + [...arguments][i];
    }
    return total;
    
}
const result = add(2, 3, 5, 7, 10)

 console.log(result);