import useFetchCategories from "../hooks/useFetchCategories.jsx";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useDispatch } from "react-redux";
import { addCity, removeCity } from "../state/slices/filterSlice.js";
import CategoryItem from "./CategoryItem.jsx";

function CategoryList({
  categoryName,
  categoryLabel,
  categoryField,
  dispatchAddFunction,
  dispatchRemoveFunction,
}) {
  const { data, error, isLoading } = useFetchCategories(categoryName);
  const [isToggledOn, setIsToggleOn] = useState(false);

  const dispatch = useDispatch();

  const dispatchAddCategoryItem = (cityName) => {
    dispatch(dispatchAddFunction(cityName));
  };

  const dispatchRemoveCategoryItem = (cityName) => {
    dispatch(dispatchRemoveFunction(cityName));
  };

  return (
    <div>
      <p onClick={() => setIsToggleOn((prevState) => !prevState)}>
        {categoryLabel}
      </p>
      <AnimatePresence>
        {isLoading && <p>Loading</p>}
        {!isLoading && isToggledOn && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {data.map((categoryData, index) => (
              <CategoryItem
                categoryItemName={categoryData[categoryField]}
                numberOfJobs={categoryData.job_count}
                index={index}
                isToggled={isToggledOn}
                addCategoryItem={dispatchAddCategoryItem}
                removeCategoryItem={dispatchRemoveCategoryItem}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CategoryList;
