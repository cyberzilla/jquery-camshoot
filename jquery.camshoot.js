/* JQuery CamShoot
-- version 1.3
-- copyright 2018 https://abu.dzakiyyah.com
-- licensed under the MIT
-- filename jquery.camshoot.js
*/

(function ($) {
    $.fn.camshoot = function(options) {
        var $this = this,
        settings = $.extend({
            id:$.now(),
            parentId:$this[0].id,
            height: 480,
            width: 640,
            sound:true,
            soundsource:{
                            snap:'data:audio/mp3;base64,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',
                            trash:'data:audio/mp3;base64,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',
                            save:'data:audio/mp3;base64,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'
                        },
            flasheffect:true,
            imagetype:'png',
            outputdir:'',
            filename:'image',
            services:'save.php',
            params:'', //for extra param
            _token:'', //for laravel
            _initialize:function(){
                $this.css({width:settings.width,height:settings.height,position:'relative'});
                $this.html('<video id="'+settings.parentId+'_camera_'+settings.id+'" width="'+settings.width+'" height="'+settings.height+'" autoplay></video>');
                var selector = $this.find('#'+settings.parentId+'_camera_'+settings.id)[0];
                if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                    navigator.mediaDevices.getUserMedia({
                        video: {
                            width: settings.width,
                            height: settings.height
                        }
                    }).then(function(stream){
                        window.localStream = stream;
                        selector.srcObject = stream;
                        selector.play();
                    });
                }
            },
            _toolbox:function(){
                    $this.append('<div id="'+settings.parentId+'_toolbox_'+settings.id+'" class="camera_toolbox">'+
                        '<a><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAAb1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8v0wLRAAAAJHRSTlMAAgMECBIiIy46REZJSlFSXGZweH6AjpCVoqOkr8TGyOrt9vl6qhpcAAAAAWJLR0QktAb5mQAAAIVJREFUGNPNkckOglAMRa/IWOAxgwzK1P//Rl8gFn0hrD2LLk5u07QFrokzTWzagjeKX2tPL1fznGxRHhGVXOtKNZe6epvu2KDb04pbElpWexoOV8eUih0cOvQRBPBDQ889xhH9/Lc6j5CmiHJDn2x5XwdXGBbrk3h836+RRivJBHW7+OwbKaoUy5I6ZyYAAAAASUVORK5CYII=" id="delete" title="Hapus foto"></a>'+
                        '<a><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAWCAYAAAA1vze2AAAABmJLR0QA/wD/AP+gvaeTAAABlUlEQVRIia2UvWpUURSFvx2ihUIg4k+ETAYkTdTeSWclpPMN8hA+QmxEUthpkUZQsBMEIZ0/hT6AWGmTQqOYQARj4SSfRfaE4TL33jPJrGZf9jp7r73OOfdAA9SO+lbtOxr95DtNfRqhbtY0r2LzpAJd9aBQ5FC9VtcrsuE0cA+4C1xO7jxwZYy5fgB/8vsn8BJYj4j+YOonhROPi8cAoV4Afg1cTRgCF6eBxQKBw7T/Oge6BKxwtL1TDXUBLKL2Wix/U3sjx9Tl5JvQa5oCYB9YiYiP6ry6rr7KOB8RH9LR38YuLU4e5JoldbfC7apLyT88jZMXGR8BsxVuNvPD60aiTeRrxuUafpD/chqRcxl3avidyroTidzK+LSGH+RH3r5jtBz8OzXUs+pGhdvIfKjvmw6+5D9ZGxqoq95Ru0O5+y31RSKqz9SFyg4sqM8Lanuh3gA+tZwNHL1Dn4HvwFXgOmXv3c1QzwBbwFxBwbjYBjpTEfEPWAX2JiywB6xGRP/YrjoH3AZmJiDwG3gTEdsT6FWG/yCey281/SO7AAAAAElFTkSuQmCC" id="snap" title="Tekan untuk mengambil foto"></a>'+
                        '<a><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAAaVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8G612AAAAInRSTlMAAxITFRwiJTU2PkJDRkdISUxNV1haW2FiZm6O29zs9/n7qZIkbgAAAAFiS0dEIl1lXKwAAACSSURBVBjTndHbDoIwDAbgojJEPBQcTkEO9v0f0q1urijExP9q+ZI27QqwkETfYs6rwBeS6Q+eGyqMg1aplq7dcAqcoeOGn+l9rGYY0m44zrD1fi2Ye1uGPekX52GOx8ZC5gq5svRj72DCk/zkKq5fRs7l+ts3IxnlYwgFY2iM/7L9WNHbFMw1faX+PBpHJ0sHfgK9Yxz5L3fNtQAAAABJRU5ErkJggg==" id="save" title="Simpan foto"></a>'+
                    '</div>');
                    $this.append('<div class="snap_thumb">' +
                        '<canvas id="'+settings.parentId+'_canvas_'+settings.id+'" height="'+settings.height+'" width="'+settings.width+'"></canvas>' +
                        '<img/>'+
                        '</div>');
                    var video = $("#"+settings.parentId+'_camera_'+settings.id)[0],
                        snapaudio = settings.sound===true?new Audio(settings.soundsource.snap):'disable',
                        tool = $("#"+settings.parentId+'_toolbox_'+settings.id),
                        canvas = $("#"+settings.parentId+'_canvas_'+settings.id)[0],
                        src;
                        //Snap Button
                        tool.find("#snap").click(function(){
                            if(snapaudio!=='disable'){
                                snapaudio.play();
                            }
                            if(settings.flasheffect===true){
                                $this.find("#"+settings.parentId+'_camera_'+settings.id).removeClass().addClass('flasheffect').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                                    $(this).removeClass();
                                });
                            }
                            canvas.getContext('2d').drawImage(video, 0, 0, settings.width, settings.height);
                            switch (settings.imagetype) {
                                case "png":
                                    src = canvas.toDataURL();
                                    break;
                                case "jpg":
                                    src = canvas.toDataURL('image/jpeg');
                                    break;
                                case "webp":
                                    src = canvas.toDataURL('image/webp');
                                    break;
                                case "gif":
                                    src = canvas.toDataURL('image/gif');
                                    break;

                                default:
                                    src = undefined;
                                    break;
                            }
                            $this.find(".snap_thumb img").attr("src",src).css({width:'20%'});
                            tool.find("#delete").css({visibility:'visible'});
                            tool.find("#save").css({visibility:'visible'});
                        });
                        //Delete Button
                        tool.find("#delete").click(function(){
                            $this.find(".snap_thumb img").removeAttr("src");
                            tool.find("#delete").css({visibility:'hidden'});
                            tool.find("#save").css({visibility:'hidden'});
                            var trashaudio = settings.sound===true?new Audio(settings.soundsource.trash):'disable';
                            if(trashaudio!=='disable'){
                                trashaudio.play();
                            }
                        });
                        //Save Button
                        tool.find("#save").click(function(){
                            var saveaudio = settings.sound===true?new Audio(settings.soundsource.save):'disable';
                            $.post(settings.services,{
                                                        data:src,
                                                        name:settings.filename,
                                                        ext:settings.imagetype,
                                                        dir:settings.outputdir,
                                                        _token:settings._token, //for laravel
                                                        params:settings.params //for extra param
                                                     },function(response){
                                console.log(response);
                                if(saveaudio!=='disable'){
                                    saveaudio.play();
                                }
                            });
                        });

            },
            run:function(){
                settings._initialize();
                settings._toolbox();
            },
            stop:function () {
                localStream.getVideoTracks()[0].stop();
            }

        },options);
        //execute here
        settings.run();

        //Return Function
        return {
            stop:function (){
                //Stop Stream
                settings.stop();
            },
            reset:function(){
                //Run Again
                settings.run();
            },
            version:function () {
                //jQuery Camshoot version
                console.log("jQuery Camshoot v 1.3\nCreated By Abu Dzakiyyah (abydzakiyyah@gmail.com)\nCopyright 2018 https://abu.dzakiyyah.com")
            }
        };
    };
}(jQuery));

