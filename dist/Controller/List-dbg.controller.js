/*sap.ui.define([
		'jquery.sap.global',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(jQuery, Controller, JSONModel) {
	"use strict";
 
	var ListController = Controller.extend("webapp.controller.List", {
 
		onInit : function (evt) {
			// set explored app's demo model on this sample
			var oModel = new JSONModel(jQuery.sap.getModulePath("sap.ui.demo.mock", "/contatos.json"));
			this.getView().setModel(oModel);
		}
	});
 
 
	return ListController;
 
});*/

sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",

], function (Controller, MessageToast) {

	return Controller.extend("webapp.controller.list", {
		//let oCalendar=this.byId("calendar");
		/*onPress:function (){
		var oCalendar = this.byId('Contatos');
		var selectedDates=oCalendar.getSelectedDates();
		alert(selecionado)
		 if (selecionado!=0)
				MessageToast.show(selecionado[0].getStartDate());
		
		}*/
	});

});