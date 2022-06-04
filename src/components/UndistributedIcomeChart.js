import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
const UndistributedIcomeChart = ({ className, xAxisCategories }) => {
  const options = {
    title: {
      text: null,
    },
    xAxis: {
      categories: [
        "Apr 2021",
        "May 2021",
        "Jun 2021",
        "Jul 2021",
        "Aug 2021",
        "Sept 2021",
        "Oct 2021",
        "Nov 2021",
        "Dec 2021",
        "Jan 2022",
        "Feb 2022",
        "Mar 2022",
      ],
    },
    yAxis: {
      title: null,
      labels: {
        formatter: function () {
          return this.value + " Kr";
        },
      },
    },
    plotOptions: {
      series: {
        allowPointSelect: false,
      },
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: null,
        lineWidth: 2,
        color: "#00DB90",
        negativeColor: {
          linearGradient: { x1: 0, x2: 0, y: 1, y2: 1 },
          stops: [
            [0, "#F2AF4E"],
            [1, "#E05546"],
          ],
        },
        marker: {
          radius: 4,
          fillColor: "#FFFFFF",
          lineWidth: 2,
          symbol: "circle",
          lineColor: null,
        },
        type: "area",
        data: [
          -7000, 11700, 4500, -10700, -7000, -10000, 1000, -2000, 7000, 4000,
          3700, -11700,
        ],
        zIndex: 1,
        negativeFillColor: "rgba(226,94,71,0.1)",
        fillColor: "rgba(0,219,144,0.1)",
      },
    ],
  };
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        containerProps={{ className }}
      />
    </div>
  );
};
export default UndistributedIcomeChart;
