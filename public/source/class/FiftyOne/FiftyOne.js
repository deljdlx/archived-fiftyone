FiftyOne= {
	Module:{},
	Component: {},
	Configuration: {}
};


FiftyOne.do=function(callback) {
	callback();
};



FiftyOne.getComponentByElement=function(element, callback) {

	var componentType=$(element).data('component-type');


	var component=FiftyOne.Component[componentType];


	if(typeof(componentName)=='undefined') {


		this.loadComponent(componentType);

		/*
		this.do(function() {
			console.log(element);
		})
		*/
	}


};



FiftyOne.loadComponent=function(componentTypeName) {
	
	alert(componentTypeName);
}



FiftyOne.ajax=function(options) {
	return $.ajax(options);
}

