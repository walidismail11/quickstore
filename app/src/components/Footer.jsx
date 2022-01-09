import {
    Instagram,
    MailOutline,
    Phone,
  } from "@material-ui/icons";
import styled from "styled-components";
import {Link} from "react-router-dom"
  const Container = styled.div`
    display: flex;

  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;

  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px; 


  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;

  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>QUICK STORE</Logo>
          <Desc>
          If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to walid.ismail@net.usj.edu.lb, with the subject line: “Copyright Infringement” and include in your claim a detailed description of the alleged Infringement as detailed below, under “DMCA Notice and Procedure for Copyright Infringement Claims”
          </Desc>
          <SocialContainer>
            <SocialIcon color="E4405F">
              <Link to={{ pathname: "//www.instagram.com/rundafashion/?utm_medium=copy_link"}} target={"_blank"} style={{textDecoration: "none" , color: "black"}}>
              <Instagram />
              </Link>
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>  
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/>+ 961 71417545
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} />Please send your feedback, comments, requests for technical support by email: walid.ismail@net.usj.edu.lb.
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;