export const likeHubb = (selector) => {
  const $LIKE = document.querySelector(selector)
  const $CLICK = document.querySelector('.details__counter')
  let counter = 545

  if($LIKE) {
    $LIKE.addEventListener('click', () => {
      $CLICK.innerHTML = counter + 1
    })
  }

};
