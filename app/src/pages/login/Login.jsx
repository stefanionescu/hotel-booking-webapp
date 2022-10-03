import "./login.css";

import { axios } from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
    const [ credentials, setCredentials ] = useState({
        username: undefined,
        password: undefined
    });

    const { loading, error, dispatch } = useContext(AuthContext);
    const navigate                     = useNavigate();
    const handleChange                 = (e) => {
        setCredentials(prev => {
            ...prev, [e.target.id: e.target.value]
        })
    };
    const handleLogin                  = async (e) => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"});

        try {
            const res = await axios.post("/auth/login", credentials);
            dispatch({type: "LOGIN_SUCCESS", payload: res.data});
            navigate("/");
        } catch(err) {
            dispatch({type: "LOGIN_FAILURE", payload: err.response.data})
        }
    };

    return (
        <div className="login">
          <div className="loginContainer">
            <input
              type="text"
              placeholder="Username"
              id="username"
              onChange={handleChange}
              className="loginInput"
            />
            <input
              type="text"
              placeholder="Password"
              id="password"
              onChange={handleChange}
              className="loginInput"
            />
            <button disabled={loading} onClick={handleLogin} className="loginButton">Login</button>
            { error && <span>{error.message}</span> }
          </div>
        </div>
    )
};

export default Login;
