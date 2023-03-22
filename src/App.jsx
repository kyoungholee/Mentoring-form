import "./App.css";

function App() {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // [['search', 'data']]
    const data = Object.fromEntries(formData.entries());
    alert(data.search);
    // debugger
  };

  console.count("App");

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input type="text" name="search" />
        <button type="submit">서브밋</button>
        <button type="reset">리셋</button>
      </form>
    </div>
  );
}

export default App;
