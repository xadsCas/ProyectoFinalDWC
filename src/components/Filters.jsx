import React from "react";

const Filters = () => {
    return (
        <div className="filters">
            <h3>Categorías & Sneakers</h3>
            <div className="filter-group">
                <h4>Categorías</h4>
                <ul>
                    <li>Lifestyle</li>
                    <li>Running</li>
                </ul>
            </div>
            <div className="filter-group">
                <h4>Precio</h4>
                <label><input type="radio" name="price" /> Menos de 50</label>
                <label><input type="radio" name="price" /> 100 a 150</label>
                <label><input type="radio" name="price" /> Más de 300</label>
            </div>
            <div className="filter-group">
                <h4>Colores</h4>
                <div className="colors">
                    <span style={{ backgroundColor: "red" }}></span>
                    <span style={{ backgroundColor: "blue" }}></span>
                    <span style={{ backgroundColor: "green" }}></span>
                </div>
            </div>
            <div className="filter-group">
                <h4>Tallas</h4>
                <div className="sizes">
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                </div>
            </div>
        </div>
    );
};

export default Filters;
