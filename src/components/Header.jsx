import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <h1>Which element are you?</h1>
            <p>(based on completely random things)</p>
            <Link to="/">Home</Link>  
            <Link to="/quiz">Quiz</Link>  
        </>
    );
}