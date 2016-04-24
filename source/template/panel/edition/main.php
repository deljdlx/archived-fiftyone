<div class="panelContainer bs-component">

    <ul class="nav nav-tabs">
        <li class="active"><a href="#edition" data-toggle="tab">Edition</a></li>
        <li><a href="#enrichissement" data-toggle="tab">Enrichissement</a></li>
        <li><a href="#preview" data-toggle="tab">Prévisualisation</a></li>
        <li class="disabled"><a>Disabled</a></li>
        <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="bootstrap-elements.html" data-target="#">
                Dropdown <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
                <li><a href="#dropdown1" data-toggle="tab">Action</a></li>
                <li class="divider"></li>
                <li><a href="#dropdown2" data-toggle="tab">Another action</a></li>
            </ul>
        </li>
    </ul>

    <div id="myTabContent" class="tab-content">

        <div class="tab-pane fade active in" id="edition">

        <?php
            include(__DIR__.'/edition.php');
        ?>


        </div>

        <div class="tab-pane fade" id="enrichissement">
            Enrichissement
        </div>

        <div class="tab-pane fade" id="preview">
            Preview
        </div>

        <div class="tab-pane fade" id="dropdown1">
            <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.</p>
        </div>
        <div class="tab-pane fade" id="dropdown2">
            <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater.</p>
        </div>


    </div>
</div>