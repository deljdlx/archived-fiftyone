FiftyOne.Module.Workspace=function()
{
	this.configuration=FiftyOne.Configuration.modules.workspace;

	this.rightPanelElement=$(this.configuration.selectors.rightPanel);
	this.editorElement=$(this.configuration.selectors.editor);



	this.importedCSS={};



};




FiftyOne.Module.Workspace.prototype.run=function() {
	this.editor=new FiftyOne.Module.Editor(this);
	this.editor.initialize(this.editorElement);

	//this.editor.importCSS('http://www.capital.fr/public/capital/css/article.css');

};

FiftyOne.Module.Workspace.prototype.importCSS=function(url, name) {
	if(!name) {
		name=Object.keys(this.importedCSS).length;
	}
	this.importedCSS[name]=url;

	$('head').append('<link rel="stylesheet" href="'+url+'"/>');

}