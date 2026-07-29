import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
  const lenis = new Lenis({
    anchors: true,
    duration: 1.05,
    smoothWheel: true,
    syncTouch: false,
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  const heroTimeline = gsap.timeline({
    defaults: {
      ease: 'power3.out',
    },
  });

  heroTimeline
    .from('[data-hero-media]', {
      scale: 1.12,
      duration: 1.8,
    })
    .from(
      '[data-hero-title]',
      {
        yPercent: 110,
        opacity: 0,
        duration: 1.25,
      },
      0.25,
    )
    .from(
      '[data-hero-item]',
      {
        y: 24,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
      },
      0.55,
    );

  gsap.to('[data-hero-media]', {
    yPercent: 12,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });

  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
    gsap.from(element, {
      y: 48,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 86%',
        once: true,
      },
    });
  });
}
