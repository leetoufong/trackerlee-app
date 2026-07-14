const TaskList = (props) => {
    const { tasks } = props;

    return (
        <section className="p-10">
            <ul className="[&>:not(:first-child)]:mt-3">
                {tasks?.map((task) => {
                    const hours = Math.floor(task.time / (1000 * 60 * 60));
                    const minutes = Math.floor((task.time / (1000 * 60)) % 60);
                    const seconds = Math.floor((task.time / 1000) % 60);

                    return (
                        <li className="border p-5 rounded" key={task.id}>
                            <p>{task.title}</p>
                            <p>{task.date}</p>
                            <p>{hours != 0 && `${hours}h `} {minutes != 0 && `${minutes}m `} {seconds != 0 && `${seconds}s`}</p>
                            <button>Edit</button>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default TaskList