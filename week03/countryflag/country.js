const countryButtonElement = document.querySelector("button")
countryButtonElement.addEventListener("click", function(amebo){
    
    const randomIndex = Math.floor(Math.random() * countryWithImages.length ) 
    const selectedCountry = countryWithImages[randomIndex]
    
    document.querySelector("img")
    .setAttribute("src", `https:${selectedCountry.file_url}`)
    
    const allPElement =  document.querySelectorAll("p")
    allPElement[0].textContent = selectedCountry.name
    allPElement[1].textContent = selectedCountry.alpha3
})