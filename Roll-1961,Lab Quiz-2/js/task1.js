 function generateRandomNumber() {
     const min = 1;
     const max = 100;
     const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
       document.getElementById("randomNumber").textContent = `Random Number: ${randomNum}`;
}
