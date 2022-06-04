import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const Chart = ({ xAxisCategories, seriesData, className }) => {
  const options = {
    title: {
      text: null,
    },
    xAxis: {
      categories: xAxisCategories,
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
        data: seriesData,
        zones: [
          {
            value: seriesData[6],
            color: "rgba(0,219,144,0.6)",
          },
          {
            value: seriesData[seriesData.length],
            color: "rgba(46,108,198,0.6)",
          },
        ],
        marker: {
          states: {
            hover: {
              fillColor: "rgba(4, 212, 148, 1)",
            },
          },
          fillColor: "#FFFFFF",
          lineWidth: 2,
          lineColor: null,
        },
        shadow: {
          color: "rgba(0, 219, 144, 1)",
          width: 2,
          offsetX: 0,
          offsetY: 0,
        },
      },
      {},
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
export default Chart;
