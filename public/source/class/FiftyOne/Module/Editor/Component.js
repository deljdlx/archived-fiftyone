
FiftyOne.Module.Editor.Component=function(element)
{

	this.element=element;
	this.type=$(element).data('component-type');
	this.name=$(element).data('component-name');
}




FiftyOne.Module.Editor.Component.prototype.dialog=function() {

	var content='';

	$('<div>'+content+'</div>' ).dialog({
		modal: true,
		width: '50%',
		title: this.name+' ('+this.type+')',
		close: function() {
			$(this).dialog('destroy').remove()
		}
	});

}


