const selectElement = document.querySelector("select")
console.log( nigeria )

for ( let i = 0; i < nigeria.length; i++ ){
    const optionElement = document.createElement("option")
    optionElement.textContent = nigeria[i].state.name
    optionElement.setAttribute("value", i)
    optionElement.setAttribute("id", i)
    selectElement.insertAdjacentElement( "beforeend",optionElement)
}

// before begin : put it before the element
// afterbegin : put it at the top of the element
// beforeend :  put it at the bottom of the element
// after end :  put it after the end of the element

selectElement.addEventListener("click", function(amebo){
    const indexOfState = amebo.target.value
    const lgaElement = document.getElementById("lga")
    // console.log( nigeria[indexOfState] )
    injectOption ( nigeria[indexOfState].state.locals , lgaElement )

})

function injectOption(data, element){
    element.innerHTML = ""
    for ( let i = 0; i < data.length; i++ ){
        const optionElement = document.createElement("option")
        optionElement.textContent = data[i].name
        optionElement.setAttribute("value", i)
        optionElement.setAttribute("id", i)
        element.insertAdjacentElement( "beforeend",optionElement)
    }
}