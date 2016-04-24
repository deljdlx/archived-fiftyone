
FiftyOne.Module.Editor=function()
{


	this.configuration=FiftyOne.Configuration.modules.editor;


	console.debug(this.configuration);



	this.theme='monokai';
	this.editorSelector='.mainEditor textarea';
	this.modules={};

	this.callbacks={
		'onKeyUp': function(event) {
		}.bind(this),

		'onKeyDown': function(event) {
			console.debug(event.keyCode);
		}.bind(this),

		'onSave':function() {
			console.debug(this.getHTML())
		}.bind(this)
	};

	this.rightPanelElement=$('.editorRightPanel');
	this.editorElement=$(this.editorSelector);
	FiftyOne.Module.Editor.instance=this;
};


FiftyOne.Module.Editor.Module={};

FiftyOne.Module.Editor.prototype.getHTML=function() {
	return this.editorElement.summernote('code');
};


FiftyOne.Module.Editor.prototype.setHTML=function(html) {
	return this.editorElement.summernote('code', html);
};




FiftyOne.Module.Editor.prototype.initialize=function() {
	this.originalHeight=$('.mainEditor').height();



	var saveButtom = function (context) {
		var ui = $.summernote.ui;

		// create button
		var button = ui.button({
			contents: '<i class="fa fa-floppy-o" style="font-size: 16px"/>',
			tooltip: 'Sauvegarder',
			click: function () {
				// invoke insertText method with 'hello' on editor module.
				//context.invoke('editor.insertText', 'hello');
				//console.debug(this.getHTML());
				this.callbacks.onSave();

			}.bind(this)
		});
		return button.render();   // return button as jquery object
	}.bind(this);


	var testButtom = function (context) {
		var ui = $.summernote.ui;

		// create button
		var button = ui.button({
			contents: '<i class="fa fa-floppy-o" style="font-size: 16px"/>',
			tooltip: 'Sauvegarder',
			click: function () {
				this.dialog('youpla boom');
			}.bind(this)
		});
		return button.render();   // return button as jquery object
	}.bind(this);








	this.editorElement.summernote({

		dialogsInBody: true,

		toolbar: [
			// [groupName, [list of button]]
			['paragraph', ['style', 'ol', 'ul', 'paragraph']],
			['style', ['bold', 'italic', 'underline', 'clear']],
			['insert', ['link']],
			/*['font', ['strikethrough', 'superscript', 'subscript']],*/
			/*['fontsize', ['fontsize']],*/
			['color', ['color']],
			['height', ['height']],
			['mybutton', ['save', 'testButtom']]
		],

		buttons: {
			save: saveButtom,
			testButtom: testButtom
		},



		popover: {
			image: [
				['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']],
				['float', ['floatLeft', 'floatRight', 'floatNone']],
				['remove', ['removeMedia']]
			],
			link: [
				['link', ['linkDialogShow', 'unlink']]
			],
			air: [
				['color', ['color']],
				['font', ['bold', 'underline', 'clear']],
				['para', ['ul', 'paragraph']],
				['table', ['table']],
				['insert', ['link', 'picture']]
			]
		},




		codemirror: {
			theme: this.theme
		},
		callbacks: {
			onKeydown: function(event) {
				this.callbacks['onKeyDown'](event);
			}.bind(this),
			onKeyup: function(event) {
				this.callbacks['onKeyUp'](event);
			}.bind(this),
			onInit: function() {
				$('.mainEditor header').append($('.note-toolbar'));
				this.autoResize();

				$('.note-btn.btn-codeview').click(function() {
					this.autoResize();
				}.bind(this))
			}.bind(this)
		}
	});



	$('.component').click(function(event) {


		var component=new FiftyOne.Module.Editor.Component(event.target);
		component.dialog();
		/*
		var element=event.target;
		this.dialog('coucou', $(element).data('component-name'));
		*/
	}.bind(this));

};


FiftyOne.Module.Editor.prototype.dialog=function(content, title) {
	$('<div>'+content+'</div>' ).dialog({
		title: title,
		close: function() {
			$(this).dialog('destroy').remove()
		}
	});
};


FiftyOne.Module.Editor.prototype.autoResize=function() {
	$('.note-editable.panel-body').height(
		this.originalHeight-$('.mainEditor header').height()-$('.mainEditor footer').height()-30
	)
};





FiftyOne.Module.Editor.prototype.loadModule=function(name, url) {

	FiftyOne.ajax({
		url: 'source/class/FiftyOne/Module/'+url,
		success: function(data) {
			this.modules[name]=new FiftyOne.Module.Editor.Module[name](this);
			this.modules[name].initialize();

		}.bind(this)
	});
};


$(document).ready(function() {
	var test=new FiftyOne.Module.Editor();
	test.initialize();
	//test.loadModule('Demo', 'Editor/Module/Demo/Demo.js');

});

