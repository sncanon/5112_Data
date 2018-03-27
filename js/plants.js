var myConfig = {
 	type: 'line',
 	backgroundColor:'#EAEAEA',
 	title:{
 	  text:'NUMBERS OF THREATENED PLANTS',
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
80,
null,
80,
80,
80,
null,
80,
80,
82,
82,
80,
80,
76,
76,
76,
76,
76,
76],
      text: 'Mosses',
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
111,
140,
null,
139,
139,
139,
139,
148,
163,
167,
187,
194,
197,
217,
246],
      text: 'Ferns and Allies',
		  lineColor: '#75B1A9',
		  marker:{
		    backgroundColor:'#75B1A9'
		  }
		},
    {
      values: [142, null,
141,
null,
142,
304,
305,
null,
306,
321,
323,
322,
371,
377,
374,
399,
400,
400,
400,
401],
      text: 'Gymnosperms',
		  lineColor:'#EB8A3E',
		  marker:{
		    backgroundColor:'#EB8A3E'
		  }
		},
    {
		  values:[5186, null,
5390,
null,
5492,
6279,
7796,
null,
7865,
7899,
7904,
7948,
8116,
8527,
8764,
9394,
9905,
10551,
10941,
11773],
      text: 'Flowering Plants',
		  lineColor: '#3F681C',
		  marker:{
		    backgroundColor:'#3F681C'

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
