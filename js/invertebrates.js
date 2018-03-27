var myConfig = {
 	type: 'line',
 	backgroundColor:'#2C2C39',
 	title:{
 	  text:'INVERTEBRATES',
 	  adjustLayout: true,
 	  fontColor:"#E3E3E5",
 	  marginTop: 7,
 	},
 	legend:{
 	  align: 'center',
 	  verticalAlign: 'top',
 	  backgroundColor:'none',
 	  borderWidth: 0,
 	  item:{
 	    fontColor:'#E3E3E5',
 	    cursor: 'hand'
 	  },
 	  marker:{
 	    type:'circle',
 	    borderWidth: 0,
 	    cursor: 'hand'
 	  }
 	},
 	plotarea:{
 	  margin:'dynamic 70'
 	},
 	plot:{
 	  aspect: 'spline',
 	  lineWidth: 2,
 	  marker:{
 	    borderWidth: 0,
 	    size: 5
 	  }
 	},
 	scaleX:{
   labels: ["1996/98","1999","2000","2001","2002","2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013","2014","2015","2016","2017"],
 	  lineColor: '#E3E3E5',
 	  zooming: true,
 	  zoomTo:[0,19],
 	  item:{
 	    fontColor:'#E3E3E5',
 	  },

 	},
 	scaleY:{
 	  minorTicks: 1,
 	  lineColor: '#E3E3E5',
 	  tick:{
 	    lineColor: '#E3E3E5'
 	  },
 	  minorTick:{
 	    lineColor: '#494960'
 	  },
 	  minorGuide:{
 	    visible: true,
 	    lineWidth: 1,
 	    lineColor: '#494960',
 	    alpha: 0.7,
 	    lineStyle: 'dashed'
 	  },
 	  guide:{
 	    lineStyle: 'dashed',
      lineColor: '#494960'
 	  },
 	  item:{
 	    fontColor:'#E3E3E5'
 	  }
 	},
 	tooltip:{
 	  borderWidth: 0,
 	  borderRadius: 3
 	},
 	preview:{
 	  adjustLayout: true,
 	  borderColor:'#E3E3E5',
 	  mask:{
 	    backgroundColor:'#E3E3E5'
 	  }
 	},
 	crosshairX:{
 	  plotLabel:{
 	    multiple: true,
 	    borderRadius: 3
 	  },
 	  scaleLabel:{
 	    backgroundColor:'#53535e',
 	    borderRadius: 3
 	  },
 	  marker:{
 	    size: 7,
 	    alpha: 0.5
 	  }
 	},
 	crosshairY:{
 	  lineColor:'#E3E3E5',
 	  type:'multiple',
 	  scaleLabel:{
 	    decimals: 2,
 	    borderRadius: 3,
 	    offsetX: -5,
 	    fontColor:"#2C2C39",
 	    bold: true
 	  }
 	},
 	shapes:[
              {
                type:'rectangle',
                id:'view_all',
                height:'20px',
                width:'75px',
                borderColor:'#E3E3E5',
                borderWidth:1,
                borderRadius: 3,
                x:'85%',
                y:'11%',
                backgroundColor:'#53535e',
                cursor:'hand',
                label:{
                  text:'View All',
                  fontColor:'#E3E3E5',
                  fontSize:12,
                  bold:true
                }
              }
            ],
	series: [
		{
			values: [1096, null, 1130, null, 1137, 1130, 1101, null, 1093, 1094, 1141, 1142, 1131, 1138, 1139, 1143, 1199, 1197, 1194, 1204],
      text: 'Mammals',
			lineColor:'#D24136',
			marker:{
			  backgroundColor:'#D24136'
			}
		},
		{
		  values:[1107, null, 1183, null, 1192, 1194, 1213, null, 1206, 1217, 1222, 1223, 1240, 1253, 1313, 1308, 1373, 1375, 1460, 1469],
      text: 'Birds',
		  lineColor: '#75B1A9',
		  marker:{
		    backgroundColor:'#75B1A9'
		  }
		},
    {
      values: [253, null, 296, null, 293, 293, 304, null, 341, 422, 423, 469, 594, 772, 807, 879, 927, 944, 1079, 1215],
      text: 'Reptiles',
		  lineColor:'#EB8A3E',
		  marker:{
		    backgroundColor:'#EB8A3E'
		  }
		},
    {
		  values:[124, null, 146, null, 157, 157, 1770, null, 1811, 1808, 1905, 1895, 1898, 1917, 1933, 1950, 1957, 1994, 2068, 2100],
      text: 'Amphibians',
		  lineColor: '#3F681C',
		  marker:{
		    backgroundColor:'#3F681C'
		  }
		},
		{
		  values: [734, null, 752, null, 742, 750, 800, null, 1171, 1201, 1275, 1414, 1851, 2028, 2058, 2110, 2222, 2271, 2359, 2386],
      text: 'Fishes',
		  lineColor:'#257985',
		  marker:{
		    backgroundColor:'#257985'
		  }
		}
	]

};

zingchart.render({
	id: 'myChart',
	data: myConfig,
	height: '500',
	width: '725'
});

zingchart.shape_click = function(p){
  if(p.shapeid == "view_all"){
    zingchart.exec(p.id,'viewall');
  }
}
