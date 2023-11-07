import rocket from '../../assets/rocket.svg'
import todo from '../../assets/todo.svg'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import styles from './header.module.css';
import { useState, FormEvent, ChangeEvent } from 'react';

interface IHeaderProps {
    onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: IHeaderProps) {
    const [title, setTitle] = useState("");

    function handleAddTask(event: FormEvent) {
        event.preventDefault();
        onAddTask(title);
        setTitle("");
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event?.target.value)
    }
    const isNewTaskEmpty = title.length === 0;

    return (
        <header className={styles.header}>
            <img src={rocket} alt="" />
            <img src={todo} alt="" />
            <form
                className={styles.newTaskForm}
                onSubmit={handleAddTask}
            >
                <input
                    onChange={onChangeTitle}
                    value={title}
                    placeholder="Crie uma nova tarefa"
                />
                <button
                    disabled={isNewTaskEmpty}
                >
                    <AiOutlinePlusCircle size={20} />
                    Criar
                </button>
            </form>
        </header>
    )
}