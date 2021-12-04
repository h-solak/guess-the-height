
let randomNum, tempNum, tempNum2, guessNum;


//getting data from the prompt and using it
const ageCheck = () => {
    var age = prompt("Enter your age: (>=18)");
    if (age>=18) {
        alert("Let's start then!")
    }
    else {
        alert("You cannot play this game!")
        location.reload()
    }
}

ageCheck();

const randomHeight = () => {
    randomNum = Math.floor(Math.random()*500)+1;
    console.log("The answer is: "+ randomNum); //HEIGHT --- FOR CHEATING!!!!!!!!!
    return randomNum;
}

const boxCreate = () => {
    tempNum = randomHeight()
    tempNum2 = tempNum
    let div = document.createElement("div");
    div.style.width = "30px";
    div.style.height = tempNum2 + "px";
    document.getElementById("height").appendChild(div);
}

boxCreate();

const checkResult = () => {
    let result = document.querySelector("p");
    
    let x = document.getElementById("guess");
    guessNum = x.value

    if (guessNum == "") {result.innerHTML = "Enter a number!"}
    else if (guessNum == tempNum2) {
        result.innerHTML = "You won! Yey! Let's play again!";
        //setTimeout(() => {location.reload()}, 2000)  //refreshes the page to play again!
    }
    else if (Math.abs(guessNum - tempNum) < 5) {result.innerHTML = "SOOO CLOSE! 1-5"}
    else if (Math.abs(guessNum - tempNum) < 10) {result.innerHTML = "SO CLOSE! 5-10"}
    else if (Math.abs(guessNum - tempNum) < 25) {result.innerHTML = "SO CLOSE! 10-25"}
    else if (Math.abs(guessNum - tempNum) < 50) {result.innerHTML = "CLOSE! 25-50"}
    else if (Math.abs(guessNum - tempNum) < 100) {result.innerHTML = "GETTING WARMER! 50-100"}
    else {result.innerHTML = "IT'S COLD OUT HERE!"}
}