import React from 'react'
import Annoucement from '../components/Annoucements'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import Newsletter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
    return (
        <div>
            <Annoucement></Annoucement>
            <NavBar/>
            <Slider></Slider>
            <Categories></Categories>
            <Products></Products>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    )
}

export default Home
