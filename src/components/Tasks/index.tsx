import { TbClipboardText } from "react-icons/tb";
import { Task } from "../Task";
import styles from './tasks.module.css'
import { ITask } from '../../App';

interface ITasksProps {
    tasks: ITask[];
    onDelete: (id: string) => void;
    onCompleted: (id: string) => void;
}
export function Tasks({ tasks, onDelete, onCompleted }: ITasksProps) {
    const tasksQuantity = tasks.length;
    const completedTasksQuantity = tasks.filter(task => task.isCompleted).length;

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas criadas</p>
                    <span>{tasksQuantity}</span>
                </div>
                <div>
                    <p className={styles.textPurple}>Tarefas concluidas</p>
                    <span >{completedTasksQuantity} de {tasksQuantity}</span>
                </div>

            </header>
            <div className={styles.taskList}>
                {tasks.map(task => (
                    <Task
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        isCompleted={onCompleted}
                    />
                ))}
            </div>
            {tasks.length <= 0 && (
                <section className={styles.empty}>
                    <TbClipboardText size={50} />
                    <div>
                        <p className="">Nenhuma tarefa criada</p>
                        <span>Crie uma tarefa para começar</span>
                    </div>
                </section>
            )}
        </section>
    )
}