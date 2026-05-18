import { useEffect, useState, useRef } from 'react';

const Calendar = (props) => {
    const { tasks } = props;
    const [ currentView, setCurrentView ] = useState<string>('week');
    const [ day, setDay ] = useState<string>('');
    const [ week, setWeek ] = useState<string>('');
    const [ month, setMonth ] = useState<string>('');
    const [ year, setYear ] = useState<string>('');

    useEffect(() => {
        renderCalendar();
    }, []);

    function renderCalendar() {
        let currentDate = new Date();

        const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


    }

    return (
        <>
            <header>
                <nav className="flex justify-end">
                    <button onClick={() => setCurrentView('day')}>Day</button>
                    <button onClick={() => setCurrentView('week')}>Week</button>
                    <button onClick={() => setCurrentView('month')}>Month</button>
                </nav>
            </header>

            {currentView === 'day' && (
                <div id="days-grid" className="lg:flex" data-type="week">
                    {/*  */}
                </div>
            )}

            {currentView === 'week' && (
                <div id="month-year-display" className="lg:flex rounded" data-type="week">
                    <div className="lg:w-[14.28%] border">
                        <div>Monday</div>
                    </div>
                    <div className="lg:w-[14.28%] border border-t-0 lg:border-t lg:border-l-0">
                        <div>Tuesday</div>
                    </div>
                    <div className="lg:w-[14.28%] border border-t-0 lg:border-t lg:border-l-0">
                        <div>Wednesday</div>
                    </div>
                    <div className="lg:w-[14.28%] border border-t-0 lg:border-t lg:border-l-0">
                        <div>Thursday</div>
                    </div>
                    <div className="lg:w-[14.28%] border border-t-0 lg:border-t lg:border-l-0">
                        <div>Friday</div>
                    </div>
                    <div className="lg:w-[14.28%] border border-t-0 lg:border-t lg:border-l-0">
                        <div>Saturday</div>
                    </div>
                    <div className="lg:w-[14.28%] border border-t-0 lg:border-t lg:border-l-0">
                        <div>Sunday</div>
                    </div>
                </div>
            )}

            {currentView === 'month' && (
                <div className="lg:flex" data-type="month">
                    {/*  */}
                </div>
            )}
        </>
    )
}

export default Calendar