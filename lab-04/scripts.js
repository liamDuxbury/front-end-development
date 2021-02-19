myCount = 0;

function greetMe() {
    document.getElementById("myTrigger").textContent = myCount;
    myCount++;
}

myTrigger.addEventListener("click", greetMe);