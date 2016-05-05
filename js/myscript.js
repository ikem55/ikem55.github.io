$(function () {
    var options = {
      chart: {
        renderTo: 'rap_graph'
      },
      title: {
          text: 'Fruit Consumption'
      },
      yAxis: {
          title: {
              text: 'Fruit eaten'
          }
      },
      series: [{}]
    };

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

    function getJsonFileName(){
      return $("#get_val").val();
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
        console.log(rp_array);
        options.series = rp_array;
        var chart = new Highcharts.Chart(options);
      })
    }


    function setRaceResult(){
      $.getJSON('/js/json/' + getJsonFileName() + '.json',function(data){
        console.log(data.rr.rp);
        options.series[0].data = data.rr.rp
        options.title.text = data.ri.nm
        console.log(options.series);
        var chart = new Highcharts.Chart(options);
        $('<thead><tr><th>馬名</th><th>印</th><th>着順</th></tr></thead><tbody>').appendTo('table.tbl');
        $(data.ruj).each(function(){
          $('<tr>'+
              '<td>'+this.ui.um_nm+'</td>'+
              '<td>' + this.uy.mk + '</td>'+
              '<td>' + this.ur.ck + '</td>'+
            '</tr>').appendTo('table.tbl tbody');
          })
        $('table.tbl').tablesorter({
          sortList:[[2,0]]
        });
      });
    }

});
