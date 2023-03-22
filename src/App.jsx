import "./App.css";

function App() {
  const onSubmit = (e) => {
    e.preventDefault();
                   //맵함수 안에 데이터를 넣어서 formData에 넣는다.
    const formData = new FormData(e.target);
    // [['search', 'data']]
    //formData를 다시 객체로 만드는 작업 
    const data = Object.fromEntries(formData.entries());
    //값 추출
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
