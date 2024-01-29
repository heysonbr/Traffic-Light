import react {useState} from "react";

const TrafficLight = () => {
    const [light, setLight] = useState(null);

    return (
        <div>
            <button onClick={() => setLight("red")}>Red</button>
            <button onClick={() => setLight("yellow")}>Yellow</button>
            <button onClick={() => setLight("green")}>Green</button>
            <p>The light is {light}</p>
        </div>
    );
}