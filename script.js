const word1 = ['John', 'Marc', 'Lewis', 'Luca', 'Dontavius']
const word2 = [' runs', ' jumps', ' throws', ' climbs', ' flies']
const word3 = [' high', ' low', ' fast', ' far', 's low']
function randomSelector() {
    let index1 = Math.floor(Math.random()*5)
    let index2 = Math.floor(Math.random()*5)
    let index3 = Math.floor(Math.random()*5)
    return console.log(word1[index1]+word2[index2]+word3[index3]+' !!!')
}
randomSelector()