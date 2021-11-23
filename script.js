let tarefa;
let indiceNumero = 0;
let indice;
let elemento;

let banco = [];

let botaoCriar = document.querySelector("#botao-criar");

botaoCriar.onclick = function() {
    tarefa = document.querySelector("#input-add").value;
    document.querySelector("#input-add").value = "";
    funcCriar(tarefa);
}

function funcCriar(tarefa){

    if(tarefa != ""){
        indice = "tarefa" + indiceNumero;

        const item = document.createElement("label");
        item.classList.add("todoItem");
        item.classList.add(indice);
        item.innerHTML = `
        <input type="checkbox">
        <div class="text">${tarefa}<button class="edit" ><img
        src="img/edit-2.svg" onclick="showModalEdit()" class="${indice}"></button> <button class="trash"><img
        src="img/trash-2.svg" onclick="showModalDel()" class="${indice}"></button> </div></label>
        `;
        banco.push({'tarefa': indice});

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
}

function showModalCriar() {
    let element = document.querySelector("#modal-criar");
    element.classList.add("show-modal");
}

function hideModalCriar() {
    let element = document.querySelector("#modal-criar");
    element.classList.remove("show-modal");
    document.querySelector("#input-add").value = "";
}

function showModalEdit() {
    let element = document.querySelector("#modal-edit");
    element.classList.add("show-modal");
}

function hideModalEdit() {
    let element = document.querySelector("#modal-edit");
    element.classList.remove("show-modal");
}

function showModalDel() {
    let element = document.querySelector("#modal-del");
    element.classList.add("show-modal");
}

function hideModalDel() {
    let element = document.querySelector("#modal-del");
    element.classList.remove("show-modal");
}