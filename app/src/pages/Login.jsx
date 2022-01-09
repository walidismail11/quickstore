import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { login } from "../redux/apiCalls";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetcart } from "../redux/reduxCart";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
    color: green;
    cursor: not-allowed;
  }

`;

const Label = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;


const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  let {isFetching, error} = useSelector(state => state.user)
  const handleClick = (e) => {
    let bodyFormData = new FormData();
    bodyFormData.set('username', username);
    bodyFormData.set('password', password);
    e.preventDefault()
    axios({
      method: 'post',
      url: '"https://quickstoreapp.herokuapp.com/api/auth/login',
      data: bodyFormData,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then(function (response) {
          //handle success
          console.log(response);
      })
      .catch(function (response) {
          //handle error
          console.log(response);
      });
    resetcart()
  }  
  return (

    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
          <Input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
          <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
         <Link to="/" style={{textDecoration: "none" , color: "black"}} >
         <Label >BACK TO HOME PAGE</Label>
         </Link>
         <Link to="/register" style={{textDecoration: "none" , color: "black"}} >
         <Label >DONT HAVE AN ACCOUNT? REGISTER INSTEAD</Label>
         </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;