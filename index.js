const opnBtn = document.querySelector(".opn-btn-js");
const opnCard = document.querySelector(".card");
const journeyBtn = document.querySelector(".journeybtn-js")
const wishes = document.querySelector(".wishes");

opnBtn.addEventListener("click", () => {
    const text = "Close the Card";
    if(opnBtn.innerText != text){
        opnBtn.innerText = text;
        opnCard.setAttribute("class","card card-js");
        wishes.style = "display:contents;"
    } else {
        opnBtn.innerText = "Open the Card";
        opnCard.removeAttribute("class","card-js")
        opnCard.setAttribute("class","card");
        wishes.style = "display:none;"
    }
});

journeyBtn.addEventListener("click",() => {
    console.log("journey btn clicked");
});

