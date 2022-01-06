import { loginFailure, loginStart, loginSuccess } from "./reduxUser";
import { publicRequest } from "../requestMethod";



export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async(user) => {
  try {
    const res = await publicRequest.post("/auth/register", user);
  }catch(err){

  }

}
