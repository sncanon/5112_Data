var myConfig = {
 	type: 'line',
 	backgroundColor:'#EAEAEA',
 	title:{
 	  text:'NUMBERS OF THREATENED INVERTEBRATES',
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
			values: [537,null,
555,
null,
557,
553,
559,
null,
623,
623,
626,
711,
733,
741,
829,
896,
993,
1046,
1268,
1414],
      text: 'Insects',
			lineColor:'#D24136',
			marker:{
			  backgroundColor:'#D24136'
			}
		},
		{
		  values:[920,null,
938,
null,
939,
967,
974,
null,
975,
978,
978,
1036,
1288,
1673,
1857,
1898,
1950,
1950,
1984,
2187],
      text: 'Molluscs',
		  lineColor: '#75B1A9',
		  marker:{
		    backgroundColor:'#75B1A9'
		  }
		},
    {
      values: [407,null,
408,
null,
409,
409,
429,
null,
459,
460,
606,
606,
596,
596,
596,
723,
725,
728,
732,
732],
      text: 'Crustaceans',
		  lineColor:'#EB8A3E',
		  marker:{
		    backgroundColor:'#EB8A3E'
		  }
		},
    {
		  values:[1,null,
1,
null,
1,
1,
1,
null,
1,
4,
235,
235,
235,
235,
236,
235,
235,
237,
237,
237],
      text: 'Corals',
		  lineColor: '#3F681C',
		  marker:{
		    backgroundColor:'#3F681C'
		  }

		},
		{
		  values: [11,null,
11,
null,
11,
11,
11,
null,
11,
11,
18,
18,
19,
19,
20,
21,
163,
164,
166,
170],
      text: 'Arachnids',
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
	width: '95%',
});

zingchart.shape_click = function(p){
  if(p.shapeid == "view_all"){
    zingchart.exec(p.id,'viewall');
  }
}
