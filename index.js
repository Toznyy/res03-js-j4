function exercice1(){
    let box = document.getElementById("box1");
    let button = document.getElementById("btn-change-color");
    button.addEventListener("click", function(event){
        box.style.backgroundColor = "blue";
    });
}

exercice1();

function exercice2(){
    let box = document.getElementById("box2");
    let button = document.getElementById("btn-move");
    button.addEventListener("click", function(event){
        box.classList.add("move");
    });
}

exercice2();

function exercice3(){
    let ingredients = ["Salade", "Tomate", "Oignon"];
    let button = document.getElementById("btn-add-ingredients");
    button.addEventListener("click", function(event){
        for (let i = 0; i < ingredients.length; i++){
            let li = document.createElement("li");
            let txt = document.createTextNode(ingredients[i]);
            li.appendChild(txt);
        }
    });
}

exercice3()

function exercice4(){
    let heroes = [
        {
            name : "Clark Kent",
            secret : "Superman"
        },
        {
            name : "Diana Prince",
            secret : "Wonder Woman"
        },
        {
            name : "Tony Stark",
            secret: "Iron Man"
        }
    ];
}

function exercice5()
{

}

function exercice6()
{

}