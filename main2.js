function getDataToday() {
const dataToDay = new Date()

const year = dataToDay.getFullYear()
const month = dataToDay.getMonth() + 1 
const day = dataToDay.getDate()
const spanData = document.getElementById('dataKursu')
spanData.innerHTML = day + '/' + month + '/' + year

}
getDataToday()
let inputCheckboxesContentValue = ''
function getInput () {
    const inputCheckboxesContent = document.getElementsByName('tabela')
    
 for(let i =0; i< inputCheckboxesContent.length; i++) {
     
    if(inputCheckboxesContent[i].checked === true) {
        inputCheckboxesContentValue  = inputCheckboxesContent[i].value
    }
 }
}


function getTable () {
    getInput()
 
 fetch(`http://api.nbp.pl/api/exchangerates/tables/${inputCheckboxesContentValue}/?format=json`)
 .then(tabelaNbp => tabelaNbp.json())
 .then(tabelaNbp => {
    // console.log(tabelaNbp[0].rates)
    const elementApp = document.getElementById('app')
    elementApp.innerHTML = ''
    for(let i =0; i < tabelaNbp[0].rates.length; i++ ) {
    
        let divClassCard = document.createElement('div')
        divClassCard.classList.add('card')
        let divCardBody = document.createElement('div')
        divCardBody.classList.add('card-body')

        /* created h5 */
        let elementH5 = document.createElement('h5')
        elementH5.classList.add('card-title')
        let elementH5Text = document.createTextNode(tabelaNbp[0].rates[i].currency)
        elementH5.appendChild(elementH5Text)
        console.log(elementH5)
        divCardBody.appendChild(elementH5)

        /* ele p */
        let elementPFirst = document.createElement('p')
        elementPFirst.classList.add('card-text')
        let elementPFirstText = document.createTextNode(tabelaNbp[0].rates[i].code)
        elementPFirst.appendChild(elementPFirstText)
        divCardBody.appendChild(elementPFirst)



        /* ele p 2 */ 

        if(inputCheckboxesContentValue == 'c') {

            let elementPSecond = document.createElement('p')
            elementPSecond.classList.add('card-text')
            let elementPSecondText = document.createTextNode(tabelaNbp[0].rates[i].bid + " end " + tabelaNbp[0].rates[i].ask )
            elementPSecond.appendChild(elementPSecondText) 
            divCardBody.appendChild(elementPSecond)
        }
        else {
            let elementPSecond = document.createElement('p')
            elementPSecond.classList.add('card-text')
            let elementPSecondText = document.createTextNode(tabelaNbp[0].rates[i].mid)
            elementPSecond.appendChild(elementPSecondText) 
            divCardBody.appendChild(elementPSecond)

        }
       



        divClassCard.appendChild(divCardBody)
       /* dodawanie całej carty do elelntu o id = app */

        elementApp.appendChild(divClassCard)
        

        
    }
 })

}

function a() {
    getInput()
    alert("getInput()")
    const dataCalendar = document.getElementsByName('dataBox3')[0].value
   
    fetch(`http://api.nbp.pl/api/exchangerates/tables/${inputCheckboxesContentValue}/${dataCalendar}/?format=json`)
 .then(tabelaNbp => tabelaNbp.json())
 .then(tabelaNbp => {
    // console.log(tabelaNbp[0].rates)
    const elementApp = document.getElementById('app')
    elementApp.innerHTML = ''
 alert("wyczyszczone")
    for(let i =0; i < tabelaNbp[0].rates.length; i++ ) {

        z
    }
 })
 .catch(error => alert("brak danych"))
    



}

function xxx(a, b) {
   
    const elementApp = document.getElementById('app')
    let divClassCard = document.createElement('div')
    divClassCard.classList.add('card')
    let divCardBody = document.createElement('div')
    divCardBody.classList.add('card-body')

    /* created h5 */
    let elementH5 = document.createElement('h5')
    elementH5.classList.add('card-title')
    console.log(a.currency, a)
    let elementH5Text = document.createTextNode(a.currency)
    elementH5.appendChild(elementH5Text)
    
    divCardBody.appendChild(elementH5)

    /* ele p */
    let elementPFirst = document.createElement('p')
    elementPFirst.classList.add('card-text')
    let elementPFirstText = document.createTextNode(a.code)
    elementPFirst.appendChild(elementPFirstText)
    divCardBody.appendChild(elementPFirst)



    /* ele p 2 */ 

    if(b == 'c') {

        let elementPSecond = document.createElement('p')
        elementPSecond.classList.add('card-text')
        let elementPSecondText = document.createTextNode(a.bid + " end " + a.ask )
        elementPSecond.appendChild(elementPSecondText) 
        divCardBody.appendChild(elementPSecond)
    }
    else {
        let elementPSecond = document.createElement('p')
        elementPSecond.classList.add('card-text')
        let elementPSecondText = document.createTextNode(a.mid)
        elementPSecond.appendChild(elementPSecondText) 
        divCardBody.appendChild(elementPSecond)

    }
   



    divClassCard.appendChild(divCardBody)
   /* dodawanie całej carty do elelntu o id = app */
  
    elementApp.appendChild(divClassCard)
    console.log("jhdsfhjadsfjdfsah", elementApp)

}