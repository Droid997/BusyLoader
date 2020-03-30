sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {
    "use strict";
    return Control.extend("sap.ui.control.BusyLoader", {
        metadata: {
            properties: {
                visible: { type: "boolean", defaultValue: false },
                size: { type: "sap.ui.core.BusyIndicatorSize", defaultValue: "Medium" },
                speed:{type: "float", defaultValue: 2}

            },
        },
        init:function(){
            var libraryPath = jQuery.sap.getModulePath("sap.ui.core");
            jQuery.sap.includeStyleSheet(libraryPath + "/BusyLoader.css"); 
        },
        onAfterRendering: function (event) {
            var srcControl = event.srcControl;
            this._caluclateBorder(srcControl);
            if(sap.ui.core.Control.prototype.onAfterRendering) {
                sap.ui.core.Control.prototype.onAfterRendering.apply(this,arguments); 
           }
        },
        renderer: function (oRM, oControl) {
           
            oRM.openStart("div", oControl);
            var cls = " customBusyLoader ";
            if (oControl.getVisible())
                cls += " customBusyLoaderVisible ";
            else
                cls += " customBusyLoaderNotVisible ";
            oRM.write("class=\""+cls+"\"");
            oRM.writeControlData(oControl);
            oRM.write(">");
            oRM.write("<div class=spinner");
            oRM.write("/>");

        },
        _caluclateBorder: function (oControl) {
            var parentDom = oControl.getDomRef();
            var childDom = parentDom.children[0];
            var child = $(childDom);
            var borderRatio = 0.133;
            var size = oControl.getSize();
            var borerSize;
            switch (size) {
                case "Small":
                    borerSize = 10;
                    break;
                case "Large":
                    borerSize = 20;
                    break;
                default:
                    borerSize = 15;
                    break;
            }
            var actualRatio = borerSize * borderRatio;
            child.css("width", actualRatio + "rem");
            child.css("height", actualRatio + "rem");
            child.css("border", actualRatio + "px solid #f3f3f3");
            child.css("border-top", actualRatio + "px solid #3498db");
            child.css("animation", "spin "+oControl.getSpeed() + "s linear infinite");
        }

    });
});