"use strict";

// Selecting elements
const displayField = document.querySelector(".display");
const evalBottom = document.querySelector(".displayBottom");
const clearBottomDisplay = document.getElementById("clearBottomDisplay");
const arithmetic = document.querySelector(".arithmetic");

const eqBtn = document.querySelector("#equals--Btn");
const decBtn = document.querySelector("#dec--Btn");
const minusBtn = document.querySelector("#minus--Btn");
const addBtn = document.querySelector("#add--Btn");
const multBtn = document.querySelector("#mult--Btn");
const divBtn = document.querySelector("#div--Btn");
const bracBtn = document.querySelector("#brac--Btn");
const micBtn = document.querySelector("#microphone");

// modal elements
const piBtn = document.querySelector("#pi--Btn");
const eBtn = document.querySelector("#e--Btn");
const cancBtn = document.querySelector("#canc--Btn");

const init = function () {
  evalBottom.textContent = 0;
};
init();

function isInvalid() {
  const arithCheck = /(\*|=|-|\+|\/|\.|\()$/g;
  return (
    arithCheck.test(calc.displayBottom.value) &&
    arithCheck.test(calc.displayBottom) != arithmetic
  );
}

// clearBottomDisplay.addEventListener("click", init);

// Number functions
function display9() {
  calc.displayBottom.value += "9";
  calc.displayTop.value += "9";
}

function display8() {
  calc.displayBottom.value += "8";
  calc.displayTop.value += "8";
}

function display7() {
  calc.displayBottom.value += "7";
  calc.displayTop.value += "7";
}

function display6() {
  calc.displayBottom.value += "6";
  calc.displayTop.value += "6";
}

function display5() {
  calc.displayBottom.value += "5";
  calc.displayTop.value += "5";
}

function display4() {
  calc.displayBottom.value += "4";
  calc.displayTop.value += "4";
}

function display3() {
  calc.displayBottom.value += "3";
  calc.displayTop.value += "3";
}

function display2() {
  calc.displayBottom.value += "2";
  calc.displayTop.value += "2";
}

function display1() {
  calc.displayBottom.value += "1";
  calc.displayTop.value += "1";
}

function display0() {
  calc.displayBottom.value += "0";
  calc.displayTop.value += "0";
}

function display00() {
  calc.displayBottom.value += "00";
  calc.displayTop.value += "00";
}

// decimal button
decBtn.addEventListener("click", function () {
  if (isInvalid()) {
  } else if (calc.displayTop.value === "") {
    calc.displayTop.value += "0.";
    calc.displayBottom.value += "0.";
  } else {
    calc.displayTop.value += ".";
    calc.displayBottom.value += ".";
  }
});

// Minus button
minusBtn.addEventListener("click", function () {
  if (isInvalid()) {
  } else if (calc.displayTop.value === "") {
  } else {
    calc.displayTop.value += "-";
    calc.displayBottom.value += "-";
  }
});

// Addition button
addBtn.addEventListener("click", function () {
  if (isInvalid()) {
  } else if (calc.displayTop.value === "") {
  } else {
    calc.displayTop.value += "+";
    calc.displayBottom.value += "+";
  }
});

// Multiply button
multBtn.addEventListener("click", function () {
  if (isInvalid()) {
  } else if (calc.displayTop.value === "") {
  } else {
    calc.displayTop.value += "*";
    calc.displayBottom.value += "*";
  }
});

// Divide button
divBtn.addEventListener("click", function () {
  if (isInvalid()) {
  } else if (calc.displayTop.value === "") {
  } else {
    calc.displayTop.value += "/";
    calc.displayBottom.value += "/";
  }
});

// clear button
function clearDisplay() {
  calc.displayTop.value = calc.displayTop.value = "";
  calc.displayBottom.value = calc.displayBottom.value = "";
}

// backspace button
function backspaceDisplay() {
  calc.displayBottom.value = calc.displayBottom.value.slice(0, -1);
  calc.displayTop.value = calc.displayTop.value.slice(0, -1);
}

eqBtn.addEventListener("click", function () {
  if (isInvalid()) {
  } else if (calc.displayTop.value === "") {
  } else {
    calc.displayBottom.value = eval(calc.displayBottom.value);
  }
});

// percentage button
function displayPercentage() {
  calc.displayBottom.value = calc.displayBottom.value / 100;
}

// Brackets button
bracBtn.addEventListener("click", function () {
  if (
    arithCheck.test(calc.displayBottom.value) &&
    arithCheck.test(calc.displayTop.value) != arithmetic
  ) {
  } else if (calc.displayTop.value === "") {
  } else {
    calc.displayTop.value = "(" + calc.displayTop.value + ")";
    calc.displayBottom.value = "(" + calc.displayBottom.value + ")";
  }
});

// Modal buttons
// Pi button
piBtn.addEventListener("click", function () {
  if (calc.displayTop.value === "") {
    calc.displayTop.value = calc.displayTop.value + "\u03a0";
    calc.displayBottom.value = calc.displayBottom.value + "3.1415926536";
    modal.style.display = "none";
  } else if (calc.displayTop.value != "") {
    calc.displayTop.value = calc.displayTop.value + "*" + "\u03a0";
    calc.displayBottom.value = calc.displayBottom.value + "*" + "3.1415926536";
    modal.style.display = "none";
  }
});

// e button
eBtn.addEventListener("click", function () {
  if (calc.displayTop.value === "") {
    calc.displayTop.value = calc.displayTop.value + "e";
    calc.displayBottom.value = calc.displayBottom.value + "2.7182818285";
    modal.style.display = "none";
  } else if (calc.displayTop.value != "") {
    calc.displayTop.value = calc.displayTop.value + "*" + "e";
    calc.displayBottom.value = calc.displayBottom.value + "*" + "2.7182818285";
    modal.style.display = "none";
  }
});

// cancel button
cancBtn.addEventListener("click", function () {
  return (modal.style.display = "none");
});

// Text to speech trial
let convert = document.querySelector(".convert");
let textarea = document.querySelector(".textarea");
let speech = new SpeechSynthesisUtterance();

// convert.addEventListener("click", () => {
//   speech.text = textarea.value;
//   speech.pitch = 3;
//   speech.volume = 1;
//   speech.lang = "eng-US";
//   speech.rate = 1.25;
//   speechSynthesis.speak(speech);
// });

// Modal
// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const btnAnimation = document.querySelector("#microphone");

btnAnimation.addEventListener("click", function () {
  btnAnimation.classList.add("record");
  btnAnimation.style.animationFillMode = "backwards";
});

//Voice Recognition
const microphone = document.getElementById("microphone");
microphone.onclick = function () {
  microphone.classList.add("record");
  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.start();
  var operations = {
    plus: "+",
    minus: "-",
    multiply: "*",
    multiplied: "*",
    by: "*",
    divide: "/",
    divided: "/",
    remainder: "%",
    equals: "=",
    point: ".",
  };

  recognition.onresult = function (event) {
    const input = event.results[0][0].transcript;
    for (property in operations) {
      input = input.replace(property, operations[property]);
    }
    document.getElementById("displayTop").textContent = input;
    setTimeout(function () {
      evaluate(input);
    }, 2000);
    microphone.classList.remove("record");
  };
};
function evaluate(input) {
  try {
    var result = eval(input);
    document.getElementById("displayTop").innerText = result;
  } catch (e) {
    console.log(e);
    document.getElementById("displayTop").innerText = "";
  }
}
