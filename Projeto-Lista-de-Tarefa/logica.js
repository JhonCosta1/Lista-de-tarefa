// Referenciar o input
let input = document.querySelector('input[name=tarefa]');
// Referenciar o button
let btn = document.querySelector('#botao');
// Referenciar a lista
let lista = document.querySelector('#lista');


let tarefas = [
    'Jogar GTA5',
    'Jogar GTA4',
    'Jogar GTA3',
    'Jogar GTA2',
    'Jogar GTA1'
];

function carregarTarefas(){
    for(tarefa of tarefas){
        //criar o item da list
        let itemLista = document.createElement('li');

        //adicionar classse no item da lista
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');

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


/* 
            <li class="list-group-item list-group-item-action">Jogar GTA5</li>
            <li class="list-group-item list-group-item-action">Jogar GTA5</li>
            <li class="list-group-item list-group-item-action">Jogar GTA5</li>
            <li class="list-group-item list-group-item-action">Jogar GTA5</li>
            <li class="list-group-item list-group-item-action">Jogar GTA5</li>
*/