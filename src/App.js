import './App.css';
import React, { useState } from 'react'
import DeCAPTCHA from './DeCAPTCHA.js';
// image set 0
import set0Img0 from './assets/imgs/DeCaptcha/(31.3015121,34.2404834)_square0.png'
import set0Img1 from './assets/imgs/DeCaptcha/(31.3015121,34.2404834)_square1.png'
import set0Img2 from './assets/imgs/DeCaptcha/(31.3015121,34.2404834)_square2.png'
import set0Img3 from './assets/imgs/DeCaptcha/(31.3015121,34.2404834)_square3.png'
import set0Img4 from './assets/imgs/DeCaptcha/(31.3015121,34.2404834)_square4.png'
import set0Img5 from './assets/imgs/DeCaptcha/(31.3015121,34.2404834)_square5.png'
import set0Img6 from './assets/imgs/DeCaptcha/(31.3015121,34.2404834)_square6.png'
import set0Img7 from './assets/imgs/DeCaptcha/(31.3015121,34.2404834)_square7.png'
import set0Img8 from './assets/imgs/DeCaptcha/(31.3015121,34.2404834)_square8.png'

// image set 1
import set1Img0 from './assets/imgs/DeCaptcha/(31.27989053312947, 34.25657411500963)_square0.png'
import set1Img1 from './assets/imgs/DeCaptcha/(31.27989053312947, 34.25657411500963)_square1.png'
import set1Img2 from './assets/imgs/DeCaptcha/(31.27989053312947, 34.25657411500963)_square2.png'
import set1Img3 from './assets/imgs/DeCaptcha/(31.27989053312947, 34.25657411500963)_square3.png'
import set1Img4 from './assets/imgs/DeCaptcha/(31.27989053312947, 34.25657411500963)_square4.png'
import set1Img5 from './assets/imgs/DeCaptcha/(31.27989053312947, 34.25657411500963)_square5.png'
import set1Img6 from './assets/imgs/DeCaptcha/(31.27989053312947, 34.25657411500963)_square6.png'
import set1Img7 from './assets/imgs/DeCaptcha/(31.27989053312947, 34.25657411500963)_square7.png'
import set1Img8 from './assets/imgs/DeCaptcha/(31.27989053312947, 34.25657411500963)_square8.png'

// image set 2
import set2Img0 from './assets/imgs/DeCaptcha/(31.34767960677077, 34.29024094528803)_square0.png'
import set2Img1 from './assets/imgs/DeCaptcha/(31.34767960677077, 34.29024094528803)_square1.png'
import set2Img2 from './assets/imgs/DeCaptcha/(31.34767960677077, 34.29024094528803)_square2.png'
import set2Img3 from './assets/imgs/DeCaptcha/(31.34767960677077, 34.29024094528803)_square3.png'
import set2Img4 from './assets/imgs/DeCaptcha/(31.34767960677077, 34.29024094528803)_square4.png'
import set2Img5 from './assets/imgs/DeCaptcha/(31.34767960677077, 34.29024094528803)_square5.png'
import set2Img6 from './assets/imgs/DeCaptcha/(31.34767960677077, 34.29024094528803)_square6.png'
import set2Img7 from './assets/imgs/DeCaptcha/(31.34767960677077, 34.29024094528803)_square7.png'
import set2Img8 from './assets/imgs/DeCaptcha/(31.34767960677077, 34.29024094528803)_square8.png'

//image set 3
import set3Img0 from './assets/imgs/DeCaptcha/(31.34798122535702, 34.2808033644178)_square0.png'
import set3Img1 from './assets/imgs/DeCaptcha/(31.34798122535702, 34.2808033644178)_square1.png'
import set3Img2 from './assets/imgs/DeCaptcha/(31.34798122535702, 34.2808033644178)_square2.png'
import set3Img3 from './assets/imgs/DeCaptcha/(31.34798122535702, 34.2808033644178)_square3.png'
import set3Img4 from './assets/imgs/DeCaptcha/(31.34798122535702, 34.2808033644178)_square4.png'
import set3Img5 from './assets/imgs/DeCaptcha/(31.34798122535702, 34.2808033644178)_square5.png'
import set3Img6 from './assets/imgs/DeCaptcha/(31.34798122535702, 34.2808033644178)_square6.png'
import set3Img7 from './assets/imgs/DeCaptcha/(31.34798122535702, 34.2808033644178)_square7.png'
import set3Img8 from './assets/imgs/DeCaptcha/(31.34798122535702, 34.2808033644178)_square8.png'

