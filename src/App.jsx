import DataTable from './components/DataTable';
import Filters from './components/Filters';
import Sorting from './components/Sorting';
import './styles/main.scss';
import useFetchData from './hooks/useFetchData';
import { useState, useMemo, useEffect } from 'react';

const API_URL = 'https://dujour.squiz.cloud/developer-challenge/data';

function App() {
  const { data, loading, error } = useFetchData(API_URL);
  const [countryList, setCountryList] = useState([]);
  const [industryList, setIndustryList] = useState([]);
  const [filters, setFilters] = useState({
    country: '',
    industry: '',
  });
  const [sort, setSort] = useState({
    field: 'name',
    direction: 'asc',
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

  const sortedData = useMemo(() => {
    return [...filteredData].sort((a, b) => {
      if (sort.field === 'name') {
        return sort.order === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else if (sort.field === 'numberOfEmployees') {
        return sort.order === 'asc'
          ? a.numberOfEmployees - b.numberOfEmployees
          : b.numberOfEmployees - a.numberOfEmployees;
      }
      return 0;
    });
  }, [filteredData, sort]);

  return (
    <>
      <header>
        <h1>Filter and sort data</h1>
      </header>
      <div className='app-container'>
        <div className='sidebar'>
          <Filters
            countryList={countryList}
            industryList={industryList}
            filters={filters}
            setFilters={setFilters}
          />
          <Sorting sort={sort} setSort={setSort} />
        </div>
        <div className='content'>
          {loading && <p>Loading...</p>}
          {error && <p>Error fetching data</p>}
          {!loading &&
            !error &&
            (sortedData.length > 0 ? (
              <DataTable data={sortedData} />
            ) : (
              <p>No data</p>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
