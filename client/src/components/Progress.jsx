import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Progress() {

    const [countOfProgress, setCountOfProgress] = React.useState(0);
    const navigate = useNavigate();

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCountOfProgress((oldProgress) => {
                if (100 == oldProgress) return navigate('/game');
                return Math.min(oldProgress + Math.random() * 10, 100);
            });
        }, 150);

    }, []);

    return (
        <div style={{ display: 'block', paddingTop: '17%', paddingLeft: "5%", paddingRight: "5%" }}>
            <h1 style={{ textAlign: 'center', marginBottom: '5%', color: 'white' }}>Loading Game. . .</h1>
            <ProgressBar now={parseInt(countOfProgress)} variant="success" label={`${parseInt(countOfProgress)}% COMPLETED`} />
        </div>
    );
}

export default Progress


