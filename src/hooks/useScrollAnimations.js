import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function useScrollAnimations(enabled = true) {
  useLayoutEffect(() => {
    if (!enabled) return undefined

    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
      mm.add('(min-width: 761px)', () => {
        const sections = gsap.utils.toArray('.scrub-section')

        sections.forEach((section) => {
          const textTargets = section.querySelectorAll('.scrub-text')
          const imageTargets = section.querySelectorAll('.scrub-image')
          const cardTargets = section.querySelectorAll('.scrub-card')

          gsap.set([...textTargets, ...imageTargets, ...cardTargets], {
            willChange: 'transform, opacity',
          })

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: 'top 78%',
              end: 'bottom 28%',
              scrub: true,
              invalidateOnRefresh: true,
            },
          })

          if (textTargets.length) {
            tl.fromTo(
              textTargets,
              { y: 68, opacity: 0 },
              { y: 0, opacity: 1, duration: 1.05, ease: 'power2.out', stagger: 0.15 },
              0,
            )
          }

          if (imageTargets.length) {
            tl.fromTo(
              imageTargets,
              { scale: 0.9, opacity: 0.2, y: 38 },
              { scale: 1, opacity: 1, y: 0, duration: 1.1, ease: 'power2.out', stagger: 0.12 },
              0.06,
            )
          }

          if (cardTargets.length) {
            tl.fromTo(
              cardTargets,
              { y: 56, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.9, ease: 'power2.out', stagger: 0.14 },
              0.12,
            )
          }
        })

        const storySections = gsap.utils.toArray('.story-pin-section')

        storySections.forEach((section) => {
          const title = section.querySelector('.story-pin-title')
          const steps = section.querySelectorAll('.story-step')

          if (!title || !steps.length) return

          const storyTl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: 'top top+=84',
              end: '+=135%',
              scrub: true,
              pin: title,
              pinSpacing: false,
              invalidateOnRefresh: true,
            },
          })

          storyTl.fromTo(
            steps,
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.2, duration: 0.9, ease: 'power2.out' },
          )
        })

        const video = document.querySelector('.video-shell')
        if (video) {
          gsap.timeline({
            scrollTrigger: {
              trigger: video,
              start: 'top 82%',
              end: 'bottom 25%',
              scrub: true,
              invalidateOnRefresh: true,
            },
          }).fromTo(
            video,
            { opacity: 0.12, scale: 0.88, y: 64 },
            { opacity: 1, scale: 1, y: 0, ease: 'power2.out' },
          )
        }

        const layers = gsap.utils.toArray('.parallax-layer')
        layers.forEach((layer) => {
          const speed = Number(layer.getAttribute('data-speed') || '0.2')
          gsap.to(layer, {
            yPercent: speed * 34,
            ease: 'none',
            scrollTrigger: {
              trigger: layer.closest('section') || layer,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
              invalidateOnRefresh: true,
            },
          })
        })
      })

      mm.add('(max-width: 760px)', () => {
        gsap.utils.toArray('.scrub-card, .scrub-image, .scrub-text').forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0.4, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              ease: 'power1.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                end: 'top 50%',
                scrub: true,
              },
            },
          )
        })
      })

      ScrollTrigger.refresh()
    })

    return () => {
      mm.revert()
      ctx.revert()
    }
  }, [enabled])
}

export default useScrollAnimations
