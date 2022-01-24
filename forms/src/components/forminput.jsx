
export const Forminput =({handleSubmit,handleChange,maratial_Status} )=>{
    return (
    <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="name" placeholder="name"onChange={handleChange} />
        </div>
        <div>
          <input type="text" name="age" placeholder="age" onChange={handleChange} />
        </div>
        <div>
          <input type="text" name="address" placeholder="address" onChange={handleChange} />
        </div>
        <div>
          <input type="text" name="sallary" placeholder="sallary"  onChange={handleChange} />
        </div>
        <div>
        <select  name="department"  onChange={handleChange}>
                                    <option value="">Select Department</option>
                                    <option value="fullStack">Full Stack</option>
                                    <option value="frontend">Frontend</option>
                                    <option value="backend">Backend</option>
                                    <option value="Sales">Sales</option>
                                    <option value="DevOps">DevOps</option>
                                </select>
        </div>
        <div>
        <input checked={maratial_Status} name="maratial_Status"  type="checkbox"  onChange={handleChange} />
        </div>
        <div><input type="submit" placeholder="submit" /></div>
    </form>
  )
}
