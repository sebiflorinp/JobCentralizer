import Sidebar from "../components/Sidebar.jsx";

function Jobs() {
  return (
    <div className="col-span-full row-span-full row-start-2 grid grid-cols-12 grid-rows-12">
      <Sidebar />
      <div className="col-span-full col-start-3 row-span-full row-start-1">
        <p>Area</p>
      </div>
    </div>
  );
}

export default Jobs;
