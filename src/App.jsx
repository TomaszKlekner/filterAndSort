import DataList from "./components/DataList";
import Filters from "./components/Filters";
import Sorting from "./components/Sorting";
import "./styles/main.scss";

function App() {
  return (
    <>
      <header>
        <div className="container">Filter and Sort</div>
      </header>
      <main>
        <div className="container flex">
          <div className="sidebar">
            <Filters />
            <Sorting />
          </div>
          <div className="content">
            <DataList />
          </div>
        </div>
      </main>
      <footer>
        <div className="container">Footer</div>
      </footer>
    </>
  );
}

export default App;
