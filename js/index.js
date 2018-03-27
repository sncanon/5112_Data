var myConfig = {
 	type: 'line',
 	backgroundColor:'#EAEAEA',
 	title:{
 	  text:'NUMBERS OF THREATENED SPECIES: SUMMARY',
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
			values:[3314, null, 3507, null, 3521, 3524, 5188, null, 5622, 5742, 5966, 6143, 6714, 7108, 7250, 7390, 7678, 7781, 8160, 8374],
      text: 'Vertebrates',
			lineColor:'#c16e68',
			marker:{
			  backgroundColor:'#c16e68'
			}
		},
		{
		  values:[1891, null,
1928,
null,
1932,
1959,
1992,
null,
2102,
2109,
2496,
2639,
2904,
3297,
3570,
3822,
4140,
4201,
4470,
4893],
      text: 'Invertebrates',
		  lineColor: '#75B1A9',
		  marker:{
		    backgroundColor:'#75B1A9'
		  }
		},

    {
		  values:[5328,null,
5611,
null,
5714,
6774,
8321,
null,
8390,
8448,
8457,
8500,
8724,
9156,
9390,
10065,
10584,
11233,
11643,
12505],
      text: 'Plants',
		  lineColor: '#3F681C',
		  marker:{
		    backgroundColor:'#3F681C'
		  }
		},
		{
		  values: [null,null,null,null, null,
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
      text: 'Fungi and Protists',
		  lineColor:'#257985',
		  marker:{
		    backgroundColor:'#257985'
		  }
		},
    {
		  values:[10533,null,
11046,
null,
11167,
12259,
15503,
null,
16117,
16308,
16928,
17291,
18351,
19570,
20219,
21326,
22413,
23250,
24307,
25821],
      text: 'Total Species Threatened',
		  lineColor: 'red',
		  marker:{
		    backgroundColor:'red'
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
