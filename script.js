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

function funcCriar(){
    let tarefa = prompt("Digite a nova tarefa:");
}

function funcDel(){
    let apagar = confirm("Realmente deseja apagar?");
}

function funcEdit(){
    let editar = prompt("Digite o novo nome da tarefa:");
}