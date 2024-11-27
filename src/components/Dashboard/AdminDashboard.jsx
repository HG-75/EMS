import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";
import PropTypes from "prop-types";
const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-7">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;

AdminDashboard.propTypes = {
  changeUser: PropTypes.func.isRequired,
};
