
FiftyOne.Module.Editor.Component=function(element)
{

	this.element=element;
	this.componentName=$(element).data('component-name');
}




FiftyOne.Module.Editor.Component.prototype.dialog=function() {

	var content='';

	$('<div>'+content+'</div>' ).dialog({
		modal: true,
		title: this.componentName,
		close: function() {
			$(this).dialog('destroy').remove()
		}
	});

}


