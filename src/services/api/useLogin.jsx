import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
    const navigate = useNavigate();
    const [msgError, setMsgError] = useState(null);
    const [users, setUsers] = useState([]);

    const postLogin = useCallback(async (value) => {
        try {
          await axios
            .post(`http://localhost:8800/api/auth/login`, {
              username: value.username,
              password: value.password,
            })
            .then((response) => {
              console.log(response.data)
               // Extract the token from the response data
              const { token, details, isAdmin, isMitra } = response.data;
              // Save the token in localStorage or sessionStorage
              localStorage.setItem('token', JSON.stringify(token));
              localStorage.setItem('mitra', isMitra);
              localStorage.setItem('admin', isAdmin);
              localStorage.setItem('user', JSON.stringify(details));
              
              if(isAdmin === true) {
                navigate('/admin')
              } else if (isMitra === true) {
                navigate('/mitra')
              } else {
                navigate('/')
              }
              // localStorage.setItem("user", JSON.stringify(response.data));
              // if( response.data.redirect === "user") {
              //   navigate("/")
              // } else if (response.data.redirect === "mitra") {
              //   navigate("/mitra")
              // } else {
              //   navigate("/admin")
              // }
            });
        } catch (error) {
          console.log(error)
          // console.log(error.response.status);
          setMsgError(error);
        }
      });

    return { postLogin, msgError, users }
}

export default useLogin