var cardsField = document.querySelector("#cards");
var resetBlock = document.querySelector("#reset");
var resetBtn = document.querySelector("#reset-btn");
//console.dir(cardsField);


var countCards = 16;

var images = [
    5, 8, 2, 4,
    1, 6, 3, 7,
    2, 4, 3, 8,
    7, 6, 1, 5,
];

var deletedCards = 0;

var selected = [];

var pause = false;



for (var i = 0; i < countCards; i = i + 1) {
    var li = document.createElement("li");
    li.id = i;
    cardsField.appendChild(li);
}

cardsField.onclick = function(event) {
    if (pause == false) {
        //console.dir(event);
        var element = event.target;

        if (element.tagName == "LI" && element.className != "active") {
            selected.push(element);
            element.className = "active"
            var img = images[element.id];
            element.style.backgroundImage = "url(images/" + img + ".png)";
            if (selected.length == 2) {
                pause = true;
                if (images[selected[0].id] == images[selected[1].id]) {
                    selected[0].style.visibility = "hidden";
                    selected[1].style.visibility = "hidden";
                    deletedCards = deletedCards + 2;


                }
                setTimeout(refreshCards, 600);
                //refreshCards();
                //selected = [];
            }
        }
    }


}

function refreshCards() {
    for (var i = 0; i < countCards; i = i + 1) {
        cardsField.children[i].className = "";
        cardsField.children[i].style.backgroundImage = 'url("images/back.png")';
    }
    if (deletedCards == countCards) {
        resetBlock.style.display = "block"
    }
    selected = [];
    pause = false;
}


resetBtn.onclick = function() {
    location.reload();
}