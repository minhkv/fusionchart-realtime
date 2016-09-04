



FusionCharts.ready(function(){

	var socket = io();

	socket.connect('127.0.0.1', 3000);

	var chartConfiguration = {
		chart: {
	        "caption": "Real-time stock price monitor",
	        "subCaption": "Harry's SuperMart",
	        "xAxisName": "Time",
	        "yAxisName": "Stock Price",
	        "numberPrefix": "$",
	        "refreshinterval": "5",
	        "yaxisminvalue": "35",
	        "yaxismaxvalue": "36",
	        "numdisplaysets": "10",
	        "labeldisplay": "rotate",
	        "showValues": "0",
	        "showRealTimeValue": "0",
	        "theme": "fint"
	    }
	}

	socket.on('data', function(data) {
		var label = "value";
		strData = "&label=" + label + "&value=" + data;
		fusioncharts.feedData(strData);
	});

	


    var fusioncharts = new FusionCharts({
	    id: "stockRealTimeChart",
	    type: 'realtimeline',
	    renderAt: 'chart-container',
	    width: '500',
	    height: '300',

	    dataFormat: 'json',
	    dataSource: {
	        "chart": {
	            "caption": "Real-time stock price monitor",
	            "subCaption": "Harry's SuperMart",
	            "xAxisName": "Time",
	            "yAxisName": "Stock Price",
	            "numberPrefix": "$",
	            "refreshinterval": "5",
	            "yaxisminvalue": "35",
	            "yaxismaxvalue": "36",
	            "numdisplaysets": "10",
	            "labeldisplay": "rotate",
	            "showValues": "0",
	            "showRealTimeValue": "0",
	            "theme": "fint"
	        },
	        "categories": [{
	            "category": [{
	                "label": "Day Start"
	            }]
	        }],
	        "dataset": [{
	            "data": [{
	                "value": "35.27"
	            }]
	        }]
	    },
	    "events": {
	        "initialized": function(e) {
	            
	        },
	        "disposed": function(evt, arg) {
	        },
	        
	    }
	});
    fusioncharts.render();
});
