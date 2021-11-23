let tarefa;
let indiceNumero = 0;
let indice;
let elemento;


function inputBox(){
    var search, filtro, todoList, menuItens, links;
    search = document.getElementById("input");
    filtro = search.value.toUpperCase();
    todoList = document.getElementById("todoList");
    menuItens = todoList.getElementsByTagName("li");
    for(var i=0; i<menuItens.length; i++){
        links = menuItens[i].getElementsByTagName("a")[0];
        if(links.innerHTML.toUpperCase().indexOf(filtro)>-1){
            menuItens[i].style.display = "block";
        }else{
            menuItens[i].style.display = "none";
        }
    }
}


let botaoCriar = document.querySelector("#botao-criar");

botaoCriar.onclick = function() {
    tarefa = document.querySelector("#input-add").value;
    funcCriar(tarefa);
}

function funcCriar(tarefa){

    if(tarefa != ""){
        indice = "tarefa" + indiceNumero;

        const item = document.createElement("li");
        item.classList.add("todoItem");
        item.classList.add(indice);
        item.innerHTML = `
        <input type="checkbox">
        <a href="#">${tarefa}</a><button class="edit" ><img
        src="img/edit-2.svg" onclick="showModalEdit()" class="${indice}"></button> <button class="trash"><img
        src="img/trash-2.svg" onclick="showModalDel()" class="${indice}"></button>
        `;

        document.getElementById('todoList').appendChild(item);
        hideModalCriar();
        indiceNumero++;
    }

    else{
        alert("Digite o nome da tarefa");
    }
}

function clickItem(evento) {
    elemento = evento.target.getAttribute("class");
    console.log(elemento);
}

document.getElementById('todoList').addEventListener('click', clickItem);

let botaoDel = document.querySelector("#botao-del");

botaoDel.onclick = function() {
    funcDel();
    hideModalDel();
}

function funcDel() {
    let remove = "." + elemento;
    let removeElemento = document.querySelector(remove);
    removeElemento.parentNode.removeChild(removeElemento);
}

let botaoEdit = document.querySelector("#botao-edit");

botaoEdit.onclick = function() {
    funcEdit();
    hideModalEdit();
}

function funcEdit() {
    let novoNome = document.querySelector("#input-edit").value;
    console.log(novoNome);
    funcDel();
    funcCriar(novoNome);
}

function showModalCriar() {
    let modal = document.querySelector("#modal-criar");
    modal.classList.add("show-modal");
    document.querySelector("#input-add").value = "";
}

function hideModalCriar() {
    let modal = document.querySelector("#modal-criar");
    modal.classList.remove("show-modal");
}

function showModalEdit() {
    let modal = document.querySelector("#modal-edit");
    modal.classList.add("show-modal");
    document.querySelector("#input-edit").value = "";
}

function hideModalEdit() {
    let modal = document.querySelector("#modal-edit");
    modal.classList.remove("show-modal");
}

function showModalDel() {
    let modal = document.querySelector("#modal-del");
    modal.classList.add("show-modal");
}

function hideModalDel() {
    let modal = document.querySelector("#modal-del");
    modal.classList.remove("show-modal");
}