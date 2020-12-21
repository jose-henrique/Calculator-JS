var screen = document.getElementById("show")
var number = ""
var n1, n2, operator, ans = 0

function saveNumber(n){
    screen.innerHTML += n 
    number += String(n)
}

function setOperator(o){
    
    if (o === "+"){
        n1 = Number(number)
        number = ""
        screen.innerHTML = ""
        operator = 0
    }

    else if (o === "-"){
        n1 = Number(number)
        number = ""
        screen.innerHTML = ""
        operator = 1
    }

    else if (o === "*"){
        n1 = Number(number)
        number = ""
        screen.innerHTML = ""
        operator = 2
    }

    else if (o === "/"){
        n1 = Number(number)
        number = ""
        screen.innerHTML = ""
        operator = 3
    }
}

function answer(){
    n2 = Number(number)
    screen.innerHTML = ""

    if (operator == 0){
        ans = n1 + n2
    }

    else if (operator == 1){
        ans = n1 - n2
    }

    else if(operator == 2){
        ans = n1 * n2
    }

    else if(operator == 3){
        ans = n1 / n2
    }

    screen.innerHTML = ans
}

function clean(){
    screen.innerHTML = ""
    n1 = 0
    n2 = 0
    ans = 0
    number = ""
}