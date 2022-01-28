//@ui5-bundle webapp/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"webapp/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent"],function(t){"use strict";return t.extend("webapp.Component",{metadata:{manifest:"json"},init:function(){t.prototype.init.apply(this,arguments)}})});
},
	"webapp/Controller/App.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast"],function(e,n){return e.extend("webapp.controller.App",{})});
},
	"webapp/View/App.view.xml":'<mvc:View \r\n    xmlns="sap.m"\r\n    xmlns:mvc="sap.ui.core.mvc"\r\n    displayBlock="true" \r\n    controllerName="webapp.controller.app" \r\n    ><App><pages><Page title="Agenda"><content><IconTabBar><items><IconTabFilter text="Contatos"><Toolbar><SearchField /></Toolbar><Panel width="auto" class="sapUiResponsiveMargin"><headerToolbar><Toolbar height="3rem"><Title text="Todos os Contatos:"/><ToolbarSpacer /></Toolbar></headerToolbar></Panel></IconTabFilter><IconTabFilter text="Adicionar"></IconTabFilter><IconTabFilter text="Alterar"></IconTabFilter><IconTabFilter text="Remover"></IconTabFilter></items></IconTabBar></content></Page></pages></App></mvc:View>\r\n',
	"webapp/index.js":function(){sap.ui.define(["sap/ui/core/mvc/XMLView"],function(e){"use strict";e.create({viewName:"Quickstart.App"}).then(function(e){e.placeAt("content")})});
},
	"webapp/manifest.json":'{"_version":"1.3.0","sap.app":{"_version":"1.3.0","id":"webapp","type":"application","title":"{{appTitle}}","description":"{{appDescription}}","applicationVersion":{"version":"1.0.0"}},"sap.ui":{"_version":"1.3.0","technology":"UI5","deviceTypes":{"desktop":true,"tablet":true,"phone":true},"supportedThemes":["sap_bluecrystal"]},"sap.ui5":{"_version":"1.2.0","rootView":{"viewName":"webapp.view.App","type":"XML","id":"app"},"autoPrefixId":true,"dependencies":{"minUI5Version":"1.34","libs":{"sap.ui.core":{"minVersion":"1.34.0"},"sap.m":{"minVersion":"1.34.0"},"sap.ui.layout":{"minVersion":"1.34.0"}}},"contentDensities":{"compact":true,"cozy":true},"models":{"address":{"type":"sap.ui.model.json.JSONModel","uri":"models/address.json"}}}}'
}});
