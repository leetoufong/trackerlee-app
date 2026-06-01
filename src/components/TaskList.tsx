const TaskList = (props) => {
    const { tasks } = props;

    return (
        <section className="p-10">
            <ul>
                {tasks?.map((task) => {
                    return (
                        <li key={task.id}>
                            {task.title} / {task.date} / {task.time} <button>Edit</button>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default TaskList