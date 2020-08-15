let bonus = 20;
function sum(first, second){
    const result = first + second + bonus;
    // console.log('under Function : ' , bonus);
    if (result > 9) {
        var mood = 'happy';
        // console.log(mood);
    }
    // console.log('outside statement : ' , mood)
    
    
    return result;
}





const output = sum(3, 7)
// console.log('normal variable : ' , bonus)
// console.log( 'main Output : ' , output);