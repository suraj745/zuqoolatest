window.onload = function () {
  lax.init();

  // Add a driver that we use to control our animations
  lax.addDriver("scrollY", function () {
    return window.scrollY;
  });

  // Add animation bindings to elements
  lax.addElements(".team_card", {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        {
          900: [30, 40, 60], // Screen width > 500 and < 900

          1400: [100, 10, 80],
        },
        {
          inertia: 70, // Options
        },
      ],
    },
  });
};
