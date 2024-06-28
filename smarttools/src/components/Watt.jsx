import React, { useState } from 'react';
import '../style/Watt.css';

const Watt = () => {
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handlePhone = (e) => {
        setPhone(e.target.value);
    };

    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = () => {
        const encodedMessage = encodeURIComponent(message);
        const submitLink = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
        window.open(submitLink);
    };

    return (
        <div>
            <div className="watt-body">
                <div className="watt-container">
                    <div className="watt-heading">WhatsApp Direct Message</div>
                    <div className="watt-num">
                        <label htmlFor="number">Enter your number</label>
                        <input type="number" id="number" className="num-input" value={phone} onChange={handlePhone} />
                    </div>
                    <div className="watt-mess">
                        <label htmlFor="message">Enter your message</label>
                        <textarea className="long-input" placeholder="Enter text here..." value={message} onChange={handleMessage}></textarea>
                    </div>
                    <button onClick={handleSubmit} className='watt-but'>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Watt;
