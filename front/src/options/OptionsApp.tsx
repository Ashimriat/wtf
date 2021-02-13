import React, { useState } from 'react';


const App = () => {
    const BUTTON_COLORS = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
    const [currentColor, setColor] = useState(BUTTON_COLORS[0]);
    const changeColor = (color: string): void => {
        chrome.storage.sync.set({color}, () => {
            console.log(`color is ${color}`);
            setColor(color);
        });
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: 500,
            height: 500
        }}>
            OPTIONS TITLE
            <div>
                Current color code: {currentColor}
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                {BUTTON_COLORS.map((color, index) => (
                    <button
                        key={index}
                        style={{
                            width: 50,
                            height: 20,
                            marginBottom: 10,
                            backgroundColor: color,
                            color: "black",
                            fontWeight: 600,
                            cursor: 'pointer'
                        }}
                        onClick={changeColor.bind(this, color)}
                    >
                        {color}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default App;
