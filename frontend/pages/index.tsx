import {FormEvent, useState} from "react"
import axios from "axios";
import styled from "styled-components";



const Center = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 height: 100vh;
`;

const StyledH1 = styled.h1`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 20px;
`;
export default function Home() {

  const [value, setValue] = useState('')
  const [response, setResponse] = useState()
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
    const res = await axios({
      method: 'post',
      url: 'http://localhost:8080',
      data: {
        value
      }
    });
    setResponse(res.data.value)
  }
  

  return (
    <>
    {response && <StyledH1>{response}</StyledH1>}

    <Center>

    <form onSubmit={(e)=>onSubmit(e)}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="fname" name="name" onChange={(e)=>setValue(e.target.value)}/>
      <button type="submit">Submit</button>

</form>
</Center>
</>
  )
}
