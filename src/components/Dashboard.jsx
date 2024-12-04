import React from "react";
import FilterSection from "./FilterSection";
import UsersDisplay from "./UsersDisplay";

function Dashboard() {
  return (
    <div className="px-1 md:px-3 lg:w-4/5 flex flex-col gap-3 ">
      <FilterSection />
      <UsersDisplay />
    </div>
  );
}

export default Dashboard;