import set4Img0 from './assets/imgs/DeCaptcha/(31.47096429552248, 34.402024937551886)_square0.png'
import set4Img1 from './assets/imgs/DeCaptcha/(31.47096429552248, 34.402024937551886)_square1.png'
import set4Img2 from './assets/imgs/DeCaptcha/(31.47096429552248, 34.402024937551886)_square2.png'
import set4Img3 from './assets/imgs/DeCaptcha/(31.47096429552248, 34.402024937551886)_square3.png'
import set4Img4 from './assets/imgs/DeCaptcha/(31.47096429552248, 34.402024937551886)_square4.png'
import set4Img5 from './assets/imgs/DeCaptcha/(31.47096429552248, 34.402024937551886)_square5.png'
import set4Img6 from './assets/imgs/DeCaptcha/(31.47096429552248, 34.402024937551886)_square6.png'
import set4Img7 from './assets/imgs/DeCaptcha/(31.47096429552248, 34.402024937551886)_square7.png'
import set4Img8 from './assets/imgs/DeCaptcha/(31.47096429552248, 34.402024937551886)_square8.png'

import set5Img0 from './assets/imgs/DeCaptcha/(31.50428759668069, 34.46439956569531)_square0.png'
import set5Img1 from './assets/imgs/DeCaptcha/(31.50428759668069, 34.46439956569531)_square1.png'
import set5Img2 from './assets/imgs/DeCaptcha/(31.50428759668069, 34.46439956569531)_square2.png'
import set5Img3 from './assets/imgs/DeCaptcha/(31.50428759668069, 34.46439956569531)_square3.png'
import set5Img4 from './assets/imgs/DeCaptcha/(31.50428759668069, 34.46439956569531)_square4.png'
import set5Img5 from './assets/imgs/DeCaptcha/(31.50428759668069, 34.46439956569531)_square5.png'
import set5Img6 from './assets/imgs/DeCaptcha/(31.50428759668069, 34.46439956569531)_square6.png'
import set5Img7 from './assets/imgs/DeCaptcha/(31.50428759668069, 34.46439956569531)_square7.png'
import set5Img8 from './assets/imgs/DeCaptcha/(31.50428759668069, 34.46439956569531)_square8.png'

import set6Img0 from './assets/imgs/DeCaptcha/(31.51591513490486, 34.42689734792504)_square0.png'
import set6Img1 from './assets/imgs/DeCaptcha/(31.51591513490486, 34.42689734792504)_square1.png'
import set6Img2 from './assets/imgs/DeCaptcha/(31.51591513490486, 34.42689734792504)_square2.png'
import set6Img3 from './assets/imgs/DeCaptcha/(31.51591513490486, 34.42689734792504)_square3.png'
import set6Img4 from './assets/imgs/DeCaptcha/(31.51591513490486, 34.42689734792504)_square4.png'
import set6Img5 from './assets/imgs/DeCaptcha/(31.51591513490486, 34.42689734792504)_square5.png'
import set6Img6 from './assets/imgs/DeCaptcha/(31.51591513490486, 34.42689734792504)_square6.png'
import set6Img7 from './assets/imgs/DeCaptcha/(31.51591513490486, 34.42689734792504)_square7.png'
import set6Img8 from './assets/imgs/DeCaptcha/(31.51591513490486, 34.42689734792504)_square8.png'

import set7Img0 from './assets/imgs/DeCaptcha/(31.51714776162701, 34.4483121153424)_square0.png'
import set7Img1 from './assets/imgs/DeCaptcha/(31.51714776162701, 34.4483121153424)_square1.png'
import set7Img2 from './assets/imgs/DeCaptcha/(31.51714776162701, 34.4483121153424)_square2.png'
import set7Img3 from './assets/imgs/DeCaptcha/(31.51714776162701, 34.4483121153424)_square3.png'
import set7Img4 from './assets/imgs/DeCaptcha/(31.51714776162701, 34.4483121153424)_square4.png'
import set7Img5 from './assets/imgs/DeCaptcha/(31.51714776162701, 34.4483121153424)_square5.png'
import set7Img6 from './assets/imgs/DeCaptcha/(31.51714776162701, 34.4483121153424)_square6.png'
import set7Img7 from './assets/imgs/DeCaptcha/(31.51714776162701, 34.4483121153424)_square7.png'
import set7Img8 from './assets/imgs/DeCaptcha/(31.51714776162701, 34.4483121153424)_square8.png'

