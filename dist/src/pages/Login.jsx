import { useEffect, useState } from "react";
import { login } from "../API";



const Login = ({setToken}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
  },[]) 
  
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const handleSubmit = () => {
    async function getLoggin (){
      const data = await login(email,password)
      console.log('loging in', data);
  setToken(data.token);
    }
  getLoggin();
    console.log("email:", email);
        console.log("Password:", password);
    };
    event.preventDefault();
    return (
    <div>
      <label>
        Email:
        <input type="text" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
