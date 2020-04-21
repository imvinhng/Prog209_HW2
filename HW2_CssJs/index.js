document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("button1").addEventListener("click", function () {
        input();
    });

    document.getElementById("button2").addEventListener("click", function () {
        input2();
    });
});

let array = [];
var ul = document.createElement("ul");
var myList = document.getElementById("myList");
var myList2 = document.getElementById("myList2");
var wordbox = document.getElementById("wordbox");
var newbox = document.getElementById("newbox");

let input = function(){
    for(let i=0; i<3; i++) {
        array[i] = prompt("Enter a word");
        var node = document.createElement("li");
        var textnode = document.createTextNode(array[i])
        node.appendChild(textnode);
        myList.appendChild(node);
    }

    wordbox.style.display = "block";
    newbox.style.display = "none";
}

let input2 = function(){


    for(let i=0; i<3; i++) {

        let newarray = array.map(SwapFunction);

        var node = document.createElement("li");
        var textnode = document.createTextNode(newarray[i]);
        node.appendChild(textnode);
        myList2.appendChild(node);
    }

    function SwapFunction(word){
        return word.charAt(word.length-1)+ word.substring(1,word.length-1) + word.charAt(0);
    }

    wordbox.style.display = "none";
    newbox.style.display = "block";
}