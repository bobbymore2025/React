
const Forminput =({handleSubmit,handleChange} )=>{
    return (
    <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="name" placeholder="name" value={state.name} onChange={handleChange} />
        </div>
        <div>
          <input type="text" name="age" placeholder="age" value={state.name} onChange={handleChange} />
        </div>
        <div>
          <input type="text" name="address" placeholder="address" value={state.address} onChange={handleChange} />
        </div>
        <div>
          <input type="text" name="sallary" placeholder="sallary" value={state.email} onChange={handleChange} />
        </div>
        <div>
        <select className="form-select mb-3" name="department"  onChange={handleChange}>
                                    <option value="">Select Department</option>
                                    <option value="Marketing">Full Stack</option>
                                    <option value="Marketing">Frontend</option>
                                    <option value="Developer">Backend</option>
                                    <option value="Sales">Sales</option>
                                    <option value="DevOps">DevOps</option>
                                </select>
        </div>
        <div>
        <input checked={isMarried} name="isMarried"  type="checkbox"  onChange={handleChange} />
        </div>
        
    </form>
  )
}
export default Forminput;