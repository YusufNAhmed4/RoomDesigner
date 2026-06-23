function Walls({ walls, cellSize, tool, onEraseWall }) {
    return (
        <>
            {walls.map((wall, index) => (
                <line
                    key={index}
                    x1={wall.x1 * cellSize}
                    y1={wall.y1 * cellSize}
                    x2={wall.x2 * cellSize}
                    y2={wall.y2 * cellSize}
                    stroke="black"
                    strokeWidth="5"
                    onClick={() => {
                        if (tool === "erase") {
                            onEraseWall(index);
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

export default Walls;