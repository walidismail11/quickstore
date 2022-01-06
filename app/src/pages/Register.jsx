import styled from "styled-components";
import { register } from "../redux/apiCalls";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Button2 = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  position:absolute;
  top:0;
  right:0;

`;

const Register = () => {
    const history = useNavigate()
    const handleButton = () => {
  
    const username = document.getElementById("userName").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    register({username, email, password})
    history("/login")

  }
  return (
    <Container>
      <Link to="/login" style={{textDecoration: "none" , color: "black"}}>
      <Button2>LOG IN</Button2>
      </Link>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form >
          <Input placeholder="Username" id = "userName"/>
          <Input placeholder="Email" id = "email"/>
          <Input placeholder="Password" id = "password"/>

          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="button" onClick={handleButton}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;