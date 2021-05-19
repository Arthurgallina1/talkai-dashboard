// Step 1 - Include react
import React from 'react'

// Step 2 - Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts'

// Step 3 - Include the fusioncharts library
import FusionCharts from 'fusioncharts'

// Step 4 - Include the chart type
import Column2D from 'fusioncharts/fusioncharts.charts'

// Step 5 - Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme)

const chartData = [
  {
    label: 'A',
    value: '290'
  },
  {
    label: 'B',
    value: '260'
  },
  {
    label: 'C',
    value: '180'
  },
  {
    label: 'D',
    value: '140'
  },
  {
    label: 'E',
    value: '255'
  }
]

// Create a JSON object to store the chart configurations
const chartConfigs = {
  type: 'column2d', // The chart type
  width: '700', // Width of the chart
  height: '400', // Height of the chart
  dataFormat: 'json', // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: 'Comparação entre equipes', //Set the chart caption
      subCaption: 'Mensagens enviadas por dia',
      xAxisName: 'Equipe', //Set the x-axis name
      yAxisName: 'Quantidade de mensagens', //Set the y-axis name
      numberSuffix: '',
      theme: 'fusion' //Set the theme for your chart
    },
    // Chart Data - from step 2
    data: chartData
  }
}

export default function Chart2D() {
  return <ReactFC {...chartConfigs} />
}
