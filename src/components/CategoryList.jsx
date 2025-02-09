import useFetchCategories from "../hooks/useFetchCategories.jsx";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useDispatch } from "react-redux";
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
  const [isChecked, setIsChecked] = useState({});
  const handleChecking = (checkedItemValue, checkedValue) => {
    setIsChecked((prevState) => ({
      ...prevState,
      [checkedItemValue]: checkedValue,
    }));
  };

  const dispatchAddCategoryItem = (cityName) => {
    dispatch(dispatchAddFunction(cityName));
  };

  const dispatchRemoveCategoryItem = (cityName) => {
    dispatch(dispatchRemoveFunction(cityName));
  };

  return (
    <div className="mr-3 rounded-xl bg-white p-4 drop-shadow-lg">
      <p
        className="text-xl"
        onClick={() => setIsToggleOn((prevState) => !prevState)}
      >
        {categoryLabel}
      </p>
      <AnimatePresence>
        <div className={!isToggledOn ? "h-0" : " "}>
          {!isLoading && isToggledOn && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={"max-h-80 overflow-y-auto no-scrollbar"}
            >
              {data.map((categoryData, index) => (
                <CategoryItem
                  categoryItemName={categoryData[categoryField]}
                  numberOfJobs={categoryData.job_count}
                  index={index}
                  isToggled={isToggledOn}
                  addCategoryItem={dispatchAddCategoryItem}
                  removeCategoryItem={dispatchRemoveCategoryItem}
                  isChecked={
                    isChecked[categoryData[categoryField]] === undefined
                      ? false
                      : isChecked[categoryData[categoryField]]
                  }
                  handleChecking={handleChecking}
                />
              ))}
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
}

export default CategoryList;
