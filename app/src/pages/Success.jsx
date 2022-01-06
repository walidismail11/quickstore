import { useNavigate } from "react-router";

const Success = () => {
  const history = useNavigate() 
  const handleClick = () =>{
        history("/")
 }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
       Successfull. Your order is being prepared...
      <button style={{ padding: 10, marginTop: 20 }} onClick={() => handleClick()} cursor ="pointer">Go to Homepage</button>
    </div>
  );
};

export default Success;