import React, { useState, useEffect } from 'react'
import './DeCAPTCHA.css'
import refresh from './assets/imgs/refresh.png'
import audio from './assets/imgs/audio.png'
import info from './assets/imgs/info.png'

function DeCAPTCHA({objOfQuizzes}) {
  const [captchaIndex, setCaptchaIndex] = useState(0);
  const [clickedImgDiv, setClickedImgDiv] = useState([]);
  const [showIncorrectDivStyle, setShowIncorrectDivStyle] = useState({display: 'none'});
  const [showIncorrectCaptchaHeight, setShowIncorrectCaptchaHeight] = useState({height: '580px'})
  const [showIncorrectText, setShowIncorrectText] = useState(false);
  const imgDivIds = [0, 1, 2, 3, 4, 5, 6, 7, 8]

  const verifyCaptcha = () =>{
    if(clickedImgDiv.length !== objOfQuizzes[captchaIndex].answers.length){
      setNewCaptcha(true)
      setIncorrectMessage(true);
      return console.log("You didn't select all of the items correctly") 
    }
    for(const clickedIndex of clickedImgDiv){
      const index = objOfQuizzes[captchaIndex].answers.indexOf(clickedIndex);
      console.log("clickedIndex is " + clickedIndex)
      console.log("index is " + index)
      if(index === -1){
        setNewCaptcha(true);
        setIncorrectMessage(true);
        return console.log("It was incorrect")
      }
    }
    return setNewCaptcha(false);
  }
  
  const setNewCaptcha = (yes) => {
    if(yes){
      setCaptchaIndex(prevIndex => {
        if(prevIndex === objOfQuizzes.length - 1){
          return 0;
        }
        else{
          return prevIndex + 1;
        }
      });
    }
    else{
      // call the function to close the pop up
      console.log("It was correct")
    }
  }

  useEffect(() => {
    setNewCaptcha(true);
  }, [objOfQuizzes]);

  const handleCaptchaClick = (id) => {
    const index = clickedImgDiv.indexOf(id);

    if(index === -1){
      setClickedImgDiv([...clickedImgDiv, id]);
    }
    else{
        const newClickedImgDiv = [...clickedImgDiv];
        newClickedImgDiv.splice(index, 1)
        setClickedImgDiv(newClickedImgDiv)
    }
  }

  const getImgDivStyle = (id) => {
    const isImgClicked = clickedImgDiv.includes(id);

    if(isImgClicked) {
      return {
        margin: '12px',
        height: '106px',
        width: '106px',
      }
    }
  }

  const setIncorrectMessage = (yes) => {
    if(yes){
      setShowIncorrectText(true);
      setShowIncorrectDivStyle({display: 'block'})
      setShowIncorrectCaptchaHeight({height: '610px'})
    }
    else{
      setShowIncorrectText(false);
      setShowIncorrectDivStyle({display: 'none'})
      setShowIncorrectCaptchaHeight({height: '580px'})
    }
  }

  return (
    <>
    <div id="decaptcha-grid-container" class="decaptcha" style={showIncorrectCaptchaHeight}>
      <div id="decaptcha-row1" class="decaptcha">
        <p class="decaptcha decaptcha-toptext1">Select all
          <span id="decaptcha-type1" class="decaptcha">
            {objOfQuizzes[captchaIndex].squareOrImage === 'square' ? ' squares with' : ' images with'}
          </span>
        </p>
        <p class="decaptcha decaptcha-toptext2" id="decaptcha-identifier">{objOfQuizzes[captchaIndex].title}</p>
      </div>
      <div class="decaptcha" id="decaptcha-row2">
        {imgDivIds.map((id) => (
          <img 
            class="decaptcha decaptcha-img"
            id={"img"+id}
            src={objOfQuizzes[captchaIndex].images[id]}
            style={getImgDivStyle(id)}
            onClick={() => handleCaptchaClick(id)}>
            </img>
        ))}
      </div>
      <div class="decaptcha" id="feedback-msg" style={showIncorrectDivStyle}>{showIncorrectText && 'Please try again'}</div>
      <div class="decaptcha" id="decaptcha-row3">
        <img class="decaptcha row3icon" id="refresh" src={refresh}></img>
        <img class="decaptcha row3icon" id="audio" src={audio}></img>
        <img class="decaptcha row3icon" id="info" src={info}></img>
        <button onClick={verifyCaptcha} class="decaptcha button" id="verify-button" type="button">VERIFY</button>
      </div>
    </div>
    </>
  )
}

export default DeCAPTCHA