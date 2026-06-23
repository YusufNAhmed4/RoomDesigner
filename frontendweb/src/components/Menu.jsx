function FurnitureMenu({ options, selectedFurniture, onFurnitureChange }) {
    return (
        <div style={{ marginBottom: "20px" }}>
            <h2>Select Furniture</h2>

            {options.map((item) => (
                <label key={item} style={{ marginRight: "15px" }}>
                    <input
                        type="checkbox"
                        checked={selectedFurniture.includes(item)}
                        onChange={() => onFurnitureChange(item)}
                    />
                    {item}
                </label>
            ))}

            <p>
                Selected:{" "}
                {selectedFurniture.length === 0
                    ? "None"
                    : selectedFurniture.join(", ")}
            </p>
        </div>
    );
}

export default FurnitureMenu;