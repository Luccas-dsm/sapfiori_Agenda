sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	//'jquery.sap.global',
	'sap/ui/model/json/JSONModel'
], 
	function (Controller ) {
		"use strict";
	return Controller.extend("webapp.controller.App",{

		onInit: function () 
		{
			//Comentário: sUrl é a url do sua API. ex: localhost:433/Contatos
			var sUrl = "https://localhost:5051/api/contatos";

			//that é a referência para seu código no controlador
			var that = this;

			//jQuery é o objeto que faz consultas ao sua API usando os métodos GET, POST, PUT, DELETE
			//no caso abaixo vc está usando o método GET
			var aData = jQuery.ajax({
				type: "GET",
				contentType: "application/json",
				url: sUrl,
				dataType: "json",
				success: function (data, textStatus, jqXHR) {
					//data é o json de retorno da sua api
					//com base nos seus estudos vc apreendeu que deve definir o modelo de dados na view como abaixo:
					that.getView().setModel(new JSONModel(data));
				},
				error: function (data, textStatus, jqXHR) {
					//Caso ocorra um erro ao solicitar dados a função error será chamada                    
					console.log(textStatus);
				}
			});

		}

	});
}); 