<div class="popup" id="loading_popup">    
    <div id="loading_popup_image">   
 	<div id="gameLoadingBack">
		<div id="gameLoadingProgress"></div>        
		<p id="progressPercent">0.00%</p>
    	</div>
   	<p id="gameLoadingGuide">This game could take up to 60 seconds to load. <br> Thank you for your patience.</p>
   </div>
</div>
<style>
    #loading_popup_image {
	background: url('<?= (isset($splash_url)) ? asset('frontend/Default/img/')."/splash-screen--".$splash_url.".jpg" : asset('frontend/Default/img/')."/loading_back.jpg" ?>') no-repeat;
        background-size: contain;
        background-position: center;
    }
    #loading_popup
    {
        width: 100%;
        height: 100%;
        overflow:hidden;    
        position:absolute;
        top:0px;
        left:0px;
        right:0px;
        bottom:0px;
	background: black;
    }
</style>
<script>
    $(function() {
        var div = $('#gameLoadingBack');
        var width = div.width();    
        div.css('height', width * 61 / 673);
    });

    window.addEventListener('resize', function(){     
        var div = $('#gameLoadingBack');
        var width = div.width();    
        div.css('height', width * 61 / 673);
    }, false);

    addEventListener('message', function(e){        
        try{
            var data = JSON.parse(e.data);            
            if(data.event == 'loadProgress')
            {
                if(data.value >= 0.99999)
                {
                    setTimeout(()=>{$('#loading_popup').css('display', 'none');}, 2500);
                }
                else
                {
                    $('#loading_popup').css('display', 'block');
                    setGameLoadingProgress(data.value * 100);
                }
            }            
        }
        catch(e){}
    })

    function setGameLoadingProgress(progress)
    {
        if(progress > 100)
            progress = 100;
        var progress_div = $('#gameLoadingProgress');        
        progress_div.css('width', progress + '%');
        $('#progressPercent').html(parseFloat(progress).toFixed(2) + '%');
    }
</script>
