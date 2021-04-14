/*  Fonts
\*-------------------------------------------------------*/



/*  Images
\*-------------------------------------------------------*/
import favicon from './images/favicon.png'
import logo from './images/hubb-logo.svg'
import friendsHubb from './images/friends-hubb.svg'

import bgMenu from './images/bg-menu.png'
import columnLeft from './images/column.png'
import witheFloor from './images/white-floor.svg'
import appStore from './images/app-store.svg'
import googlePlay from './images/google-play.svg'
import fissure from './images/fissure.png'
import fissureFooter from './images/fissure-footer.png'

import emojiPartyBoy from './images/emoji-party-boy.svg'
import emojiPartyGirl from './images/emoji-party-girl.svg'
import emojiChris from './images/emoji-chris.svg'
import emojiDaniel from './images/emoji-daniel.svg'
import emojiHugo from './images/emoji-hugo.svg'
import emojiKim from './images/emoji-kim.svg'
import emojiLili from './images/emoji-lili.svg'
import emojiMattew from './images/emoji-mattew.svg'
import emojiVicky from './images/emoji-vicky.svg'

import screenMap from './images/app-map.png'
import screenChat from './images/app-chat.png'
import screenLogin from './images/app-discover.png'
import screenHangout from './images/app-hangout.png'
import screenTicket from './images/app-ticket.png'

import stairsLeft from './images/stair-left.png'
import stairsRight from './images/stair-right.png'
import stairsColumns from './images/columns.png'
import stairsHole from './images/hole.png'

import aboutPillar from './images/pillar.png'
import aboutStairs from './images/bottom-stairs.png'

import iconFacebook from './images/icon-facebook.svg'
import iconInstagram from './images/icon-instagram.svg'
import iconTwitter from './images/icon-twitter.svg'
import iconLinkedIn from './images/icon-linkedin.svg'
import iconSend from './images/icon-send.svg'

import pillarsGroup from './images/pillars.png'
import pillarsMedium from './images/pillars-medium.png'

import openGraphHubb from './images/hubb.jpg'

import bannerCareers from './images/careers.jpg'

/*  CSS
\*-------------------------------------------------------*/
import scss from './scss/main.scss'
import 'aos/dist/aos.css'
import 'animate.css'



/*  JavaScript
\*-------------------------------------------------------*/
import { activeMenu, activeMenuLink } from './js/menu'
import AOS from 'aos'

activeMenu('hamburger','menu')
activeMenuLink()

AOS.init({
  offset: 100, // offset (in px) from the original trigger point
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease-out-back', // default easing for AOS animations
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
