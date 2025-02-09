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
    <div className="col-span-2 col-start-2 flex flex-col gap-7 p-4 pb-7 pt-7 no-scrollbar">
      <CategoryList
        categoryName={"cities"}
        categoryLabel={"Orașe:"}
        categoryField={"city"}
        dispatchAddFunction={addCity}
        dispatchRemoveFunction={removeCity}
      />
      <CategoryList
        categoryName={"experience"}
        categoryLabel={"Experiență:"}
        categoryField={"experience"}
        dispatchAddFunction={addExperience}
        dispatchRemoveFunction={removeExperience}
      />
      <CategoryList
        categoryName={"source"}
        categoryField={"source"}
        categoryLabel={"Surse:"}
        dispatchAddFunction={addSource}
        dispatchRemoveFunction={removeSource}
      />
      <CategoryList
        categoryName={"type"}
        categoryField={"job_type"}
        categoryLabel={"Tipuri:"}
        dispatchAddFunction={addJobType}
        dispatchRemoveFunction={removeJobType}
      />
    </div>
  );
}

export default Sidebar;