import set8Img0 from './assets/imgs/DeCaptcha/(31.54244347649036, 34.48076766931016)_square0.png'
import set8Img1 from './assets/imgs/DeCaptcha/(31.54244347649036, 34.48076766931016)_square1.png'
import set8Img2 from './assets/imgs/DeCaptcha/(31.54244347649036, 34.48076766931016)_square2.png'
import set8Img3 from './assets/imgs/DeCaptcha/(31.54244347649036, 34.48076766931016)_square3.png'
import set8Img4 from './assets/imgs/DeCaptcha/(31.54244347649036, 34.48076766931016)_square4.png'
import set8Img5 from './assets/imgs/DeCaptcha/(31.54244347649036, 34.48076766931016)_square5.png'
import set8Img6 from './assets/imgs/DeCaptcha/(31.54244347649036, 34.48076766931016)_square6.png'
import set8Img7 from './assets/imgs/DeCaptcha/(31.54244347649036, 34.48076766931016)_square7.png'
import set8Img8 from './assets/imgs/DeCaptcha/(31.54244347649036, 34.48076766931016)_square8.png'

import set9Img0 from './assets/imgs/DeCaptcha/(31.277341030448323, 34.256775571164404)_square0.png'
import set9Img1 from './assets/imgs/DeCaptcha/(31.277341030448323, 34.256775571164404)_square1.png'
import set9Img2 from './assets/imgs/DeCaptcha/(31.277341030448323, 34.256775571164404)_square2.png'
import set9Img3 from './assets/imgs/DeCaptcha/(31.277341030448323, 34.256775571164404)_square3.png'
import set9Img4 from './assets/imgs/DeCaptcha/(31.277341030448323, 34.256775571164404)_square4.png'
import set9Img5 from './assets/imgs/DeCaptcha/(31.277341030448323, 34.256775571164404)_square5.png'
import set9Img6 from './assets/imgs/DeCaptcha/(31.277341030448323, 34.256775571164404)_square6.png'
import set9Img7 from './assets/imgs/DeCaptcha/(31.277341030448323, 34.256775571164404)_square7.png'
import set9Img8 from './assets/imgs/DeCaptcha/(31.277341030448323, 34.256775571164404)_square8.png'

import set10Img0 from './assets/imgs/DeCaptcha/(31.280744036249065, 34.256907985454696)_square0.png'
import set10Img1 from './assets/imgs/DeCaptcha/(31.280744036249065, 34.256907985454696)_square1.png'
import set10Img2 from './assets/imgs/DeCaptcha/(31.280744036249065, 34.256907985454696)_square2.png'
import set10Img3 from './assets/imgs/DeCaptcha/(31.280744036249065, 34.256907985454696)_square3.png'
import set10Img4 from './assets/imgs/DeCaptcha/(31.280744036249065, 34.256907985454696)_square4.png'
import set10Img5 from './assets/imgs/DeCaptcha/(31.280744036249065, 34.256907985454696)_square5.png'
import set10Img6 from './assets/imgs/DeCaptcha/(31.280744036249065, 34.256907985454696)_square6.png'
import set10Img7 from './assets/imgs/DeCaptcha/(31.280744036249065, 34.256907985454696)_square7.png'
import set10Img8 from './assets/imgs/DeCaptcha/(31.280744036249065, 34.256907985454696)_square8.png'

import set11Img0 from './assets/imgs/DeCaptcha/(31.326674447648788, 34.34699031374884)_square0.png'
import set11Img1 from './assets/imgs/DeCaptcha/(31.326674447648788, 34.34699031374884)_square1.png'
import set11Img2 from './assets/imgs/DeCaptcha/(31.326674447648788, 34.34699031374884)_square2.png'
import set11Img3 from './assets/imgs/DeCaptcha/(31.326674447648788, 34.34699031374884)_square3.png'
import set11Img4 from './assets/imgs/DeCaptcha/(31.326674447648788, 34.34699031374884)_square4.png'
import set11Img5 from './assets/imgs/DeCaptcha/(31.326674447648788, 34.34699031374884)_square5.png'
import set11Img6 from './assets/imgs/DeCaptcha/(31.326674447648788, 34.34699031374884)_square6.png'
import set11Img7 from './assets/imgs/DeCaptcha/(31.326674447648788, 34.34699031374884)_square7.png'
import set11Img8 from './assets/imgs/DeCaptcha/(31.326674447648788, 34.34699031374884)_square8.png'

