import { useState } from "react";
import PropTypes from "prop-types";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border 2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className=" outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className=" outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400 mt-3 "
            type="password"
            placeholder="Enter your Password"
          />
          <button className=" mt-5 text-white outline-none border-none bg-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};
