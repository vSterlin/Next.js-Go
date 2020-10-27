import {useState} from "react";
import axios from "axios";
import styled from "styled-components";



const Center = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 height: 100vh;
`;






export default function Home() {

  const [value, setValue] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(value);
    const res = await axios({
      method: 'post',
      url: 'http://localhost:8080',
      data: {
        value
      }
    });
    console.log(res.data)
  }
  

  return (
    <Center>

    <form onSubmit={(e)=>onSubmit(e)}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="fname" name="name" onChange={(e)=>setValue(e.target.value)}/>
      <button type="submit">Submit</button>

</form>
</Center>
  )
}