import set12Img0 from './assets/imgs/DeCaptcha/(31.342720997250176, 34.3253191433887)_square0.png'
import set12Img1 from './assets/imgs/DeCaptcha/(31.342720997250176, 34.3253191433887)_square1.png'
import set12Img2 from './assets/imgs/DeCaptcha/(31.342720997250176, 34.3253191433887)_square2.png'
import set12Img3 from './assets/imgs/DeCaptcha/(31.342720997250176, 34.3253191433887)_square3.png'
import set12Img4 from './assets/imgs/DeCaptcha/(31.342720997250176, 34.3253191433887)_square4.png'
import set12Img5 from './assets/imgs/DeCaptcha/(31.342720997250176, 34.3253191433887)_square5.png'
import set12Img6 from './assets/imgs/DeCaptcha/(31.342720997250176, 34.3253191433887)_square6.png'
import set12Img7 from './assets/imgs/DeCaptcha/(31.342720997250176, 34.3253191433887)_square7.png'
import set12Img8 from './assets/imgs/DeCaptcha/(31.342720997250176, 34.3253191433887)_square8.png'

import set13Img0 from './assets/imgs/DeCaptcha/(31.348639425228786, 34.280436213493196)_square0.png'
import set13Img1 from './assets/imgs/DeCaptcha/(31.348639425228786, 34.280436213493196)_square1.png'
import set13Img2 from './assets/imgs/DeCaptcha/(31.348639425228786, 34.280436213493196)_square2.png'
import set13Img3 from './assets/imgs/DeCaptcha/(31.348639425228786, 34.280436213493196)_square3.png'
import set13Img4 from './assets/imgs/DeCaptcha/(31.348639425228786, 34.280436213493196)_square4.png'
import set13Img5 from './assets/imgs/DeCaptcha/(31.348639425228786, 34.280436213493196)_square5.png'
import set13Img6 from './assets/imgs/DeCaptcha/(31.348639425228786, 34.280436213493196)_square6.png'
import set13Img7 from './assets/imgs/DeCaptcha/(31.348639425228786, 34.280436213493196)_square7.png'
import set13Img8 from './assets/imgs/DeCaptcha/(31.348639425228786, 34.280436213493196)_square8.png'

import set14Img0 from './assets/imgs/DeCaptcha/(31.375995840052983, 34.341689922088996)_square0.png'
import set14Img1 from './assets/imgs/DeCaptcha/(31.375995840052983, 34.341689922088996)_square1.png'
import set14Img2 from './assets/imgs/DeCaptcha/(31.375995840052983, 34.341689922088996)_square2.png'
import set14Img3 from './assets/imgs/DeCaptcha/(31.375995840052983, 34.341689922088996)_square3.png'
import set14Img4 from './assets/imgs/DeCaptcha/(31.375995840052983, 34.341689922088996)_square4.png'
import set14Img5 from './assets/imgs/DeCaptcha/(31.375995840052983, 34.341689922088996)_square5.png'
import set14Img6 from './assets/imgs/DeCaptcha/(31.375995840052983, 34.341689922088996)_square6.png'
import set14Img7 from './assets/imgs/DeCaptcha/(31.375995840052983, 34.341689922088996)_square7.png'
import set14Img8 from './assets/imgs/DeCaptcha/(31.375995840052983, 34.341689922088996)_square8.png'

import set15Img0 from './assets/imgs/DeCaptcha/(31.479825129974277, 34.4175512)_square0.png'
import set15Img1 from './assets/imgs/DeCaptcha/(31.479825129974277, 34.4175512)_square1.png'
import set15Img2 from './assets/imgs/DeCaptcha/(31.479825129974277, 34.4175512)_square2.png'
import set15Img3 from './assets/imgs/DeCaptcha/(31.479825129974277, 34.4175512)_square3.png'
import set15Img4 from './assets/imgs/DeCaptcha/(31.479825129974277, 34.4175512)_square4.png'
import set15Img5 from './assets/imgs/DeCaptcha/(31.479825129974277, 34.4175512)_square5.png'
import set15Img6 from './assets/imgs/DeCaptcha/(31.479825129974277, 34.4175512)_square6.png'
import set15Img7 from './assets/imgs/DeCaptcha/(31.479825129974277, 34.4175512)_square7.png'
import set15Img8 from './assets/imgs/DeCaptcha/(31.479825129974277, 34.4175512)_square8.png'

