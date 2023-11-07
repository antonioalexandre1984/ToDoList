import styles from './task.module.css'
import { TbTrash } from 'react-icons/tb';
import { BsFillCheckCircleFill } from 'react-icons/Bs';
import { ITask } from '../../App';

interface ITaskProps {
    task: ITask;
    isCompleted: (id: string) => void;
    onDelete: (id: string) => void;
}

export function Task({ task, isCompleted, onDelete }: ITaskProps) {
    return (
        <div className={styles.task}>
            <button
                onClick={() => isCompleted(task.id)}
                className={styles.checkContainer}
            >
                {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
            </button>

            <p className={task.isCompleted ? styles.textCompleted : ""}>
                {task.title}
            </p>


            <button
                onClick={() => onDelete(task.id)}
                className={styles.deleteButton}>
                <TbTrash size={20} />
            </button>
        </div >
    )
}