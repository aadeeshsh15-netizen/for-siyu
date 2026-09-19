/**
 * FOR SIYU — CINEMATIC MEMORY & APOLOGY EXPERIENCE
 * Interactive Engine & Media Controller
 * Created by Aadu
 */

// Media Collection with Curated Metadata
const MEDIA_PHOTOS = [
  { id: 1, file: "01_20251122_180501.jpg", tag: "quiet", caption: "One of my favorite snapshots of us being completely ourselves." },
  { id: 2, file: "02_20251122_203336_1.jpg", tag: "candid", caption: "That sudden laugh that caught both of us off guard." },
  { id: 3, file: "03_20251122_230609.jpg", tag: "quiet", caption: "Late evening quietness, just happy to be by your side." },
  { id: 4, file: "04_20251123_003711.jpg", tag: "candid", caption: "Past midnight, neither of us wanting the conversation to end." },
  { id: 5, file: "05_20251224_213858_1.jpg", tag: "adventure", caption: "A winter night together that felt warmer than anything else." },
  { id: 6, file: "06_20260104_120130.jpg", tag: "adventure", caption: "New year beginnings and bright sunny walks." },
  { id: 7, file: "07_20260104_121132.jpg", tag: "adventure", caption: "Walking beside you, not rushing anywhere at all." },
  { id: 8, file: "08_20260306_185600.jpg", tag: "quiet", caption: "The calm that settles in whenever we are together." },
  { id: 9, file: "09_IMG-20250417-WA0018_1.jpg", tag: "candid", caption: "A casual moment sent across the screen that made my whole day." },
  { id: 10, file: "10_IMG-20250417-WA0022.jpg", tag: "candid", caption: "Unfiltered smiles that remind me how lucky I am." },
  { id: 11, file: "11_IMG-20250417-WA0023.jpg", tag: "quiet", caption: "Soft expressions and quiet thoughts shared." },
  { id: 12, file: "12_IMG-20250417-WA0024.jpg", tag: "candid", caption: "Proof that even random candid moments become precious memories." },
  { id: 13, file: "13_IMG-20250417-WA0025.jpg", tag: "quiet", caption: "A gentle look that I always hold onto." },
  { id: 14, file: "14_IMG_0935_Original.jpg", tag: "adventure", caption: "The day we set off with nowhere specific to go." },
  { id: 15, file: "15_IMG_1062.jpg", tag: "quiet", caption: "One of those photos where the world just felt completely still." },
  { id: 16, file: "16_IMG_20250815_162855_913.webp", tag: "adventure", caption: "Sunlight, good energy, and your presence making everything brighter." },
  { id: 17, file: "17_IMG_20251120_165126_505_1.jpg", tag: "candid", caption: "Candid smiles in the middle of an ordinary afternoon." },
  { id: 18, file: "18_IMG_3994.jpeg", tag: "candid", caption: "That goofy expression that instantly makes me smile." },
  { id: 19, file: "19_IMG_3998.jpeg", tag: "candid", caption: "Unplanned, unposed, and perfectly us." },
  { id: 20, file: "20_IMG_4031.jpeg", tag: "quiet", caption: "A calm frame from a day I never want to forget." },
  { id: 21, file: "21_IMG_4034.jpeg", tag: "quiet", caption: "Side by side, where everything feels familiar and safe." },
  { id: 22, file: "22_IMG_4037.jpeg", tag: "candid", caption: "The little jokes only the two of us understand." },
  { id: 23, file: "23_IMG_4038.jpeg", tag: "candid", caption: "Trying to take a serious photo and failing completely." },
  { id: 24, file: "24_IMG_4039.jpeg", tag: "candid", caption: "Genuine happiness captured in a fraction of a second." },
  { id: 25, file: "25_IMG_4187.jpeg", tag: "adventure", caption: "Dressed up, but still the same two silly people at heart." },
  { id: 26, file: "26_IMG_4212.jpeg", tag: "candid", caption: "The comfort of knowing I could just be myself around you." },
  { id: 27, file: "27_IMG_4214.jpeg", tag: "quiet", caption: "Soft lighting and an evening worth cherishing." },
  { id: 28, file: "28_IMG_4220.jpeg", tag: "candid", caption: "A snapshot taken without thinking, now irreplaceable." },
  { id: 29, file: "29_IMG_4230.jpeg", tag: "adventure", caption: "Out and about, discovering little corners of our world." },
  { id: 30, file: "30_IMG_4238.jpeg", tag: "quiet", caption: "The quiet moments that matter just as much as the big ones." },
  { id: 31, file: "31_IMG_4243.jpeg", tag: "candid", caption: "Your genuine warmth shining through." },
  { id: 32, file: "32_IMG_4245.jpeg", tag: "quiet", caption: "A glance that reminds me of everything good in my life." },
  { id: 33, file: "33_IMG_4246.jpeg", tag: "candid", caption: "Caught mid-conversation, listening to your stories." },
  { id: 34, file: "34_IMG_4247.jpeg", tag: "adventure", caption: "One of my absolute favorites of us together." },
  { id: 35, file: "35_IMG_4256.jpeg", tag: "quiet", caption: "Peaceful moments that I never took for granted." },
  { id: 36, file: "36_IMG_4261.jpeg", tag: "candid", caption: "The playful side of you that brings so much joy." },
  { id: 37, file: "37_IMG_4262.jpeg", tag: "quiet", caption: "Soft smiles and a feeling of home." },
  { id: 38, file: "38_IMG_4264.jpeg", tag: "candid", caption: "Another memory tucked safely into my heart." },
  { id: 39, file: "39_IMG_4265.jpeg", tag: "adventure", caption: "Standing together, through every season." },
  { id: 40, file: "40_Snapchat-969223304.jpg", tag: "candid", caption: "A funny little snap that always brings back that exact feeling." }
];

