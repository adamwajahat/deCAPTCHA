import './App.css';
import DeCAPTCHA from './DeCAPTCHA';
import captchaTest from './assets/imgs/captcha_template.png'
import img0 from './assets/imgs/(31.3015121,34.2404834)_square0.png'
import img1 from './assets/imgs/(31.3015121,34.2404834)_square1.png'
import img2 from './assets/imgs/(31.3015121,34.2404834)_square2.png'
import img3 from './assets/imgs/(31.3015121,34.2404834)_square3.png'
import img4 from './assets/imgs/(31.3015121,34.2404834)_square4.png'
import img5 from './assets/imgs/(31.3015121,34.2404834)_square5.png'
import img6 from './assets/imgs/(31.3015121,34.2404834)_square6.png'
import img7 from './assets/imgs/(31.3015121,34.2404834)_square7.png'
import img8 from './assets/imgs/(31.3015121,34.2404834)_square8.png'
import audio0 from './assets/audio_test.mp3'

function App() {
  const myArrayOfObjects = 
  [
      {
        "squareOrImage": "square",
        "title": "test captcha",
        "images": [captchaTest, captchaTest, captchaTest, captchaTest, captchaTest, captchaTest, captchaTest, captchaTest, captchaTest],
        "answers": [0, 3, 6]
      },
      {
        "squareOrImage": "square",
        "title": "truck",
        "images": [img0, img1, img2, img3, img4, img5, img6, img7, img8],
        "answers": [7, 8]
      },
  ]

  return (
    <div className="App">
      <div className='wrapper'>
        <DeCAPTCHA objOfQuizzes={myArrayOfObjects} infoLink='https://www.google.com/' audioLink={audio0}/>
      </div>
    </div>
  );
}

export default App;
