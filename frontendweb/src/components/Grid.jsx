const GRID_SIZE = 25;

function Grid({ cellSize, onDotMouseDown, onDotMouseEnter }) {
    return (
        <>
            {Array.from({ length: GRID_SIZE + 1 }).map((_, x) =>
                Array.from({ length: GRID_SIZE + 1 }).map((_, y) => (
                    <circle
                        key={`${x}-${y}`}
                        cx={x * cellSize}
                        cy={y * cellSize}
                        r={4}
                        fill="black"
                        onMouseDown={() => onDotMouseDown({ x, y })}
                        onMouseEnter={() => onDotMouseEnter({ x, y })}
                        style={{ cursor: "crosshair" }}
                    />
                ))
            )}
        </>
    );
}

export default Grid;