const MEDIA_VIDEOS = [
  {
    id: 1,
    file: "41_3110BCB1-1A48-49FA-936C-1DFB72BF4211.mp4",
    title: "A Moving Glimpse",
    desc: "A brief, unscripted second that a still photo couldn't quite hold."
  },
  {
    id: 2,
    file: "42_IMG_4183.mp4",
    title: "The Sound of That Day",
    desc: "The ambient rhythm of where we were and how easy it felt."
  },
  {
    id: 3,
    file: "43_IMG_4229.mp4",
    title: "In the Middle of the Moment",
    desc: "No posing, no rehearsing. Just being right there together."
  }
];

// Helper to resolve media file path regardless of folder deployment
function resolvePath(filename) {
  // If running from Desktop alongside 'media/', or inside 'media/' directly
  return filename;
}

function handleMediaError(elem, filename) {
  if (!elem.dataset.fallbackTried) {
    elem.dataset.fallbackTried = 'true';
    if (!filename.startsWith('media/')) {
      elem.src = 'media/' + filename;
    } else {
      elem.src = filename.replace(/^media\//, './');
    }
  }
}

// -----------------------------------------------------------------------------
// 1. Interactive Ambient Canvas (Subtle Glowing Stardust)
// -----------------------------------------------------------------------------
const canvas = document.getElementById('ambient-canvas');
const ctx = canvas ? canvas.getContext('2d') : null;
let particles = [];

function initCanvas() {
  if (!canvas || !ctx) return;
  
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  particles = [];
  const count = Math.min(Math.floor(window.innerWidth / 35), 32);
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.6 + 0.5,
      alpha: Math.random() * 0.5 + 0.2,
      vx: (Math.random() - 0.5) * 0.25,
      vy: -Math.random() * 0.35 - 0.1,
      fadeRate: Math.random() * 0.006 + 0.003
    });
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.alpha += Math.sin(Date.now() * 0.001 + p.x) * 0.004;

      if (p.y < -10) {
        p.y = canvas.height + 10;
        p.x = Math.random() * canvas.width;
      }
      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 185, 205, ${Math.max(0.08, Math.min(0.65, p.alpha))})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(255, 142, 170, 0.4)';
      ctx.fill();
    }
    requestAnimationFrame(render);
  }
  render();
}

// -----------------------------------------------------------------------------
// 2. Custom Cursor on Desktop
// -----------------------------------------------------------------------------
const cursor = document.getElementById('custom-cursor');
const follower = document.getElementById('custom-cursor-follower');

if (cursor && follower && window.matchMedia('(pointer: fine)').matches) {
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followX = mouseX;
  let followY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });

  function animateFollower() {
    followX += (mouseX - followX) * 0.15;
    followY += (mouseY - followY) * 0.15;
    follower.style.left = `${followX}px`;
    follower.style.top = `${followY}px`;
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  const interactiveElements = 'button, a, .card-item, .photo-card, .video-player-wrap, .filter-btn, .dock-item';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveElements)) {
      document.body.classList.add('cursor-hover');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveElements)) {
      document.body.classList.remove('cursor-hover');
    }
  });
}

// -----------------------------------------------------------------------------
// 3. Background Music Controller (Raabta - Pritam, Arijit Singh)
// -----------------------------------------------------------------------------
let soundPlaying = false;
let bgMusic = null;

function initAudio() {
  if (!bgMusic) {
    bgMusic = document.getElementById('bgMusic');
    if (!bgMusic) {
      bgMusic = new Audio('raabta.mp3');
      bgMusic.id = 'bgMusic';
      bgMusic.loop = true;
      document.body.appendChild(bgMusic);
    }
    bgMusic.loop = true;
    bgMusic.volume = 0.65;
    
    // Fallback if accessed from sibling directory
    bgMusic.addEventListener('error', () => {
      const currentSrc = bgMusic.currentSrc || bgMusic.src;
      if (!currentSrc.includes('media/')) {
        bgMusic.src = 'media/raabta.mp3';
        if (soundPlaying) {
          bgMusic.play().catch(e => console.warn('Audio fallback error:', e));
        }
      }
    });
  }
}

