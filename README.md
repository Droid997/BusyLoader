# BusyLoader-SAP/OpenUI5 custom control 🔵
 Custom Busy Indicator which can be easily integered with openUI5

BusyLoader is a openUI5 custom control, If you dont like the traditional Busy Indicatior which comes from the box this BusyLoader is what you are looking for.

### Initialize
- Place  `BusyLoader.js` and  `BusyLoader.css` inside `resources/sap/ui/core/`

### Properties
|Name|Type|Default|
|----|----|----|
|	visible		|	boolean		|	false	|
|		size	|sap.ui.core.BusyIndicatorSize|Medium|
|	speed	|	float	|	2	|

### Usage
````
<mvc:View
	height="100%"
	xmlns:mvc="sap.ui.core.mvc"
	xmlns:core="sap.ui.core"
	controllerName="Dishanth.controller.group"
	xmlns="sap.m">
	
	<core:BusyLoader id="busy" size="Small" speed="2" />
	
	
</mvc:View>
````

### Screenshots
#### Small
![](screens/small.png?raw=true "Small")

#### Medium
![](screens/medium.png?raw=true "Medium")

#### Large
![](screens/large.png?raw=true "Large")
