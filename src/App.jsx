import DataTable from "./components/DataTable";
import Filters from "./components/Filters";
import Sorting from "./components/Sorting";
import "./styles/main.scss";
import useFetchData from "./hooks/useFetchData";
import { useState, useMemo, useEffect } from "react";

const API_URL = "https://dujour.squiz.cloud/developer-challenge/data";

function App() {
  const { data, loading, error } = useFetchData(API_URL);
  const [countryList, setCountryList] = useState([]);
  const [industryList, setIndustryList] = useState([]);
  const [filters, setFilters] = useState({
    country: "",
    industry: "",
  });

  useEffect(() => {
    if (data.length > 0) {
      const uniqueCountries = [...new Set(data.map((item) => item.country))];
      const uniqueIndustries = [...new Set(data.map((item) => item.industry))];
      setCountryList(uniqueCountries);
      setIndustryList(uniqueIndustries);
    }
  }, [data]);

  const filteredData = useMemo(() => {
    let filteredList = data;
    if (filters.country) {
      filteredList = filteredList.filter((item) =>
        item.country.includes(filters.country)
      );
    }
    if (filters.industry) {
      filteredList = filteredList.filter((item) =>
        item.industry.includes(filters.industry)
      );
    }
    return filteredList;
  }, [data, filters]);

  return (
    <>
      <header>
        <div className="container">Filter and Sort</div>
      </header>
      <main>
        <div className="container flex">
          <div className="sidebar">
            <Filters
              countryList={countryList}
              industryList={industryList}
              filters={filters}
              setFilters={setFilters}
            />
            <Sorting />
          </div>
          <div className="content">
            {loading && <p>Loading...</p>}
            {error && <p>Error fetching data</p>}
            {!loading && !error && <DataTable data={filteredData} />}
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
