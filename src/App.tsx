import { useState } from "react";
import "./styles.css";
import { submitForm } from "./service";


// Instructions for Candidate:
// 1. Clone this repo
// 2. Add an input field to accept an email.
// 3. Add a button that passes the input value to the parent component.
// 4. In the parent component, add logic to send the value to a backend with a POST request to
//the following url https://webhook.site/30b1bdd1-b233-4262-b3f0-918cb9d94e71. Along with the email, send your github username in the JSON.
// 5. Add styling to the button (Button) and input (Input) using the ShadCN Component library here: https://ui.shadcn.com/docs/components/input
// 6. Please return your video, along with your cloned github repo link.


const EmailForm = ({handleSubmit}: {handleSubmit:(email:string)=>void}) => {
  const [email, setEmail] = useState('');

  const handleChange = (e:any)=>{
    const value = e.target.value;
    setEmail(value)
  }

  return <div className="emailForm">
    <p>
    Email form
    </p>
    <input name='email' type="email" required={true} value={email} onChange={(e)=>handleChange(e)}/>
    <button onClick={()=>{
      handleSubmit(email)
      setEmail('')
    }} 
    disabled={!email.length}
    >Submit</button>
  </div>;
};

export default function App() {

  const handleSubmit = async (email:string) =>{
    
      if(!email.toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
      alert('Email is not valid.')
      return;
    }
    const postRes = await submitForm({email, username:'Khan-Sajid'})
    if(postRes && postRes.success){
      alert('Submitted successfuly')
    }else{
      alert('somthing went wrong!')
    }
    console.log('parent comp', email)
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <EmailForm handleSubmit={handleSubmit}/>
    </div>
  );
}