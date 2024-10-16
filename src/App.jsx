import DataTable from "./components/DataTable";
import Filters from "./components/Filters";
import Sorting from "./components/Sorting";
import "./styles/main.scss";
import useFetchData from "./hooks/useFetchData";

const API_URL = "https://dujour.squiz.cloud/developer-challenge/data";

function App() {
  const { data, loading, error } = useFetchData(API_URL);

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
            {loading && <p>Loading...</p>}
            {error && <p>Error fetching data</p>}
            {!loading && !error && <DataTable data={data} />}
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