import set16Img0 from './assets/imgs/DeCaptcha/(31.503886569799473, 34.462206977532574)_square0.png'
import set16Img1 from './assets/imgs/DeCaptcha/(31.503886569799473, 34.462206977532574)_square1.png'
import set16Img2 from './assets/imgs/DeCaptcha/(31.503886569799473, 34.462206977532574)_square2.png'
import set16Img3 from './assets/imgs/DeCaptcha/(31.503886569799473, 34.462206977532574)_square3.png'
import set16Img4 from './assets/imgs/DeCaptcha/(31.503886569799473, 34.462206977532574)_square4.png'
import set16Img5 from './assets/imgs/DeCaptcha/(31.503886569799473, 34.462206977532574)_square5.png'
import set16Img6 from './assets/imgs/DeCaptcha/(31.503886569799473, 34.462206977532574)_square6.png'
import set16Img7 from './assets/imgs/DeCaptcha/(31.503886569799473, 34.462206977532574)_square7.png'
import set16Img8 from './assets/imgs/DeCaptcha/(31.503886569799473, 34.462206977532574)_square8.png'

import set17Img0 from './assets/imgs/DeCaptcha/(31.504239097906165, 34.46450017414427)_square0.png'
import set17Img1 from './assets/imgs/DeCaptcha/(31.504239097906165, 34.46450017414427)_square1.png'
import set17Img2 from './assets/imgs/DeCaptcha/(31.504239097906165, 34.46450017414427)_square2.png'
import set17Img3 from './assets/imgs/DeCaptcha/(31.504239097906165, 34.46450017414427)_square3.png'
import set17Img4 from './assets/imgs/DeCaptcha/(31.504239097906165, 34.46450017414427)_square4.png'
import set17Img5 from './assets/imgs/DeCaptcha/(31.504239097906165, 34.46450017414427)_square5.png'
import set17Img6 from './assets/imgs/DeCaptcha/(31.504239097906165, 34.46450017414427)_square6.png'
import set17Img7 from './assets/imgs/DeCaptcha/(31.504239097906165, 34.46450017414427)_square7.png'
import set17Img8 from './assets/imgs/DeCaptcha/(31.504239097906165, 34.46450017414427)_square8.png'

import set18Img0 from './assets/imgs/DeCaptcha/(31.504938587740995, 34.46351944672771)_square0.png'
import set18Img1 from './assets/imgs/DeCaptcha/(31.504938587740995, 34.46351944672771)_square1.png'
import set18Img2 from './assets/imgs/DeCaptcha/(31.504938587740995, 34.46351944672771)_square2.png'
import set18Img3 from './assets/imgs/DeCaptcha/(31.504938587740995, 34.46351944672771)_square3.png'
import set18Img4 from './assets/imgs/DeCaptcha/(31.504938587740995, 34.46351944672771)_square4.png'
import set18Img5 from './assets/imgs/DeCaptcha/(31.504938587740995, 34.46351944672771)_square5.png'
import set18Img6 from './assets/imgs/DeCaptcha/(31.504938587740995, 34.46351944672771)_square6.png'
import set18Img7 from './assets/imgs/DeCaptcha/(31.504938587740995, 34.46351944672771)_square7.png'
import set18Img8 from './assets/imgs/DeCaptcha/(31.504938587740995, 34.46351944672771)_square8.png'

import set19Img0 from './assets/imgs/DeCaptcha/(31.517340503822595, 34.436307378878986)_square0.png'
import set19Img1 from './assets/imgs/DeCaptcha/(31.517340503822595, 34.436307378878986)_square1.png'
import set19Img2 from './assets/imgs/DeCaptcha/(31.517340503822595, 34.436307378878986)_square2.png'
import set19Img3 from './assets/imgs/DeCaptcha/(31.517340503822595, 34.436307378878986)_square3.png'
import set19Img4 from './assets/imgs/DeCaptcha/(31.517340503822595, 34.436307378878986)_square4.png'
import set19Img5 from './assets/imgs/DeCaptcha/(31.517340503822595, 34.436307378878986)_square5.png'
import set19Img6 from './assets/imgs/DeCaptcha/(31.517340503822595, 34.436307378878986)_square6.png'
import set19Img7 from './assets/imgs/DeCaptcha/(31.517340503822595, 34.436307378878986)_square7.png'
import set19Img8 from './assets/imgs/DeCaptcha/(31.517340503822595, 34.436307378878986)_square8.png'

