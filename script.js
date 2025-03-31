let robot = prompt(
  "Prove that you're not a robot by solving this math problem: 2+2= ?"
);

if (robot == 4) {
  alert("You're not a robot!");
} else if ([1, 2, 3, 5, 6, 7, 8, 9, 0].includes(+robot)) {
  alert("Sorry, that's not correct. Try again!");
} else {
  alert("Please enter a number.");
}

setTimeout(() => {
  alert("Try again!");
}, 3000);

let hours = new Date().getHours();
if (hours == 10 || hours == 12) {
  alert("Good morning!");
} else if (hours == 13 || hours == 14 || hours == 15 || hours == 16) {
  alert("Good afternoon!");
} else if (hours == 17 || hours == 18 || hours == 19 || hours == 20 ) {
  alert("Good evening!");
} else {
  alert("Good night!");
  alert("Our service is closed now");
}

let hours2 = new Date().getHours();
let minutes = new Date().getMinutes();
let secounds = new Date().getSeconds();

setInterval(1000);
console.log(hours2, minutes, secounds);