function toggleSound() {
  const soundBtn = document.getElementById('soundToggleBtn');
  const soundLabel = document.getElementById('soundLabel');
  
  initAudio();

  soundPlaying = !soundPlaying;

  if (soundPlaying) {
    bgMusic.play().then(() => {
      soundBtn.classList.add('active');
      if (soundLabel) soundLabel.textContent = 'Playing';
    }).catch((err) => {
      console.warn('Audio playback prevented or failed:', err);
      soundPlaying = false;
      soundBtn.classList.remove('active');
      if (soundLabel) soundLabel.textContent = 'Music';
    });
  } else {
    bgMusic.pause();
    soundBtn.classList.remove('active');
    if (soundLabel) soundLabel.textContent = 'Music';
  }
}

// -----------------------------------------------------------------------------
// 4. Toast Notification
// -----------------------------------------------------------------------------
let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('toastNotice');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('visible');
  }, 3200);
}

// -----------------------------------------------------------------------------
// 5. Scroll Progress & Chapter Dock Tracking
// -----------------------------------------------------------------------------
const progressBar = document.getElementById('readingProgressFill');
const sections = document.querySelectorAll('section[id]');
const dockItems = document.querySelectorAll('.dock-item');

window.addEventListener('scroll', () => {
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (totalHeight > 0) {
    const progress = (window.scrollY / totalHeight) * 100;
    if (progressBar) progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }
}, { passive: true });

// Section Reveal & Dock Intersection Observer
const observerOptions = {
  root: null,
  threshold: 0.25
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      dockItems.forEach((item) => {
        if (item.dataset.target === id) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });

      // Trigger Chapter 9 farewell sequence if reached
      if (id === 'chapter-farewell') {
        triggerFarewellSequence();
      }
    }
  });
}, observerOptions);

sections.forEach((sec) => sectionObserver.observe(sec));

// Smooth Scroll Reveal for elements with scroll fallback
function checkReveals() {
  const vh = window.innerHeight || document.documentElement.clientHeight;
  document.querySelectorAll('.reveal-fade').forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < vh + 120 && rect.bottom > -120) {
      el.classList.add('visible');
    }
  });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.05, rootMargin: '60px 0px 100px 0px' });

document.querySelectorAll('.reveal-fade').forEach((el) => revealObserver.observe(el));
document.body.classList.add('has-reveal');
window.addEventListener('scroll', checkReveals, { passive: true });
window.addEventListener('resize', checkReveals, { passive: true });

// -----------------------------------------------------------------------------
// 6. Interactive Understanding Cards (Chapter 3)
// -----------------------------------------------------------------------------
function setupUnderstandingCards() {
  const cards = document.querySelectorAll('.card-item');
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('open');
    });
  });
}

// -----------------------------------------------------------------------------
// 7. Masonry Photo Gallery & Filter Setup (Chapter 5)
// -----------------------------------------------------------------------------
let activeFilter = 'all';
let currentGalleryList = [...MEDIA_PHOTOS];
let activeLightboxIndex = 0;

function renderGallery(filter = 'all') {
  const gallery = document.getElementById('masonryGallery');
  if (!gallery) return;

  activeFilter = filter;
  currentGalleryList = filter === 'all' 
    ? [...MEDIA_PHOTOS] 
    : MEDIA_PHOTOS.filter((p) => p.tag === filter);

  gallery.innerHTML = '';

  currentGalleryList.forEach((photo, idx) => {
    const card = document.createElement('div');
    card.className = 'photo-card reveal-fade visible';
    
    const img = document.createElement('img');
    img.src = resolvePath(photo.file);
    img.loading = idx < 8 ? 'eager' : 'lazy';
    img.alt = photo.caption;
    img.onerror = () => handleMediaError(img, photo.file);

    const overlay = document.createElement('div');
    overlay.className = 'photo-overlay';

    const caption = document.createElement('div');
    caption.className = 'photo-caption';
    caption.textContent = photo.caption;

    const meta = document.createElement('div');
    meta.className = 'photo-date';
    meta.textContent = `Memory #${photo.id}`;

    overlay.appendChild(caption);
    overlay.appendChild(meta);
    card.appendChild(img);
    card.appendChild(overlay);

    card.addEventListener('click', () => {
      openLightbox(idx);
    });

    gallery.appendChild(card);
  });
}

function setupGalleryFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter || 'all';
      renderGallery(filter);
    });
  });
}