import set20Img0 from './assets/imgs/DeCaptcha/(31.533196735690023, 34.44627660248287)_square0.png'
import set20Img1 from './assets/imgs/DeCaptcha/(31.533196735690023, 34.44627660248287)_square1.png'
import set20Img2 from './assets/imgs/DeCaptcha/(31.533196735690023, 34.44627660248287)_square2.png'
import set20Img3 from './assets/imgs/DeCaptcha/(31.533196735690023, 34.44627660248287)_square3.png'
import set20Img4 from './assets/imgs/DeCaptcha/(31.533196735690023, 34.44627660248287)_square4.png'
import set20Img5 from './assets/imgs/DeCaptcha/(31.533196735690023, 34.44627660248287)_square5.png'
import set20Img6 from './assets/imgs/DeCaptcha/(31.533196735690023, 34.44627660248287)_square6.png'
import set20Img7 from './assets/imgs/DeCaptcha/(31.533196735690023, 34.44627660248287)_square7.png'
import set20Img8 from './assets/imgs/DeCaptcha/(31.533196735690023, 34.44627660248287)_square8.png'

import set21Img0 from './assets/imgs/DeCaptcha/(31.577757402336022, 34.47850181701507)_square0.png'
import set21Img1 from './assets/imgs/DeCaptcha/(31.577757402336022, 34.47850181701507)_square1.png'
import set21Img2 from './assets/imgs/DeCaptcha/(31.577757402336022, 34.47850181701507)_square2.png'
import set21Img3 from './assets/imgs/DeCaptcha/(31.577757402336022, 34.47850181701507)_square3.png'
import set21Img4 from './assets/imgs/DeCaptcha/(31.577757402336022, 34.47850181701507)_square4.png'
import set21Img5 from './assets/imgs/DeCaptcha/(31.577757402336022, 34.47850181701507)_square5.png'
import set21Img6 from './assets/imgs/DeCaptcha/(31.577757402336022, 34.47850181701507)_square6.png'
import set21Img7 from './assets/imgs/DeCaptcha/(31.577757402336022, 34.47850181701507)_square7.png'
import set21Img8 from './assets/imgs/DeCaptcha/(31.577757402336022, 34.47850181701507)_square8.png'

import set22Img0 from './assets/imgs/DeCaptcha/chair_square.png'
import set22Img1 from './assets/imgs/DeCaptcha/random_square0.png'
import set22Img2 from './assets/imgs/DeCaptcha/chair_square1.png'
import set22Img3 from './assets/imgs/DeCaptcha/random_square1.png'
import set22Img4 from './assets/imgs/DeCaptcha/random_square2.png'
import set22Img5 from './assets/imgs/DeCaptcha/chair_square2.png'
import set22Img6 from './assets/imgs/DeCaptcha/chair_square3.png'
import set22Img7 from './assets/imgs/DeCaptcha/random_square3.png'
import set22Img8 from './assets/imgs/DeCaptcha/random_square4.png'

import set23Img0 from './assets/imgs/DeCaptcha/random_square5.png'
import set23Img1 from './assets/imgs/DeCaptcha/random_square6.png'
import set23Img2 from './assets/imgs/DeCaptcha/chair_square4.png'
import set23Img3 from './assets/imgs/DeCaptcha/random_square7.png'
import set23Img4 from './assets/imgs/DeCaptcha/random_square8.png'
import set23Img5 from './assets/imgs/DeCaptcha/random_square9.png'
import set23Img6 from './assets/imgs/DeCaptcha/chair_square5.png'
import set23Img7 from './assets/imgs/DeCaptcha/random_square10.png'
import set23Img8 from './assets/imgs/DeCaptcha/chair_square6.png'

import set24Img0 from './assets/imgs/DeCaptcha/random_square11.png'
import set24Img1 from './assets/imgs/DeCaptcha/chair_square7.png'
import set24Img2 from './assets/imgs/DeCaptcha/random_square12.png'
import set24Img3 from './assets/imgs/DeCaptcha/chair_square8.png'
import set24Img4 from './assets/imgs/DeCaptcha/random_square13.png'
import set24Img5 from './assets/imgs/DeCaptcha/random_square14.png'
import set24Img6 from './assets/imgs/DeCaptcha/random_square15.png'
import set24Img7 from './assets/imgs/DeCaptcha/random_square16.png'
import set24Img8 from './assets/imgs/DeCaptcha/chair_square9.png'

