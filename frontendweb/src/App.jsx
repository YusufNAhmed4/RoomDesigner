import { useState } from "react";
import RoomCanvas from "./components/RoomCanvas";
import Menu from "./components/Menu";

const FURNITURE_OPTIONS = [
    "Bed",
    "Desk",
    "Chair",
    "Dresser",
    "Nightstand",
    "Bookshelf",
    "Couch",
    "Table"
];

function App() {
    const [walls, setWalls] = useState([]);
    const [doors, setDoors] = useState([]);
    const [selectedFurniture, setSelectedFurniture] = useState([]);
    const [tool, setTool] = useState("drawWall");

    function handleFurnitureChange(item) {
        if (selectedFurniture.includes(item)) {
            setSelectedFurniture(
                selectedFurniture.filter((furniture) => furniture !== item)
            );
        } else {
            setSelectedFurniture([...selectedFurniture, item]);
        }
    }

    return (
        <div>
            <h1>Room Designer</h1>

            <Menu
                options={FURNITURE_OPTIONS}
                selectedFurniture={selectedFurniture}
                onFurnitureChange={handleFurnitureChange}
            />

            <button onClick={() => setTool("drawDoor")}>Draw Doors</button>
            <button onClick={() => setTool("drawWall")}>Draw Walls</button>
            <button onClick={() => setTool("erase")}>Erase Walls</button>

            <RoomCanvas
                walls={walls}
                setWalls={setWalls}
                doors={doors}
                setDoors={setDoors}
                tool={tool}
            />
        </div>
    );
}

export default App;