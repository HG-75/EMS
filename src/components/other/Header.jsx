import PropTypes from "prop-types";

//import { setLocalStorage } from "../../utils/localStorage";

//import { useState } from "react";
const Header = (props) => {
  // const [username, setUsername] = useState("");

  // if (!data) {
  //   setUsername("Admin");
  // } else {
  //   setUsername(data.firstName);
  // }

  /*************  ✨ Codeium Command ⭐  *************/
  /**
   * Logs out the user by removing the `loggedInUser` item from local storage
   */
  /******  6f207a85-685c-4798-ad02-b01fdc9d019b  *******/ const logOutUser =
    () => {
      localStorage.setItem("loggedInUser", "");
      props.changeUser("");
    };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">username 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-sm"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;

Header.propTypes = {
  changeUser: PropTypes.func,
};
