import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import anime from 'animejs/lib/anime.es.js';


// function fitElementToParent(el, padding) {
//   var timeout = null;
//   function resize() {
//     if (timeout) clearTimeout(timeout);
//     anime.set(el, {scale: 1});
//     var pad = padding || 0;
//     var parentEl = el.parentNode;
//     var elOffsetWidth = el.offsetWidth - pad;
//     var parentOffsetWidth = parentEl.offsetWidth;
//     var ratio = parentOffsetWidth / elOffsetWidth;
//     timeout = setTimeout(anime.set(el, {scale: ratio}), 10);
//   }
//   resize();
//   window.addEventListener('resize', resize);
// }

// var layeredAnimation = (function() {

//   var transformEls = document.querySelectorAll('.transform-progress');
//   var layeredAnimationEl = document.querySelector('.layered-animations');
//   var shapeEls = layeredAnimationEl.querySelectorAll('.shape');
//   var triangleEl = layeredAnimationEl.querySelector('polygon');
//   var trianglePoints = triangleEl.getAttribute('points').split(' ');
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


// class TextScramble {
//   constructor(el) {
//     this.el = el
//     this.chars = '!<>-_\\/[]{}—=+*^?#________'
//     this.update = this.update.bind(this)
//   }
//   setText(newText) {
//     const oldText = this.el.innerText
//     const length = Math.max(oldText.length, newText.length)
//     const promise = new Promise((resolve) => this.resolve = resolve)
//     this.queue = []
//     for (let i = 0; i < length; i++) {
//       const from = oldText[i] || ''
//       const to = newText[i] || ''
//       const start = Math.floor(Math.random() * 40)
//       const end = start + Math.floor(Math.random() * 40)
//       this.queue.push({ from, to, start, end })
//     }
//     cancelAnimationFrame(this.frameRequest)
//     this.frame = 0
//     this.update()
//     return promise
//   }
//   update() {
//     let output = ''
//     let complete = 0
//     for (let i = 0, n = this.queue.length; i < n; i++) {
//       let { from, to, start, end, char } = this.queue[i]
//       if (this.frame >= end) {
//         complete++
//         output += to
//       } else if (this.frame >= start) {
//         if (!char || Math.random() < 0.28) {
//           char = this.randomChar()
//           this.queue[i].char = char
//         }
//         output += `<span class="dud">${char}</span>`
//       } else {
//         output += from
//       }
//     }
//     this.el.innerHTML = output
//     if (complete === this.queue.length) {
//       this.resolve()
//     } else {
//       this.frameRequest = requestAnimationFrame(this.update)
//       this.frame++
//     }
//   }
//   randomChar() {
//     return this.chars[Math.floor(Math.random() * this.chars.length)]
//   }
// }


// const phrases = [
//   'Hey,',
//   'my name is Bahareh',
//   'I\'m a creative technologist',
//   'This website is a capture of my work',
//   'as an engineer',
//   'designer',
//   'and',
//   'innovator'
// ]

// const el = document.querySelector('.text')
// const fx = new TextScramble(el)

// let counter = 0
// const next = () => {
//   fx.setText(phrases[counter]).then(() => {
//     setTimeout(next, 800)
//   })
//   counter = (counter + 1) % phrases.length
// }

// next()



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
