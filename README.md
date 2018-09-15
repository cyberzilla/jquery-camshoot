# JQuery CamShoot
Take photo with your Webcam using Jquery

[Demo](https://cyberzilla.github.io/jquery-camshoot/demo.html)

Tested on Google Chrome, Vivaldi, and Mozilla Firefox. 

Not Working on Edge Browser

#### OPTIONS 

| OPTION     | DEFAULT                                       |
|-----------------|------------------------------------------------|
| height  | 480                   |
| width            | 640              |
| sound    | true                    |
| soundsource         |  { snap : 'snap.mp3' , trash: 'trash.mp3', save: 'save.mp3'}                   |
| flasheffect    | true                       |
| imagetype       | png (png,jpg,webp,gif)|
| outputdir             | null                |
| filename       | 'images'                             |
| services            | save.php                            |
| params| null for extra params|
| _token| null for laravel|

#### USAGE

```html
<head>
<link rel="stylesheet" href="jquery.camshoot.css">
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="jquery.camshoot.js"></script>
<script type="text/javascript">
    $(function(){
        $("#cameraContainer").camera({
            height:600,
            width:400,
            sound:true,
            imagetype: 'jpg',
            filename: 'testing',
            flasheffect: true
        });
    });
</script>
</head>

<body>
    <div id="cameraContainer"></div>
</body>

```

#### LICENSE

This project is licensed under the [MIT license](http://opensource.org/licenses/MIT). Copyright © 2018 [Abu Dzakiyyah](https://abu.dzakiyyah.com)
