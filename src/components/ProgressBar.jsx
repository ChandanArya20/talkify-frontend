import React, { useEffect, useState } from 'react';
import './css/progressbar.css';

const ProgressBar = ({ activeIndex, index, duration }) => { 
    
    
    const isActive = (index === activeIndex);  // Check if the current index matches the active index
    const [progress, setProgress] = useState();

    // Effect to handle the progress interval
    useEffect(() => {
    
        const intervalId = setInterval(() => {
            setProgress(prev => {
                if (prev < 100) {
                     // Increment progress by a small value
                    return prev + 1;
                }
                // If progress reaches 100, clear the interval
                clearInterval(intervalId);
                return prev;
            });
        }, duration / 100);

        // Cleanup function to clear the interval on component unmount or when activeIndex changes
        return () => clearInterval(intervalId);

    }, [duration, activeIndex, index]); 
    
    // Effect to reset progress when activeIndex changes
    useEffect(() => {
        setProgress(0);
    }, [activeIndex]);

    return (
        <div className={`progress-bar-container ${isActive ? "active" : ""}`}>
            <div
                className={`${isActive ? "progress-bar" : ""}`}
                style={{
                    width: `${progress}%`
                }}
            >
            </div>
        </div>
    );
}

export default ProgressBar;
