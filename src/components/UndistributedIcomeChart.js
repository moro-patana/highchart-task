import React from "react";
// Import Highcharts
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
const UndistributedIcomeChart = ({className, xAxisCategories}) => {
    console.log(' xAxisCategories::::::', xAxisCategories);
    const options = {
        title: {
          text: null
        },
        xAxis: {
          categories: ['Apr 2021', 'May 2021', 'Jun 2021', 'Jul 2021', 'Aug 2021', 'Sept 2021', 'Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2022', 'Feb 2022', 'Mar 2022'],
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
          data: [-7000, 11700, 4500, -10700, -7000, -10000, 1000, -2000, 7000, 4000, 3700, -11700],
          color: 'rgba(4, 212, 148, 1)',
          marker: {
            fillColor: '#FFFFFF',
            lineWidth: 2,
            lineColor: null // inherit from series
        },
          shadow: {
            color: 'rgba(0, 219, 144, 1)',
            width: 2,
            offsetX: 0,
            offsetY: 0
          }
        }, {
        }]
      }
      return (
        <div>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
            containerProps={{ className }}
          />
        </div>
      );
}
export default UndistributedIcomeChart;
