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
    let ul=document.querySelector("ul:first-of-type");
    button.addEventListener("click", function(event){
        for (let i = 0; i < ingredients.length; i++){
            let li = document.createElement("li");
            ul.appendChild(li);
            let txt = document.createTextNode(ingredients[i]);
            li.appendChild(txt);
        }
    });
}

exercice3()

function exercice4() {
    let heroes = [{
            name: "Clark Kent",
            secret: "Superman"
        },
        {
            name: "Diana Prince",
            secret: "Wonder Woman"
        },
        {
            name: "Tony Stark",
            secret: "Iron Man"
        }
    ];
    let button = document.getElementById("btn-add-hero");
    let tbody = document.querySelector("tbody");
    let count = 0;
    button.addEventListener("click", function(event) {
        
        if (count < heroes.length){
            let tdName = document.createElement("td");
            let tdSecret = document.createElement("td");
            let tr = document.createElement("tr");
            tr.appendChild(tdName);
            tr.appendChild(tdSecret);
            tbody.appendChild(tr);
            let txtName = document.createTextNode(heroes[count].name);
            let txtSecret = document.createTextNode(heroes[count].secret);
            tdName.appendChild(txtName);
            tdSecret.appendChild(txtSecret);
            tbody.appendChild(tr);
            count++;
        }
    });
}

exercice4();

function exercice5(){
    let button = document.getElementById("btn-turn");
    let box1 = document.getElementById("blue");
    let box2 = document.getElementById("red");
    let box3 = document.getElementById("green");
    button.addEventListener("click", function(event){
        box1.style.backgroundColor = "red";
        box2.style.backgroundColor = "green";
        box3.style.backgroundColor = "blue";
    });
}

exercice5();

function exercice6(){
    let button = document.getElementById("btn-roll");
    let ball = document.getElementById("ball");
    button.addEventListener("click", function(event){
        ball.classList.add("roule");
    });
}

exercice6();