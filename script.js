let tarefa;

let botaoCriar = document.querySelector("#botao-criar");

botaoCriar.onclick = function() {

    tarefa = document.querySelector("#input-add").value;
    funcCriar(tarefa);
    document.querySelector("#input-add").value = "";
}

function funcCriar(tarefa){

    if(tarefa != ""){

        const item = document.createElement("label");
        item.classList.add('todoItem');
        item.innerHTML = `
        <input type="checkbox">
        <div class="text">${tarefa}<button class="edit" onclick="showModalEdit()"><img
        src="img/edit-2.svg"></button> <button class="trash" onclick="showModalDel()"><img
        src="img/trash-2.svg"></button> </div></label>
        `;
        document.getElementById('todoList').appendChild(item);
        hideModalCriar();
    }

    else{
        alert("Digite o nome da tarefa");
    }

}

let botaoDel = document.querySelector("#botao-del");

botaoDel.onclick = function() {
    funcDel(botaoDel);
    hideModalDel();
}


function funcDel(){
    botaoDel.onclick
    document.getElementById('todoList').removeChild(item);
}

function showModalCriar() {
    let element = document.querySelector("#modal-criar");
    element.classList.add("show-modal");
    
}

function hideModalCriar() {
    let element = document.querySelector("#modal-criar");
    element.classList.remove("show-modal");
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
