import './App.css';
import DeCAPTCHA from './DeCAPTCHA';
import captchaTest from './assets/imgs/captcha_template.png'

function App() {
  const myArrayOfObjects = [{"squareOrImage": "square", "title": "test captcha", "images": [captchaTest, captchaTest, captchaTest, captchaTest, captchaTest, captchaTest, captchaTest, captchaTest, captchaTest], "answers": [0, 3, 6]}]

  return (
    <div className="App">
      <div className='wrapper'>
        <DeCAPTCHA objOfQuizzes={myArrayOfObjects}/>
      </div>
    </div>
  );
}

export default App;
