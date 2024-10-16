const Sorting = ({ sort, setSort }) => {
  const handleSortChange = (event) => {
    const [field, order] = event.target.value.split('-');
    setSort({ field, order });
  };

  return (
    <div className='sorting'>
      <h2 className='custom-filter-heading'>Sorting</h2>

      <select value={`${sort.field}-${sort.order}`} onChange={handleSortChange}>
        <option value=''>Select sort order</option>
        <option value='name-asc'>Name (A-Z)</option>
        <option value='name-desc'>Name (Z-A)</option>
        <option value='numberOfEmployees-asc'>Employees (Ascending)</option>
        <option value='numberOfEmployees-desc'>Employees (Descending)</option>
      </select>
    </div>
  );
};

export default Sorting;
