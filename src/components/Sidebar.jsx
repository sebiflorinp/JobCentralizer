import CategoryList from "./CategoryList.jsx";
import {
  addCity,
  addExperience,
  addJobType,
  addSource,
  removeCity,
  removeExperience,
  removeJobType,
  removeSource,
} from "../state/slices/filterSlice.js";

function Sidebar() {
  return (
    <div className="col-span-3 col-start-2 row-span-2 row-start-1 flex flex-col gap-7 p-4 pb-7 pt-7 no-scrollbar">
      <CategoryList
        categoryName={"cities"}
        categoryLabel={"Cities:"}
        categoryField={"city"}
        dispatchAddFunction={addCity}
        dispatchRemoveFunction={removeCity}
      />
      <CategoryList
        categoryName={"experience"}
        categoryLabel={"Experience:"}
        categoryField={"experience"}
        dispatchAddFunction={addExperience}
        dispatchRemoveFunction={removeExperience}
      />
      <CategoryList
        categoryName={"source"}
        categoryField={"source"}
        categoryLabel={"Sources"}
        dispatchAddFunction={addSource}
        dispatchRemoveFunction={removeSource}
      />
      <CategoryList
        categoryName={"type"}
        categoryField={"job_type"}
        categoryLabel={"Type"}
        dispatchAddFunction={addJobType}
        dispatchRemoveFunction={removeJobType}
      />
    </div>
  );
}

export default Sidebar;
