import React from "react";

const DashboardUser = () => {
  return (
    <div>
      <div className="max-w-xl rounded lg p-5 bg-gray-50 shadow-lg space-y-2">
        <h2 className="text-xl">Hello User</h2>
        <p>
          You have <strong>5</strong> task due today
        </p>
        <p>
          <a href="#">Click here</a> to view your tasks
        </p>
      </div>
    </div>
  );
};

export default DashboardUser;
