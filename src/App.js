import './App.css';

function App() {
  return (
    <div
      style = {{
        margin: "auto",
        width: 800,
        paddingTop: "1rem"
      }}>
      <h1 className = "title">This is a test</h1>
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>Balbasaur</td>
            <td>Grass, Poison</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
