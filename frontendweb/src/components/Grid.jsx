function Grid() {
    const dots = [];

    for (let x = 0; x <= 30; x++) {
        for (let y = 0; y <= 30; y++) {
            dots.push(
                <circle
                    key={`${x}-${y}`}
                    cx={x * 30}
                    cy={y * 30}
                    r={2}
                    fill="black"
                />
            );
        }
    }

    return <>{dots}</>;
}

export default Grid;