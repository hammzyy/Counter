const value = document.querySelector(".val");

const plus = document.querySelector(".increase");
const minus = document.querySelector("decrease");
const reset = document.querySelector("reset")

const num= 0;
plus = function add(){
    num+=1;
    value.innerHTML = num;
};

minus = function sub(){
    num-=1;
    value.innerHTML = num;
};

reset = function res(){
    num=0;
    value.innerHTML = num;
};
