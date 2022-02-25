const reduceButtonElement = document.getElementById("reduce")
const resetButtonElement = document.getElementById("reset")
const increaseButtonElement = document.getElementById("increase")

// 1) the event itself must be triggered
// 2) an amebo that capture the event and broadcast that event
// 3) the action will now happen base on the amebo reporting

reduceButtonElement.addEventListener("click", function(amebo){
    const countElement = document.getElementById("count")
    let count = parseInt ( countElement.textContent ) - 1
    if(count < 0) countElement.style.color = "red"
    countElement.textContent = count
})

resetButtonElement.addEventListener("click", function(amebo){
    const countElement = document.getElementById("count")
    countElement.textContent = 0    
    countElement.style.color = "black"

})
increaseButtonElement.addEventListener("click", function(amebo){
    const countElement = document.getElementById("count")
    let count = parseInt ( countElement.textContent ) + 1
    if(count > 0) countElement.style.color = "green"
    
    countElement.textContent = count
})