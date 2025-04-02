import './App.css'
import {useState} from "react";

const Card = ({title}) => {
    const [hasLiked, setLiked] = useState(false);

    return (
        <div className={`card ${hasLiked ? 'card-liked' : 'card-disliked'}`}>
            <h2>{title}</h2>
            <button onClick={() => {setLiked(!hasLiked)}}>
                {hasLiked ? "Liked" : "Like"}
            </button>
        </div>
    )
}

function App() {

    return (
        <div className="card-container">
            <Card title={"Star Wars"}></Card>
            <Card title={"Avatar"}></Card>
            <Card title={"The Lion King"}></Card>
        </div>
    )
}

export default App
