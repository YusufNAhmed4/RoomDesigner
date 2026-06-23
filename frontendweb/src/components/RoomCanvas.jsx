import { useState } from "react";
import Grid from "./Grid";
import Walls from "./Walls";
import Doors from "./Doors";

const CELL_SIZE = 30;

function sameWall(a, b) {
    return (
        a.x1 === b.x1 &&
        a.y1 === b.y1 &&
        a.x2 === b.x2 &&
        a.y2 === b.y2
    );
}

function RoomCanvas({ walls, setWalls, doors, setDoors, tool }) {
    const [isDragging, setIsDragging] = useState(false);
    const [lastPoint, setLastPoint] = useState(null);

    function addSegment(from, to) {
        if (from.x === to.x && from.y === to.y) return;

        const newSegment = {
            x1: from.x,
            y1: from.y,
            x2: to.x,
            y2: to.y
        };

        if (tool === "drawWall") {
            setWalls([...walls, newSegment]);
        }

        if (tool === "drawDoor") {
            setDoors([...doors, newSegment]);
        }
    }

    function handleDotMouseDown(point) {
        if (tool !== "drawWall" && tool !== "drawDoor") return;

        setIsDragging(true);
        setLastPoint(point);
    }

    function handleDotMouseEnter(point) {
        if (!isDragging || lastPoint === null) return;
        if (tool !== "drawWall" && tool !== "drawDoor") return;

        addSegment(lastPoint, point);
        setLastPoint(point);
    }

    function handleMouseUp() {
        setIsDragging(false);
        setLastPoint(null);
    }

    function eraseWall(indexToDelete) {
        setWalls(walls.filter((_, index) => index !== indexToDelete));
    }

    function eraseDoor(indexToDelete) {
        setDoors(doors.filter((_, index) => index !== indexToDelete));
    }

    return (
        <svg
            width="700"
            height="700"
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{
                backgroundColor: "white",
                border: "1px solid black",
                cursor:
                    tool === "drawWall" || tool === "drawDoor"
                        ? "crosshair"
                        : "not-allowed"
            }}
        >
            <Walls
                walls={walls}
                cellSize={CELL_SIZE}
                tool={tool}
                onEraseWall={eraseWall}
            />

            <Doors
                doors={doors}
                cellSize={CELL_SIZE}
                tool={tool}
                onEraseDoor={eraseDoor}
            />

            <Grid
                cellSize={CELL_SIZE}
                onDotMouseDown={handleDotMouseDown}
                onDotMouseEnter={handleDotMouseEnter}
            />
        </svg>
    );
}


export default RoomCanvas;