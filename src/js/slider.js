class Slider{
  constructor(selector, movimiento=true){
    this.move = this.move.bind(this);
    this.moveByButton = this.moveByButton.bind(this);
    this.slider = document.querySelector(selector);
    this.itemsCount = this.slider.querySelectorAll(".slider__carousel > *").length;
    this.interval = null;
    this.contador = 0;
    this.movimiento = movimiento;

    this.start();
    this.buildControls();
    this.bindEvents();
  }

  start(){
    if(!this.movimiento) return;
    this.interval = window.setInterval(this.move, 5000);
  }

  move(){
    this.contador ++;
    if(this.contador > this.itemsCount - 1) this.contador = 0;
    this.moveTo(this.contador);
  }

  moveTo(index){
    let left = index * 100;

    this.resetIndicator();
    this.slider.querySelector(".slider__controls li:nth-child("+(index + 1)+")").classList.add("active");

    this.slider.querySelector(".slider__carousel").style.left = "-"+left+"%";
  }

  buildControls(){
    for (var i = 0; i < this.itemsCount; i++) {
      let control = document.createElement("li");

      if(i == 0) control.classList.add("active");

      this.slider.querySelector(".slider__controls ul").appendChild(control);
    }
  }

  resetIndicator(){
    this.slider.querySelectorAll(".slider__controls li.active")
      .forEach(item => item.classList.remove("active"));
  }

  restart(){
    if(this.interval) window.clearInterval(this.interval);
    this.start();
  }

  bindEvents(){
    this.slider.querySelectorAll(".slider__controls li")
      .forEach(item =>{
        item.addEventListener("click",this.moveByButton)
      });
  }

  moveByButton(ev){
    let index = IndexForSiblings.get(ev.currentTarget);
    this.contador = index;
    this.moveTo(index);
    this.restart();
  }
}

class IndexForSiblings{
  static get(el){
    let children = el.parentNode.children;

    for (var i = 0; i < children.length; i++) {
      let child = children[i];
      if(child == el) return i;
    }
  }
}

export const slider = (id) => {
  const $SLIDER_FEATURES = document.getElementById(id)

  if($SLIDER_FEATURES) {
    new Slider(".slider__container", true);
  }
};
