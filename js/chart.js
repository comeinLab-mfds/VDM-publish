google.charts.load('current', {packages: ['corechart', 'line']});

google.charts.setOnLoadCallback(drawBasic);
google.charts.setOnLoadCallback(drawBasicHr);
google.charts.setOnLoadCallback(drawBasicSp);
google.charts.setOnLoadCallback(drawBasicRR);
google.charts.setOnLoadCallback(drawBasicBP);
google.charts.setOnLoadCallback(drawBasicPP);


function drawBasicPP() {

  var data = new google.visualization.DataTable();
  data.addColumn('number', 'min');
  data.addColumn('number', 'PP');

  data.addRows([
    [0, 60],   [30, 55],  [60, 53 ],  [90, 66],  [120, 55],  [150, 58],
    [180, 45 ],  [210, 57],  [240, 62],  [270, 59],  [300, 51], [330, 62],
    [360, 62], [ 390, 60], [420, 59], [450, 59], [480, 62]

  ]);

  var options = {
    colors:['darkseagreen'],
    /*explorer: {
        axis: 'horizontal',
    },*/
    backgroundColor: 'transparent',
    width: "100%",
    height: "100%",
    legend: 'none',
    colors:['#F8DE7E'],
    fontSize: 15,
    pointSize: 0,
    lineWidth: 2,
    intervals: {
        color: "#a29380"
    },
    chartArea: {
        width: '95%',
        height: '73%'
    },
    hAxis: {
      baseline: {
        color:'#ccc'
      },
      ticks: [30,60,90,120,150,180,210,240,270,300,330,360,390,420,450,480],
      gridlines: {color: '#777'},
      minorGridlines: {
        color: '#333',
        units: {
                hours: {format: ['ha']},
        },
      },
      textStyle: {
        color:'white'
      },
      titleTextStyle:{
        color:'white'
      },
    },
    vAxis: {
      title: 'PP',
      ticks: [20,40,60,80],
      baseline: 20,
      baselineColor: '#777',
      gridlines:{
        color: '#777',
        count:1,
      },
      textStyle: {
        color:'white'
      },
      titleTextStyle:{
        color:'white'
      }
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_PP'));

  chart.draw(data, options);
}

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'min');
      data.addColumn('number', 'BT');

      data.addRows([
        [0, 36.5],   [30, 36.6],  [60, 36.8 ],  [90, 37.1],  [120, 37.0],  [150, 36.5],
        [180, 36.8 ],  [210, 37.0],  [240, 37.8],  [270, 38.1],  [300, 38.3], [330, 38.0],
        [360, 37.5], [ 390, 37.2], [420, 37.0], [450, 37.4], [480, 37.6]

      ]);

      var options = {
        colors:['darkseagreen'],
        /*explorer: {
            axis: 'horizontal',
        },*/
        backgroundColor: 'transparent',
        width: "100%",
        height: "100%",
        legend: 'none',
        fontSize: 15,
        pointSize: 0,
        lineWidth: 2,
        intervals: {
            color: "#a29380"
        },
        chartArea: {
            width: '95%',
            height: '73%'
        },
        hAxis: {
          baseline: {
            color:'#ccc'
          },
          ticks: [30,60,90,120,150,180,210,240,270,300,330,360,390,420,450,480],
          gridlines: {color: '#777'},
          minorGridlines: {
            color: '#333',
            units: {
                    hours: {format: ['ha']},
            },
          },
          textStyle: {
            color:'white'
          },
          titleTextStyle:{
            color:'white'
          },
        },
        vAxis: {
          title: 'Body Temperature',
          ticks: [36, 37, 38, 39, 40],
          baseline: 40,
          baselineColor: '#777',
          gridlines:{
            color: '#777',
            count:1,
          },
          textStyle: {
            color:'white'
          },
          titleTextStyle:{
            color:'white'
          }
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_bodyTemp'));

      chart.draw(data, options);
    }

function drawBasicHr() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'min');
      data.addColumn('number', 'heartRate');

      data.addRows([
        [0, 100],   [30, 105],  [60, 112 ],  [90, 104],  [120, 106],  [150, 109],
        [180, 112 ],  [210, 110],  [240, 116],  [270, 109],  [300, 100], [330,120],
        [360, 110], [ 390, 90], [420, 105], [450, 102], [480,105]

      ]);

      var options = {
        colors:['darkseagreen'],
        /*explorer: {
            axis: 'horizontal',
        },*/
        backgroundColor: 'transparent',
        width: "100%",
        height: "100%",
        legend: 'none',
        fontSize: 15,
        pointSize: 0,
        lineWidth: 2,
        intervals: {
            color: "#a29380"
        },
        chartArea: {
            width: '95%',
            height: '73%'
        },
        hAxis: {
          baseline: {
            color:'#ccc'
          },
          ticks: [30,60,90,120,150,180,210,240,270,300,330,360,390,420,450,480],
          gridlines: {color: '#777'},
          minorGridlines: {
            color: '#333',
            units: {
                    hours: {format: ['ha']},
            },
          },
          textStyle: {
            color:'white'
          },
          titleTextStyle:{
            color:'white'
          },
        },
        vAxis: {
          title: 'Heart Rate',
          ticks: [50,100,150,200],
          baseline: 50,
          baselineColor: '#777',
          gridlines:{
            color: '#777',
            count:1,
          },
          textStyle: {
            color:'white'
          },
          titleTextStyle:{
            color:'white'
          }
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_heartRate'));

      chart.draw(data, options);
    }

function drawBasicSp() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'min');
      data.addColumn('number', 'SpO2');

      data.addRows([
        [0, 95],   [30, 96],  [60, 94 ],  [90, 92],  [120, 95],  [150, 96],
        [180, 94 ],  [210, 96],  [240, 98],  [270, 95],  [300, 94], [330, 96],
        [360, 98], [ 390, 95], [420, 96], [450, 98], [480, 94]

      ]);

      var options = {
        colors:['darkseagreen'],
        /*explorer: {
            axis: 'horizontal',
        },*/
        backgroundColor: 'transparent',
        width: "100%",
        height: "100%",
        legend: 'none',
        fontSize: 15,
        pointSize: 0,
        lineWidth: 2,
        intervals: {
            color: "#a29380"
        },
        chartArea: {
            width: '95%',
            height: '73%'
        },
        hAxis: {
          baseline: {
            color:'#ccc'
          },
          ticks: [30,60,90,120,150,180,210,240,270,300,330,360,390,420,450,480],
          gridlines: {color: '#777'},
          minorGridlines: {
            color: '#333',
            units: {
                    hours: {format: ['ha']},
            },
          },
          textStyle: {
            color:'white'
          },
          titleTextStyle:{
            color:'white'
          },
        },
        vAxis: {
          title: 'SpO2',
          ticks: [80,85,90,95,100],
          baseline: 80,
          baselineColor: '#777',
          gridlines:{
            color: '#777',
            count:1,
          },
          textStyle: {
            color:'white'
          },
          titleTextStyle:{
            color:'white'
          }
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_SpO2'));

      chart.draw(data, options);
    }

function drawBasicRR() {

  var data = new google.visualization.DataTable();
  data.addColumn('number', 'min');
  data.addColumn('number', 'RR');

  data.addRows([
    [0, 12],   [30, 14],  [60, 13 ],  [90, 15],  [120, 18],  [150, 14],
    [180, 16 ],  [210, 13],  [240, 12],  [270, 15],  [300, 14], [330, 18],
    [360, 16], [ 390, 14], [420, 17], [450, 15], [480, 16]

  ]);

  var options = {
    colors:['darkseagreen'],
    /*explorer: {
        axis: 'horizontal',
    },*/
    backgroundColor: 'transparent',
        width: "100%",
        height: "100%",
        legend: 'none',
        fontSize: 15,
        pointSize: 0,
        lineWidth: 2,
        intervals: {
            color: "#a29380"
        },
        chartArea: {
            width: '95%',
            height: '73%'
        },
        hAxis: {
          baseline: {
            color:'#ccc'
          },
          ticks: [30,60,90,120,150,180,210,240,270,300,330,360,390,420,450,480],
          gridlines: {color: '#777'},
          minorGridlines: {
            color: '#333',
            units: {
                    hours: {format: ['ha']},
            },
          },
          textStyle: {
            color:'white'
          },
          titleTextStyle:{
            color:'white'
          },
        },
        vAxis: {
          title: 'RR',
          ticks: [10,20,30,40],
          baseline: 10,
          baselineColor: '#777',
          gridlines:{
            color: '#777',
            count:1,
          },
          textStyle: {
            color:'white'
          },
          titleTextStyle:{
            color:'white'
          }
        }
      };

  var chart = new google.visualization.LineChart(document.getElementById('chart_RR'));

  chart.draw(data, options);
}

function drawBasicBP() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'SBP');
      data.addColumn('number', 'DBP');

      data.addRows([
        [0, 72, 112],    [30, 76, 111],   [60, 70, 113],  [90, 79 ,115],   [120, 75, 110],  [150, 70, 108],
        [180, 80, 105],   [210, 75, 112],  [240, 75, 120],  [270, 75, 114],  [300, 72, 110], [330, 70, 111],
        [360, 74, 116], [390, 72, 114], [420, 70, 110], [450, 75, 114], [480, 76, 112]
      ]);

    var options = {
        backgroundColor: 'transparent',
        width: "100%",
        height: "100%",
        legend: 'none',
        fontSize: 15,
        pointSize: 0,
        lineWidth: 2,
        intervals: {
            color: "#a29380"
        },
        chartArea: {
            width: '95%',
            height: '73%'
        },
        series: {
              0:{color:'#ff6666'},
              1: {color:'#A7C7E7' }
            },
        hAxis: {
          baseline: {
            color:'#ccc'
          },
          ticks: [30,60,90,120,150,180,210,240,270,300,330,360,390,420,450,480],
          gridlines: {color: '#777'},
          minorGridlines: {
            color: '#333',
            units: {
                    hours: {format: ['ha']},
            },
          },
          textStyle: {
            color:'white'
          },
          titleTextStyle:{
            color:'white'
          },
        },
        vAxis: {
          title: 'BP',
          ticks: [60,80,100,120,140],
          baseline: 60,
          baselineColor: '#777',
          gridlines:{
            color: '#777',
            count:1,
          },
          textStyle: {
            color:'white'
          },
          titleTextStyle:{
            color:'white'
          }
        }
      };


      var chart = new google.visualization.LineChart(document.getElementById('chart_BP'));
      chart.draw(data, options);
    };


