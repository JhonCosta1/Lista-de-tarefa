// Referenciar o input
let input = document.querySelector('input[name=tarefa]');
// Referenciar o button
let btn = document.querySelector('#botao');
// Referenciar a lista
let lista = document.querySelector('#lista');


let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function carregarTarefas(){
    //limpar itens antes de carregar tela
    lista.innerHTML = '';
    for(tarefa of tarefas){
        //criar o item da list
        let itemLista = document.createElement('li');

        //adicionar classse no item da lista
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');

        //adicionar evento de click no item da lista
        itemLista.onclick = function(){
            deletarTarefa(this);
        }

        //criar um texto
        let itemTexto = document.createTextNode(tarefa);

        //adicionar o texto no item da lista
        itemLista.appendChild(itemTexto);
        
        //adicionar o item da lista na lista
        lista.appendChild(itemLista);
    }
}

// executar função para carregar as tarefas

carregarTarefas();


//Precisamos do evento do click no botão
btn.onclick = function(){
    //Precisamos capturar o valor digitado pelo usuário no input
    let novaTarefa = input.value;

    if(novaTarefa !== ""){
        //Precisamos atualizar a nova tarefa na lista(inserida no array) Recarregar página
        tarefas.push(novaTarefa);
        carregarTarefas();
        //limpar input
        input.value = '';
        //limpar mensagens de spans
        removerSpans();

        salvarDadosStorage()
    }else{
        removerSpans();
        let card = document.querySelector('.card');
        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-warning');
        let msg = document.createTextNode('Você precisa informar a tarefa!');
        span.appendChild(msg);
        card.appendChild(span);
    }

}

function removerSpans(){
    let spans = document.querySelectorAll('span');
    let card = document.querySelector('.card');
    for(let i = 0; i < spans.length; i++){
        card.removeChild(spans[i]);
    }
}

function deletarTarefa(tar){
    //remover a tarefa do arrey tarefas
    tarefas.splice(tarefas.indexOf(tar.textContent), 1);

    carregarTarefas();

    //salva os novos dados no banco de dados
    salvarDadosStorage()
}


function salvarDadosStorage(){
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}



/* 
            <li class="list-group-item list-group-item-action">Jogar GTA5</li>
            <li class="list-group-item list-group-item-action">Jogar GTA5</li>
            <li class="list-group-item list-group-item-action">Jogar GTA5</li>
            <li class="list-group-item list-group-item-action">Jogar GTA5</li>
            <li class="list-group-item list-group-item-action">Jogar GTA5</li>
*/