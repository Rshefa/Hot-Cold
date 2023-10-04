
const current = 50;

const add5 = document.getElementById("add");
const sub5 = document.getElementById("sub");
const add10 = document.getElementById("add");
const sub10 = document.getElementById("sub");
const add25 = document.getElementById("add");
const sub25 = document.getElementById("sub");

const reset = document.getElementById("reset");
const commit = document.getElementById('commit');

add5.addEventListener("click", Add5);
sub5.addEventListener("click", Sub5);
add10.addEventListener("click", Add10);
sub10.addEventListener("click", Sub10);
add25.addEventListener("click", Add25);
sub25.addEventListener("click", Sub25);

function Add5(){
   current = current + 5;
   display();
   current.textContent = `Current Guess: ${current}`;
}

function Sub5(){
    current = current -5;
    display();
   current.textContent = `Current Guess: ${current}`;
}

function Add10(){
    current = current + 10;
    display();
    current.textContent = `Current Guess: ${current}`;
 }


function Sub10(){
    current = current -10;
    display();
   current.textContent = `Current Guess: ${current}`;
}

function Add25(){
    current = current + 25;
    display();
    current.textContent = `Current Guess: ${current}`;
 }
function Sub25(){
    current = current - 25;
    display();
   current.textContent = `Current Guess: ${current}`;
}

