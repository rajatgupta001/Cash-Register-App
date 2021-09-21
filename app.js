var billAmount = document.querySelector(".bill-amount-textarea");
var cashGiven = document.querySelector(".cash-given-textarea")
var btnCheck = document.querySelector("#btn-chk");
var difference;

function clickEventHandler()
{
    if(cashGiven.value < 0)
    {
        alert("Invalid Input");
    }
    if(cashGiven.value < billAmount.value)
    {
        prompt("Invalid Input");
    }

}



btnCheck.addEventListener("click", clickEventHandler)
