
$(document).ready(function(){

	$.ajax({
	  dataType: "json",
	  url: 'data/opex/QQQ/QQQ.json',
	  data: {},
	  success: function (data) {
	  
		//Highcharts.stockChart('container', {
		$('#chart-container').highcharts({


			rangeSelector: {
				selected: 1
			},

			title: {
				text: 'QQQ Price'
			},

			xAxis: {
				type: 'datetime',
				labels: {
					enabled: true
				},
				crosshair: {
					label: {
						enabled: false
					}
				}
			},

			yAxis: {
				labels: {
					/*
					formatter: function(){
					console.log(this.axis.chart.series[0].data)
					  return 100 * this.value / $(this.axis.tickPositions).last()[0] + '%';
					}
				  */
				  },
				crosshair: {
					label: {
						enabled: false
					}
				}
			},
			
			series: [{
				name: 'QQQ',
				data: data,
				tooltip: {
					valueDecimals: 2
				}
			}],
			
			tooltip: {
				enabled: true,
				headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
				pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
				
				formatter: function() {
					return '<span style="font-size: 10px">'+Highcharts.dateFormat('%H:%M', new Date(this.x))+'</span><br/><span style="color:'+this.color+'">\u25CF</span> ' + this.series.name + ': <b>' + this.y.toFixed(2) + '</b><br/>';
				},
				/*
				dateTimeLabelFormats: {
					millisecond:"%A, %b %e, %H:%M:%S.%L",
					second:"%A, %b %e, %H:%M:%S",
					minute:"%A, %b %e, %H:%M",
					hour:"%A, %b %e, %H:%M",
					day:"%A, %b %e, %Y",
					week:"Week from %A, %b %e, %Y",
					month:"%B %Y",
					year:"%Y"
				}
				*/
			},
		});
	},
	error: function(jqXhr, textStatus, error){
			console.log(textStatus + ", " + error);
		}
	});

});