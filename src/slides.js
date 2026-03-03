'use strict';

let idx = 0;
const slides = Array.from(document.querySelectorAll('section.slide'));
const counter = document.getElementById('counter');
const scrubber = document.getElementById('slide-scrubber');
const sliderCounter = document.getElementById('slider-counter');
const sliderProgress = document.querySelector('.slider-progress');
const sliderThumb = document.querySelector('.slider-thumb');

function clamp(n, lo, hi) { 
  return Math.max(lo, Math.min(hi, n)); 
}

function fragsOf(slide) { 
  return Array.from(slide.querySelectorAll('.frag')); 
}

function show(i, revealAll) {
  const next = clamp(i, 0, slides.length - 1);
  slides[idx].classList.remove('active');
  idx = next;
  slides[idx].classList.add('active');
  fragsOf(slides[idx]).forEach(f => f.classList.toggle('visible', !!revealAll));
  
  if (counter) counter.textContent = `${idx + 1} / ${slides.length}`;
  if (sliderCounter) sliderCounter.textContent = `${idx + 1} / ${slides.length}`;
  
  // Update slider position - THIS IS THE KEY FIX
  if (scrubber) {
    scrubber.value = String(idx + 1);
  }
  
  // Update progress bar and thumb position
  const progress = ((idx + 1) / slides.length) * 100;
  if (sliderProgress) sliderProgress.style.width = `${progress}%`;
  if (sliderThumb) sliderThumb.style.left = `calc(${progress}% - 10px)`;
  
  history.replaceState(null, '', `#${idx + 1}`);
  const f = slides[idx].querySelector('.content');
  if (f && document.activeElement !== scrubber) {
    f.setAttribute('tabindex', '-1');
    f.focus({ preventScroll: true });
  }
}

function advance() {
  const frags = fragsOf(slides[idx]);
  const hidden = frags.filter(f => !f.classList.contains('visible'));
  if (hidden.length) {
    hidden[0].classList.add('visible');
  } else if (idx < slides.length - 1) {
    show(idx + 1);
  }
}

function retreat() {
  const frags = fragsOf(slides[idx]);
  const shown = frags.filter(f => f.classList.contains('visible'));
  if (shown.length) {
    shown[shown.length - 1].classList.remove('visible');
  } else if (idx > 0) {
    show(idx - 1, true);
  }
}

/* ── Overview mode ── */
function toggleOverview() {
  const on = document.body.classList.toggle('overview');
  if (on) {
    slides[idx].scrollIntoView({ block: 'center', behavior: 'instant' });
  }
}

// Initialize slides
slides.forEach((s, i) => {
  s.setAttribute('data-slide-num', i + 1);
  s.addEventListener('click', () => {
    if (!document.body.classList.contains('overview')) return;
    document.body.classList.remove('overview');
    show(i, true);
  });
});

// Keyboard navigation
document.addEventListener('keydown', e => {
  if (['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) return;
  if (e.key === 'Escape') { 
    e.preventDefault(); 
    toggleOverview(); 
    return; 
  }
  if (document.body.classList.contains('overview')) return;
  if (['ArrowRight','PageDown',' '].includes(e.key)) { 
    e.preventDefault(); 
    advance(); 
  }
  if (['ArrowLeft','PageUp'].includes(e.key)) { 
    e.preventDefault(); 
    retreat(); 
  }
  if (e.key === 'Home') { 
    e.preventDefault(); 
    show(0); 
  }
  if (e.key === 'End') { 
    e.preventDefault(); 
    show(slides.length - 1, true); 
  }
});

// Arrow buttons
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
if (btnPrev) btnPrev.addEventListener('click', retreat);
if (btnNext) btnNext.addEventListener('click', advance);

// Slider navigation
if (scrubber) {
  scrubber.min = 1;
  scrubber.max = slides.length;
  scrubber.step = 1;
  
  // Real-time feedback AND slide change during drag
  scrubber.addEventListener('input', (e) => {
    const targetSlide = parseInt(e.target.value) - 1;
    // Actually change the slide immediately during drag
    show(targetSlide, true);
  });
}

// Touch swipe navigation
let tx = 0, ty = 0, swipeOk = false;

document.addEventListener('touchstart', e => {
  if (e.touches.length !== 1) { 
    swipeOk = false; 
    return; 
  }
  if (e.target.closest('.stage')) { 
    swipeOk = false; 
    return; 
  }
  // Don't interfere with slider touch
  if (e.target === scrubber || e.target.closest('.sticky-footer')) {
    swipeOk = false;
    return;
  }
  tx = e.touches[0].clientX; 
  ty = e.touches[0].clientY; 
  swipeOk = true;
}, { passive: true });

document.addEventListener('touchmove', e => {
  if (!swipeOk || e.touches.length !== 1) return;
  if (Math.abs(e.touches[0].clientY - ty) > Math.abs(e.touches[0].clientX - tx) * 1.5) {
    swipeOk = false;
  }
}, { passive: true });

document.addEventListener('touchend', e => {
  if (!swipeOk) return;
  const dx = e.changedTouches[0].clientX - tx;
  const dy = e.changedTouches[0].clientY - ty;
  if (Math.abs(dx) >= 48 && Math.abs(dx) >= Math.abs(dy) * 1.2) { 
    dx < 0 ? advance() : retreat(); 
  }
  swipeOk = false;
}, { passive: true });

// Hash navigation
window.addEventListener('hashchange', () => {
  const m = location.hash.match(/^#(\d+)$/);
  if (m) show(parseInt(m[1], 10) - 1, true);
});

// Initialize
const m = location.hash.match(/^#(\d+)$/);
show(m ? clamp(parseInt(m[1], 10) - 1, 0, slides.length - 1) : 0, true);