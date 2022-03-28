/* Register the widget in dashboard.*/
bbicustom.dashboard.registerWidget({

	guid: "9f54d639-f653-40e7-8a8b-f42d6d233857",

	widgetName: "ScatterChart",

	/* init method will be called when the widget is initialized */
	init: function () {
		this.widget = document.createElement("div");
		this.widget.setAttribute("id", this.element.getAttribute("id") + "_widget");
		this.element.appendChild(this.widget);
		if(this.model.boundColumns.Value.length > 0 && this.model.dataSource.length > 0){
			this.designId = $(this.element).closest(".e-customwidget-item").attr("id").split("_" + this.model.widgetId)[0];
			this.designerObj = $("#" + this.designId).data("BoldBIDashboardDesigner");
			this.formattingInfo = {};
			this.editedColumnNames = {};
			var widgetInstance = $(this.element).closest(".e-customwidget-item").data("widgetInstance");
			for(var j = 0; j<widgetInstance.dataGroupInfo.FieldContainers.length; j++){
				if(widgetInstance.dataGroupInfo.FieldContainers[j].FieldInfos.length > 0 && widgetInstance.dataGroupInfo.FieldContainers[j].FieldInfos.length > 0){
					var length = widgetInstance.dataGroupInfo.FieldContainers[j].FieldInfos.length;
					for(var i = 0; i < length; i++){
						this.editedColumnNames[widgetInstance.dataGroupInfo.FieldContainers[j].FieldInfos[i].UniqueColumnName] = widgetInstance.dataGroupInfo.FieldContainers[j].FieldInfos[i].IsDisplayNameEdited ? widgetInstance.dataGroupInfo.FieldContainers[j].FieldInfos[i].DisplayName : widgetInstance.dataGroupInfo.FieldContainers[j].FieldInfos[i].Name;
						this.formattingInfo[widgetInstance.dataGroupInfo.FieldContainers[j].FieldInfos[i].UniqueColumnName] = widgetInstance.dataGroupInfo.FieldContainers[j].FieldInfos[i].MeasureFormatting;
					}
				}
			}
		}
		this.chart = new ej2ScatterChart.charts.Chart({
			width: this.element.clientWidth.toString(),
			height: this.element.clientHeight.toString(),
			primaryXAxis: {
				valueType: this.getCategory(),
				edgeLabelPlacement: "Shift",
				majorGridLines: { width: this.model.properties.showGridLineForXaxis ? 1 : 0 },
				labelIntersectAction: this.model.properties.labelOverflowMode,
				title: this.model.properties.showCategoryAxisTitle ? this.model.properties.showCategoryAxisTitletext : "",
				visible: this.model.properties.showCategoryAxis,
				labelRotation: this.model.properties.labelRotation,
				labelStyle: { size: this.model.properties.xlabelFontSize }
			},
			primaryYAxis: {
				majorGridLines: { width: this.model.properties.showGridLineForYaxis ? 1 : 0 },
				visible: this.model.properties.showPrimaryAxis,
				labelStyle: { size: this.model.properties.ylabelFontSize },
				title: this.model.properties.showPrimaryAxisTitle ? this.model.properties.showPrimaryAxisTitletext : "",
				labelIntersectAction: "Hide"
			},
			legendSettings: { visible: this.model.properties.showLegend, position: this.model.properties.legendPosition },
			tooltip: this.tooltipEnable(),
			series: this.getSeries(),
			pointClick: $.proxy(this.pointClick, this),
			textRender: $.proxy(this.textRender, this),
			tooltipRender: $.proxy(this.tooltipRender, this),
			axisLabelRender: $.proxy(this.axisLabelRender, this),
		});
		this.chart.appendTo('#' + this.element.getAttribute("id") + "_widget");
		$('#' + this.element.getAttribute("id") + "_widget").closest('.e-customwidget-element').css({'background':"transparent"});
		$("#" +this.element.id+ "_widget_ChartBorder").attr("fill","transparent");
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
	
	/*To enable tooltip*/
	tooltipEnable: function(){
		if (this.model.dataSource.length > 0 && this.model.boundColumns.Value.length > 0){
			return {
				enable: true,
				template: "<div>Text</div>"
			};
		}
		else{
			return {
				enable: true,
			};
		}
	},

	/*tooltipRender method is used for rendering tooltip*/
	tooltipRender: function (args) {
		debugger;
		if ($("#" + this.element.id).length > 0 && this.model.dataSource.length>0) {
			var tooltipTemplate = '<div style="background:white;border: 1px solid #d4d4d4";><table><tr><td>X : </td><td>' + args.point.x + '</td></tr>' + '<tr><td>Y : </td><td>' + args.point.y + '</td></tr></table>';
			if (this.model.boundColumns.Tooltip.length > 0 && this.model.boundColumns.Column.length > 0 && this.model.boundColumns.Value.length > 0) {
				tooltipTemplate = '<div style="background:white;border: 1px solid #d4d4d4;box-shadow: 0 2px 4px 0 rgba(0,0,0,.12);border-radius: 4px;padding: 5px;"><table>'
					+ '<tr><td class="column-name" style="text-align:right;">' + this.editedColumnNames[this.model.boundColumns.Column[0].uniqueColumnName] + ' :</td><td><b>' +args.series.dataSource[args.data.pointIndex]["x"]+ '</b></td></tr>'
					+ '<tr><td class="column-name" style="text-align:right;">' + this.editedColumnNames[this.model.boundColumns.Value[(args.series.index % this.model.boundColumns.Value.length)].uniqueColumnName] + ' :</td><td><b>' + this.formatTooltipNumber(args.series.dataSource[args.data.pointIndex]["y"], (args.series.index % this.model.boundColumns.Value.length)) + '</b></td></tr>'
					+ '<tr><td class="column-name" style="text-align:right;">' + this.editedColumnNames[this.model.boundColumns.Tooltip[0].uniqueColumnName] + ' :</td><td><b>' + this.formatTooltipNumber(args.series.dataSource[args.data.pointIndex]["tooltiptext"]) + '</b></td></tr>'
					+ '</table></div>';
			}
			else if(this.model.boundColumns.Column.length > 0 && this.model.boundColumns.Value.length > 0){
				tooltipTemplate = '<div style="background:white;border: 1px solid #d4d4d4;box-shadow: 0 2px 4px 0 rgba(0,0,0,.12);border-radius: 4px;padding: 5px;"><table>'
					+ '<tr><td class="column-name" style="text-align:right;">' + this.editedColumnNames[this.model.boundColumns.Column[0].uniqueColumnName] + ' :</td><td><b>' +args.series.dataSource[args.data.pointIndex]["x"]+ '</b></td></tr>'
					+ '<tr><td class="column-name" style="text-align:right;">' + this.editedColumnNames[this.model.boundColumns.Value[(args.series.index % this.model.boundColumns.Value.length)].uniqueColumnName] + ' :</td><td><b>' + this.formatTooltipNumber(args.series.dataSource[args.data.pointIndex]["y"], (args.series.index % this.model.boundColumns.Value.length)) + '</b></td></tr>'
					+ '</table></div>';
			}
			args.template = tooltipTemplate;
		}
	},
	
	/*formatTooltipNumber method is for formatting the measure values*/
	formatTooltipNumber: function (number, seriesIndex) {
		debugger;
		if(seriesIndex != null && seriesIndex != undefined){
			var formatInfo = JSON.parse(JSON.stringify(this.formattingInfo[this.model.boundColumns.Value[seriesIndex].uniqueColumnName]));
		var number = BoldBIDashboard.DashboardUtil.formattedText(number, formatInfo.Culture, formatInfo.DecimalPoints, formatInfo.FormatType, formatInfo.DecimalSeparator, formatInfo.GroupSeparator, formatInfo.Prefix, formatInfo.Suffix, formatInfo.Unit, true, this.designerObj);
		}
		else if(!isNaN(number)){
			var formatInfo = JSON.parse(JSON.stringify(this.formattingInfo[this.model.boundColumns.Tooltip[0].uniqueColumnName]));
			var number = BoldBIDashboard.DashboardUtil.formattedText(number, formatInfo.Culture, formatInfo.DecimalPoints, formatInfo.FormatType, formatInfo.DecimalSeparator, formatInfo.GroupSeparator, formatInfo.Prefix, formatInfo.Suffix, formatInfo.Unit, true, this.designerObj);
		}
		return number;
	},
	
	/*axisLabelRender is used to format the axis labels*/
	axisLabelRender: function (args) {
		if(args.axis.orientation == 'Vertical'){
			this.chartInterval = args.axis.actualRange.interval;
		}
		if ($("#" + this.element.id).length > 0) {
			if (this.model.boundColumns.Value.length > 0 && this.model.dataSource.length > 0) {
				if (args.axis.orientation == "Vertical") {
					var formatInfo = JSON.parse("{\"Culture\":\"auto\",\"DecimalPoints\":2,\"FormatType\":\"Number\",\"Prefix\":\"\",\"Suffix\":\"\",\"DecimalSeparator\":{\"AliasValue\":\".\",\"CurrentValue\":\".\"},\"GroupSeparator\":{\"AliasValue\":\",\",\"CurrentValue\":\",\"},\"Unit\":\"Auto\"}");
					args.text = BoldBIDashboard.DashboardUtil.formattedText(Number(args.text), formatInfo.Culture, formatInfo.DecimalPoints, formatInfo.FormatType, formatInfo.DecimalSeparator, formatInfo.GroupSeparator, formatInfo.Prefix, formatInfo.Suffix, formatInfo.Unit, true, this.designerObj);
				}
				else if (args.axis.orientation == "Horizontal") {
					if(!isNaN(args.text)){
						var formatInfo = JSON.parse("{\"Culture\":\"auto\",\"DecimalPoints\":2,\"FormatType\":\"Number\",\"Prefix\":\"\",\"Suffix\":\"\",\"DecimalSeparator\":{\"AliasValue\":\".\",\"CurrentValue\":\".\"},\"GroupSeparator\":{\"AliasValue\":\",\",\"CurrentValue\":\",\"},\"Unit\":\"Auto\"}");
						args.text = BoldBIDashboard.DashboardUtil.formattedText(Number(args.text), formatInfo.Culture, formatInfo.DecimalPoints, formatInfo.FormatType, formatInfo.DecimalSeparator, formatInfo.GroupSeparator, formatInfo.Prefix, formatInfo.Suffix, formatInfo.Unit, true, this.designerObj);
					}
				}
			}
		}
	},

	/*textRender method is to format the text displayed when data labels are enabled*/
	textRender: function (args) {
		if(this.model.dataSource.length > 0 && this.model.boundColumns.Value.length > 0){
				var formatInfo = this.formattingInfo[this.model.boundColumns.Value[args.series.index].uniqueColumnName];
				args.text = BoldBIDashboard.DashboardUtil.formattedText(Number(args.text), formatInfo.Culture, formatInfo.DecimalPoints, formatInfo.FormatType, formatInfo.DecimalSeparator, formatInfo.GroupSeparator, formatInfo.Prefix, formatInfo.Suffix, formatInfo.Unit, true, this.designerObj);
		}
	},

	/*getCategory method is used to get the type of axis*/
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
		if (this.model.boundColumns.Value.length > 0 && this.model.dataSource.length > 0) {
			for (var i = 0; i < this.model.boundColumns.Value.length; i++) {
				series.push({
					type: "Scatter",
					dataSource: this.getData(i),
					xName: "x",
					yName: 'y',
					animation: { enable: this.model.properties.enableAnimation },
					name: this.editedColumnNames[this.model.boundColumns.Value[i].uniqueColumnName],
					fill: this.model.properties['cc' + (i + 1)],
					marker: { 
						visible: false, fill: this.model.properties['cc' + (i + 1)], 
						height: Number(this.model.properties.bubbleSize), 
						width: Number(this.model.properties.bubbleSize), 
						dataLabel: { 
							visible: this.model.properties.showDatalabels, 
							name: 'text', 
							font: {size: this.model.properties.datalabelFontSize, color:  this.model.properties.datalabelColor}
						} 
					}
				});
			}
		} else {
			return [
				{
					type: "Scatter",
					dataSource: [
						{ x: 'Item1', y: 2, size: 1 }, { x: "Item2", y: 1.5, size: 2 }, { x: "Item3", y: 1, size: 3 },
						{ x: 'Item4', y: 1.8, size: 4 }, { x: "Item5", y: 2.6, size: 5 }
					],
					xName: "x",
					yName: 'y',
					fill: "#1E90FF",
					marker: { visible: false, fill: "#1E90FF", height: 10, width: 10, name: 'text' }
				}
			];
		}
		return series;
	},

	/* The getData method is called to get the data from the data source*/
	getData: function (valColIndex) {
		var data = [];
		if (this.model.boundColumns.Column.length > 0 && this.model.boundColumns.Tooltip.length > 0) {
			for (var j = 0; j < this.model.dataSource.length; j++) {
				data.push({
					x: this.model.dataSource[j][this.model.boundColumns.Column[0].uniqueColumnName],
					y: this.model.dataSource[j][this.model.boundColumns.Value[valColIndex].uniqueColumnName],
					tooltiptext: this.model.dataSource[j][this.model.boundColumns.Tooltip[0].uniqueColumnName]
				});
			}
		} else if (this.model.boundColumns.Column.length > 0) {
			for (var j = 0; j < this.model.dataSource.length; j++) {
				data.push({
					x: this.model.dataSource[j][this.model.boundColumns.Column[0].uniqueColumnName],
					y: this.model.dataSource[j][this.model.boundColumns.Value[valColIndex].uniqueColumnName]
				});
			}
		} else {
			data.push({ x: this.model.boundColumns.Value[valColIndex].columnName, y: this.model.dataSource[0][this.model.boundColumns.Value[valColIndex].uniqueColumnName] });
		}
		return data;
	},
	
	isNullOrUndefined: function (value) {
		return value === undefined || value === null;
	},

	/* update method will be called when any update needs to be performed in the widget. */
	update: function (option) {
		/* update type will be 'resize' if the widget is being resized. */
		if (option.type == "resize") {
			$(this.widget).css({'width':option.size.width, 'height': option.size.height});
			this.chart.width = this.element.clientWidth.toString();
			this.chart.height = this.element.clientHeight.toString();
			this.chart.refresh();
		}
		/* update type will be 'refresh' when the data is refreshed. */
		else if (option.type == "refresh") {
			this.element.innerHTML = "";
			this.init();
		}
		/* update type will be 'propertyChange' when any property value is changed in the designer. */
		else if (option.type === "propertyChange") {
			switch (option.property.name) {
				case "showGridLineForXaxis":
				case "showGridLineForYaxis":
				case "enableAnimation":
				case "showLegend":
				case "showDatalabels":
				case 'datalabelFontSize':
				case 'datalabelColor':
				case "showCategoryAxis":
				case "showCategoryAxisTitle":
				case "showCategoryAxisTitletext":
				case "labelOverflowMode":
				case "labelRotation":
				case "xlabelFontSize":
				case "showPrimaryAxis":
				case "showPrimaryAxisTitle":
				case "showPrimaryAxisTitletext":
				case "ylabelFontSize":
				case "cc1":
				case "cc2":
				case "cc3":
				case "cc4":
				case "cc5":
				case "legendPosition":
				case "bubbleSize":
					this.element.innerHTML = "";
					this.init();
			}
		}
	}
});