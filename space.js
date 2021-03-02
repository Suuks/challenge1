// Load Charts and the corechart package.
google.charts.load('current', { packages: ['corechart'] })
google.charts.load('current', { packages: ['corechart'] })
google.charts.load('current', { packages: ['corechart'] })
google.charts.load('current', { packages: ['bar'] })

google.charts.setOnLoadCallback(drawChart)


// Draw the pie chart
google.charts.setOnLoadCallback(drawRationsChart)



google.charts.setOnLoadCallback(drawBarsChart)
google.charts.setOnLoadCallback(drawAreaChart)
google.charts.setOnLoadCallback(drawDonutChart)



// Callback that draws the pie chart
function drawRationsChart() {
  // Create the data table for rations
  var data = new google.visualization.DataTable()
  data.addColumn('string', 'Rations')
  data.addColumn('number', 'Amount')
  data.addRows([
    ['Water', 2],
    ['Food', 2],
    ['Medicine', 2],
    ['Fuel', 2],
    ['Other', 1],
  ])

  // Set options for the rations
  var options = {
    title: 'Rations on board',
  }

  // Instantiate and draw the chart for rations
  var chart = new google.visualization.PieChart(
    document.getElementById('Rations_chart_div')
  )
  chart.draw(data, options)
}



function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Distance traveled (in km x1000)'],
    ['1 month', 300],
    ['2 months', 750],
    ['3 months', 950],
    ['4 months', 1020],
  ])

  var options = {
    title: 'Distance from earth',
    curveType: 'function',
    legend: {
      position: 'top',
    },
  }

  var chart = new google.visualization.LineChart(
    document.getElementById('curve_chart')
  )

  chart.draw(data, options)
}

function drawBarsChart() {
  var data = google.visualization.arrayToDataTable([
    ['Distance in km (x1000)', 'Calculated', 'Traveled'],
    ['Jan', 1000, 800],
    ['Feb', 1170, 999],
    ['Mar', 900, 950],
    ['Apr', 1030, 1020],
  ])

  var options = {
    chart: {
      title: 'Calcuted distance traveled',
      subtitle: 'Calculated distance traveled vs. actual distance traveled',
    },
    bars: 'horizontal', // Required for Material Bar Charts.
  }

  var chart = new google.charts.Bar(document.getElementById('bar_chart'))

  chart.draw(data, google.charts.Bar.convertOptions(options))
}

function drawAreaChart() {
  var data = google.visualization.arrayToDataTable([
    ['Distance in km x1000', 'Distance traveled'],
    ['Now', 9000],
    [' ', 7000],
    [' ', 5000],
    [' ', 4300],
  ])

  var options = {
    title: 'Remaining distance to destination',
    hAxis: { title: 'Distance in km x1000', titleTextStyle: { color: '#333' } },
    vAxis: { minValue: 0 },
  }

  var chart = new google.visualization.AreaChart(
    document.getElementById('chart_area')
  )
  chart.draw(data, options)
}

function drawDonutChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Surveillance', 8],
    ['Fly craft', 3],
    ['Maintanance', 2],
    ['Recreation', 3],
    ['Sleep', 7],
	['Eat', 2],
  ])

  var options = {
    title: 'My Daily Activities on board',
    pieHole: 0.4,
  }

  var chart = new google.visualization.PieChart(
    document.getElementById('donut_chart')
  )
  chart.draw(data, options)
}
