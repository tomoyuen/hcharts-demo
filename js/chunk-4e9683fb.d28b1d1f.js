(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e9683fb"],{"3e2a":function(t,d,a){"use strict";var e=a("ea48"),s=a.n(e);s.a},ea48:function(t,d,a){},fd4c:function(t,d,a){"use strict";a.r(d);var e=function(){var t=this,d=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,d=t.$createElement,a=t._self._c||d;return a("div",[a("div",{staticClass:"select-box"},[a("select",{attrs:{name:"",id:""}},[a("option",{attrs:{value:"1"}},[t._v("2013-2014年第1学期")]),a("option",{attrs:{value:"2"}},[t._v("2013-2014年第2学期")])])]),a("div",{staticClass:"good-student-spread"},[a("div",{staticClass:"container"},[a("div",{attrs:{id:"good-student-data"}}),a("div",{staticClass:"title"},[t._v("优秀学生分布(说明：GPA>3.0为优秀学生)")]),a("table",{staticClass:"letter-table",attrs:{cellspacing:"0"}},[a("tr",[a("th"),a("th",[t._v("院系/班级")]),a("th",[t._v("占比")]),a("th",[t._v("人数")])]),a("tr",[a("td",[a("p",[t._v("A")])]),a("td",[t._v("计算机学院")]),a("td",[t._v("18%")]),a("td",[t._v("33")])]),a("tr",[a("td",[a("p",[t._v("B")])]),a("td",[t._v("理学院")]),a("td",[t._v("13%")]),a("td",[t._v("30")])]),a("tr",[a("td",[a("p",[t._v("C")])]),a("td",[t._v("外语学院")]),a("td",[t._v("12%")]),a("td",[t._v("23")])]),a("tr",[a("td",[a("p",[t._v("D")])]),a("td",[t._v("文学院")]),a("td",[t._v("25%")]),a("td",[t._v("51")])]),a("tr",[a("td",[a("p",[t._v("E")])]),a("td",[t._v("历史学院")]),a("td",[t._v("15%")]),a("td",[t._v("28")])]),a("tr",[a("td",[a("p",[t._v("F")])]),a("td",[t._v("体育学院")]),a("td",[t._v("25%")]),a("td",[t._v("12")])]),a("tr",[a("td",[a("p",[t._v("G")])]),a("td",[t._v("医学院")]),a("td",[t._v("18%")]),a("td",[t._v("8")])])])])]),a("div",{staticClass:"separator"}),a("div",{staticClass:"average-gpa-rank"},[a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[t._v("平均GPA排行")]),a("div",{attrs:{id:"rank-chart"}})])]),a("div",{staticClass:"separator"}),a("div",{staticClass:"flunk-rank"},[a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[t._v("挂科率排行")]),a("div",{staticClass:"rank-table"},[a("table",{staticClass:"rank-list",attrs:{cellspacing:"0",border:"0"}},[a("tr",[a("th"),a("th",[t._v("课程名称")]),a("th",[t._v("挂科人数")])]),a("tr",[a("td",[a("p",[t._v("1")])]),a("td",[t._v("高等数学A")]),a("td",[t._v("51")])]),a("tr",[a("td",[a("p",[t._v("2")])]),a("td",[t._v("大学英语2")]),a("td",[t._v("50")])]),a("tr",[a("td",[a("p",[t._v("3")])]),a("td",[t._v("离散数学")]),a("td",[t._v("48")])]),a("tr",[a("td",[a("p",[t._v("4")])]),a("td",[t._v("数据结构")]),a("td",[t._v("45")])]),a("tr",[a("td",[a("p",[t._v("5")])]),a("td",[t._v("数字电路")]),a("td",[t._v("42")])]),a("tr",[a("td",[a("p",[t._v("6")])]),a("td",[t._v("模拟电路")]),a("td",[t._v("41")])]),a("tr",[a("td",[a("p",[t._v("7")])]),a("td",[t._v("概率论")]),a("td",[t._v("39")])]),a("tr",[a("td",[a("p",[t._v("8")])]),a("td",[t._v("计算机网络原理")]),a("td",[t._v("28")])]),a("tr",[a("td",[a("p",[t._v("9")])]),a("td",[t._v("计算机组成原理")]),a("td",[t._v("12")])]),a("tr",[a("td",[a("p",[t._v("10")])]),a("td",[t._v("软件工程")]),a("td",[t._v("8")])])])])])])])}],r={name:"student-score",title:"学生成绩",mounted:function(){this.$root.hcharts.chart("good-student-data",{chart:{plotBackgroundColor:null,plotBorderWidth:0,plotShadow:!1},colors:["#35b3ed","#1dcd00","#ffb518","#f5336f","#06dd8f","#ff5d3c","#ff7d01"],title:{text:null},plotOptions:{pie:{dataLabels:{enabled:!0,distance:-40,style:{color:"white",fontSize:"20px"}},center:["50%","50%"]}},credits:{enabled:!1},series:[{type:"pie",name:"优秀学生占比",innerSize:"50%",data:[["A",18],["B",13],["C",12],["D",25],["E",15],["F",25],["G",18]]}],exporting:{enabled:!1}}),this.$root.hcharts.chart("rank-chart",{chart:{type:"bar"},title:{text:null},xAxis:{categories:["1","2","3","4","5","6","7"],title:{text:null}},yAxis:{min:0,align:"high",title:{text:null},labels:{overflow:"justify"}},plotOptions:{bar:{dataLabels:{enabled:!0}}},legend:{enabled:!1},credits:{enabled:!1},series:[{name:"平均GPA",data:[{name:"计算机学院",color:"#35b3ed",y:13},{name:"理学院",color:"#1dcd00",y:12},{name:"外语学院",color:"#ffb518",y:11},{name:"文学院",color:"#f5336f",y:10},{name:"历史学院",color:"#06dd8f",y:8},{name:"体育学院",color:"#ff5d3c",y:7},{name:"医学院",color:"#ff7d01",y:6}]}]})}},v=r,i=(a("3e2a"),a("2877")),l=Object(i["a"])(v,e,s,!1,null,"5f58ed4c",null);d["default"]=l.exports}}]);
//# sourceMappingURL=chunk-4e9683fb.d28b1d1f.js.map