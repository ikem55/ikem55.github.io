$(function () {

    var ctype =  $("#contents_type").val();
    switch (ctype){
      case "raceResult":
        console.log("raceResult");
        setRaceResult();
        break;
      case "tokubetuTouroku":
        console.log("tokubetuTouroku");
        setTokubetsuTouroku();
        break;
      case "shussouUma":
        console.log("shussouUma");
        setShussouUma();
        break;
      case "kakoBestRace":
        console.log("kakoBestRace");
        setKakoBestRace();
        break;
      case "resultAggregate":
        console.log("resultAggregate");
        setResultAggregateYear();
        setResultAggregate();
//        setTest();
        break;
      default:
        console.log("other");
        break;
    }

    function setResultAggregateYear(){
      $.getJSON('/js/json/' + getJsonFileName() + '_bymark.json', function(data){
        $('#container_mark').highcharts({
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: '印毎成績'
            },
            xAxis: [{
              categories:data.xData,
                crosshair: true
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value}%',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                title: {
                    text: '的中率',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                opposite: true

            }, { // Secondary yAxis
                gridLineWidth: 0,
                title: {
                    text: '回収率',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: '{value} %',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                max:200,
                plotLines:[{
                  color:"red",
                  width: 2,
                  value:100
                }]
            }, { // Tertiary yAxis
                gridLineWidth: 0,
                labels: {
                    format: '{value} %',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 80,
                verticalAlign: 'top',
                y: 55,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            series: [{
                name: data.datasets[0].name,
                type: "line",  //data.datasets[0].type,
                data: data.datasets[0].data,
                tooltip: {
                  valueSuffix: data.datasets[0].unit
                }
            }, {
              name: data.datasets[1].name,
              type: "column",  //data.datasets[1].type,
              yAxis: 1,// data.datasets[1].yAxis,
              data: data.datasets[1].data,
                tooltip: {
                  valueSuffix: data.datasets[1].unit
                }
            }, {
              name: data.datasets[2].name,
              type: "line", // data.datasets[2].type,
              data: data.datasets[2].data,
                tooltip: {
                  valueSuffix: data.datasets[2].unit
                }
            }, {
              name: data.datasets[3].name,
              type: "column", // data.datasets[3].type,
              yAxis: 1,// data.datasets[3].yAxis,
              data: data.datasets[3].data,
                tooltip: {
                  valueSuffix: data.datasets[3].unit
                }
            }]
        });
      });
      $.getJSON('/js/json/' + getJsonFileName() + '_bykeibajo_shiba.json', function(data){
        $('#container_shiba').highcharts({
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: '芝コース成績'
            },
            xAxis: [{
              categories:data.xData,
                crosshair: true
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value}%',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                title: {
                    text: '的中率',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                opposite: true

            }, { // Secondary yAxis
                gridLineWidth: 0,
                title: {
                    text: '回収率',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: '{value} %',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                max:200,
                plotLines:[{
                  color:"red",
                  width: 2,
                  value:100
                }]
            }, { // Tertiary yAxis
                gridLineWidth: 0,
                labels: {
                    format: '{value} %',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 80,
                verticalAlign: 'top',
                y: 55,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            series: [{
                name: data.datasets[0].name,
                type: "line",  //data.datasets[0].type,
                data: data.datasets[0].data,
                tooltip: {
                  valueSuffix: data.datasets[0].unit
                }
            }, {
              name: data.datasets[1].name,
              type: "column",  //data.datasets[1].type,
              yAxis: 1,// data.datasets[1].yAxis,
              data: data.datasets[1].data,
                tooltip: {
                  valueSuffix: data.datasets[1].unit
                }
            }, {
              name: data.datasets[2].name,
              type: "line", // data.datasets[2].type,
              data: data.datasets[2].data,
                tooltip: {
                  valueSuffix: data.datasets[2].unit
                }
            }, {
              name: data.datasets[3].name,
              type: "column", // data.datasets[3].type,
              yAxis: 1,// data.datasets[3].yAxis,
              data: data.datasets[3].data,
                tooltip: {
                  valueSuffix: data.datasets[3].unit
                }
            }]
        });
      });

      $.getJSON('/js/json/' + getJsonFileName() + '_bykeibajo_dart.json', function(data){
        $('#container_dart').highcharts({
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: 'ダートコース成績'
            },
            xAxis: [{
              categories:data.xData,
                crosshair: true
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value}%',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                title: {
                    text: '的中率',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                opposite: true

            }, { // Secondary yAxis
                gridLineWidth: 0,
                title: {
                    text: '回収率',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: '{value} %',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                max:200,
                plotLines:[{
                  color:"red",
                  width: 2,
                  value:100
                }]
            }, { // Tertiary yAxis
                gridLineWidth: 0,
                labels: {
                    format: '{value} %',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 80,
                verticalAlign: 'top',
                y: 55,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            series: [{
                name: data.datasets[0].name,
                type: "line",  //data.datasets[0].type,
                data: data.datasets[0].data,
                tooltip: {
                  valueSuffix: data.datasets[0].unit
                }
            }, {
              name: data.datasets[1].name,
              type: "column",  //data.datasets[1].type,
              yAxis: 1,// data.datasets[1].yAxis,
              data: data.datasets[1].data,
                tooltip: {
                  valueSuffix: data.datasets[1].unit
                }
            }, {
              name: data.datasets[2].name,
              type: "line", // data.datasets[2].type,
              data: data.datasets[2].data,
                tooltip: {
                  valueSuffix: data.datasets[2].unit
                }
            }, {
              name: data.datasets[3].name,
              type: "column", // data.datasets[3].type,
              yAxis: 1,// data.datasets[3].yAxis,
              data: data.datasets[3].data,
                tooltip: {
                  valueSuffix: data.datasets[3].unit
                }
            }]
        });
      });

      $.getJSON('/js/json/' + getJsonFileName() + '_byjoken.json', function(data){
        $('#container_joken').highcharts({
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: '競走条件ごと成績'
            },
            xAxis: [{
              categories:data.xData,
                crosshair: true
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value}%',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                title: {
                    text: '的中率',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                opposite: true

            }, { // Secondary yAxis
                gridLineWidth: 0,
                title: {
                    text: '回収率',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: '{value} %',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                max:200,
                plotLines:[{
                  color:"red",
                  width: 2,
                  value:100
                }]
            }, { // Tertiary yAxis
                gridLineWidth: 0,
                labels: {
                    format: '{value} %',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 80,
                verticalAlign: 'top',
                y: 55,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            series: [{
                name: data.datasets[0].name,
                type: "line",  //data.datasets[0].type,
                data: data.datasets[0].data,
                tooltip: {
                  valueSuffix: data.datasets[0].unit
                }
            }, {
              name: data.datasets[1].name,
              type: "column",  //data.datasets[1].type,
              yAxis: 1,// data.datasets[1].yAxis,
              data: data.datasets[1].data,
                tooltip: {
                  valueSuffix: data.datasets[1].unit
                }
            }, {
              name: data.datasets[2].name,
              type: "line", // data.datasets[2].type,
              data: data.datasets[2].data,
                tooltip: {
                  valueSuffix: data.datasets[2].unit
                }
            }, {
              name: data.datasets[3].name,
              type: "column", // data.datasets[3].type,
              yAxis: 1,// data.datasets[3].yAxis,
              data: data.datasets[3].data,
                tooltip: {
                  valueSuffix: data.datasets[3].unit
                }
            }]
        });
      });

      $.getJSON('/js/json/' + getJsonFileName() + '_bygrade.json', function(data){
        $('#container_grade').highcharts({
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: 'グレード成績'
            },
            xAxis: [{
              categories:data.xData,
                crosshair: true
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value}%',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                title: {
                    text: '的中率',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                opposite: true

            }, { // Secondary yAxis
                gridLineWidth: 0,
                title: {
                    text: '回収率',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: '{value} %',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                max:200,
                plotLines:[{
                  color:"red",
                  width: 2,
                  value:100
                }]
            }, { // Tertiary yAxis
                gridLineWidth: 0,
                labels: {
                    format: '{value} %',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 80,
                verticalAlign: 'top',
                y: 55,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            series: [{
                name: data.datasets[0].name,
                type: "line",  //data.datasets[0].type,
                data: data.datasets[0].data,
                tooltip: {
                  valueSuffix: data.datasets[0].unit
                }
            }, {
              name: data.datasets[1].name,
              type: "column",  //data.datasets[1].type,
              yAxis: 1,// data.datasets[1].yAxis,
              data: data.datasets[1].data,
                tooltip: {
                  valueSuffix: data.datasets[1].unit
                }
            }, {
              name: data.datasets[2].name,
              type: "line", // data.datasets[2].type,
              data: data.datasets[2].data,
                tooltip: {
                  valueSuffix: data.datasets[2].unit
                }
            }, {
              name: data.datasets[3].name,
              type: "column", // data.datasets[3].type,
              yAxis: 1,// data.datasets[3].yAxis,
              data: data.datasets[3].data,
                tooltip: {
                  valueSuffix: data.datasets[3].unit
                }
            }]
        });
      });

    }

    function setResultAggregate(){
     // Get the data. The contents of the data file can be viewed at
     // https://github.com/highcharts/highcharts/blob/master/samples/data/activity.json
    // $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=activity.json&callback=?', function (activity) {
     $.getJSON('/js/json/' + getJsonFileName() + '_bymonth.json', function (activity) {
         $.each(activity.datasets, function (i, dataset) {
           // Add X values
           dataset.data = Highcharts.map(dataset.data, function (val, j) {
               return [activity.xData[j], val];
           });

           $('<div class="chart">')
               .appendTo('#summaryResult')
               .highcharts({
                   chart: {
                       marginLeft: 40, // Keep all charts left aligned
                       spacingTop: 20,
                       spacingBottom: 20,
                       height:200
                   },
                   title: {
                       text: dataset.name,
                       align: 'left',
                       margin: 0,
                       x: 30
                   },
                   credits: {
                       enabled: false
                   },
                   legend: {
                       enabled: false
                   },
                   xAxis: {
                       crosshair: true,
                       categories:activity.xData
                   },
                   yAxis: {
                       title: {
                           text: null
                       }
                   },
                   tooltip: {
                       positioner: function () {
                           return {
                               x: this.chart.chartWidth - this.label.width, // right aligned
                               y: -1 // align to title
                           };
                       },
                       borderWidth: 0,
                       backgroundColor: 'none',
                       pointFormat: '{point.y}',
                       headerFormat: '',
                       shadow: false,
                       style: {
                           fontSize: '18px'
                       },
                       valueDecimals: dataset.valueDecimals
                   },
                   series: [{
                       data: dataset.data,
                       name: dataset.name,
                       type: dataset.type,
                       color: Highcharts.getOptions().colors[i],
                       fillOpacity: 0.3,
                       tooltip: {
                           valueSuffix: ' ' + dataset.unit
                       }
                   }]
               });
         });
     });

     $.getJSON('/js/json/' + getJsonFileName() + '_resultlist.json', function(data){
       $('<thead><tr><th>印</th><th>着</th><th>Date</th><th>場所</th><th>トラ</th><th>距離</th><th>レース名</th><th>馬名</th><th>人</th><th>脚</th></tr></thead><tbody>')
       .appendTo('table.tbl');
       data.forEach(function(record){
         $('<tr>'+
         '<td>' + record.umaMark + '</td>' +
         '<td class="' + setLabel(record.chakujun) + '">' + record.chakujun + '</td>' +
         '<td>' + record.yearDate + '</td>' +
         '<td>' + record.kaisaiBasho + '</td>' +
         '<td>' + record.trackName + '</td>' +
         '<td>' + record.kyori + '(' + record.babaName + ')' + '</td>' +
         '<td>' + record.raceName + '(' + record.gradeName + ')</td>' +
         '<td>' + record.umaName + '</td>' +
         '<td class="' + setLabel(record.ninki) + '">' + record.ninki + '</td>' +
         '<td>' + record.kyakushitsu + '</td>' +
         '</tr>')
         .appendTo('table.tbl tbody');
       })
     })

     function setLabel(val){
       var returnVal;
        switch (val) {
          case 1:
          returnVal = "danger";
          break;
        case 2:
          returnVal = "warning";
          break;
        case 3:
          returnVal = "info";
          break;
        default:
          returnVal = "";
       }
       return returnVal;
     }
    }

    function setTest(){
      $.getJSON('/js/json/' + getJsonFileName() + '_bykeibajo_shiba.json', function(data){

        $('#container_test').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: '競馬場別回収率'
        },
        xAxis: {
            categories:data.xData,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: '回収率(%)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: data.datasets[0].name,
            data: data.datasets[0].data
          }, {
            name: data.datasets[1].name,
            data: data.datasets[1].data
          }, {
            name: data.datasets[2].name,
            data: data.datasets[2].data
          }, {
            name: data.datasets[3].name,
            data: data.datasets[3].data
        }]
      });
    });
    }

    function setKakoBestRace(){
      $.getJSON('/js/json/' + getJsonFileName() + '.json', function(data){
        data.forEach(function(record){
          console.log(record);
          var rp_array = [];
          if(record.rr.rp.length != 0){
            var hashObj = {name: record.ri.nm , data: record.rr.rp};
            rp_array.push(hashObj);
          }
          line_chart_options.series = rp_array;
          line_chart_options.chart.renderTo = record.rcId;
          $('<div id ="' + record.rcId + '"></div><table id="table_' + record.rcId + '" cellpadding="0" cellspacing="0" border="0" class="tbl table table-striped table-bordered"><thead><tr><th>馬番</th><th>馬名</th><th>騎手</th><th>着順</th><th>人気</th><th>脚質</th></tr></thead><tbody></table>').appendTo('#appendDiv')
          var chart = new Highcharts.Chart(line_chart_options);

          $(record.ruj).each(function(){
            console.log(this)
            $('<tr>'+
                '<td>'+this.ui.ub+'</td>'+
                '<td>'+this.ui.um_nm+'</td>'+
                '<td>'+this.ui.kn+'</td>'+
                '<td>' + this.ur.ck + '</td>'+
                '<td>' + this.ur.tn + '</td>'+
                '<td>' + this.ur.ks + '</td>'+
              '</tr>')
            .appendTo('#table_' + record.rcId + ' tbody');
          })
        });
      });
    }


    function setTokubetsuTouroku(){
      $.getJSON('/js/json/' + getJsonFileName() + '.json', function(data){
        var rp_array = [];
        data.forEach(function(record){
          if(record.rr.rp.length != 0){
            var hashObj = {name: record.ri.nm , data: record.rr.rp};
            rp_array.push(hashObj);
          }
        })
        line_chart_options.series = rp_array;
        var chart = new Highcharts.Chart(line_chart_options);
        $('<thead><tr><th>年度</th><th>馬番</th><th>馬名</th><th>騎手</th><th>着順</th><th>人気</th><th>脚質</th></tr></thead><tbody>')
        .appendTo('table.tbl');
        //var sc_array1 = [];
        //var sc_array2 = [];
        data.forEach(function(record){
          $(record.ruj).each(function(){
            if(this.ur.ck == '1着'){
              $('<tr>'+
                  '<td>'+this.ruId.substr(0,4) +'年</td>'+
                  '<td>'+this.ui.ub+'</td>'+
                  '<td>'+this.ui.um_nm+'</td>'+
                  '<td>'+this.ui.kn+'</td>'+
                  '<td>' + this.ur.ck + '</td>'+
                  '<td>' + this.ur.tn + '</td>'+
                  '<td>' + this.ur.ks + '</td>'+
                '</tr>')
              .appendTo('table.tbl tbody');
              //sc_array1.push([this.ur.c4 , this.ur.a3]);
            } else if (this.ur.ck == '2着'){
              $('<tr>'+
                  '<td>'+this.ruId.substr(0,4) +'年</td>'+
                  '<td>'+this.ui.ub+'</td>'+
                  '<td>'+this.ui.um_nm+'</td>'+
                  '<td>'+this.ui.kn+'</td>'+
                  '<td>' + this.ur.ck + '</td>'+
                  '<td>' + this.ur.tn + '</td>'+
                  '<td>' + this.ur.ks + '</td>'+
                '</tr>')
              .appendTo('table.tbl tbody');
              //sc_array2.push([this.ur.c4 , this.ur.a3]);
            }
          })
        }); // data.forEach
        //scatter_chart_options.series = [{name: '1着' , color: 'red' , data: sc_array1} , {name: '2着' , color: 'blue' , data:sc_array2}];
        //var chart = new Highcharts.Chart(scatter_chart_options);

      })
    }

    function setRaceResult(){
      $.getJSON('/js/json/' + getJsonFileName() + '.json',function(data){
        console.log(data.rr.rp);
        line_chart_options.series[0].data = data.rr.rp
        optline_chart_optionsions.title.text = data.ri.nm
        console.log(line_chart_options.series);
        var chart = new Highcharts.Chart(line_chart_options);
        $('<thead><tr><th>馬名</th><th>印</th><th>着順</th></tr></thead><tbody>').appendTo('table.tbl');
        $(data.ruj).each(function(){
          $('<tr>'+
              '<td>'+this.ui.um_nm+'</td>'+
              '<td>' + this.uy.mk + '</td>'+
              '<td>' + this.ur.ck + '</td>'+
            '</tr>').appendTo('table.tbl tbody');
          })
      });
    }

    function setShussouUma(){
      $.getJSON('/js/json/' + getJsonFileName() + '.json',function(data){
        var rp_array = [];
        data.forEach(function(record){
//          var hashObj = {country: record.nm,  name: record.ub , x: record.dax.x , y: record.dax.y , z: record.dax.z };
          var hashObj = {name: record.nm , data: [[record.dax.x ,record.dax.y ,record.dax.z]] };
            //, color: 'rgba(160,100,' + record.ub * 10 +  ' , 1)'};
          rp_array.push(hashObj);
         })
        console.log(rp_array);
        bubble_chart2_options.series = rp_array;
//        bubble_chart_options.series = rp_array;

        // var chart = new Highcharts.Chart(bubble_chart_options);
        var chart = new Highcharts.Chart(bubble_chart2_options);
      });
    }

    // 読み込むjsonファイルの名前を取得
    function getJsonFileName(){
      return $("#get_val").val();
    }

    // line chart property
    var line_chart_options = {
      chart: {
        renderTo: 'rap_graph'
      },
      title: {
          text: 'ラップタイム'
      },
      yAxis: {
          title: {
              text: 'タイム'
          }
      },
      series: [{}]
    };

    var pie_chart_options = {
      chart:{
        renderTo: 'pie_graph',
        type: 'pie'
      },
      title: {
        text: 'パイチャート'
      },
      series:[{}]
    };

    var scatter_chart_options = {
      chart: {
        renderTo: 'scatter_graph',
        type: 'scatter',
        zoomType: 'xy'
      },
      title: {
        text: '4角位置と上がり順位'
      },
      series: [{}]
    };



    var bubble_chart_options = {
      chart: {
        renderTo: 'bubble_graph',
          type: 'bubble',
          plotBorderWidth: 1,
          zoomType: 'xy'
      },

      legend: {
          enabled: false
      },

      xAxis: {
          gridLineWidth: 1,
          title: {
              text: 'テン偏差'
          },
      },

      yAxis: {
          startOnTick: false,
          endOnTick: false,
          title: {
              text: '上がり偏差'
          },
          maxPadding: 0.2,
      },

      tooltip: {
          useHTML: true,
          headerFormat: '<table>',
          pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
              '<tr><th>テン偏差:</th><td>{point.x}g</td></tr>' +
              '<tr><th>上がり偏差:</th><td>{point.y}g</td></tr>' +
              '<tr><th>中盤偏差:</th><td>{point.z}%</td></tr>',
          footerFormat: '</table>',
          followPointer: true
      },

      plotOptions: {
          series: {
              dataLabels: {
                  enabled: true,
                  format: '{point.name}'
              }
          }
      },

      series: [{}]

    };

    var bubble_chart2_options = {
      chart: {
        renderTo: 'bubble_graph2',
          type: 'bubble',
          plotBorderWidth: 1,
          zoomType: 'xy'
      },

      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
      },

      title: {
          text: 'Highcharts bubbles with radial gradient fill'
      },

      xAxis: {
          gridLineWidth: 1
      },

      yAxis: {
          startOnTick: false,
          endOnTick: false
      },

      tooltip: {
          useHTML: true,
          headerFormat: '<table>',
          pointFormat: '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
              '<tr><th>テン偏差:</th><td>{point.data}g</td></tr>' +
              '<tr><th>上がり偏差:</th><td>{point.data [0]}g</td></tr>' +
              '<tr><th>中盤偏差:</th><td>{point}%</td></tr>',
          footerFormat: '</table>',
          followPointer: true
      },

      series: [{}]
    };


});
