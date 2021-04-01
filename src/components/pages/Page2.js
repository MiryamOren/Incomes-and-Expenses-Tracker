import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
const Page2 = () => {
  const API = "https://60659f61b8fbbd0017566dda.mockapi.io/IncomesAndExpenses/users"
  const [id, setId] = useState(null)
  const handelPost = async () => {
    const student = {
      username: 'username',
      password: 'password',
      incomes: [],
      expenses: [],
    }
    try{
      const response = await axios.post(API, student);
      console.log(response.data);
      setId(response.data.id);
    } catch(err){
      console.log(err)
    }
  };
  const handelGet = async () => {
    try{
      const response = await axios.get(`${API}/${id}`);
      console.log(response.data);
    } catch(err){
      console.log(err)
    }
  };

  return (
    <div>
      <button onClick={handelPost}>post</button>
      <button onClick={handelGet}>get</button>
    </div>
  );
}

export default Page2;