import set25Img0 from './assets/imgs/DeCaptcha/random_square17.png'
import set25Img1 from './assets/imgs/DeCaptcha/random_square18.png'
import set25Img2 from './assets/imgs/DeCaptcha/random_square19.png'
import set25Img3 from './assets/imgs/DeCaptcha/palms_square0.png'
import set25Img4 from './assets/imgs/DeCaptcha/palms_square1.png'
import set25Img5 from './assets/imgs/DeCaptcha/random_square20.png'
import set25Img6 from './assets/imgs/DeCaptcha/palms_square2.png'
import set25Img7 from './assets/imgs/DeCaptcha/palms_square3.png'
import set25Img8 from './assets/imgs/DeCaptcha/random_square21.png'

import set26Img0 from './assets/imgs/DeCaptcha/random_square22.png'
import set26Img1 from './assets/imgs/DeCaptcha/random_square23.png'
import set26Img2 from './assets/imgs/DeCaptcha/prayerrug_square0.png'
import set26Img3 from './assets/imgs/DeCaptcha/random_square24.png'
import set26Img4 from './assets/imgs/DeCaptcha/random_square25.png'
import set26Img5 from './assets/imgs/DeCaptcha/prayerrug_square1.png'
import set26Img6 from './assets/imgs/DeCaptcha/random_square26.png'
import set26Img7 from './assets/imgs/DeCaptcha/random_square27.png'
import set26Img8 from './assets/imgs/DeCaptcha/prayerrug_square2.png'


// audio file for captcha audio
import audioTest from './assets/audio_test.mp3'

