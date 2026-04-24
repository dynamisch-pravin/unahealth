import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)

  // Global GSAP defaults for a premium, consistent feel
  gsap.defaults({
    ease: 'power3.out',
    duration: 0.8,
  })

  // Default ScrollTrigger settings
  ScrollTrigger.defaults({
    toggleActions: 'play none none none',
  })
}

export { gsap, ScrollTrigger }
