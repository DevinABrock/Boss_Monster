import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/ProgressBar.css'

function Progress() {

    const [countOfProgress, setCountOfProgress] = React.useState(0);
    const navigate = useNavigate();

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCountOfProgress((oldProgress) => {
                if (100 == oldProgress) return 0;
                return Math.min(oldProgress + Math.random() * 10, 100);
            });
        }, 200);

    }, []);



    return (
        <div style={{ display: 'block', paddingTop: '17%' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '5%', color: 'white' }}>Loading Game. . .</h1>
            <ProgressBar now={parseInt(countOfProgress)} variant="success" label={`${parseInt(countOfProgress)}% COMPLETED`} />
        </div>
    );
}

export default Progress


