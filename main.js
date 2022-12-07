let fname = document.getElementById("fname");
let showBubble;

let ad = document.getElementById("sbmt");
ad.addEventListener("click", adyaz);

function adyaz() {
  document.getElementById("demo").innerHTML = fname.value;
}


showBubble=setInterval(() => {
      const buble = document.createElement("span");
      buble.classList.add("work");
      gamearea.appendChild(buble);
      let number = Math.floor(Math.random() * (500 - 2));
      let number2 = Math.floor(Math.random() * (500 - 2));
      console.log(number);
      buble.style.left = number + "px"; 
      buble.style.top = number2 + "px"; 
}, "1000");







