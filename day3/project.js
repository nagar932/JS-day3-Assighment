function addTask(){
    let data=document.getElementById('inp').value;

    document.getElementById('two').innerHTML+=`<h1 class="task">${data}</h1>`;
}
function removeTask(){
    document.getElementById('inp').value = "";
}
