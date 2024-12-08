 // Import GSAP
 gsap.registerPlugin(ScrollTrigger);

 // Marquee Animation
 gsap.to('.marquee', {
   xPercent: -100,
   repeat: -1,
   duration: 15,
   ease: 'linear',
   scrollTrigger: {
     trigger: '.marquee',
     start: 'top bottom',
     end: 'bottom top',
     scrub: true
   }
 });

 // Section Animations
 const sections = document.querySelectorAll('.section');
 sections.forEach((section, index) => {
   gsap.fromTo(
     section,
     { opacity: 0, y: 50, scale: 0.95 }, // Initial state
     {
       opacity: 1,
       y: 0,
       scale: 1,
       duration: 1,
       ease: "power2.out",
       scrollTrigger: {
         trigger: section, // Start animation when section enters the viewport
         start: "top 85%", // When the top of the section is 85% down the viewport
         end: "bottom 50%", // Animation ends when bottom is 50% down the viewport
         toggleActions: "play none none reverse", // Play animation on scroll
       },
     }
   );
 });