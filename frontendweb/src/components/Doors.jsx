function Doors({ doors, cellSize, tool, onEraseDoor }) {
    return (
        <>
            {doors.map((door, index) => (
                <line
                    key={index}
                    x1={door.x1 * cellSize}
                    y1={door.y1 * cellSize}
                    x2={door.x2 * cellSize}
                    y2={door.y2 * cellSize}
                    stroke="blue"
                    strokeWidth="5"
                    onClick={() => {
                        if (tool === "erase") {
                            onEraseDoor(index);
                        }
                    }}
                    style={{
                        cursor: tool === "erase" ? "pointer" : "default"
                    }}
                />
            ))}
        </>
    );
}

export default Doors;