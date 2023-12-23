# deCAPTCHA
A parameterized clone of Google reCAPTCHA's v2 bot protection as a React component.

## Demo + Behavior
This project was made a part of a project called <i>somewhere in Gaza</i>. This project sourced images from over 45 locations across the Gaza Strip. The following project can be viewed at the following.

[somewhere in Gaza (2023)](https://somewhereingaza.github.io/)

In its current behavior, deCAPTCHA will show the users the passed-in captchas objects in a random order and will not repeat the same captcha until the user has seen all of them. When the user gets a captcha wrong, it re-renders with another captcha from the set. It is currently set to one correct captcha before the callback function is called.

## How to
First, place DeCaptcha.js and DeCaptcha.css files into your project directory. Ensure they are on the same level.

Then, import it into the needed react file via
```javascript
import DeCaptcha from './your/path/to/DeCaptcha.js'
```

Next, pass in parameters to populate the component. You need three different parameters:

### objOfQuizzes
objOfQuizzes is a dictionary that holds all the information for the captchas. Please see the following format.
```javascript
{
    [
        // this would be one captcha
        {
            "squareOrImage": "square", // either has "square" or "image" here depending on the captcha format
            "title": "chairs", // insert the title of what the user should look for
            "images": [set0img0, set0img1, set0img3, ..., set0img8], // must have 9 images see "Tips" section for more -->
            "answers": [0, 1, 3] // index of correct answers,
        },
        // this would be another captcha
        {
            "squareOrImage": "image",
            "title": "prayer rug",
            "images": [set1img0, set1img1, set1img3, ..., set1img8],
            "answers": [0, 5, 7, 8]
        }
        // and so on ...
        {
            "squareOrImage": "square",
            "title": "sign",
            "images": [set2img0, set2img1, set2img3, ..., set2img8],
            "answers": [4, 7]
        }
    ]
}
```

### infoLink
```infoLink``` is a URL that will redirect to when the user clicks on the 'infoIcon'

### audioLink
```audioLink``` is the path to an audio file that will play when the user clicks on the 'audioIcon'

### onCaptchaCorrect
```onCaptchaCorrect``` is the function the component will call when there is a correct captcha

## Tips
For images, I used [GIMP](https://www.gimp.org/). I changed the resolution to 900 pixels on one side via the "Scale Image" tool and then used the "Crop" tool to crop to 900 pixels by 900 pixels. I then divided the images into 9 parts by setting the "Rectangle Select tool" to 300x300 and copying and pasting them onto new layers. I then hid all the layers except one, used the "Crop to Content" tool, and exported it as PNG.

Naming conventions help when working with a lot of captchas. I'd recommend looking at the demo example and see what works for you.

Normally ```onCaptchaCorrect``` is used to call a function to hide the component somewhere; however, use it for what you like

## Credits
Alhamdulillah. Allah showed me the means through different ways. 

A starting point was jvanam's [captcha](https://github.com/jvanam/captcha/tree/master) (2020) net-art site that set a lot of the CSS I used. I essentially rewrote his functionality in React and tried to make it more parametrized. 
