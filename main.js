$(".navbar-comp").load("/components/Navbar/Navbar.html");

$(".footer").load("/components/Footer/Footer.html");

AOS.init();

gsap.fromTo(
  ".social_animate",
  {
    opacity: 0,
    translateY: "10rem",
  },
  {
    opacity: 1,
    translateY: "0rem",
    duration: "1",
    stagger: 0.5,

    scrollTrigger: {
      trigger: "#follow_trigger",
      start: "top center",
      end: "top ",
    },
  }
);

gsap.fromTo(
  ".head_animate1",
  {
    opacity: 0,
    translateY: "10rem",
  },
  {
    opacity: 1,
    translateY: "0rem",
    duration: "1",
    stagger: 0.5,
  }
);

gsap.fromTo(
  ".box_animate",
  { opacity: 0, rotateY: "180" },
  {
    opacity: 1,
    rotateY: "0",
    duration: 2,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#section-features-grid",
      start: "top center",
      end: "top ",
    },
  }
);

gsap.fromTo(
  ".anim_product",
  { translateX: "100rem", opacity: {} },
  {
    translateX: "0rem",
    opacity: 1,
    duration: 1,
  }
);

gsap.fromTo(
  [".new_card_animate"],

  { translateY: "10rem", opacity: 0 },
  {
    translateY: "0rem",
    opacity: 1,
    duration: 1,
    stagger: 0.5,

    scrollTrigger: {
      trigger: "#section6",
      start: "top 200px",
      end: "top  ",
    },
  }
);

gsap.fromTo(
  [".new_card_2_anim"],

  { translateY: "10rem", opacity: 0 },
  {
    translateY: "0rem",
    opacity: 1,
    duration: 1,
    stagger: 0.5,

    scrollTrigger: {
      trigger: "#section5",
      start: "top 200px",
      end: "top  ",
    },
  }
);

gsap.fromTo(
  [".animate_icon"],

  { translateY: "4rem", opacity: 0 },
  {
    translateY: "0rem",
    opacity: 1,
    duration: 1,
    stagger: 0.2,

    scrollTrigger: {
      trigger: "#section-features-grid",
      start: "top 200px",
      end: "top  ",
    },
  }
);

gsap.fromTo(
  [".hero-rbe-post-1", ".hero-rbe-post-2", ".hero-rbe-post-3"],

  { translateY: "4rem", opacity: 0 },
  {
    translateY: "0rem",
    opacity: 1,
    duration: 1,
    stagger: 0.2,

    scrollTrigger: {
      trigger: ".hero-rbe-posts",
      start: "top 500px",
      end: "top  ",

      scrub: true,
    },
  }
);

gsap.fromTo([
  ".z",
  ".u",
  ".q",
  ".o",
  {
    opacity: 0,
    translateY: "4rem",
  },
  { translateY: "0rem", opacity: 1 },
]);

/* ------------------------------ selectoptionx ----------------------------- */

$(document).ready(function () {
  $(".chatbox").click(function () {
    $(".chatbox_container").fadeToggle();
  });
});
