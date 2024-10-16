const DataTable = ({ data }) => {
  return (
    <div className='data-table'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Country</th>
            <th>Industry</th>
            <th>Number of Empolyees</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, country, industry, numberOfEmployees }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{country}</td>
              <td>{industry}</td>
              <td>{numberOfEmployees}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
