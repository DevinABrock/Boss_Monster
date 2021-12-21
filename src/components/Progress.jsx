import React from 'react';
import { ProgressBar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/ProgressBar.css'

function Progress() {

    const [countOfProgress, setCountOfProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCountOfProgress((oldProgress) => {
                if (100 == oldProgress) return 0;
                return Math.min(oldProgress + Math.random() * 10, 100);
            });
    }, 1999);

    return () => {
        clearInterval(timer);
    };
}, []);

    return (
        <div style={{ display: 'block', paddingTop: '25%'}}>
            <ProgressBar now={parseInt(countOfProgress)} variant="success" label={`${parseInt(countOfProgress)}% COMPLETED`} />
        </div>
    );
}

export default Progress


