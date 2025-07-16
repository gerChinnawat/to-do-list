let main = document.getElementById("main_list");

function removeList(event) {
    if (event.target.tagName === "IMG") {
        event.target.parentElement.remove();
    };
};

function addList() {
    let todoInput = document.getElementById("to_do");
    if (!todoInput.value) {
        alert("Value is empty");
        return
    };

    let p = document.createElement("p");
    p.innerText = todoInput.value;

    let img = document.createElement("img");
    img.src = "assets/delete-icon.png";
    img.width = 24;
    
    let article = document.createElement("article");
    article.classList.add("list");
    article.append(p, img);
    article.addEventListener("click", removeList);

    main.appendChild(article);
    todoInput.value = "";
};