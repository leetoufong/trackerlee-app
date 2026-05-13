import { useRef } from 'react';

const TaskInput = (props: any) => {
    const { currentTask, currentDate, currentTime, setCurrentTask, setCurrentDate, setCurrentTime, tasks, setTasks } = props;
    const formRef = useRef<HTMLFormElement>(null);

    const handleSettingTasks = (event: FormDataEvent) => {
        event.preventDefault();
        
        if (currentTask.trim() && currentDate.trim() && currentTime.toString().trim()) {
            setTasks([...tasks, {id: `${Math.random().toString(36).slice(2, 9)}-${Date.now()}`, title: currentTask, date: currentDate, time: currentTime}]);
        }

        if (formRef.current) {
            formRef.current.reset();
        }
    };

    const handleTimeConversion = (time: any) => {
        time = time.split(' ');
        let hours = 0;
        let minutes = 0;

        hours = parseInt(time[0].replace(/\D/g, ""));
        hours = hours * 60 * 60 * 1000;

        if (time.length > 1) {
            minutes = parseInt(time[1].replace(/\D/g, ""));
            minutes = minutes * 60 * 1000;
        }

        console.log(hours, minutes);

        time = hours + minutes;
        console.log(time)

        return time;
    }

    return (
        <form action="POST" onSubmit={handleSettingTasks} ref={formRef}>
            <div>
                <label htmlFor="title">Task Title:</label>
                <input type="text" id="title" onChange={event => setCurrentTask(event.target.value)} placeholder="Task name" />
            </div>
            <div>
                <label htmlFor="date">Date Worked:</label>
                <input type="date" id="date" onChange={event => setCurrentDate(new Date(event.target.value).toISOString())} />
            </div>
            <div>
                <label htmlFor="time">Amount Worked:</label>
                <input type="text" id="time" onChange={event => setCurrentTime(handleTimeConversion(event.target.value))} placeholder="3h 30m" />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default TaskInput;
