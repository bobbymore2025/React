const TableBody = ({ item, deleteData }) => {

    
    const {
        name,
        age,
        address,
        department,
        salary,
        marital_Status,
       id,
      }=item
    return (
        <tr style={{marginLeft:"300px"}}>
            <td>{name}</td>
            <td>{age}</td>
            <td>{address}</td>
            <td>{department}</td>
            <td>₹ {salary}</td>
            <td>{marital_Status ? "Married" : "Single"}</td>
            <td><button onClick={() => deleteData(id)} >Delete</button></td>
        </tr>
    );
};
export const Table = ({ form, deleteData, sortLH, sortHL, filterDepartment }) => {
    return (
    <div >
            <p >Users Database</p>
            <div >
            <button onClick={sortLH} >Salary Low-High</button>
            <button onClick={sortHL}>Salary High-Low</button>

            <select onChange={(e) => filterDepartment(e.target.value)} >
                <option defaultValue>Filter Department</option>
                <option value="fullStack">Full Stack</option>
                                    <option value="frontend">Frontend</option>
                                    <option value="backend">Backend</option>
                                    <option value="Sales">Sales</option>
                                    <option value="DevOps">DevOps</option>
            </select>
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">City</th>
                        <th scope="col">Department</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Marital Status</th>
                    </tr>
                </thead>
                <tbody>
                    {form.map((item) => {
                        return <TableBody key={item.id} item={item} deleteData={deleteData} />
                    })}
                </tbody>
            </table>
        </div>
    );
                };
   