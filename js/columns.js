$(function () {
  var json = [
    {"年":"1992", "国":"スペイン（Spain）", "都市":"バルセロナ（Barcelona）"},
    {"年":"1996", "国":"アメリカ合衆国（United States）", "都市":"アトランタ（Atlanta）"},
    {"年":"2000", "国":"オーストラリア（  Australia）", "都市":"シドニー（Sydney）"},
    {"年":"2004", "国":"ギリシャ（Greece）", "都市":"アテネ（Athens）"},
    {"年":"2008", "国":"中国（China）", "都市":"北京（Beijing）"},
    {"年":"2012", "国":"イギリス（United Kingdom）", "都市":"ロンドン（London）"},
    {"年":"2016", "国":"ブラジル（Brazil）", "都市":"リオデジャネイロ（Rio de Janeiro）"},
    {"年":"2020", "国":"日本（Japan）", "都市":"東京（Tokyo）"}
  ];
  $('#columns_table').columns({
    data:json
  });
});