// -----------------------------------------------------------------------------
// 8. Lightbox Modal (Physical Photograph Feeling)
// -----------------------------------------------------------------------------
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxCounter = document.getElementById('lightboxCounter');
const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
const lightboxNextBtn = document.getElementById('lightboxNextBtn');
const mobilePrevBtn = document.getElementById('mobilePrevBtn');
const mobileNextBtn = document.getElementById('mobileNextBtn');

function openLightbox(index) {
  if (!currentGalleryList[index]) return;
  activeLightboxIndex = index;
  updateLightboxContent();
  lightboxModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightboxModal.classList.remove('active');
  document.body.style.overflow = '';
}

function updateLightboxContent() {
  const item = currentGalleryList[activeLightboxIndex];
  if (!item) return;

  lightboxImg.src = resolvePath(item.file);
  lightboxImg.onerror = () => handleMediaError(lightboxImg, item.file);
  lightboxCaption.textContent = item.caption;
  lightboxCounter.textContent = `Memory ${activeLightboxIndex + 1} of ${currentGalleryList.length}`;
}

function nextLightboxPhoto() {
  activeLightboxIndex = (activeLightboxIndex + 1) % currentGalleryList.length;
  updateLightboxContent();
}

function prevLightboxPhoto() {
  activeLightboxIndex = (activeLightboxIndex - 1 + currentGalleryList.length) % currentGalleryList.length;
  updateLightboxContent();
}

if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', nextLightboxPhoto);
if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', prevLightboxPhoto);
if (mobileNextBtn) mobileNextBtn.addEventListener('click', nextLightboxPhoto);
if (mobilePrevBtn) mobilePrevBtn.addEventListener('click', prevLightboxPhoto);

// Close on backdrop click
if (lightboxModal) {
  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });
}

// Keyboard navigation
window.addEventListener('keydown', (e) => {
  if (!lightboxModal.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextLightboxPhoto();
  if (e.key === 'ArrowLeft') prevLightboxPhoto();
});

// Mobile touch swipe gestures for Lightbox
let touchStartX = 0;
let touchEndX = 0;

if (lightboxModal) {
  lightboxModal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightboxModal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
  }, { passive: true });
}

function handleSwipeGesture() {
  const deltaX = touchEndX - touchStartX;
  if (Math.abs(deltaX) > 45) {
    if (deltaX < 0) nextLightboxPhoto();
    else prevLightboxPhoto();
  }
}

// -----------------------------------------------------------------------------
// 9. Video Player Controls (Chapter 6)
// -----------------------------------------------------------------------------
function setupVideos() {
  const videoCards = document.querySelectorAll('.video-card');
  videoCards.forEach((card) => {
    const video = card.querySelector('video');
    const overlay = card.querySelector('.video-overlay-ctrl');
    const audioBtn = card.querySelector('.video-audio-toggle');
    const audioText = card.querySelector('.video-audio-text');

    if (!video) return;

    // Fallback path check
    const filename = video.dataset.filename;
    if (filename) {
      video.onerror = () => handleMediaError(video, filename);
    }

    if (overlay) {
      overlay.addEventListener('click', () => {
        if (video.paused) {
          // Pause other playing videos first
          document.querySelectorAll('video').forEach((v) => {
            if (v !== video && !v.paused) {
              v.pause();
              v.closest('.video-card')?.querySelector('.video-overlay-ctrl')?.classList.remove('playing');
            }
          });

          video.play().then(() => {
            overlay.classList.add('playing');
          }).catch((err) => {
            console.warn('Video play prevented:', err);
          });
        } else {
          video.pause();
          overlay.classList.remove('playing');
        }
      });
    }

    video.addEventListener('ended', () => {
      overlay?.classList.remove('playing');
    });

    if (audioBtn) {
      audioBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        video.muted = !video.muted;
        if (audioText) {
          audioText.textContent = video.muted ? 'Unmute' : 'Mute';
        }
      });
    }
  });
}

// -----------------------------------------------------------------------------
// 10. Navigation & Smooth Scroll Helpers
// -----------------------------------------------------------------------------
function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initCanvas();
  setupUnderstandingCards();
  renderGallery('all');
  setupGalleryFilters();
  setupVideos();
  checkReveals();
  setTimeout(checkReveals, 300);

  // Dock button click binding
  document.querySelectorAll('.dock-item').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      scrollToSection(targetId);
    });
  });

  // Sound toggle button binding
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', toggleSound);
  }

  // Chapter 1 start button
  const startBtn = document.getElementById('startJourneyBtn');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      scrollToSection('chapter-apology');
    });
  }

  // Return to top button
  const returnBtn = document.getElementById('returnTopBtn');
  if (returnBtn) {
    returnBtn.addEventListener('click', () => {
      scrollToSection('chapter-opening');
    });
  }

  // Handle direct hash navigation
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'auto' });
        checkReveals();
      }, 150);
    }
  }
});
