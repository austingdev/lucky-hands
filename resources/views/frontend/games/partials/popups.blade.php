<div class="popup" id="loading_popup">
    <div id="loading_popup_image">
        <img id="lucky-hands-logo" src="/images/lucky-hands-logo.svg" alt="" />
        <img id="game-logo" alt="" />
        <div id="loading-txt">
            Game may take up to 60 seconds to load
        </div>
        <div id="gameLoadingBack">
            <div id="gameLoadingProgress"></div>
            <p id="progressPercent">0.00%</p>
        </div>
    </div>
</div>
<style>
    #loading_popup_image {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        background: url('<?= (isset($splash_url)) ? asset('frontend/Default/img/') . "/background--" . $splash_url . ".jpg" : asset('frontend/Default/img/') . "/loading_back.jpg" ?>') no-repeat;
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 100vh;
    }

    #lucky-hands-logo {
        width: 250px;
        max-height: 10%;
        object-fit: contain;
    }

    #game-logo {
        width: 500px;
        max-width: 90%;
        max-height: 50%;
        object-fit: contain;
        content: url('<?= (isset($splash_url)) ? asset('frontend/Default/img/') . "/logo--" . $splash_url . ".png" : asset('frontend/Default/img/') . "/loading_back.jpg" ?>');
    }

    #loading-txt {
        font-size: 18px;
        color: white;
    }

    #loading_popup {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background: black;
    }

    #gameLoadingGuide {
        bottom: 25px;
        top: auto;
    }

    @media (max-width: 991px) {
        #loading_popup_image {
            gap: 1rem;
        }

        #lucky-hands-logo {
            height: 30px;
        }

        #game-logo {
            max-height: 40%;
        }

        #loading-txt {
            font-size: 14px;
        }
    }
</style>
<script>
    $(function() {
        var div = $('#gameLoadingBack');
        var width = div.width();
        div.css('height', width * 61 / 673);
    });

    window.addEventListener('resize', function() {
        var div = $('#gameLoadingBack');
        var width = div.width();
        div.css('height', width * 61 / 673);
    }, false);

    addEventListener('message', function(e) {
        try {
            var data = JSON.parse(e.data);
            if (data.event == 'loadProgress') {
                if (data.value >= 0.99999) {
                    setTimeout(() => {
                        $('#loading_popup').css('display', 'none');
                    }, 2500);
                } else {
                    $('#loading_popup').css('display', 'block');
                    setGameLoadingProgress(data.value * 100);
                }
            } else if (data.event == 'backToHub') {
                console.log(444444)
                window.parent.location.href = 'https://staging.luckyhands.com/'
            }
        } catch (e) {
            console.log(e)
        }
    })

    function setGameLoadingProgress(progress) {
        if (progress > 100)
            progress = 100;
        var progress_div = $('#gameLoadingProgress');
        progress_div.css('width', progress + '%');
        $('#progressPercent').html(parseFloat(progress).toFixed(2) + '%');
    }
</script>