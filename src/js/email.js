export const emailNewsletter = () => {
  const $NEWSLETTER_FORM = document.getElementById('newsletterForm')

  if($NEWSLETTER_FORM) {

    $NEWSLETTER_FORM.addEventListener('submit', (e) => {
      e.preventDefault()

      let datos = new FormData($NEWSLETTER_FORM)

      fetch('./email.php', {
        method: 'POST',
        body: datos
      })

      .then(function (response) {
          return response.text()
      }).then(function (text) {
          console.log(text)
          location.reload()
      }).catch(function (error) {
          console.error(error)
      });

    })
  }
};
