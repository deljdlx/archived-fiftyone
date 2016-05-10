FiftyOne.Module.Editor=function(workspace)
{

	this.workspace=workspace;
	this.configuration=FiftyOne.Configuration.modules.editor;


	this.theme=this.configuration.options.theme;
	this.modules={};


	this.editorElement=null;


	this.callbacks={
		'onKeyDown': this.configuration.events.keyDown.bind(this),
		'onKeyUp': this.configuration.events.keyUp.bind(this),
		'onSave':this.configuration.events.save.bind(this)
	};

	FiftyOne.Module.Editor.instance=this;
};


FiftyOne.Module.Editor.Module={};

FiftyOne.Module.Editor.prototype.getHTML=function() {
	return this.editorElement.summernote('code');
};


FiftyOne.Module.Editor.prototype.setHTML=function(html) {
	return this.editorElement.summernote('code', html);
};




FiftyOne.Module.Editor.prototype.initialize=function(container) {


	FiftyOne.ajax({
		url: this.configuration.actions.getCSSList,
		success:function(list) {

			console.debug(list);

			for(var i=0; i<list.length; i++) {
				console.debug(list[i].url);
				this.importCSS(list[i].url, list[i].name);
			}
		}.bind(this)
	})

	this.editorElement=$(container);

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

		toolbar: this.configuration.options.toolbar,

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
			onKeydown:  this.configuration.events.keyDown.bind(this),
			onKeyup:  this.configuration.events.keyUp.bind(this).bind(this),
			onInit: function() {
				$('.mainEditor header').append($('.note-toolbar'));
				this.autoResize();

				$('.note-btn.btn-codeview').click(function() {
					this.autoResize();
				}.bind(this))
			}.bind(this)
		}
	});


	this.initializeComponents();

};


FiftyOne.Module.Editor.prototype.initializeComponents=function() {


	$('.component').click(function(event) {



	var component=FiftyOne.getComponentByElement(event.target, function() {
		alert(1);
	});




		/*
		var component=new FiftyOne.Module.Editor.Component(event.target);
		component.dialog();
		*/



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



FiftyOne.Module.Editor.prototype.importCSS=function(url, name) {
	return this.workspace.importCSS(url, name);
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


