function handleInput() {
const word = document.getElementById('example').value
let zmiana = word.split('').reverse().join('')
console.log(zmiana)

if(word.toLowerCase() == zmiana.toLowerCase()) {
    alert('true')
}
else {alert('false')}

}

document.getElementsByClassName('btn')[0].addEventListener('click', handleInput)