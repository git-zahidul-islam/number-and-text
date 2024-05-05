
const binaryToText = (number) => {
    // const binaryGet = number.split(' ')
    const data = number.match(/.{1,8}/g).map(d => {
        return String.fromCharCode(parseInt(d,2))
    }).join('')
    return data;
}
console.log(binaryToText('1101100'));



// return number.split(' ').map(d =>{
//     return String.fromCharCode(parseInt(d,2))
// }).join('')