import React from 'react'
import './Animations.css'
import anime from 'animejs/lib/anime.es.js';
import { useState, useEffect, useRef } from "react";





const Animations = () => {


  const [activeTextElement, setactiveTextElement] = useState(0);
  const activeTextElementRef = useRef(null);
  const [counter, setCounter] = useState(0);
  const [myShape, setmyShape] = useState(0);

  function fitElementToParent(el, padding) {
    var timeout = null; 
    function resize() {
      if (timeout) clearTimeout(timeout);
      anime.set(el, {scale: 1});
      var pad = padding || 0;
      var parentEl = el.parentNode;
      var elOffsetWidth = el.offsetWidth - pad;
      var parentOffsetWidth = parentEl.offsetWidth;
      var ratio = parentOffsetWidth / elOffsetWidth;
      timeout = setTimeout(anime.set(el, {scale: ratio}), 10);
    }
    resize();
    window.addEventListener('resize', resize);
  }

  // var layeredAnimation = (function() {

  //   var transformEls = document.querySelectorAll('.transform-progress');
  //   var layeredAnimationEl = document.querySelector('.layered-animations');
  //   var triangleEl = layeredAnimationEl.querySelector('polygon');
  //   var trianglePoints = triangleEl.getAttribute('points').split(' ');
  //   var shapeEls = layeredAnimationEl.querySelectorAll('.shape');
  //   var easings = ['easeInOutQuad', 'easeInOutCirc', 'easeInOutSine', 'spring'];

  //   fitElementToParent(layeredAnimationEl);

  //   function createKeyframes(value) {
  //     var keyframes = [];
  //     for (var i = 0; i < 30; i++) keyframes.push({ value: value });
  //     return keyframes;
  //   }

  //   function animateShape(el) {

  //     var signEl = el.querySelector('sign');
  //     var circleEl = el.querySelector('circle');
  //     var rectEl = el.querySelector('rect');
  //     var polyEl = el.querySelector('polygon');

  //     var animation = anime.timeline({
  //       targets: el,
  //       duration: function() { return anime.random(600, 2200); },
  //       easing: function() { return easings[anime.random(0, easings.length - 1)]; },
  //       complete: function(anim) { animateShape(anim.animatables[0].target); },
  //     })
  //     .add({
  //       translateX: createKeyframes(function(el) { 
  //         return el.classList.contains('large') ? anime.random(-300, 300) : anime.random(-520, 520);
  //       }),
  //       translateY: createKeyframes(function(el) { 
  //         return el.classList.contains('large') ? anime.random(-110, 110) : anime.random(-280, 280);
  //       }),
  //       rotate: createKeyframes(function() { return anime.random(-180, 180); }),
  //     }, 0);

  //     if (signEl) {
  //       animation.add({
  //         targets: signEl,
  //         r: createKeyframes(function() { return anime.random(32, 72); }),
  //       }, 0);
  //     }
  //     if (circleEl) {
  //       animation.add({
  //         targets: circleEl,
  //         r: createKeyframes(function() { return anime.random(32, 72); }),
  //       }, 0);
  //     }
  //     if (rectEl) {
  //       animation.add({
  //         targets: rectEl,
  //         width: createKeyframes(function() { return anime.random(64, 120); }),
  //         height: createKeyframes(function() { return anime.random(64, 120); }),
  //       }, 0);
  //     }
  //     if (polyEl) {
  //       animation.add({
  //         targets: polyEl,
  //         points: createKeyframes(function() { 
  //           var scale = anime.random(72, 180) / 100;
  //           return trianglePoints.map(function(p) { return p * scale; }).join(' ');
  //         }),
  //       }, 0);
  //     }

  //   }

  //   for (var i = 0; i < shapeEls.length; i++) {
  //     animateShape(shapeEls[i]);
  //   }

  // })();

  useEffect(()=>{
    var transformEls = document.querySelectorAll('.transform-progress');
    var layeredAnimationEl = document.querySelector('.layered-animations');
    var triangleEl = layeredAnimationEl.querySelector('polygon');
    var trianglePoints = triangleEl.getAttribute('points').split(' ');
    var shapeEls = layeredAnimationEl.querySelectorAll('.shape');
    var easings = ['easeInOutQuad', 'easeInOutCirc', 'easeInOutSine', 'spring'];

    fitElementToParent(layeredAnimationEl);

    function createKeyframes(value) {
      var keyframes = [];
      for (var i = 0; i < 30; i++) keyframes.push({ value: value });
      return keyframes;
    }

    function animateShape(el) {

      var signEl = el.querySelector('sign');
      var circleEl = el.querySelector('circle');
      var rectEl = el.querySelector('rect');
      var polyEl = el.querySelector('polygon');

      var animation = anime.timeline({
        targets: el,
        duration: function() { return anime.random(600, 2200); },
        easing: function() { return easings[anime.random(0, easings.length - 1)]; },
        complete: function(anim) { animateShape(anim.animatables[0].target); },
      })
      .add({
        translateX: createKeyframes(function(el) { 
          return el.classList.contains('large') ? anime.random(-300, 300) : anime.random(-520, 520);
        }),
        translateY: createKeyframes(function(el) { 
          return el.classList.contains('large') ? anime.random(-110, 110) : anime.random(-280, 280);
        }),
        rotate: createKeyframes(function() { return anime.random(-180, 180); }),
      }, 0);

      if (signEl) {
        animation.add({
          targets: signEl,
          r: createKeyframes(function() { return anime.random(32, 72); }),
        }, 0);
      }
      if (circleEl) {
        animation.add({
          targets: circleEl,
          r: createKeyframes(function() { return anime.random(32, 72); }),
        }, 0);
      }
      if (rectEl) {
        animation.add({
          targets: rectEl,
          width: createKeyframes(function() { return anime.random(64, 120); }),
          height: createKeyframes(function() { return anime.random(64, 120); }),
        }, 0);
      }
      // if (polyEl) {
      //   animation.add({
      //     targets: polyEl,
      //     points: createKeyframes(function() { 
      //       var scale = anime.random(72, 180) / 100;
      //       return trianglePoints.map(function(p) { return p * scale; }).join(' ');
      //     }),
      //   }, 0);
      // }

    }

    setmyShape( myShape+1 );
    
    if (myShape != shapeEls.length)
      animateShape(shapeEls[myShape]);

  },[myShape]) 


class TextScramble {
  constructor(el) {
    this.el = el
    console.log(el)
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    // replace this with ref again because this is using actual dom
    const oldText = this.el.innerText 
    console.log(oldText)
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}


const phrases = [
  'Hey,',
  'my name is Bahareh',
  'I\'m a creative technologist',
  'This website is a capture of my work',
  'as an engineer',
  'designer',
  'and',
  'innovator'
]

useEffect(()=>{
  const el =  activeTextElementRef.current;// = document.querySelector('.text')
  const fx = new TextScramble(el)
    fx.setText(phrases[counter]).then(() => {
      setTimeout(setCounter((counter + 1) % phrases.length), 800)
    })
},[counter]) 



  return (
    <div>
      <div className="container">
      <div className="text"   ref={activeTextElementRef}>  </div>
      
      <div className="animation-wrapper">
        <div className="layered-animations">
            <svg className="sign shape" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill="#000"
                    stroke="#000"
                    d="M46.056 56.304C44.8613 55.9627 44.136 55.664 43.88 55.408L42.344 53.872C42.1733 53.7013 42.0027 53.5733 41.832 53.488C41.7467 53.4027 41.6613 53.3173 41.576 53.232L40.808 52.72C40.808 52.464 40.4667 52.08 39.784 51.568V51.056L38.248 50.032L37.352 49.008C37.1813 48.9227 36.7973 48.5813 36.2 47.984C35.5173 47.216 34.536 46.2773 33.256 45.168C32.0613 43.9733 30.8667 42.864 29.672 41.84C28.4773 40.7307 27.4533 39.792 26.6 39.024C25.7467 38.256 25.3627 37.872 25.448 37.872L24.296 36.72V34.544L24.04 34.672L24.936 33.648L24.808 33.904C25.4053 33.392 25.96 32.8373 26.472 32.24L26.344 32.368L30.44 28.016H30.312L34.664 23.792L37.48 20.72H37.352C38.9733 19.0987 40.168 17.904 40.936 17.136C41.704 16.368 42.2587 15.8133 42.6 15.472C42.9413 15.0453 43.1547 14.7467 43.24 14.576C43.4107 14.4053 43.624 14.1067 43.88 13.68H44.008C44.3493 13.68 45.032 13.168 46.056 12.144C45.6293 11.376 45.3307 10.9067 45.16 10.736C45.0747 10.48 44.9893 10.3093 44.904 10.224L44.776 8.944C44.6907 8.944 44.4773 8.944 44.136 8.944C43.88 8.85866 43.5813 8.816 43.24 8.816L42.856 8.176C42.6853 8.09066 42.344 7.92 41.832 7.664C41.4053 7.32266 41.192 7.06666 41.192 6.896L35.816 1.52C35.9013 1.60533 36.072 1.64799 36.328 1.64799C36.4133 1.64799 36.456 1.69066 36.456 1.77599C36.5413 1.77599 36.712 1.43466 36.968 0.751999L33.384 0.879997L30.312 3.952C30.056 4.29333 29.8427 4.592 29.672 4.848C29.5867 5.01866 29.4587 5.18933 29.288 5.36C29.1173 5.53067 28.8613 5.78666 28.52 6.128C28.264 6.384 27.88 6.768 27.368 7.28L25.192 9.456C24.7653 10.1387 24.0827 10.8213 23.144 11.504L17.64 17.136H17.768L17.384 17.52V17.392C15.2507 19.5253 14.0133 20.8907 13.672 21.488L8.04 26.864C6.67467 28.2293 5.352 29.7653 4.072 31.472L2.024 33.264L0.488 35.056L1.128 36.464C1.128 36.5493 1.17067 36.6773 1.256 36.848C1.34133 36.9333 1.384 37.0187 1.384 37.104L4.072 40.304C4.75467 41.1573 5.56533 42.0107 6.504 42.864C7.44267 43.632 8.168 44.272 8.68 44.784L10.728 47.088H11.112L30.312 65.392C30.9947 66.0747 31.464 66.5867 31.72 66.928C31.976 67.2693 32.1893 67.568 32.36 67.824C32.5307 68.08 32.744 68.3787 33 68.72C33.3413 68.976 33.896 69.4027 34.664 70C34.7493 69.9147 35.0907 69.7013 35.688 69.36C36.2853 69.0187 36.5413 68.8907 36.456 68.976L37.864 67.184V67.44C37.9493 67.2693 38.2053 66.8853 38.632 66.288C39.144 65.6053 39.6133 65.1787 40.04 65.008L43.368 61.552C43.88 61.04 44.1787 60.784 44.264 60.784L45.544 59.632V59.76C45.544 60.016 45.7147 60.144 46.056 60.144V56.304ZM44.52 58.608L41.448 61.424C40.3387 62.448 39.3573 63.4293 38.504 64.368C37.6507 65.2213 36.8827 66.0747 36.2 66.928L35.816 67.568C35.3893 67.7387 35.1333 68.0373 35.048 68.464L34.792 68.336L34.92 68.208C34.8347 68.208 34.792 68.1227 34.792 67.952C34.792 67.8667 34.8773 67.7387 35.048 67.568L31.336 64.112L31.208 64.24L30.44 63.472C30.44 63.3867 30.3973 63.3013 30.312 63.216L30.184 63.344L24.04 57.456C22.6747 56.176 21.352 54.9813 20.072 53.872C18.8773 52.6773 17.8107 51.6533 16.872 50.8C16.0187 49.9467 15.336 49.264 14.824 48.752C14.312 48.24 14.0987 47.984 14.184 47.984L13.16 46.96V47.088L9.576 43.504C9.23467 43.1627 8.76533 42.736 8.168 42.224C7.656 41.712 7.10133 41.1573 6.504 40.56C5.90667 39.9627 5.30933 39.408 4.712 38.896C4.2 38.2987 3.816 37.8293 3.56 37.488L2.664 36.592C2.664 36.4213 2.70667 36.2933 2.792 36.208C2.536 35.952 2.36533 35.6533 2.28 35.312C2.45067 35.1413 2.57867 34.928 2.664 34.672V34.8C2.74933 34.7147 2.792 34.672 2.792 34.672C2.87733 34.5867 3.00533 34.4587 3.176 34.288C3.34667 34.032 3.64533 33.6907 4.072 33.264C4.49867 32.752 5.096 32.0693 5.864 31.216C6.632 30.3627 7.272 29.68 7.784 29.168C8.38133 28.5707 8.76533 28.1867 8.936 28.016V28.144L15.08 22.128C15.5067 21.4453 16.0613 20.7627 16.744 20.08C17.4267 19.3973 18.1093 18.7573 18.792 18.16L23.272 13.552L23.656 12.912C23.912 12.7413 24.3387 12.3573 24.936 11.76C25.5333 11.0773 26.3013 10.2667 27.24 9.328L28.392 8.304C28.9893 7.70666 29.416 7.28 29.672 7.024C30.0133 6.768 30.312 6.512 30.568 6.256C30.9093 5.99999 31.2507 5.70133 31.592 5.36C31.9333 4.93333 32.488 4.29333 33.256 3.43999L33 3.312C33.1707 3.14133 33.2987 3.01333 33.384 2.92799C33.4693 2.75733 33.5547 2.62933 33.64 2.544L33.768 2.28799H34.92V2.544C34.92 2.71466 35.0907 2.928 35.432 3.184L37.48 5.23199C37.992 5.744 38.5467 6.34133 39.144 7.024C39.8267 7.62133 40.424 8.176 40.936 8.688C41.448 9.2 41.8747 9.62666 42.216 9.968C42.5573 10.224 42.728 10.352 42.728 10.352L43.624 10.864L43.496 10.992C43.6667 11.248 44.008 11.4613 44.52 11.632L44.264 11.888H44.392L44.264 12.016V11.888L44.136 12.016C44.136 11.9307 44.0933 11.888 44.008 11.888C43.752 11.888 43.5813 11.8453 43.496 11.76L40.168 15.472L40.296 15.6L33.384 22.64L33.512 22.768L25.064 31.216L25.192 31.344C24.936 31.6853 24.5093 32.1547 23.912 32.752C23.4 33.3493 22.6747 34.1173 21.736 35.056V35.312L21.224 35.696C23.016 37.3173 24.2533 38.4693 24.936 39.152C25.6187 39.7493 26.216 40.304 26.728 40.816C27.3253 41.328 28.0933 42.0533 29.032 42.992C29.9707 43.8453 31.592 45.3813 33.896 47.6C34.3227 48.112 34.8347 48.6667 35.432 49.264C36.0293 49.8613 36.5413 50.3307 36.968 50.672L38.888 52.848L39.4 53.104C39.656 53.5307 39.9547 53.9147 40.296 54.256C40.7227 54.512 41.2773 54.9813 41.96 55.664L43.368 57.2L43.496 57.072C43.752 57.328 44.008 57.4987 44.264 57.584H44.52V58.096V58.608ZM49.036 56.304C50.2307 55.9627 50.956 55.664 51.212 55.408L52.748 53.872C52.9187 53.7013 53.0467 53.5733 53.132 53.488C53.3027 53.4027 53.4307 53.3173 53.516 53.232L54.284 52.72C54.284 52.464 54.6253 52.08 55.308 51.568V51.056L56.844 50.032L57.74 49.008C57.9107 48.9227 58.2947 48.5813 58.892 47.984C59.66 46.96 60.6413 45.8933 61.836 44.784C63.0307 43.5893 64.1827 42.48 65.292 41.456C66.4867 40.432 67.5107 39.5787 68.364 38.896C69.2173 38.2133 69.644 37.872 69.644 37.872L70.796 36.72V34.544L71.052 34.672L70.156 33.648L70.284 33.904C69.6867 33.392 69.132 32.8373 68.62 32.24L68.748 32.368L64.652 28.016H64.78L60.428 23.792L57.612 20.72H57.74C56.1187 19.0987 54.924 17.904 54.156 17.136C53.388 16.368 52.8333 15.8133 52.492 15.472C52.1507 15.0453 51.8947 14.7467 51.724 14.576C51.6387 14.4053 51.468 14.1067 51.212 13.68H51.084C50.7427 13.68 50.06 13.168 49.036 12.144C49.4627 11.376 49.7187 10.9067 49.804 10.736C49.9747 10.48 50.1027 10.3093 50.188 10.224L50.316 8.944C50.4013 8.944 50.572 8.944 50.828 8.944C51.1693 8.85866 51.5107 8.816 51.852 8.816L52.236 8.176C52.4067 8.09066 52.7053 7.92 53.132 7.664C53.644 7.32266 53.9 7.06666 53.9 6.896L59.276 1.52C59.1053 1.60533 58.9347 1.64799 58.764 1.64799C58.6787 1.64799 58.636 1.69066 58.636 1.77599C58.5507 1.77599 58.38 1.43466 58.124 0.751999L61.708 0.879997L64.78 3.952C65.036 4.29333 65.2067 4.592 65.292 4.848C65.4627 5.01866 65.6333 5.18933 65.804 5.36C65.9747 5.53067 66.188 5.78666 66.444 6.128C66.7853 6.384 67.212 6.768 67.724 7.28L69.9 9.456C70.3267 10.1387 71.0093 10.8213 71.948 11.504L77.452 17.136H77.324L77.708 17.52V17.392C78.732 18.5013 79.5427 19.3973 80.14 20.08C80.8227 20.6773 81.2493 21.1467 81.42 21.488L87.052 26.864C87.82 27.632 88.5027 28.4 89.1 29.168C89.7827 29.936 90.4227 30.704 91.02 31.472L93.068 33.264L94.604 35.056L93.964 36.464C93.964 36.5493 93.9213 36.6773 93.836 36.848C93.7507 36.9333 93.708 37.0187 93.708 37.104L91.02 40.304C90.3373 41.1573 89.484 42.0107 88.46 42.864C87.5213 43.632 86.8387 44.272 86.412 44.784L84.364 47.088H83.98L64.78 65.392C64.0973 66.0747 63.5853 66.5867 63.244 66.928C62.988 67.2693 62.732 67.568 62.476 67.824C62.3053 68.08 62.0493 68.3787 61.708 68.72C61.452 68.976 61.0253 69.4027 60.428 70C60.3427 69.9147 60.0013 69.7013 59.404 69.36C58.8067 69.0187 58.5507 68.8907 58.636 68.976L57.228 67.184V67.44C57.1427 67.2693 56.844 66.8853 56.332 66.288C55.9053 65.6053 55.4787 65.1787 55.052 65.008L51.724 61.552C51.212 61.04 50.9133 60.784 50.828 60.784L49.548 59.632V59.76C49.548 60.016 49.3773 60.144 49.036 60.144V56.304ZM50.572 58.608L53.644 61.424C54.7533 62.448 55.7347 63.4293 56.588 64.368C57.4413 65.2213 58.2093 66.0747 58.892 66.928L59.276 67.568C59.7027 67.7387 59.9587 68.0373 60.044 68.464L60.3 68.336L60.172 68.208C60.2573 68.208 60.3 68.1227 60.3 67.952C60.3 67.8667 60.2147 67.7387 60.044 67.568L63.756 64.112L63.884 64.24L64.652 63.472C64.652 63.3867 64.6947 63.3013 64.78 63.216L64.908 63.344L71.052 57.456C72.4173 56.176 73.6973 54.9813 74.892 53.872C76.0867 52.6773 77.1107 51.6533 77.964 50.8C78.9027 49.8613 79.628 49.1787 80.14 48.752C80.652 48.24 80.908 47.984 80.908 47.984L81.932 46.96V47.088L85.516 43.504C85.8573 43.1627 86.284 42.736 86.796 42.224C87.3933 41.712 87.9907 41.1573 88.588 40.56C89.1853 39.9627 89.74 39.408 90.252 38.896C90.8493 38.2987 91.276 37.8293 91.532 37.488L92.428 36.592C92.428 36.4213 92.3853 36.2933 92.3 36.208C92.556 35.952 92.7267 35.6533 92.812 35.312C92.6413 35.1413 92.5133 34.928 92.428 34.672V34.8C92.3427 34.7147 92.2573 34.6293 92.172 34.544C92.0867 34.4587 91.9587 34.3307 91.788 34.16C91.6173 33.9893 91.3187 33.6907 90.892 33.264C90.4653 32.752 89.868 32.0693 89.1 31.216C88.332 30.3627 87.692 29.68 87.18 29.168C86.668 28.5707 86.3267 28.1867 86.156 28.016V28.144L80.012 22.128C79.5853 21.4453 79.0307 20.7627 78.348 20.08C77.6653 19.3973 76.9827 18.7573 76.3 18.16L71.82 13.552L71.436 12.912C71.18 12.7413 70.7533 12.3573 70.156 11.76C69.5587 11.0773 68.7907 10.2667 67.852 9.328L66.7 8.304C66.188 7.70666 65.7613 7.28 65.42 7.024C65.164 6.768 64.908 6.512 64.652 6.256C64.396 5.99999 64.0547 5.70133 63.628 5.36C63.2013 4.93333 62.604 4.29333 61.836 3.43999L62.092 3.312C61.9213 3.14133 61.7933 3.01333 61.708 2.92799C61.6227 2.75733 61.5373 2.62933 61.452 2.544L61.324 2.28799H60.172V2.544C60.172 2.71466 60.0013 2.928 59.66 3.184L57.612 5.23199C56.588 6.256 55.5213 7.36533 54.412 8.56C53.388 9.75466 52.7053 10.352 52.364 10.352L51.468 10.864L51.596 10.992C51.4253 11.248 51.084 11.4613 50.572 11.632L50.828 11.888H50.7L50.828 12.016V11.888L50.956 12.016C50.956 11.9307 50.9987 11.888 51.084 11.888C51.2547 11.888 51.4253 11.8453 51.596 11.76L54.924 15.472L54.796 15.6L61.708 22.64L61.58 22.768L70.028 31.216L69.9 31.344C70.156 31.6853 70.54 32.1547 71.052 32.752C71.6493 33.3493 72.4173 34.1173 73.356 35.056V35.312L73.868 35.696C72.076 37.3173 70.8387 38.4693 70.156 39.152C69.4733 39.7493 68.8333 40.304 68.236 40.816C67.6387 41.328 66.8707 42.0533 65.932 42.992C65.0787 43.8453 63.5 45.3813 61.196 47.6C60.7693 48.112 60.2573 48.6667 59.66 49.264C59.0627 49.8613 58.5507 50.3307 58.124 50.672L56.204 52.848L55.692 53.104C55.18 53.5307 54.7533 53.9147 54.412 54.256C54.156 54.512 53.7293 54.9813 53.132 55.664L51.724 57.2L51.596 57.072C51.34 57.328 51.084 57.4987 50.828 57.584H50.572V58.096V58.608Z" />
            </svg>
          <svg className="large shape" viewBox="0 0 96 96">
            <defs>
              <linearGradient id="circleGradient" x1="0%" x2="100%" y1="20%" y2="80%">
                <stop stop-color="#373734" offset="0%"/>
                <stop stop-color="#242423" offset="50%"/>
                <stop stop-color="#0D0D0C" offset="100%"/>
              </linearGradient>
            </defs>
            <circle cx="48" cy="48" r="28" fill-rule="evenodd" stroke-linecap="square" fill="url(#circleGradient)"/>
          </svg>
          <svg className="small shape color-red" viewBox="0 0 96 96">
            <polygon fill-rule="evenodd" points="48 17.28 86.4 80.11584 9.6 80.11584" stroke-linecap="square"/>
          </svg>
          <svg className="large shape" viewBox="0 0 96 96">
            <defs>
              <linearGradient id="triangleGradient" x1="0%" x2="100%" y1="20%" y2="80%">
                <stop stop-color="#373734" offset="0%"/>
                <stop stop-color="#242423" offset="50%"/>
                <stop stop-color="#0D0D0C" offset="100%"/>
              </linearGradient>
            </defs>
            <polygon fill-rule="evenodd" points="48 17.28 86.4 80.11584 9.6 80.11584" stroke-linecap="square" fill="url(#triangleGradient)"/>
          </svg>
          <svg className="x-small shape" viewBox="0 0 96 96">
            <polygon fill-rule="evenodd" points="48 17.28 86.4 80.11584 9.6 80.11584" stroke-linecap="square"/>
          </svg>
          <svg className="x-small shape" viewBox="0 0 96 96">
            <rect width="48" height="48" x="24" y="24" fill-rule="evenodd" stroke-linecap="square"/>
          </svg>
          <svg className="small shape color-red" viewBox="0 0 96 96">
            <rect width="48" height="48" x="24" y="24" fill-rule="evenodd" stroke-linecap="square"/>
          </svg>
          <svg className="large shape" viewBox="0 0 96 96">
            <defs>
              <linearGradient id="rectGradient" x1="0%" x2="100%" y1="20%" y2="80%">
                <stop stop-color="#373734" offset="0%"/>
                <stop stop-color="#242423" offset="50%"/>
                <stop stop-color="#0D0D0C" offset="100%"/>
              </linearGradient>
            </defs>
            <rect width="48" height="48" x="24" y="24" fill-rule="evenodd" stroke-linecap="square" fill="url(#rectGradient)"/>
          </svg>
          <svg className="small shape color-red" viewBox="0 0 96 96">
            <circle cx="48" cy="48" r="32" fill-rule="evenodd" stroke-linecap="square"/>
          </svg>
          <svg className="x-small shape" viewBox="0 0 96 96">
            <circle cx="48" cy="48" r="32" fill-rule="evenodd" stroke-linecap="square"/>
          </svg>
        </div>
      </div>
    </div> 
  </div>
  )
}


export default Animations
