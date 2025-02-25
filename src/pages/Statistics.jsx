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
    <div className="mx-20 mt-7 flex flex-col gap-4">
      <div className="flex justify-center gap-4 p-4">
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
      <div className="flex flex-col justify-center rounded-xl bg-white shadow-md">
        <p className="self-center py-8 text-2xl font-semibold text-blue-700">
          {title}
        </p>
        <Chart data={dataToDisplay} />
      </div>
    </div>
  );
}

export default Statistics;
