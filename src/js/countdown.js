export const countdown = (id, limitDate, finalMessage) => {
  const $COUNTDOWN = document.getElementById(id)

  if($COUNTDOWN) {
    const $COUNTDOWN_DATE = new Date(limitDate).getTime()

    let countdownTempo = setInterval(() => {

      let now = new Date().getTime()
      let limitTime = $COUNTDOWN_DATE - now
      let days = Math.floor(limitTime / (1000 * 60 * 60 * 24))
      let hours = ('0' + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2)
      let minutes = ('0' + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2)
      let seconds = ('0' + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2)

      $COUNTDOWN.innerHTML = `<p class="countdown__time">${days}:<br><span>Days</span></p>
                              <p class="countdown__time">${hours}:<br><span>Hours</span></p>
                              <p class="countdown__time">${minutes}:<br><span>Min</span></p>
                              <p class="countdown__time">${seconds}<br><span>Sec</span></p>`

      if(limitTime < 0) {
        clearInterval(countdownTempo)
        $COUNTDOWN.innerHTML = `<p class="countdown__message">${finalMessage}</p>`
      }

    }, 1000)
  }
};
