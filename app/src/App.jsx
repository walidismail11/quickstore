import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Success from "./pages/Success";
import
{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector } from "react-redux";
import {persistor} from "./redux/store"

const App = () => {
  const user = useSelector(state => state.user.currentUser)


  persistor.purge()

  return(
      <Router>
        <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/products/:category" element= {<ProductList/>} />
          <Route path="/product/:id" element= {<Product/>} />
          <Route path="/cart" element= {<Cart/>} />
          <Route path="/success" element= {<Success/>} />
          <Route path="/register" element={ user ? <Navigate to="/" /> : <Register/>}/> 
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login/> }/> 
        </Routes>
      </Router>
  )
};

export default App;