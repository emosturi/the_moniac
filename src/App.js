import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h2>The Moniac</h2>
                <input placeholder="Cantidad..." />
                <br />
                <label>Desde:</label>
                <select>
                    <option>activo</option>
                    <option>pasivo</option>
                </select>
                <br />
                <label>Hacia:</label>
                <select>
                    <option>activo</option>
                    <option>pasivo</option>
                </select>
                <button>Ingresar</button>
            </header>
        </div>
    );
}

export default App;
