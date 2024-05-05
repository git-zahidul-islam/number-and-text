
const textToBinary = (string) => {
    const getString = string.toLowerCase();
    const textToArray = getString.split('')
    const binary = textToArray.map(t => t.charCodeAt().toString(2)).join(' ')
    return binary;
}
console.log(textToBinary("heLlo"));