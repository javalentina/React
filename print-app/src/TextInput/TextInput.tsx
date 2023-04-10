import React, { useState } from 'react';
import Printer from '../Printer/Printer';
import './TextInput.css';


const TextInput = () => {
    let [value, setValue] = useState("");
    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>): void {
        setValue(event.target.value);
    }

    return (<div className="TextInput">
        <textarea name='value' value={value} onChange={handleChange} placeholder="Print Something" />
        <Printer value={value} />
    </div>
    );
};

export default TextInput;