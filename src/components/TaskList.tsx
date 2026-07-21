interface Task {
    id: string|number;
    title: string;
    date: string;
    time: number;
}

interface TaskListProps {
    taskList: Task[];
}

const TaskList = ({taskList}: TaskListProps) => {
    return (
        <section className="p-10">
            <ul className="[&>:not(:first-child)]:mt-3">
                {taskList?.map((task) => {
                    const date = task.date.split('T')[0].split('-');
                    const formattedDate = `${date[1]}/${date[2]}/${date[0]}`;
                    const hours = Math.floor(task.time / (1000 * 60 * 60));
                    const minutes = Math.floor((task.time / (1000 * 60)) % 60);
                    const seconds = Math.floor((task.time / 1000) % 60);

                    return (
                        <li className="border p-5 rounded" key={task.id}>
                            <p className="text-xl"><strong>{task.title}</strong></p>
                            <p>{formattedDate}</p>
                            <p>{hours != 0 && `${hours}h `} {minutes != 0 && `${minutes}m `} {seconds != 0 && `${seconds}s`}</p>
                            <button onClick={() => console.log('Edit task:', task.id)}>Edit</button>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default TaskList