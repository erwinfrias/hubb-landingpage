export const likeHubb = (selector) => {

  const $LIKE = document.querySelector(selector)
  const $COUNTER = document.querySelector('.details__counter')
  let counter = 545

  if($LIKE) {
    $LIKE.addEventListener('click', () => {
      $COUNTER.innerHTML = counter + 1
      $LIKE.classList.toggle('details__like--clicked')
    })
  }

};
