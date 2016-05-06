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
      default:
        console.log("other");
        break;
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

});
