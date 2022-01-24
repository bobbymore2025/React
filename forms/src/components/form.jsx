import React from  "react"
import {Forminput} from "./forminput"
import {useEffect,useState} from "react"
import {Table} from "./table" 
const Form=()=>{
   
    const initState = {
  name: "",
  age:"",
  address: "",
  department:"",
  salary:"",
  marital_Status: "false",
 
}
const [form, setForm] = useState([]);
const [user, setUser] = useState(initState);
const [isMarried, setIsMarried] = useState(false);
const [isLoading, setIsLoading] = useState(true);
const [isError, setIsError] = useState(false);
const [page, setPage] = useState(1);

useEffect(()=>{
  getData(page);
},[page]);


const getData = (page) => {

  setIsLoading(true)

  fetch(`http://localhost:3004/users?_page=${page}&_limit=5`)
      .then((res) => {
          console.log(res.headers["X-total-count"]);
          return res.json()
      })
      .then((res) => {
          console.log('res:', res)
        
          setForm(res);
      })
      .catch((err) => {
          console.log(err);
          setIsError(true);
      })
      .finally(() => {
          setIsLoading(false);
      })
}

const postData = (data) => {

  fetch(`http://localhost:3004/users`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
          "Content-Type": "application/json"
      }
  })
      .then((res) => res.json())
      .then((res) => {
          getData(page);
      })
      .catch((err) => {
          console.log(err);
          setIsError(true);
      })
}
const deleteData = (id) => {

  fetch(`http://localhost:3004/users/${id}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      }
  })
      .catch((err) => {
          console.log(err);
          setIsError(true);
      })
      .finally(() => {
          getData(page);
      })
}
const sortLH = () => {

  setIsLoading(true)

  fetch(`http://localhost:3004/users?_sort=salary&_order=asc&_page=${page}&_limit=5`)
      .then((res) => res.json())
      .then((res) => {
          // res.sort((a, b) => a.salary - b.salary)
          setForm(res);
      })
      .catch((err) => {
          console.log(err);
          setIsError(true);
      })
      .finally(() => {
          setIsLoading(false);
      })
}

const sortHL = () => {

  setIsLoading(true)

  fetch(`http://localhost:3004/users?_sort=salary&_order=desc&_page=${page}&_limit=5`)
      .then((res) => res.json())
      .then((res) => {
          // res.sort((a, b) => b.salary - a.salary)
          setForm(res);
      })
      .catch((err) => {
          console.log(err);
          setIsError(true);
      })
      .finally(() => {
          setIsLoading(false);
      })
}

const filterDepartment = (depart) => {
  console.log("working");
  setIsLoading(true)

  fetch(`http://localhost:3004/users?department=${depart}&_page=${page}&_limit=5`)
      .then((res) => res.json())
      .then((res) => {
          // res = res.filter((element) => element.department === depart)
          setForm(res);
      })
      .catch((err) => {
          console.log(err);
          setIsError(true);
      })
      .finally(() => {
          setIsLoading(false);
      })
}
const handleChange = (e) => {
  let { name, value, checked, type } = e.target;
  value = type === "checkbox" ? checked : value;
  type === "checkbox" && setIsMarried(!isMarried);

  setUser({ ...user, [name]: value });
}

const handleSubmit = (e) => {
  e.preventDefault();
  postData(user);
}


  
  return(
    <> <div style={{disply:"flex",flexDirection:"column" ,}}>
   <Forminput onSubmit={handleSubmit} onChange={handleChange} />
   </div>

  < Table form={form} deleteData={deleteData} sortLH={sortLH} sortHL={sortHL} filterDepartment={filterDepartment} />
   

  <div >
                <p >Page: {page} </p>
                <button disabled={page === 1 ? true : false} onClick={() => setPage(page - 1)} >Prev</button>
                <button onClick={() => setPage(page + 1)} >Next</button>
            </div>
  </>
  )

}
export default Form;