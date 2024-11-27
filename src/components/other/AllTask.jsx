import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="bg-[#1C1C1C] p-5 mt-5 rounded">
      <div className="bg-red-400 py-2 px-4 flex justify-between rounded mb-2">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>
      <div className="">
        {userData.map((elem) => {
          return (
            <div
              key={elem.id}
              className=" border-2 border-emerald-500 py-2 px-4 flex justify-between rounded mb-2"
            >
              <h2 className="text-lg font-medium w-1/5 ">{elem.firstName}</h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-600">
                {elem.taskCounts.new_task}
              </h3>
              <h5 className="text-lg font-medium w-1/5 text-yellow-400">
                {elem.taskCounts.active}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-gray-300">
                {elem.taskCounts.completed}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-red-700">
                {elem.taskCounts.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
