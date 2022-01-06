import { Badge } from '@material-ui/core'
import { ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logOut } from '../redux/reduxUser'
import { resetcart } from '../redux/reduxCart'


const Container = styled.div`
    height: 60px;   
    background-color: lightblue;

`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;


`
const Left = styled.div`
    flex: 1; // to make all 3 sides the same size
    display: flex;
    align-items: center;
`


const Center = styled.div`
    flex: 1 ;   
    text-align: center;
    
`
const Logo = styled.h1`
    font-weight: bold;

`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;


`

const NavBar = () => {
  const cart = useSelector(state => state.cart)
  const quantity = useSelector(state => state.cart.quantity)
  const userExist = useSelector(state => state.user.currentUser)
  const dispatch = useDispatch()
  const handleClick = () => {
     console.log( userExist);
     dispatch(logOut())
     console.log( userExist);
     dispatch(resetcart())

  }
    return (    
        <Container>
            <Wrapper>
            <Left>
            <MenuItem onClick={() => {handleClick()}}>{userExist ? " LOGOUT": ""}</MenuItem>
           </Left>
            <Center><Link to={`/`} style={{textDecoration: "none" , color: "black"}} ><Logo>QUICK STORE</Logo></Link></Center>
            <Right>
            <Link to={`/register`} style={{textDecoration: "none" , color: "black"}}>
                <MenuItem >{userExist ? `${userExist.username.toUpperCase()}` : "REGISTER"}</MenuItem>
                </Link>
                <Link to={`/login`} style={{textDecoration: "none" , color: "black"}}>
                <MenuItem >{userExist ? "": "LOG IN"}</MenuItem>
                </Link>
                <Link to="/cart">
                <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlined color="action" />
                    </Badge>
                </MenuItem>
                </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default NavBar
