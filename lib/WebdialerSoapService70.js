
//------------------------------------------------------------------------------
// <autogenerated>
//     This code was generated by wsdl2js tool.
//     Runtime Version: 0.1
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </autogenerated>
//------------------------------------------------------------------------------
	//remote web server request object
	var xmlHttpRequest;
	function getHttpRequest(){
		var http_request;
		if (window.XMLHttpRequest) { // Mozilla, Safari, ...
			 http_request = new XMLHttpRequest();
		}else if (window.ActiveXObject) { // IE
			 http_request = new ActiveXObject("Microsoft.XMLHTTP");
		 }else{
			 alert("Your browser doesn't support to create XMLHttp Object,Some content on this page can't show.");
			 return null;
		}
		 return http_request;
	}

	// define a class to encapsulate invoking of web service
	// the class name is the name of web service
	// url -  location of access web service.
	function WDSoapInterfaceService(url){
		if (url==undefined){
			//url="https://ccmedpuba.igrupobbva:8443/webdialer/services/WebdialerSoapService70";
			url="http://localhost:8080/ServletProxy/Proxy";
		}
		this.url = url
		this.makeCallSoap=makeCallSoap
		this.endCallSoap=endCallSoap
		this.getProfileSoap=getProfileSoap
		this.isClusterUserSoap=isClusterUserSoap
		this.getProfileDetailSoap=getProfileDetailSoap
		this.getPrimaryLine=getPrimaryLine
	}


	// web service method
	function makeCallSoap(/*Credential*/ in0,/*string*/ in1,/*UserProfile*/ in2) {
		soapMess ="<?xml version=\"1.0\" encoding=\"utf-8\"?>"
		+"<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">"
		+"<soap:Body>"
		+"<makeCallSoap xmlns=\"urn:WD70\">"
		soapMess += "<in0>"+in0+"</in0>"
		soapMess += "<in1>"+in1+"</in1>"
		soapMess += "<in2>"+in2+"</in2>"
		soapMess +="</makeCallSoap>"
		soapMess +="</soap:Body></soap:Envelope>"
		xmlHttpRequest = getHttpRequest()
		xmlHttpRequest.onreadystatechange = makeCallSoap_callback
		xmlHttpRequest.open("POST",this.url,true);
		xmlHttpRequest.setRequestHeader("SOAPAction","");
		xmlHttpRequest.setRequestHeader("Content-Type","text/xml; charset=utf-8");
		xmlHttpRequest.send(soapMess);
	}

	// this function will be called when result return from web service.
	function makeCallSoap_callback(){
	// return value from web service is an xml document.
		var rawData;
		if (xmlHttpRequest.readyState == 4){
			if (xmlHttpRequest.status == 200){
				rawdata = xmlHttpRequest.responseXML;
				var resultNode = rawdata.documentElement.firstChild.firstChild.firstChild;
				var resultValue = resultNode
				// Now,you can process the returnValue in function makeCallSoap_handler
				makeCallSoap_handler(resultValue);
			}else{
				alert("web service response error:" + xmlHttpRequest.status + "," + xmlHttpRequest.statusText);
			}
		}
	}

	// process result value of method makeCallSoap
	function makeCallSoap_handler(/*CallResponse*/ resultValue) {

	}



	// web service method
	function endCallSoap(/*Credential*/ in0,/*UserProfile*/ in1) {
		soapMess ="<?xml version=\"1.0\" encoding=\"utf-8\"?>"
		+"<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">"
		+"<soap:Body>"
		+"<endCallSoap xmlns=\"urn:WD70\">"
		soapMess += "<in0>"+in0+"</in0>"
		soapMess += "<in1>"+in1+"</in1>"
		soapMess +="</endCallSoap>"
		soapMess +="</soap:Body></soap:Envelope>"
		xmlHttpRequest = getHttpRequest()
		xmlHttpRequest.onreadystatechange = endCallSoap_callback
		xmlHttpRequest.open("POST",this.url,true);
		xmlHttpRequest.setRequestHeader("SOAPAction","");
		xmlHttpRequest.setRequestHeader("Content-Type","text/xml; charset=utf-8");
		xmlHttpRequest.send(soapMess);
	}

	// this function will be called when result return from web service.
	function endCallSoap_callback(){
	// return value from web service is an xml document.
		var rawData;
		if (xmlHttpRequest.readyState == 4){
			if (xmlHttpRequest.status == 200){
				rawdata = xmlHttpRequest.responseXML;
				var resultNode = rawdata.documentElement.firstChild.firstChild.firstChild;
				var resultValue = resultNode
				// Now,you can process the returnValue in function endCallSoap_handler
				endCallSoap_handler(resultValue);
			}else{
				alert("web service response error:" + xmlHttpRequest.status + "," + xmlHttpRequest.statusText);
			}
		}
	}

	// process result value of method endCallSoap
	function endCallSoap_handler(/*CallResponse*/ resultValue) {

	}



	// web service method
	function getProfileSoap(/*Credential*/ in0,/*string*/ in1) {
		soapMess ="<?xml version=\"1.0\" encoding=\"utf-8\"?>"
		+"<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">"
		+"<soap:Body>"
		+"<getProfileSoap xmlns=\"urn:WD70\">"
		soapMess += "<in0>"+in0+"</in0>"
		soapMess += "<in1>"+in1+"</in1>"
		soapMess +="</getProfileSoap>"
		soapMess +="</soap:Body></soap:Envelope>"
		xmlHttpRequest = getHttpRequest()
		xmlHttpRequest.onreadystatechange = getProfileSoap_callback
		xmlHttpRequest.open("POST",this.url,true);
		xmlHttpRequest.setRequestHeader("SOAPAction","");
		xmlHttpRequest.setRequestHeader("Content-Type","text/xml; charset=utf-8");
		xmlHttpRequest.send(soapMess);
	}

	// this function will be called when result return from web service.
	function getProfileSoap_callback(){
	// return value from web service is an xml document.
		var rawData;
		if (xmlHttpRequest.readyState == 4){
			if (xmlHttpRequest.status == 200){
				rawdata = xmlHttpRequest.responseXML;
				var resultNode = rawdata.documentElement.firstChild.firstChild.firstChild;
				var resultValue = resultNode
				// Now,you can process the returnValue in function getProfileSoap_handler
				getProfileSoap_handler(resultValue);
			}else{
				alert("web service response error:" + xmlHttpRequest.status + "," + xmlHttpRequest.statusText);
			}
		}
	}

	// process result value of method getProfileSoap
	function getProfileSoap_handler(/*GetConfigResponse*/ resultValue) {

	}



	// web service method
	function isClusterUserSoap(/*string*/ in0) {
		soapMess ="<?xml version=\"1.0\" encoding=\"utf-8\"?>"
		+"<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">"
		+"<soap:Body>"
		+"<isClusterUserSoap xmlns=\"urn:WD70\">"
		soapMess += "<in0>"+in0+"</in0>"
		soapMess +="</isClusterUserSoap>"
		soapMess +="</soap:Body></soap:Envelope>"
		xmlHttpRequest = getHttpRequest()
		xmlHttpRequest.onreadystatechange = isClusterUserSoap_callback
		xmlHttpRequest.open("POST",this.url,true);
		xmlHttpRequest.setRequestHeader("SOAPAction","");
		xmlHttpRequest.setRequestHeader("Content-Type","text/xml; charset=utf-8");
		xmlHttpRequest.send(soapMess);
	}

	// this function will be called when result return from web service.
	function isClusterUserSoap_callback(){
	// return value from web service is an xml document.
		var rawData;
		if (xmlHttpRequest.readyState == 4){
			if (xmlHttpRequest.status == 200){
				rawdata = xmlHttpRequest.responseXML;
				var resultNode = rawdata.documentElement.firstChild.firstChild.firstChild;
				var resultValue = resultNode
				// Now,you can process the returnValue in function isClusterUserSoap_handler
				isClusterUserSoap_handler(resultValue);
			}else{
				alert("web service response error:" + xmlHttpRequest.status + "," + xmlHttpRequest.statusText);
			}
		}
	}

	// process result value of method isClusterUserSoap
	function isClusterUserSoap_handler(/*boolean*/ resultValue) {

	}



	// web service method
	function getProfileDetailSoap(/*Credential*/ in0) {
		soapMess ="<?xml version=\"1.0\" encoding=\"utf-8\"?>"
		+"<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">"
		+"<soap:Body>"
		+"<getProfileDetailSoap xmlns=\"urn:WD70\">"
		soapMess += "<in0>"+in0+"</in0>"
		soapMess +="</getProfileDetailSoap>"
		soapMess +="</soap:Body></soap:Envelope>"
		xmlHttpRequest = getHttpRequest()
		xmlHttpRequest.onreadystatechange = getProfileDetailSoap_callback
		xmlHttpRequest.open("POST",this.url,true);
		xmlHttpRequest.setRequestHeader("SOAPAction","");
		xmlHttpRequest.setRequestHeader("Content-Type","text/xml; charset=utf-8");
		xmlHttpRequest.send(soapMess);
	}

	// this function will be called when result return from web service.
	function getProfileDetailSoap_callback(){
	// return value from web service is an xml document.
		var rawData;
		if (xmlHttpRequest.readyState == 4){
			if (xmlHttpRequest.status == 200){
				rawdata = xmlHttpRequest.responseXML;
				var resultNode = rawdata.documentElement.firstChild.firstChild.firstChild;
				var resultValue = resultNode
				// Now,you can process the returnValue in function getProfileDetailSoap_handler
				getProfileDetailSoap_handler(resultValue);
			}else{
				alert("web service response error:" + xmlHttpRequest.status + "," + xmlHttpRequest.statusText);
			}
		}
	}

	// process result value of method getProfileDetailSoap
	function getProfileDetailSoap_handler(/*ConfigResponseDetail*/ resultValue) {
		alert(resultValue);
	}



	// web service method
	function getPrimaryLine(/*Credential*/ in0) {
		soapMess ="<?xml version=\"1.0\" encoding=\"utf-8\"?>"
		+"<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">"
		+"<soap:Body>"
		+"<getPrimaryLine xmlns=\"urn:WD70\">"
		soapMess += "<in0>"+in0+"</in0>"
		soapMess +="</getPrimaryLine>"
		soapMess +="</soap:Body></soap:Envelope>"
		xmlHttpRequest = getHttpRequest()
		xmlHttpRequest.onreadystatechange = getPrimaryLine_callback
		xmlHttpRequest.open("POST",this.url,true);
		xmlHttpRequest.setRequestHeader("SOAPAction","");
		xmlHttpRequest.setRequestHeader("Content-Type","text/xml; charset=utf-8");
		xmlHttpRequest.send(soapMess);
	}

	// this function will be called when result return from web service.
	function getPrimaryLine_callback(){
	// return value from web service is an xml document.
		var rawData;
		if (xmlHttpRequest.readyState == 4){
			if (xmlHttpRequest.status == 200){
				rawdata = xmlHttpRequest.responseXML;
				var resultNode = rawdata.documentElement.firstChild.firstChild.firstChild;
				var resultValue = resultNode.firstChild.nodeValue
				// Now,you can process the returnValue in function getPrimaryLine_handler
				getPrimaryLine_handler(resultValue);
			}else{
				alert("web service response error:" + xmlHttpRequest.status + "," + xmlHttpRequest.statusText);
			}
		}
	}

	// process result value of method getPrimaryLine
	function getPrimaryLine_handler(/*string*/ resultValue) {

	}



