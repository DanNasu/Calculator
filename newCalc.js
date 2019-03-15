//New Code for Calculator, with an input field of text.

var answer=null;
var num1=null;
var num2=null;
var num3=null;
var key = null;
var oldKey = null;
var prevChar = null;

var operators = {
    '+': function (a, b) { return a + b },
    '-': function (a, b) { return a - b },
    '*': function (a, b) { return a * b },
    '/': function (a, b) { return a / b },
    '^': function (a, b) { return a ** b}
}

function display(inValue) {
    if (((inValue == '+') || (inValue == '-') || (inValue == '*') || (inValue == '/') || (inValue == '^'))) {
        prevChar = null; //*****VERY important, keeps me out of loop whenever I use an operator.*****
        if (num1 == null) {
            num1 = Number(document.getElementById("display").value);
            //alert(num1);
            key = inValue;
            oldKey = inValue; // this is a checker for when I want to change the operation
            clearLOL();
            document.getElementById("display").placeholder = num1 + ' ' + key;
        }
        else {
            num2 = Number(document.getElementById("display").value);
            num1 = answer; //**ALSO VERY IMPORTANT: Updates num1 to keep arithmatic correct below, in '=' function**

            //alert("num2 is: " + num2);
            key = inValue;
            clearLOL();
            document.getElementById("display").placeholder = num1 + ' ' + key;
        }
    }
    else if (inValue == '=') {
        num3 = document.getElementById("display").value;
        //alert("num3 is: " + num3);
        if ((key != null)&&(num3!='')) {
            if (prevChar == '=') { //this is looping if i keep pressing the = key. i should make it a loop that relies on user input.

                answer = operators[oldKey](answer, num2);
                document.getElementById("display").value = answer;
            }
            else {
                num2 = Number(document.getElementById("display").value);
                //alert("EVALUATE PL0X")
                answer = operators[key](num1, num2);
                clearLOL();
                document.getElementById("display").value = /*"("+ num1 + ' ' + key + ' ' + num2 + ') ' + '=' + ' ' + */answer;
                prevChar = '=';
                oldKey = key;
            }
        }
    }
    else {
        document.getElementById("display").value += inValue;
    }
}

function clearLOL() {
    document.getElementById("display").value = null;
}

function wipe() {
    document.getElementById("display").value = null;
    document.getElementById("display").placeholder = 0;
    document.getElementById("display").focus();
    prevChar = null;
    num1 = null;
    num2 = null;
    num3 = null;
    key = null;
    oldKey = null;
}

function negate() {
    var y = document.getElementById("display").value;
    if (y.charAt(y.length - 1) == 'e') {
        document.getElementById("display").value += '-';
    }
    else {
        document.getElementById("display").value *= -1;
    }
}

/*
function evaluateLOL() { //PEMDAS
    var y = document.getElementById("display").value;
    var operatorPosition = 0;
    if( (y.includes("+") == true) ) {
        operatorPosition = y.indexOf("+");
        alert("Operator Position is: " + operatorPosition);

    }

    }
}
*/