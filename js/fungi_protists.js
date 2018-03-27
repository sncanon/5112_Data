var myConfig = {
 	type: 'line',
 	backgroundColor:'#EAEAEA',
 	title:{
 	  text:'NUMBERS OF THREATENED FUNGI AND PROTISTS',
 	  adjustLayout: true,
 	  fontColor:"black",
 	  marginTop: 5,
 	},
 	legend:{
 	  align: 'center',
 	  verticalAlign: 'top',
    horizontalAlign: 'left',
 	  backgroundColor:'none',
 	  borderWidth: 0,
 	  item:{
 	    fontColor:'black',
 	    cursor: 'hand'
 	  },
 	  marker:{
 	    type:'circle',
 	    borderWidth: 0,
 	    cursor: 'hand',
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
 	  lineColor: 'black',
 	  zooming: true,
 	  zoomTo:[0,19],
 	  item:{
 	    fontColor:'black',
 	  },

 	},
 	scaleY:{
 	  minorTicks: 1,
 	  lineColor: 'black',
 	  tick:{
 	    lineColor: 'black'
 	  },
 	  minorTick:{
 	    lineColor: 'gray'
 	  },
 	  minorGuide:{
 	    visible: true,
 	    lineWidth: 1,
 	    lineColor: 'none',
 	    alpha: 0.7,
 	    lineStyle: 'dashed'
 	  },
 	  guide:{
 	    lineStyle: 'dashed',
      lineColor: 'gray'
 	  },
 	  item:{
 	    fontColor:'black'
 	  }
 	},
 	tooltip:{
 	  borderWidth: 0,
 	  borderRadius: 3
 	},
 	preview:{
 	  adjustLayout: true,
 	  borderColor:'gray',
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
 	  lineColor:'darkgray',
 	  type:'multiple',
 	  scaleLabel:{
 	    decimals: 2,
 	    borderRadius: 3,
 	    offsetX: -5,
 	    fontColor:"#black",
 	    bold: true
 	  }
 	},


	series: [
		{
			values: [null, null,
null,
null,
null,
2,
2,
null,
2,
2,
2,
2,
2,
2,
2,
10,
4,
7,
7,
10],
      text: 'Lichens',
			lineColor:'#D24136',
			marker:{
			  backgroundColor:'#D24136'
			}
		},
		{
		  values:[null, null,
null,
null,
null,
null,
null,
null,
1,
1,
1,
1,
1,
1,
1,
33,
1,
22,
21,
33],
      text: 'Mushrooms',
		  lineColor: '#75B1A9',
		  marker:{
		    backgroundColor:'#75B1A9'
		  }
		},
    {
      values: [null, null,
null,
null,
null,
2,
2,
null,
3,
9,
9,
9,
9,
9,
9,
49,
11,
35,
34,
49],
      text: 'Brown Algae',
		  lineColor:'#EB8A3E',
		  marker:{
		    backgroundColor:'#EB8A3E'

		  }
		}
	]

};

zingchart.render({
	id: 'myChart',
	data: myConfig,
	height: '500',
	width: '95%',
});

zingchart.shape_click = function(p){
  if(p.shapeid == "view_all"){
    zingchart.exec(p.id,'viewall');
  }
}
