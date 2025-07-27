---
title: Meme Creator - PHP Based
date: 2025-07-20 15:05:07
tags:
  - Works
categories: [Works]
---

![Meme Creator - PHP Based](assets/20250720_172606_dekh-bhai-meme-creator.png)

Okay this is kinda funny... but yep, I actually made _another_ Dekh Bhai Meme Creator back in 2016 😂

It was school days, Dekh Bhai memes were popping off in India, and apparently I couldn’t get enough of them. So I built a second version — because why not?

I already talked about the first one in my older blog post (built with good ol’ JavaScript), but this time I decided to switch things up and write the whole thing in PHP 💻🐘

It was a fun little experiment and honestly, I learned a bunch about PHP along the way.

There’s no live demo for this one (RIP hosting 😅), but the code’s chilling on GitHub if you're curious! 🛠️📂

But there are the Codes 🧑‍💻:

- Simple PHP file Github Gist: [https://gist.github.com/HSinghHira/...](https://gist.github.com/HSinghHira/7094b6285aa017def77e664c75230975)
- Full PHP Script: [https://github.com/HSinghHira/Dekh-Bhai-Meme-Creator/](https://github.com/HSinghHira/Dekh-Bhai-Meme-Creator/)

```php
<?php

// Created by Harman Singh Hira (hsinghhira.me)

// URL to the font file
$fontUrl = 'https://github.com/sophilabs/macgifer/raw/master/static/font/impact.ttf';

// JPG image quality 0-100
$quality = 100;

function create_image($user){
    $i = 30;
    global $fontUrl;
    global $quality;

    // define the base image that we lay our text on
    $im = imagecreatefromjpeg("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqeE7k8_AR2ITsjxwAeNFJyY40IrgFCOEEp1_mSZokVAwc909PQQvz8M0-wcdLlAwkrpcLyz33T-oM3jyqiNsyf9lWE4p6NUXDWp_AUqrqZwLttbPLC30ahrgl8Jy_xud-b0T1PP582r-KImlBjdFWBjMLf5eyR20pqE2MuFB1jM7cfLA/s1600/pass.jpg");

    // setup the text colours
    $color['black'] = imagecolorallocate($im, 0, 0, 0);

    // this defines the starting height for the text block
    $y = imagesy($im) - 425;

    // Fetch the font file content
    $fontContent = file_get_contents($fontUrl);

    // Create a temporary file to store the font content
    $tempFontPath = tempnam(sys_get_temp_dir(), 'font');
    file_put_contents($tempFontPath, $fontContent);

    // loop through the array and write the text
    foreach ($user as $value){
        // center the text in our image - returns the x value
        $x = center_text($value['name'], $value['font-size'], $tempFontPath);
        imagettftext($im, $value['font-size'], 0, $x, $y + $i, $color[$value['color']], $tempFontPath, $value['name']);
        // add 42px to the line height for the next text block
        $i = $i + 42;
    }

    // start output buffering
    ob_start();
    // output image contents to buffer
    imagejpeg($im, null, $quality);
    $image_data = ob_get_contents();
    // end output buffering
    ob_end_clean();

    // encode the image data to base64
    $image_base64 = base64_encode($image_data);
    // release memory
    imagedestroy($im);


    // return the base64 image data
    return $image_base64;
}

function center_text($string, $font_size, $fontname){
    $image_width = 500;
    $dimensions = imagettfbbox($font_size, 0, $fontname, $string);
    return ceil(($image_width - $dimensions[4]) / 2);
}

$user = array(
    array(
        'name'=> 'Agar Fast Karne Se God Khush',
        'font-size'=>'27',
        'color'=>'black'),
    array(
        'name'=> 'Hote Toh Bhikhari Sabse',
        'font-size'=>'27',
        'color'=>'black'),
    array(
        'name'=> 'Sukhi Insaan Hote',
        'font-size'=>'27',
        'color'=>'black')
);

if(isset($_POST['submit'])){
    $error = array();

    if(strlen($_POST['name'])==0){
        $error[] = '<style>
            .input1{ background-color:#FFEAEA!important; border-color:#C10F0F!important;} ::-webkit-input-placeholder{ color:#999;} :-moz-placeholder{ color:#999;} ::-moz-placeholder{ color:#999;} :-ms-input-placeholder{ color:#999;} .input1::-webkit-input-placeholder{ color:#C10F0F;}
        </style>';
    }

    if(strlen($_POST['job'])==0){
        $error[] = '<style>
            .input2{ background-color:#FFEAEA!important; border-color:#C10F0F!important;} ::-webkit-input-placeholder{ color:#999;} :-moz-placeholder{ color:#999;} ::-moz-placeholder{ color:#999;} :-ms-input-placeholder{ color:#999;} .input2::-webkit-input-placeholder{ color:#C10F0F;}
        </style>';
    }

    if(count($error)==0){
        $user = array(
            array(
                'name'=> $_POST['name'],
                'font-size'=>'27',
                'color'=>'black'),
            array(
                'name'=> $_POST['job'],
                'font-size'=>'27',
                'color'=>'black'),
            array(
                'name'=> $_POST['email'],
                'font-size'=>'27',
                'color'=>'black')
        );
    }
}

// run the script to create the image and get the base64 data
$image_base64 = create_image($user);
?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Bas Rehan De Meme Creator by Harman Singh Hira</title>
<meta name="description" content="Bas Rehan De is the most Stylish and Simple Meme Creator build by Harman Singh Hira in PHP Language."/>
<style>
body {
  background-color: #f8d344;
}
input {
  border: 1px solid #ccc;
  padding: 8px;
  font-size: 14px;
  width: 300px;
}

.submit {
  width: 110px;
  background-color: #ff6;
  padding: 3px;
  border: 1px solid #fc0;
  margin-top: 20px;
}
.fb_like_box {
  margin-top: 21px;
  -moz-border-radius: 10px 10px 10px 10px;
  border-radius: 7px;
  border: 10px solid #000;
  margin-bottom: 10px;
  padding: 14px 9px;
  width: 464px;
}

.fb_like_button_holder {
  -moz-border-radius: 10px 10px 10px 10px;
  background-color: transparent;
  width: 475px;
  height: 61px;
  padding: 3px 0px 5px 9px;
}
.fb_like_top {
  overflow: visible;
  padding: 0;
  margin: 0px 12px 12px;
  width: 443px;
  height: 30px;
  background: url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrBF2S2lctGXsYAXpZiv-b0_9wuL5MTxE5MmMIPZqsjmhCPquqnUy9tX-MDTSUmakbrDMsCrAuWCiPBYiJrx0lK4gYaKIDQd1tLdF2fik_EsnN8094mRLEDrAQirL6Givf834ArXLAsEyzOmRkX6c9sFGl5P5ucsRbahQkp6G_IApLnCY/s1600/like.png")
    no-repeat scroll left top transparent;
}
.download {
  width: 250px;
  background-color: #000;
  color: #f8d344;
  border-color: #000;
  border-radius: 5px;
  padding: 6px 88px 9px 88px;
  font-family: Tahoma;
}
.input1,
.input2 {
  background-color: #fae595;
  border-color: #000;
}
</style>
<link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
<br/><br/>
<div class="main">
<div style="float:right;width:49%">
<img src="data:application/octet-stream;base64,<?=$image_base64;?>" width="500" height="500" style="border: 10px solid #000;border-radius: 5px;"/><br/><br/>
</div>

<div style="float:left;width:49%">
<div class="dynamic-form" style="float:right;width:500px">
<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhl1ZJdqyHg2ZySeRgbPtN4d6H6R9Lda8eGIw4x2FNRE5BYA5o3tU5QY71nlsr9RU77eds_q5yiolIbzkSUZUVKarUf8pq5SsTD-CqWhrwgmtPmyV3lXlpE25vJWuYvZj89I6Ymjtu5U2WDyVi08PL9jtiP4LVlAXrQdYwCDpzCWGUjcpg/s1600/head.png" style="margin-bottom:21px"/>

<?php if(isset($error)){
    foreach($error as $errors){
        echo $errors;
    }
}?>

<form action="" method="post" autocomplete="off">
<input type="text" class="input1" value="<?php if(isset($_POST['name'])){echo $_POST['name'];}?>" name="name" maxlength="30" placeholder="First Text" style="width:483px;border-radius: 5px;"><br/><br/>
<input type="text" class="input2" value="<?php if(isset($_POST['job'])){echo $_POST['job'];}?>" name="job" maxlength="30" placeholder="Second Text" style="width:483px;border-radius: 5px;"><br/><br/>
<input type="text" value="<?php if(isset($_POST['email'])){echo $_POST['email'];}?>" name="email" maxlength="30" placeholder="Third Text" style="background-color:#fae595;border-color:#000;width:483px;border-radius: 5px;"><br/><br/>
<input name="submit" type="submit" class="btn btn-primary" value="Update Meme"  style="width:250px;background-color:#000;color:#f8d344;border-color:#000;border-radius: 5px;font-family: Tahoma;"/>
<a class="download" href="data:application/octet-stream;base64,<?=$image_base64;?>" download="meme.jpg" style="background-color: #000;color: #f8d344;border-color: #000;border-radius: 5px;padding: 10px 72px 10px 72px;font-family: Tahoma;text-decoration: none;font-size: 14px;">Download Kar</a>
</form>
<div class='fb_like_box'>
<div class='fb_like_top'></div>
<div class='fb_like_button_holder'>
</div></div></div></div></div></body></html>
```
