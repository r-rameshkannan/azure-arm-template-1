/* Register the widget in dashboard.*/
bbicustom.dashboard.registerWidget({

	guid: "f0762206-b328-4738-b662-2d65bb8e7d9e",

	widgetName: "BubbleChart",

	/* init method will be called when the widget is initialized */
	init: function (rowIndex) {
		this.parentValues = {};
		if (this.model.boundColumns.Value.length > 0 && this.model.dataSource.length > 0) {
			this.designId = $(this.element).parents(".e-customwidget-item").attr("id").split("_" + this.model.widgetId)[0];
			this.designerObj = $("#" + this.designId).data("BoldBIDashboardDesigner");
			this.formattingInfo = {};
			this.editedColumnNames = {};
			var widgetInstance = $(this.element).closest(".e-customwidget-item").data("widgetInstance");
			for (var i = 0; i < widgetInstance.dataGroupInfo.FieldContainers.length; i++) {
				for (var j = 0; j < widgetInstance.dataGroupInfo.FieldContainers[i].FieldInfos.length; j++) {
					if (widgetInstance.dataGroupInfo.FieldContainers[i].FieldInfos[j].FieldType == 0) {
						this.formattingInfo[widgetInstance.dataGroupInfo.FieldContainers[i].FieldInfos[j].UniqueColumnName] = widgetInstance.dataGroupInfo.FieldContainers[i].FieldInfos[j].MeasureFormatting;
					}
					this.editedColumnNames[widgetInstance.dataGroupInfo.FieldContainers[i].FieldInfos[j].UniqueColumnName] = widgetInstance.dataGroupInfo.FieldContainers[i].FieldInfos[j].IsDisplayNameEdited ? widgetInstance.dataGroupInfo.FieldContainers[i].FieldInfos[j].DisplayName : widgetInstance.dataGroupInfo.FieldContainers[i].FieldInfos[j].Name;
				}
			}
		}

		this.widget = document.createElement("div");
		this.widget.setAttribute("id", this.element.getAttribute("id") + "_widget");
		$(this.widget).addClass("e-dbrd-custom-bar-widget-div");
		$(this.widget).css({ "height": $(this.element).height() + "px", "width": $(this.element).width() + "px" });
		this.element.appendChild(this.widget);
		this.chart = new ej2CustomBarChart.charts.Chart({
			primaryXAxis: {
				valueType: "Category",
				majorGridLines: { width: this.model.properties.showGridLineForXaxis ? 1 : 0 },
				labelIntersectAction: this.model.properties.labelOverflowMode,
				visible: this.model.properties.showCategoryAxis,
				title: this.model.properties.showCategoryAxisTitle ? this.model.properties.showCategoryAxisTitletext : "",
				titleStyle: { size: this.model.properties.xtitleFontSize },
				labelRotation: parseFloat(this.model.properties.labelRotation),
				labelStyle: { size: this.model.properties.xlabelFontSize },
				edgeLabelPlacement: "Shift",
				labelPlacement: "BetweenTicks",
				rangePadding:'Additional'
			},
			primaryYAxis: {
				majorGridLines: { width: this.model.properties.showGridLineForYaxis ? 1 : 0 },
				visible: this.model.properties.showPrimaryAxis,
				rangePadding: 'Additional',
				labelStyle: { size: this.model.properties.ylabelFontSize },
				title: this.model.properties.showPrimaryAxisTitle ? this.model.properties.showPrimaryAxisTitletext : "",
				titleStyle: { size: this.model.properties.ytitleFontSize },
				labelIntersectAction: "Trim",
				labelFormat: "{value}",
				edgeLabelPlacement: "Shift"
			},
			legendSettings: {
				visible: this.model.properties.showLegend,
				position: this.model.properties.legendPosition
			},
			tooltip: {
				enable: true,
				template: "<div>Text</div>"
			},
			series: this.getSeries(),
			pointClick: $.proxy(this.pointClick, this),
			textRender: $.proxy(this.textRender, this),
			axisLabelRender: $.proxy(this.axisLabelRender, this),
			tooltipRender: $.proxy(this.tooltipRender, this),
			beforeResize: $.proxy(this.beforeResize, this),
			loaded: $.proxy(this.loaded, this)
		});
		this.chart.appendTo('#' + this.element.getAttribute("id") + "_widget");
		$ ('#' + this.element.getAttribute("id") + "_widget").closest('.e-customwidget-element').css({'background':"transparent"});
		$("#" +this.element.id+ "_widget_ChartBorder").attr("fill","transparent");
	},
	
	loaded: function (args) {
		var temp = [];
		do {
			temp = $('#' + this.element.id + "_widget_ej2_chart_selection");
			$('#' + this.element.id + "_widget_ej2_chart_selection").remove();
		} while ($('#' + this.element.id + "_widget_ej2_chart_selection").length > 0);
		if ($("#" + this.element.id).length > 0 && temp.length > 0) {
			$("body")[0].appendChild(temp[0]);
		}
	},
	
	beforeResize: function (args) {
		if ($("#" + this.element.id).length == 0) {
			args.cancelResizedEvent = true;
		}
	},
	
	/*This event triggers on point click and is used for filtering*/
	pointClick: function (args) {
		var widgetIns = $(this.element).closest('.e-customwidget-item').data('widgetInstance');
		if (this.model.boundColumns.Value.length > 0 && this.model.boundColumns.Column.length > 0 && widgetIns.designerInstance.model.mode != 'design') {
			var selectedColumnsFilter = [];
			var filterColumn = new bbicustom.dashboard.selectedColumnInfo();
			filterColumn.condition = "include";
			filterColumn.uniqueColumnName = this.model.boundColumns.Column[0].uniqueColumnName;
			filterColumn.values = [args.point.x];
			selectedColumnsFilter.push(filterColumn);
			bbicustom.dashboard.filterData(this, selectedColumnsFilter);
		}
	},
	
	/*tooltipRender method is used for rendering tooltip*/
	tooltipRender: function (args) {
		if ($("#" + this.element.id).length > 0) {
			var numberColName = this.model.boundColumns.row.length > 0 ? args.series.name.split('(')[1].replace(')', '') : args.series.name;
			var formatInfo = [];
			for (var i = 0; i < this.model.boundColumns.Value.length; i++) {
				if (numberColName == this.editedColumnNames[this.model.boundColumns.Value[i].uniqueColumnName]) {
					formatInfo = this.formattingInfo[this.model.boundColumns.Value[i].uniqueColumnName];
				}
			}
			var isSizeBound = false;
			var size = 0;
			if(this.model.boundColumns.bSize.length > 0){
				isSizeBound = true;
				size = (((args.point.size - 1) * (this.bubbleDataMax-this.bubbleDataMin)) / (5-1)) + this.bubbleDataMin;
				size = size == 0 ? 1:size;
			}
			var tooltipTemplate = '<div style="background:white;border: 1px solid #d4d4d4";><table><tr><td>X : </td><td>' + args.point.x + '</td></tr>' + '<tr><td>Y : </td><td>' + args.point.y + '</td></tr></table>';
			if (this.model.boundColumns.row.length > 0 && this.model.boundColumns.Column.length > 0 && this.model.boundColumns.Value.length > 0) {
				tooltipTemplate = '<div style="background:white;border: 1px solid #d4d4d4;box-shadow: 0 2px 4px 0 rgba(0,0,0,.12);border-radius: 4px;padding: 5px;"><table>'
					+ '<tr><td class="column-name" style="text-align:right;">' + this.editedColumnNames[this.model.boundColumns.Column[0].uniqueColumnName] + ':</td><td><b>' + args.point.x + '</b></td></tr>'
					+ '<tr><td class="column-name" style="text-align:right;">' + numberColName + ':</td><td><b>' + BoldBIDashboard.DashboardUtil.formattedText(Number(args.point.y), formatInfo.Culture, formatInfo.DecimalPoints, formatInfo.FormatType, formatInfo.DecimalSeparator, formatInfo.GroupSeparator, formatInfo.Prefix, formatInfo.Suffix, formatInfo.Unit, true, this.designerObj) + '</b></td></tr>'
					+ '<tr><td class="column-name" style="text-align:right;">' + this.editedColumnNames[this.model.boundColumns.row[0].uniqueColumnName] + ':</td><td><b>' + (args.series.name.split('(')[0]) + '</b></td></tr>';
					//+ '</table></div>';
			} else if (this.model.boundColumns.Column.length > 0 && this.model.boundColumns.Value.length > 0) {
				tooltipTemplate = '<div style="background:white;border: 1px solid #d4d4d4;box-shadow: 0 2px 4px 0 rgba(0,0,0,.12);border-radius: 4px;padding: 5px;"><table>'
					+ '<tr><td class="column-name" style="text-align:right;">' + this.editedColumnNames[this.model.boundColumns.Column[0].uniqueColumnName] + ':</td><td><b>' + args.point.x + '</b></td></tr>'
					+ '<tr><td class="column-name" style="text-align:right;">' + numberColName + ':</td><td><b>' + BoldBIDashboard.DashboardUtil.formattedText(Number(args.point.y), formatInfo.Culture, formatInfo.DecimalPoints, formatInfo.FormatType, formatInfo.DecimalSeparator, formatInfo.GroupSeparator, formatInfo.Prefix, formatInfo.Suffix, formatInfo.Unit, true, this.designerObj) + '</b></td></tr>';
					//+ '</table></div>';
			}
			if(isSizeBound){
				tooltipTemplate = tooltipTemplate + '<tr><td class="column-name" style="text-align:right;">'+this.editedColumnNames[this.model.boundColumns.bSize[0].uniqueColumnName]+' :</td><td><b>' + size.toFixed(2) + '</b></td></tr></table></div>';
			} else {
				tooltipTemplate = tooltipTemplate + '</table></div>';
			}
			args.template = tooltipTemplate;
		}
	},
	
	/*textRender method is to format the text displayed when data labels are enabled*/
	textRender: function (args) {	
		if ($("#" + this.element.id).length > 0) {
			if (this.model.boundColumns.Value.length > 0 && this.model.boundColumns.Column.length > 0  && this.model.boundColumns.row.length === 0 && this.model.dataSource.length > 0) {
				var numberColName = args.series.name.split('(')[0].replace(')', '');
				var formatInfo = [];
				for (var i = 0; i < this.model.boundColumns.Value.length; i++) {
					if (numberColName == this.editedColumnNames[this.model.boundColumns.Value[i].uniqueColumnName]) {
						formatInfo = this.formattingInfo[this.model.boundColumns.Value[i].uniqueColumnName];
					}
				}
				args.text = BoldBIDashboard.DashboardUtil.formattedText(Number(args.text), formatInfo.Culture, formatInfo.DecimalPoints, formatInfo.FormatType, formatInfo.DecimalSeparator, formatInfo.GroupSeparator, formatInfo.Prefix, formatInfo.Suffix, formatInfo.Unit, true, this.designerObj);
				if (this.isPercentage && !this.model.properties.percentFormat) {
					args.text = args.text + "%";
					this.isPercentage = false;
				}
			}
			if (this.model.boundColumns.Value.length > 0 && this.model.boundColumns.Column.length > 0  && this.model.boundColumns.row.length > 0  && this.model.dataSource.length > 0) {
				var numberColName = args.series.name.split('(')[1].replace(')', '');
				var formatInfo = [];
				for (var i = 0; i < this.model.boundColumns.Value.length; i++) {
					if (numberColName == this.editedColumnNames[this.model.boundColumns.Value[i].uniqueColumnName]) {
						formatInfo = this.formattingInfo[this.model.boundColumns.Value[i].uniqueColumnName];
					}
				}
				args.text = BoldBIDashboard.DashboardUtil.formattedText(Number(args.text), formatInfo.Culture, formatInfo.DecimalPoints, formatInfo.FormatType, formatInfo.DecimalSeparator, formatInfo.GroupSeparator, formatInfo.Prefix, formatInfo.Suffix, formatInfo.Unit, true, this.designerObj);
				if (this.isPercentage && !this.model.properties.percentFormat) {
					args.text = args.text + "%";
					this.isPercentage = false;
				}
			}
		}
	},

	/*axisLabelRender is used to format the axis labels*/
	axisLabelRender: function (args) {
		if ($("#" + this.element.id).length > 0) {
			if (this.model.boundColumns.Value.length > 0 && this.model.dataSource.length > 0) {
				if (args.axis.orientation == "Vertical") {
					var formatInfo = JSON.parse("{\"Culture\":\"auto\",\"DecimalPoints\":2,\"FormatType\":\"Number\",\"Prefix\":\"\",\"Suffix\":\"\",\"DecimalSeparator\":{\"AliasValue\":\".\",\"CurrentValue\":\".\"},\"GroupSeparator\":{\"AliasValue\":\",\",\"CurrentValue\":\",\"},\"Unit\":\"Auto\"}");
					args.text = BoldBIDashboard.DashboardUtil.formattedText(Number(args.text), formatInfo.Culture, formatInfo.DecimalPoints, formatInfo.FormatType, formatInfo.DecimalSeparator, formatInfo.GroupSeparator, formatInfo.Prefix, formatInfo.Suffix, formatInfo.Unit, true, this.designerObj);
				}
			}
		}
	},
	
	getCategory: function () {
		if (this.model.boundColumns.Value.length > 0 && this.model.boundColumns.Column.length > 0 && this.model.dataSource.length > 0) {
			for (var i = 0; i < this.model.dataSource.length; i++) {
				if (this.model.dataSource[i][this.model.boundColumns.Column[0].uniqueColumnName] != null && this.model.dataSource[i][this.model.boundColumns.Column[0].uniqueColumnName] != undefined) {
					if (Number(this.model.dataSource[i][this.model.boundColumns.Column[0].uniqueColumnName]).toString() == "NaN") {
						return "Category";
					} else {
						return "Double";
					}
				}
			}
		} else {
			return "Category";
		}
	},
	
	/*To get the series of data to be plotted in the chart*/
	getSeries: function () {
		var series = [];
		if (this.model.boundColumns.Value.length > 0 && this.model.boundColumns.Column.length > 0 && this.model.boundColumns.row.length > 0 && this.model.dataSource.length > 0) {
			var uniqueueRowValues = [];
			this.bubbleDataMax = 0;
			this.bubbleDataMin = 1000000000000000;
			this.tempData = this.model.dataSource.sortASC(this.model.boundColumns.Column[0].uniqueColumnName);
			for (var j = 0; j < this.tempData.length; j++) {
				if (uniqueueRowValues.indexOf(this.tempData[j][this.model.boundColumns.row[0].uniqueColumnName]) == -1 && this.tempData[j][this.model.boundColumns.row[0].uniqueColumnName] != null && this.tempData[j][this.model.boundColumns.row[0].uniqueColumnName] != undefined) {
					uniqueueRowValues.push(this.tempData[j][this.model.boundColumns.row[0].uniqueColumnName]);
				}
				if(this.model.boundColumns.bSize.length > 0){
				if(this.tempData[j][this.model.boundColumns.bSize[0].uniqueColumnName] != null && this.tempData[j][this.model.boundColumns.bSize[0].uniqueColumnName] != undefined && this.tempData[j][this.model.boundColumns.bSize[0].uniqueColumnName] != '(Null)' && this.tempData[j][this.model.boundColumns.bSize[0].uniqueColumnName] != '(Blanks)'){
					if(this.bubbleDataMax<this.tempData[j][this.model.boundColumns.bSize[0].uniqueColumnName]){
						this.bubbleDataMax = this.tempData[j][this.model.boundColumns.bSize[0].uniqueColumnName];
					}
					if(this.bubbleDataMin>this.tempData[j][this.model.boundColumns.bSize[0].uniqueColumnName]){
						this.bubbleDataMin = this.tempData[j][this.model.boundColumns.bSize[0].uniqueColumnName];
					}
				} }
			}

			for (var k = 0; k < uniqueueRowValues.length; k++) {

				for (var l = 0; l < this.model.boundColumns.Value.length; l++) {

					series.push({
						type: "Bubble",
						dataSource: this.getData(uniqueueRowValues[k], 0, l),
						
						xName: "x",
						yName: "y",
						size: 'size',
						minRadius: 1,
						maxRadius: this.model.boundColumns.bSize.length > 0 ? 5:2,
						animation: {
							enable: this.model.properties.enableAnimation
						},
						name: uniqueueRowValues[k] + '(' + this.editedColumnNames[this.model.boundColumns.Value[l].uniqueColumnName] + ')',
						marker: {
							visible: false,
							dataLabel: {
								visible: this.model.properties.showDatalabels,
								font: { size: this.model.properties.datalabelFontSize, color: this.model.properties.datalabelcolor },
								position:'Inide'
							}
						},
						legendShape: this.model.properties.legendShape,
						emptyPointSettings: {
							mode: "Gap"
						},
						opacity: 0.7
					});
				}
			}

		} 
		else if (this.model.boundColumns.Value.length > 0 && this.model.boundColumns.Column.length > 0 && this.model.dataSource.length > 0) {
			this.bubbleDataMax = 0;
			this.bubbleDataMin = 1000000000000000;
			this.tempData = this.model.dataSource.sortASC(this.model.boundColumns.Column[0].uniqueColumnName);
			if(this.model.boundColumns.bSize.length > 0){
			for (var j = 0; j < this.tempData.length; j++) {
				if(this.tempData[j][this.model.boundColumns.bSize[0].uniqueColumnName] != null && this.tempData[j][this.model.boundColumns.bSize[0].uniqueColumnName] != undefined && this.tempData[j][this.model.boundColumns.bSize[0].uniqueColumnName] != '(Null)' && this.tempData[j][this.model.boundColumns.bSize[0].uniqueColumnName] != '(Blanks)'){
					if(this.bubbleDataMax<this.tempData[j][this.model.boundColumns.bSize[0].uniqueColumnName]){
						this.bubbleDataMax = this.tempData[j][this.model.boundColumns.bSize[0].uniqueColumnName];
					}
					if(this.bubbleDataMin>this.tempData[j][this.model.boundColumns.bSize[0].uniqueColumnName]){
						this.bubbleDataMin = this.tempData[j][this.model.boundColumns.bSize[0].uniqueColumnName];
					}
				} 
			}}
			for (var l = 0; l < this.model.boundColumns.Value.length; l++) {

				series.push({
					type: "Bubble",
					dataSource: this.getData(null, null, l),
					
					xName: "x",
					yName: "y",
					size: 'size',
					minRadius: 1,
					maxRadius: this.model.boundColumns.bSize.length > 0 ? 5:2,
					animation: {
						enable: this.model.properties.enableAnimation
					},
					name: this.editedColumnNames[this.model.boundColumns.Value[l].uniqueColumnName],
					marker: {
						visible: false,
						dataLabel: {
							visible: this.model.properties.showDatalabels,
							font: { size: this.model.properties.datalabelFontSize, color: this.model.properties.datalabelcolor },
							position:'Inide'
						}
					},
					legendShape: this.model.properties.legendShape,
					emptyPointSettings: {
						mode: "Gap"
					},
					opacity: 0.7,
				});
			}
		} else {
			series = [
				{
					type: "Bubble",
					dataSource: [
						{ x: 2000, y: 2, size: 1 }, { x: 2001, y: 1.5, size: 2 }, { x: 2002, y: 1, size: 3 },
						{ x: 2003, y: 1.8, size: 4 }, { x: 2004, y: 2.6, size: 5 }
					],
					animation: {
						enable: this.model.properties.enableAnimation
					},
					xName: "x",
					yName: 'y',
					size: 'size',
					opacity: 0.7,
					fill: "#1E90FF",
					marker: {
						visible: false,
						fill: "#1E90FF",
						height: 10,
						width: 10,
						name: 'text'
					},

				}
			];
		}
		return series;
	},
	
	convertSize0to10: function(value){
		return (((value - this.bubbleDataMin) * (5-1)) / (this.bubbleDataMax-this.bubbleDataMin)) + 1;
	},
	
	/* The getData method is called to get the data from the data source*/
	getData: function (rowValue, rowIndex, valIndex) {
		var data = [];
		var isDateField = false;
		var uniqueueColumnValues = [];
		var bubbleSizeColl = [];
		for (var j = 0; j < this.tempData.length; j++) {
			if (this.model.boundColumns.bSize.length == 0) {
				if (uniqueueColumnValues.indexOf(this.tempData[j][this.model.boundColumns.Column[0].uniqueColumnName]) == -1) {
					uniqueueColumnValues.push(this.tempData[j][this.model.boundColumns.Column[0].uniqueColumnName]);
					bubbleSizeColl.push(1)
				}
			} else if (this.model.boundColumns.bSize.length > 0) {
				if (uniqueueColumnValues.indexOf(this.tempData[j][this.model.boundColumns.Column[0].uniqueColumnName]) == -1) {
					uniqueueColumnValues.push(this.tempData[j][this.model.boundColumns.Column[0].uniqueColumnName]);
					if (this.tempData[j][this.model.boundColumns.bSize[0].uniqueColumnName] != null && this.tempData[j][this.model.boundColumns.bSize[0].uniqueColumnName] != undefined && this.tempData[j][this.model.boundColumns.bSize[0].uniqueColumnName] != "(Blanks)") {
						bubbleSizeColl.push(this.convertSize0to10(this.tempData[j][this.model.boundColumns.bSize[0].uniqueColumnName]));
					} else {
						bubbleSizeColl.push(0);
					}
				}
			}
		}
		for (var i = 0; i < uniqueueColumnValues.length; i++) {
			var yData = 0;
			for (var j = 0; j < this.tempData.length; j++) {
				if(rowIndex != null && rowValue != null){
					if (this.tempData[j][this.model.boundColumns.row[rowIndex].uniqueColumnName] == rowValue && this.tempData[j][this.model.boundColumns.Column[0].uniqueColumnName] == uniqueueColumnValues[i]) {
						yData += this.tempData[j][this.model.boundColumns.Value[valIndex].uniqueColumnName];
					}
				} else {
					if (this.tempData[j][this.model.boundColumns.Column[0].uniqueColumnName] == uniqueueColumnValues[i]) {
						yData += this.tempData[j][this.model.boundColumns.Value[valIndex].uniqueColumnName];
					}
				}
			}
			if (yData !== 0) {
				if (new Date(uniqueueColumnValues[i]) == "Invalid Date") {
					data.push({
						x: uniqueueColumnValues[i],
						y: yData,
						size: bubbleSizeColl[i]
					});
				} else {
					isDateField = true;
					data.push({
						x: uniqueueColumnValues[i],
						y: yData,
						size: bubbleSizeColl[i],
						date: new Date(uniqueueColumnValues[i])
					});
				}
			} else {
				if (new Date(uniqueueColumnValues[i]) == "Invalid Date") {
					data.push({
						x: uniqueueColumnValues[i],
						y: null,
						size: bubbleSizeColl[i]
					});
				} else {
					isDateField = true;
					data.push({
						x: uniqueueColumnValues[i],
						y: null,
						size: bubbleSizeColl[i],
						date: new Date(uniqueueColumnValues[i])
					});
				}
			}
		}
		if (!isDateField) {
			return data;
		} else {
			return data.sort(function (a, b) { return new Date(a.date) - new Date(b.date); });
		}
	},
	
	/* update method will be called when any update needs to be performed in the widget. */
	update: function (option) {
		this.element.innerHTML = "";
		this.init();
	}
});

Array.prototype.sortASC = function(key) {
	return this.slice(0).sort(function(a,b) {
		return (a[key] > b[key]) ? 1 : (a[key] < b[key]) ? -1 : 0;
	});
};