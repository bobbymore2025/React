import { useEffect, useState } from "react"

export const Timerfunction = ({ start, end }) => {

    const [time, setTime] = useState(+start);

    useEffect(() => {

        let interval = setInterval(() => {
            setTime((prev) => {
                if (prev === +end) {
                    clearInterval(interval);
                    return prev;
                }
                return (prev + 1);
            });
        }, 1000)

        return () => {
            clearInterval(interval);
        }

    }, [start, end])

    return (
        <div>
            <h1 className="display-1">Timer: {time} </h1>
        </div>
    );
};