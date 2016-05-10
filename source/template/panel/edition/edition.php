<style>



	.mainEditor .panel {
		margin-bottom: 0;
	}
	.mainEditor {
		flex: 1;
		display: flex;
		flex-direction: column;
		background-color:#FF0;
	}




	.mainEditor .main {
		overflow: auto;
		flex:auto;
		display: flex;
		flex-direction: row;
	}





	.mainEditor .main .note-editor {
		flex:auto;
	}


	.mainEditor .main .editorRightPanel {
		width:300px;
		background-color:#FFF;
		overflow: auto;

	}


	.mainEditor header {
		background-color:#CCC;
		width:100%;
	}

	.mainEditor footer {
		background-color:#0F0;
	}



	button.btn.note-btn {
		border: solid 1px #AAA !important;
		border-radius: 5px;
		background-color:#FFF;
	}


	.modal-backdrop {
		z-index:100;
	}


</style>




<div class="mainEditor">
	<header></header>


	<div class="main">
			<textarea>
				<h1 class="article title">Titre</h1>

				<div class="component" style="border: solid 10px #ccc; border-radius: 100%; width: 100px; height: 100px;" data-component-type="TestComponent" data-component-name="Test component">
					<meta data-type="attribute" data-attribute-name="Test" data-attribute-type="string" data-attribute-value="hello world 1"/>
					<meta data-type="view">
					hello world 1
					</meta>
				</div>

				<div class="component" style="border: solid 10px #ccc; border-radius: 100%; width: 100px; height: 100px;" data-component-type="TestComponent" data-component-name="Test component">
					<meta data-type="attribute" data-attribute-name="Test" data-attribute-type="string" data-attribute-value="hello world 2"/>
					<meta data-type="view">
						hello world 2
					</meta>
				</div>



			</textarea>
			<div class="editorRightPanel">

				<?php
				include(__DIR__.'/rightpanel.php');
				?>

			</div>

	</div>


	<footer>mainEditorFooter<br/>footer<br/></footer>
</div>