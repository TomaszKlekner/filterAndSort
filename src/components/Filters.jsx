const Filters = ({ countryList, industryList, filters, setFilters }) => {
  const handleFilterSelect = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className='filters'>
      <h2 className='custom-filter-heading'>Filters</h2>

      <div className='filters__row'>
        <label htmlFor='country'>Select a country</label>
        <select
          name='country'
          value={filters.country}
          id='country'
          onChange={handleFilterSelect}
        >
          <option value=''>All</option>
          {countryList.map((country) => (
            <option key={country}>{country}</option>
          ))}
        </select>
      </div>

      <div className='filters__row'>
        <label htmlFor='country'>Select an industry</label>
        <select
          name='industry'
          value={filters.industry}
          id='industry'
          onChange={handleFilterSelect}
        >
          <option value=''>All</option>
          {industryList.map((industry) => (
            <option key={industry}>{industry}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
