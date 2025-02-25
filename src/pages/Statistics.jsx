import useStatisticsData from "../hooks/useStatisticsData.jsx";
import { useEffect, useState } from "react";
import ChartButton from "../components/ChartButton.jsx";
import Chart from "../components/Chart.jsx";

function Statistics() {
  const {
    jobsPerCityData,
    jobsPerExperienceData,
    jobsPerTypeData,
    jobsPerSourceData,
  } = useStatisticsData();

  const [dataToDisplay, setDataToDisplay] = useState(jobsPerCityData);
  const [title, setTitle] = useState("Anunțuri per Oras");

  useEffect(() => {
    setDataToDisplay(jobsPerCityData);
  }, [jobsPerCityData]);

  return (
    <div className="grid grid-cols-10">
      <div className="col-span-full mt-14 flex max-w-full justify-center gap-3 pb-14">
        <ChartButton
          title="Anunțuri per Oraș"
          data={jobsPerCityData}
          setDataFunction={setDataToDisplay}
          setTitleFunction={setTitle}
        />

        <ChartButton
          title="Anunțuri per Sursă"
          data={jobsPerSourceData}
          setDataFunction={setDataToDisplay}
          setTitleFunction={setTitle}
        />
        <ChartButton
          title="Anunțuri per Tip"
          data={jobsPerTypeData}
          setDataFunction={setDataToDisplay}
          setTitleFunction={setTitle}
        />
        <ChartButton
          title="Anunțuri per Experiență"
          data={jobsPerExperienceData}
          setDataFunction={setDataToDisplay}
          setTitleFunction={setTitle}
        />
      </div>
      <div className="col-span-6 col-start-3 grid grid-cols-12 rounded-xl bg-white shadow-md">
        <div className="col-span-full flex justify-center py-8 text-2xl font-semibold text-blue-700">
          <p>{title}</p>
        </div>
        <div className="col-span-10 col-start-2 pb-16">
          <Chart data={dataToDisplay} />
        </div>
      </div>
    </div>
  );
}

export default Statistics;
