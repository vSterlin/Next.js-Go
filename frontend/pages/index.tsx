import {FormEvent, useState} from "react"
import axios from "axios";
import styled from "styled-components";



const Center = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 height: 100vh;
`;

const StyledH1 = styled.h1<{error: string}>`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 20px;
  @keyframes light {
    from {
      color: black;
    }
    to {
      color: red;
    }
  }
  ${({error}) => error  ? 
    "animation: light 0.2s linear infinite;"
: ""}
`;
export default function Home() {

  const [value, setValue] = useState('')
  const [response, setResponse] = useState<string>()
  const [error, setError] = useState<boolean>(false)
  
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
    
    try{const res = await axios({
      method: 'post',
      url: 'http://localhost:8080',
      data: {
        value
      }
    });
    setResponse(res.data.value)
  }
  catch(err){
    setResponse("Could not connect to server");
    setError(true)
  }
  }
  

  return (
    <>
    {response && <StyledH1 error={error}>{response}</StyledH1>}

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
