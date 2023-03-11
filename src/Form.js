import React,{useState,useEffect} from 'react'
import "./Form.css"

const Form = () => {

  
    const [passErr, setPassErr] = useState(
        "Password must be atleast 8 characters"
      );
      const [confirmPassErr,setConfirmPassErr]=useState("Passwords do not match")
      const [emailErr,setEmailErr]=useState("Invalid Email format");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [confirmPassword, setConfirmPassword] = useState("");
    
      useEffect(()=>{
        if(password.length>=8){
          setPassErr("");
         
        }
        else{
          setPassErr("Password must be atleast 8 characters");
          
        }
      },[password]);

      useEffect(()=>{
        if (confirmPassword === password) {
          setConfirmPassErr("");
          
        } else {
          setConfirmPassErr("Passwords do not match");
          
        }
      },[confirmPassword,password]);

      const handleSubmit = () => {
          if(emailErr==="" && passErr==="" && confirmPassErr===""){
            alert("Form submitted successfully");   
          }
          else{
            alert("Form cannot be submitted");
          }
      };
    
      const setUserEmail = (event) => {
        setEmail(event.target.value);
      };

      useEffect(()=>{
        if(email.includes("@") && email.includes(".")){
          setEmailErr("");
          
        }
        else{
          setEmailErr("Invalid Email format")
         
        }
      },[email])
    
      const  setUserPassword = (event) => {
        setPassword(event.target.value);
        //console.log(password);
        // if (password.length >= 8) {
        //   setPassErr("");
        // } else {
        //   setPassErr("Password must be atleast 8 characters");
        // }
      };
    
      const setUserConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
      };
    
      return (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <br />
            <input htmlFor="email" onChange={setUserEmail} type="email" />
            <p style={{ color: "red" }}>{emailErr}</p>
            <br />
            <label>Password:</label>
            <br />
            <input onChange={setUserPassword} htmlFor="password" type="password" />

            <p style={{ color: "red" }}>{passErr}</p>
            <label>Confirm Password:</label>
            <br />  
            <input
              onChange={setUserConfirmPassword}
              htmlFor="confirmPassword"
              type="password"
            />
            <p style={{ color: "red" }}>{confirmPassErr}</p>
            <button onClick={handleSubmit} type="button">Sign Up </button>
          </form>
        </div>
      );
  
}

export default Form
