const input = document.querySelector("#screen")
const buttons = document.querySelectorAll(".btn")

for( item of buttons ) {

    item.addEventListener('click',(event)=>{

        let text = event.target.innerText;

        if( text == "x" ) text = "*";
        if( text == "÷" ) text = "/";

        let length = input.value.length;
        let openBracket = 0;
        let closedBracket = 0;

        if( text == ")" ) {

            for( let i=0; i<length; i++ ) {

                if( input.value.charAt(i) == '(' ) openBracket++;

                if( input.value.charAt(i) == ')' ) closedBracket++;
            }

            if( openBracket == closedBracket ) text = "";
        }
       
        if( input.value != "" ) {

            if( text == "(" && !isNaN(input.value.charAt(length-1))) input.value += "*";
            if( text != "" && !isNaN(text) && input.value.charAt(length-1) == ')') input.value += "*";
        }

        input.value += text;
    });
}

document.getElementById("eval").addEventListener('click',()=>{

    input.value = eval(input.value);
})

document.getElementById("ce").addEventListener('click',()=>{

    input.value = input.value.substring(0,input.value.length-1);
})

document.getElementById("ac").addEventListener('click',()=>{

    input.value = ""
})

document.getElementById("pi").addEventListener('click',()=>{

    var length = input.value.length;
    
    if( isNaN(input.value.charAt(length-1)) || input.value == "" ) input.value += Math.PI;
})

document.getElementById("e").addEventListener('click',()=>{

    var length = input.value.length;

    if( isNaN(input.value.charAt(length-1)) || input.value == "" ) input.value += Math.E;
})

document.getElementById("sin").addEventListener('click',()=>{

    var num = "";
    var length = input.value.length;

    while( length > 0 && !isNaN(Number(input.value.charAt(length-1)))) {

        num = input.value.charAt(length-1).toString() + num;
        length--;
    }

    input.value = input.value.substring(0,length) + Math.sin(num);
})

document.getElementById("cos").addEventListener('click',()=>{

    var num = "";
    var length = input.value.length;

    while( length > 0 && !isNaN(Number(input.value.charAt(length-1)))) {

        num = input.value.charAt(length-1).toString() + num;
        length--;
    }

    input.value = input.value.substring(0,length) + Math.cos(num);
})

document.getElementById("tan").addEventListener('click',()=>{

    var num = "";
    var length = input.value.length;

    while( length > 0 && !isNaN(Number(input.value.charAt(length-1)))) {

        num = input.value.charAt(length-1).toString() + num;
        length--;
    }

    input.value = input.value.substring(0,length) + Math.tan(num);
})

document.getElementById("log").addEventListener('click',()=>{

    var num = "";
    var length = input.value.length;

    while( length > 0 && !isNaN(Number(input.value.charAt(length-1)))) {

        num = input.value.charAt(length-1).toString() + num;
        length--;
    }

    input.value = input.value.substring(0,length) + Math.log(num);
})

document.getElementById("sqrt").addEventListener('click',()=>{

    var num = "";
    var length = input.value.length;

    while( length > 0 && !isNaN(input.value.charAt(length-1))) {

        num = input.value.charAt(length-1).toString() + num;
        length--;
    }

    input.value = input.value.substring(0,length) + Math.sqrt(num);
})

document.getElementById("square").addEventListener('click',()=>{

    var num = "";
    var length = input.value.length;

    while( length > 0 && !isNaN(Number(input.value.charAt(length-1)))) {

        num = input.value.charAt(length-1).toString() + num;
        length--;
    }

    input.value = input.value.substring(0,length) + Math.pow(num,2);
})

document.getElementById("factorial").addEventListener('click',()=>{

    if( input.value != "" ) {

        var num = "";
        var length = input.value.length;

        while( length > 0 && !isNaN(Number(input.value.charAt(length-1)))) {

            num = input.value.charAt(length-1).toString() + num;
            length--;
        }

        let fact = 1;

        while( num > 0 ) {

            fact *= num;
            num--;
        }
    
        input.value = input.value.substring(0,length) + fact;
    }
})
