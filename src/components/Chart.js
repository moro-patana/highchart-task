import React from "react";
// Import Highcharts
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const Chart = ({xAxisCategories, seriesData, className}) => {
    console.log('seriesData::::::',seriesData);

  const options = {
    title: {
      text: null
    },
    xAxis: {
      categories: xAxisCategories,
    },
    yAxis: {
        title: null,
        labels: {
            formatter: function() {
                return this.value + ' Kr';
            }
        },
    },
    plotOptions: {
      series: {
        allowPointSelect: false
      },
    },
    legend: {
      enabled: false,
    },
    series: [{
      data: seriesData,
      color: 'rgba(4, 212, 148, 1)',
      marker: {
        fillColor: '#FFFFFF',
        lineWidth: 2,
        lineColor: null 
    },
      shadow: {
        color: 'rgba(0, 219, 144, 1)',
        width: 2,
        offsetX: 0,
        offsetY: 0
      }
    }, {
    }]
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