function App() {
  const [captchaView, setCaptchaView] = useState({display: 'flex'});

  // see README.md for format of object parameter
  const myArrayOfObjects = 
  [
      {
        "squareOrImage": "square",
        "title": "truck",
        "images": [set0Img0, set0Img1, set0Img2, set0Img3, set0Img4, set0Img5, set0Img6, set0Img7, set0Img8],
        "answers": [7, 8]
      },
      {
        "squareOrImage": "square",
        "title": "chair",
        "images": [set1Img0, set1Img1, set1Img2, set1Img3, set1Img4, set1Img5, set1Img6, set1Img7, set1Img8],
        "answers": [5, 8]
      },
      {
        "squareOrImage": "square",
        "title": "prayer rug",
        "images": [set2Img0, set2Img1, set2Img2, set2Img3, set2Img4, set2Img5, set2Img6, set2Img7, set2Img8],
        "answers": [7, 8]
      },
      {
        "squareOrImage": "square",
        "title": "car",
        "images": [set3Img0, set3Img1, set3Img2, set3Img3, set3Img4, set3Img5, set3Img6, set3Img7, set3Img8],
        "answers": [1, 2, 4, 5]
      },
      {
        "squareOrImage": "square",
        "title": "cat",
        "images": [set4Img0, set4Img1, set4Img2, set4Img3, set4Img4, set4Img5, set4Img6, set4Img7, set4Img8],
        "answers": [7]
      },
      {
        "squareOrImage": "square",
        "title": "stairs",
        "images": [set5Img0, set5Img1, set5Img2, set5Img3, set5Img4, set5Img5, set5Img6, set5Img7, set5Img8],
        "answers": [3, 4, 5, 6, 7, 8]
      },
      {
        "squareOrImage": "square",
        "title": "billboard",
        "images": [set6Img0, set6Img1, set6Img2, set6Img3, set6Img4, set6Img5, set6Img6, set6Img7, set6Img8],
        "answers": [4, 7]
      },
      {
        "squareOrImage": "square",
        "title": "window",
        "images": [set7Img0, set7Img1, set7Img2, set7Img3, set7Img4, set7Img5, set7Img6, set7Img7, set7Img8],
        "answers": [1, 2, 4, 5]
      },
      {
        "squareOrImage": "square",
        "title": "shoes",
        "images": [set8Img0, set8Img1, set8Img2, set8Img3, set8Img4, set8Img5, set8Img6, set8Img7, set8Img8],
        "answers": [1, 2, 4, 5]
      },
      {
        "squareOrImage": "square",
        "title": "backpack",
        "images": [set9Img0, set9Img1, set9Img2, set9Img3, set9Img4, set9Img5, set9Img6, set9Img7, set9Img8],
        "answers": [0, 3, 4, 5, 6, 7, 8]
      },
      {
        "squareOrImage": "square",
        "title": "books",
        "images": [set10Img0, set10Img1, set10Img2, set10Img3, set10Img4, set10Img5, set10Img6, set10Img7, set10Img8],
        "answers": [4, 5, 6, 7]
      },
      {
        "squareOrImage": "square",
        "title": "رمضان كريم",
        "images": [set11Img0, set11Img1, set11Img2, set11Img3, set11Img4, set11Img5, set11Img6, set11Img7, set11Img8],
        "answers": [4, 7]
      },
      {
        "squareOrImage": "square",
        "title": "motorcycle",
        "images": [set12Img0, set12Img1, set12Img2, set12Img3, set12Img4, set12Img5, set12Img6, set12Img7, set12Img8],
        "answers": [3, 6]
      },
      {
        "squareOrImage": "square",
        "title": "sign",
        "images": [set13Img0, set13Img1, set13Img2, set13Img3, set13Img4, set13Img5, set13Img6, set13Img7, set13Img8],
        "answers": [1, 2]
      },
      {
        "squareOrImage": "square",
        "title": "date palms",
        "images": [set14Img0, set14Img1, set14Img2, set14Img3, set14Img4, set14Img5, set14Img6, set14Img7, set14Img8],
        "answers": [5, 6, 7, 8]
      },
      {
        "squareOrImage": "square",
        "title": "date palms",
        "images": [set15Img0, set15Img1, set15Img2, set15Img3, set15Img4, set15Img5, set15Img6, set15Img7, set15Img8],
        "answers": [3, 4, 5]
      },
      {
        "squareOrImage": "square",
        "title": "chair",
        "images": [set16Img0, set16Img1, set16Img2, set16Img3, set16Img4, set16Img5, set16Img6, set16Img7, set16Img8],
        "answers": [3, 6]
      },
      {
        "squareOrImage": "square",
        "title": "chair",
        "images": [set17Img0, set17Img1, set17Img2, set17Img3, set17Img4, set17Img5, set17Img6, set17Img7, set17Img8],
        "answers": [6, 7, 8]
      },
      {
        "squareOrImage": "square",
        "title": "vegetables",
        "images": [set18Img0, set18Img1, set18Img2, set18Img3, set18Img4, set18Img5, set18Img6, set18Img7, set18Img8],
        "answers": [3, 4, 5, 7, 8]
      },
      {
        "squareOrImage": "square",
        "title": "buildings",
        "images": [set19Img0, set19Img1, set19Img2, set19Img3, set19Img4, set19Img5, set19Img6, set19Img7, set19Img8],
        "answers": [3, 4, 5, 6, 7, 8]
      },
      {
        "squareOrImage": "square",
        "title": "soccer ball",
        "images": [set20Img0, set20Img1, set20Img2, set20Img3, set20Img4, set20Img5, set20Img6, set20Img7, set20Img8],
        "answers": [8]
      },
      {
        "squareOrImage": "square",
        "title": "rocks",
        "images": [set21Img0, set21Img1, set21Img2, set21Img3, set21Img4, set21Img5, set21Img6, set21Img7, set21Img8],
        "answers": [6, 7, 8]
      },
      {
        "squareOrImage": "images",
        "title": "chair",
        "images": [set22Img0, set22Img1, set22Img2, set22Img3, set22Img4, set22Img5, set22Img6, set22Img7, set22Img8],
        "answers": [0, 2, 5, 6]
      },
      {
        "squareOrImage": "images",
        "title": "chair",
        "images": [set23Img0, set23Img1, set23Img2, set23Img3, set23Img4, set23Img5, set23Img6, set23Img7, set23Img8],
        "answers": [2, 6, 8]
      },
      {
        "squareOrImage": "images",
        "title": "chair",
        "images": [set24Img0, set24Img1, set24Img2, set24Img3, set24Img4, set24Img5, set24Img6, set24Img7, set24Img8],
        "answers": [1, 3, 8]
      },
      {
        "squareOrImage": "images",
        "title": "date palms",
        "images": [set25Img0, set25Img1, set25Img2, set25Img3, set25Img4, set25Img5, set25Img6, set25Img7, set25Img8],
        "answers": [3, 4, 6, 7]
      },
      {
        "squareOrImage": "images",
        "title": "prayer rug",
        "images": [set26Img0, set26Img1, set26Img2, set26Img3, set26Img4, set26Img5, set26Img6, set26Img7, set26Img8],
        "answers": [2, 5, 8]
      },
  ]

  const onCorrect = () => {
    setCaptchaView({display: 'none'})
  }

  return (
    <div className="App">
      <div className='wrapper' style={captchaView}>
        <DeCAPTCHA objOfQuizzes={myArrayOfObjects} infoLink='https://www.google.com/' audioLink={audioTest} onCaptchaCorrect={onCorrect}/>
      </div>
    </div>
  );
}

export default App;
