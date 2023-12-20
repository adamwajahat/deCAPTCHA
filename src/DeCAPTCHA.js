import React, { useState, useEffect } from 'react'
import './DeCAPTCHA.css'
import refresh from './assets/imgs/refresh.png'
import audio from './assets/imgs/audio.png'
import info from './assets/imgs/info.png'

function DeCAPTCHA({objOfQuizzes, audioLink, infoLink, onCaptchaCorrect}) {
  const [captchaIndex, setCaptchaIndex] = useState(0);
  const [clickedImgDiv, setClickedImgDiv] = useState([]);
  const [showIncorrectDivStyle, setShowIncorrectDivStyle] = useState({display: 'none'});
  const [showIncorrectCaptchaHeight, setShowIncorrectCaptchaHeight] = useState({height: '580px'})
  const [showIncorrectText, setShowIncorrectText] = useState(false);
  const objOfQuizzesLength = objOfQuizzes.length
  const [captchasLeft, setCaptchasLeft] = useState(Array.from({ length: objOfQuizzesLength }, (_, index) => index))
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
    setIncorrectMessage(false);
    return setNewCaptcha(false);
  }

  const setNewCaptcha = (yes) => {
    setClickedImgDiv([])
    if(yes){
      setCaptchaIndex(prevIndex => {
          console.log("Last array length is " + captchasLeft)
          if(captchasLeft.length === 1){
            const tempIndex = captchasLeft[0]
            console.log("Index is " + 0)
            const indexesArray = Array.from({ length: objOfQuizzes.length }, (_, index) => index)
            setCaptchasLeft(indexesArray)
            return tempIndex
          }
          const randomIndex = Math.floor(Math.random() * captchasLeft.length)
          console.log("Index is " + randomIndex)
          const newClickedImgDiv = [...captchasLeft];
          newClickedImgDiv.splice(randomIndex, 1)
          setCaptchasLeft(newClickedImgDiv)
          return captchasLeft[randomIndex]
      });
    }
    else{
      // call the function to close the pop up
      console.log("It was correct")
      return onCaptchaCorrect()
    }
  }

  useEffect(() => {
    setNewCaptcha(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const refreshCaptcha = () => {
    setNewCaptcha(true)
  }

  const redirectInfo = () => {
    window.location.href = infoLink
  }

  const playAudio = () => {
    const audio = new Audio(audioLink)
    audio.play()
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
            onClick={() => handleCaptchaClick(id)}
            alt={"img"+id}>
            </img>
        ))}
      </div>
      <div class="decaptcha" id="feedback-msg" style={showIncorrectDivStyle}>{showIncorrectText && 'Please try again'}</div>
      <div class="decaptcha" id="decaptcha-row3">
        <img class="decaptcha row3icon" id="refresh" src={refresh} onClick={refreshCaptcha} alt='refreshIcon'></img>
        <img class="decaptcha row3icon" id="audio" src={audio} onClick={playAudio} alt='audioIcon'></img>
        <img class="decaptcha row3icon" id="info" src={info} onClick={redirectInfo} alt='infoIcon'></img>
        <button onClick={verifyCaptcha} class="decaptcha button" id="verify-button" type="button">VERIFY</button>
      </div>
    </div>
    </>
  )
}

export default DeCAPTCHA