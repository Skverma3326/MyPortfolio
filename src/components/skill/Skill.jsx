import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Skill = () => {
  const SKILL_LIST = [
    { name: "HTML", value: 90 },
    { name: "CSS", value: 90 },
    { name: "JavaScript", value: 90 },
    { name: "C", value: 90 },
    { name: "Python Core", value: 90 },
    { name: "WordPress", value: 90 },
  ];

  return (
    <div className='max-w-[1410px] m-auto bg-black'>
    <div className="max-w-[1140px] m-auto  bg-black"> 
    <h1 className='bg-gradient-to-r from-purple-500 to-red-300 text-transparent bg-clip-text text-start py-10 text-3xl sm:text-5xl lg:text-6xl font-semibold '>Skill</h1> 
    <div className="w-full m-auto  bg-black grid grid-cols-3" >
      {SKILL_LIST.map((skill, index) => (
        <div key={index} id="card">
          <div id="chart">
            <ReactApexChart
              options={{
                chart: {
                  height: 300,
                  type: "radialBar",
                  toolbar: { show: false },
                },
                plotOptions: {
                  radialBar: {
                    startAngle: -135,
                    endAngle: 225,
                    hollow: {
                      margin: 0,
                      size: "70%",
                      background: "#000000",
                      dropShadow: {
                        enabled: true,
                        top: 3,
                        blur: 4,
                        opacity: 0.5,
                      },
                    },
                    track: {
                      background: "#fff",
                      strokeWidth: "20%",
                      dropShadow: {
                        enabled: true,
                        top: -3,
                        blur: 4,
                        opacity: 0.7,
                      },
                    },
                    dataLabels: {
                      show: true,
                      name: { offsetY: -10, color: "#888", fontSize: "17px" },
                      value: {
                        formatter: (val) => parseInt(val),
                        color: "#111",
                        fontSize: "36px",
                        show: true,
                      },
                    },
                    strokeWidth: "10%" // Adjusts the width of the filled skill bar
                  },
                },
                fill: {
                  type: "gradient",
                  gradient: {
                    shade: "dark",
                    type: "horizontal",
                    shadeIntensity: 0.5,
                    gradientToColors: ["#ABE5A1"],
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100],
                  },
                },
                stroke: { lineCap: "round" },
                labels: [skill.name],
              }}
              series={[skill.value]}
              type="radialBar"
              height={300}
            />
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default Skill;
