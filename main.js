function getAdvice(){

    fetch("https://api.adviceslip.com/advice")
    .then(data =>{
        return data.json()
    }).then(
        advice =>{
                    
            let adviceNumber = document.querySelector("span")
            adviceNumber.textContent = advice.slip.id

            let adviceContent = document.querySelector("p")
            adviceContent.textContent = advice.slip.advice
        }
    )
}

getAdvice()

const diceBtn = document.querySelector("button")
diceBtn.addEventListener("click", getAdvice)



