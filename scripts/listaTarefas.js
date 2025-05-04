import { elementoTarefa } from "./elementoTarefa.js";

export default function listaTarefas(ulTarefas, tarefas, tarefa){
    const item = elementoTarefa(tarefas, tarefa);
    ulTarefas.append(item);
}