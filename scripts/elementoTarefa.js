import { atualizarTarefas, verificaTarefa } from "./crudTarefa.js";

export function elementoTarefa(tarefas, tarefa){
    let tarefaSelecionada = null;
    let tarefaFoco = tarefa;
    const li = document.createElement('li');
    const svg = document.createElement('svg');
    const p = document.createElement('p');
    const button = document.createElement('button');
    const img = document.createElement('img');
    const pActive = document.querySelector('.app__section-active-task-description')

    li.classList.add('app__section-task-list-item');

    svg.innerHTML = `<svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>`

    p.classList.add('app__section-task-list-item-description');
    p.textContent = tarefa;

    button.classList.add("app_button-edit");
    img.setAttribute("src","/imagens/edit.png");

    button.append(img);

    li.append(svg);
    li.append(p);
    li.append(button);

    button.onclick = () =>{
        const novaTarefa = prompt("Qual o nome da nova tarefa?");
        if(novaTarefa){
            p.textContent = novaTarefa;
            atualizarTarefas(tarefas, tarefa, novaTarefa)
        } else {
            alert('Você não digitou nenhuma tarefa!');
        }
    }

    if(verificaTarefa(tarefas,tarefa)){
        li.classList.remove('app__section-task-list-item-active');
        li.classList.add('app__section-task-list-item-complete');
        button.setAttribute('disabled', 'disabled')
    } else { 
        li.onclick = () => {
            document.querySelectorAll('.app__section-task-list-item-active')
            .forEach(elemento => {
                    elemento.classList.remove('app__section-task-list-item-active');
                });
    
            if(tarefaSelecionada === tarefa){
                pActive.textContent = '';
                tarefaSelecionada = null;
            } else {
                pActive.textContent = tarefa;
                li.classList.add('app__section-task-list-item-active')
                tarefaSelecionada = tarefa;
            }
    };
    }

    return li;
};

