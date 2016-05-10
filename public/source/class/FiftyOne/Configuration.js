FiftyOne.Configuration={

	modules: {
		workspace: {
			selectors: {
				rightPanel: '.editorRightPanel',
				editor: '.mainEditor textarea'
			},
		},
		editor: {
			options: {
				theme: 'monokai',
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
				]
			},
			selectors: {
				rightPanel: '.editorRightPanel',
				editor: '.mainEditor textarea'
			},
			events: {
				keyDown: function (event) {
					console.debug(event.keyCode);
				},
				keyUp: function (event) {
					console.debug(event.keyCode);
				},
				save: function () {
					console.debug(this.getHTML())
				}
			},
			actions: {
				saveURL: 'module/editor/saveHTML',
				getCSSList: 'module/editor/getCSSList'
			}
		}
	}
};


