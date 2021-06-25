/*  Fonts
\*-------------------------------------------------------*/



/*  Images
\*-------------------------------------------------------*/
import favicon from './images/favicon.png'
import logo from './images/hubb-logo.svg'
import logoBlack from './images/hubb-logo-black.svg'
import logo3D from './images/logo.gif'
import friendsHubb from './images/friends-hubb.svg'

import bgMenu from './images/bg-menu.png'
import columnLeft from './images/column.png'
import witheFloor from './images/white-floor.svg'
import appStore from './images/app-store.svg'
import googlePlay from './images/google-play.svg'
import fissure from './images/fissure.png'
import fissureFooter from './images/fissure-footer.png'

import stairsLeft from './images/stair-left.png'
import stairsRight from './images/stair-right.png'
import stairsColumns from './images/columns.png'
import stairsHole from './images/hole.png'
import stairsFloat from './images/stair-floating.png'

import aboutPillar from './images/pillar.png'
import aboutStairs from './images/bottom-stairs.png'

import iconFacebook from './images/icon-facebook.svg'
import iconInstagram from './images/icon-instagram.svg'
import iconTwitter from './images/icon-twitter.svg'
import iconLinkedIn from './images/icon-linkedin.svg'
import iconSend from './images/icon-send.svg'
import iconLocation from './images/icon-location.svg'

import pillarsGroup from './images/pillars.png'
import pillarsMedium from './images/pillars-medium.png'

import openGraphHubb from './images/hubb.jpg'

import bannerCareers from './images/careers.jpg'

import cube from './images/cube.png'
import stair from './images/stair.png'
import door from './images/door.png'

import people from './images/people.jpg'
import party from './images/party.jpg'
import partyGlass from './images/party-cup.gif'
import appFlow from './images/hubb-app.gif'
import iconArrow from './images/icon-arrow.svg'

import iconGoingOut from './images/icon-out.svg'
import iconDate from './images/icon-date.svg'
import iconDrinks from './images/icon-drinks.svg'
import iconFood from './images/icon-food.svg'

import screenPlans from './images/hubb-plans.png'
import screenFollowing from './images/hubb-following.png'
import screenDiscover from './images/hubb-discover.png'
import screenApp from './images/hubb-app.png'

import iconHeartBorder from './images/icon-heart-border.svg'
import iconHeartFull from './images/icon-heart-full.svg'

import videoGoingOut from './images/going-out.jpg'
import videoDate from './images/date.jpg'
import videoDrinks from './images/drinks.jpg'
import videoFood from './images/food.jpg'

import universe from './images/universe.svg'



/*  CSS
\*-------------------------------------------------------*/
import scss from './scss/main.scss'
import 'animate.css'



/*  JavaScript
\*-------------------------------------------------------*/
import { activeMenu, activeMenuLink } from './js/menu'
import { emailNewsletter, emailRegister } from './js/email'
import { countdown } from './js/countdown'
import { slider } from './js/slider'
import { likeHubb } from './js/like'

activeMenu('hamburger','menu')
activeMenuLink()
emailNewsletter()
emailRegister()
countdown('countdown', 'Jun 04, 2021 23:59:00', "Live College to The Fullest 🍺🎉")
slider('slider')
likeHubb('.details__like')
