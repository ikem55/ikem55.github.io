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

    function getJsonFileName(){
      return $("#get_val").val();
    }

    $.getJSON('/js/json/' + getJsonFileName() + '.json',function(data){
      options.series[0].data = data.rr.rp
      options.title.text = data.ri.nm
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
});
