import "./styles/main.scss";

function App() {
  return (
    <>
      <header>
        <div className="container">Filter and Sort</div>
      </header>
      <main>
        <div className="container flex">
          <div className="sidebar">sidebar</div>
          <div className="content">content</div>
        </div>
      </main>
      <footer>
        <div className="container">Footer</div>
      </footer>
    </>
  );
}

export default App;
