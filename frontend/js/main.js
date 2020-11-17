const step1EltCenter = {
  height: $("#step1Elt").width() / 2,
  width: $("#step1Elt").width() / 2,
};
let wToRemove = $(window).width() / 2 - step1EltCenter.width;
let hToRemove = $(window).height() / 2 - step1EltCenter.height;

$(window).resize(() => {
  wToRemove = $(window).width() / 2 - step1EltCenter.width;
  hToRemove = $(window).height() / 2 - step1EltCenter.height;
});

const accueil = {
  elt: "#accueil",
  xPos: 2380,
  yPos: 4215,
};

const step1 = {
  elt: "#step1Elt",
  xPos: 4710,
  yPos: 4170,
};

const step2 = {
  elt: "#step2Elt",
  xPos: 4400,
  yPos: 1950,
};

const step3 = {
  elt: "#step3Elt",
  xPos: 2845,
  yPos: 1969,
};

const step4 = {
  elt: "#step4Elt",
  xPos: 6289,
  yPos: 3125,
};

const step5 = {
  elt: "#step5Elt",
  xPos: 7709,
  yPos: 2061,
};

const step6 = {
  elt: "#step6Elt",
  xPos: 8189,
  yPos: 4249,
};

const centerAnimation = {
  duration: 2,
  x: `${wToRemove}px`,
  y: `${hToRemove}px`,
};

function moveElements(source, objects) {
  gsap.to(source.elt, centerAnimation);
  objects.forEach((object) => {
    gsap.to(object.elt, {
      duration: 2,
      x: `${wToRemove + object.xPos - source.xPos}px`,
      y: `${hToRemove + object.yPos - source.yPos}px`,
    });
  });
}

// ! With BackgroundPosition : minus (-) ToRemove ! With x & y : plus (+) ToRemove
// set starting position to start
gsap.set("#container", {
  backgroundPosition: `-${accueil.xPos - wToRemove}px -${
    accueil.yPos - hToRemove
  }px`,
});
gsap.set("#accueil", {
  x: `${wToRemove}px`,
  y: `${hToRemove}px`,
});
gsap.set("#step1Elt", {
  x: `${wToRemove + (step1.xPos - accueil.xPos)}px`,
  y: `${hToRemove + (step1.yPos - accueil.yPos)}px`,
});
gsap.set("#step2Elt", {
  x: `${wToRemove + (step2.xPos - accueil.xPos)}px`,
  y: `${hToRemove + (step2.yPos - accueil.yPos)}px`,
});

$("#start").click(() => {
  // Move bgPosition to the center of new element
  gsap.to("#container", {
    duration: 2,
    backgroundPosition: `-${accueil.xPos - wToRemove}px -${
      accueil.yPos - hToRemove
    }px`,
  });
  gsap.to("#accueil", {
    duration: 2,
    x: `${wToRemove}px`,
    y: `${hToRemove}px`,
  });
  gsap.to("#step1Elt", {
    duration: 2,
    x: `${wToRemove + step1.xPos - accueil.xPos}px`,
    y: `${hToRemove + step1.yPos - accueil.yPos}px`,
  });
  gsap.to("#step2Elt", {
    duration: 2,
    x: `${wToRemove + step2.xPos - accueil.xPos}px`,
    y: `${hToRemove + step2.yPos - accueil.yPos}px`,
  });
});

$("#step1").click(() => {
  gsap.to("#container", {
    duration: 2,
    backgroundPosition: `-${step1.xPos - wToRemove}px -${
      step1.yPos - hToRemove
    }px`,
  });
  gsap.to("#step1Elt", {
    duration: 2,
    x: `${wToRemove}px`,
    y: `${hToRemove}px`,
  });
  gsap.to("#accueil", {
    duration: 2,
    x: `${wToRemove + accueil.xPos - step1.xPos}px`,
    y: `${hToRemove + accueil.yPos - step1.yPos}px`,
  });
  gsap.to("#step2Elt", {
    duration: 2,
    x: `${wToRemove + step2.xPos - step1.xPos}px`,
    y: `${hToRemove + step2.yPos - step1.yPos}px`,
  });
});

$("#step2").click(() => {
  gsap.to("#container", {
    duration: 2,
    backgroundPosition: `-${step2.xPos - wToRemove}px -${
      step2.yPos - hToRemove
    }px`,
  });
  gsap.to("#step2Elt", {
    duration: 2,
    x: `${wToRemove}px`,
    y: `${hToRemove}px`,
  });
  gsap.to("#step1Elt", {
    duration: 2,
    x: `${wToRemove + step1.xPos - step2.xPos}px`,
    y: `${hToRemove + step1.yPos - step2.yPos}px`,
  });
  gsap.to("#accueil", {
    duration: 2,
    x: `${wToRemove + accueil.xPos - step2.xPos}px`,
    y: `${hToRemove + accueil.yPos - step2.yPos}px`,
  });
});

$("#step3").click(() => {
  gsap.to("#container", {
    duration: 2,
    backgroundPosition: `-${step3.xPos - wToRemove}px -${
      step3.yPos - hToRemove
    }px`,
  });
});

$("#step4").click(() => {
  gsap.to("#container", {
    duration: 2,
    backgroundPosition: `-${step4.xPos - wToRemove}px -${
      step4.yPos - hToRemove
    }px`,
  });
});

$("#step5").click(() => {
  gsap.to("#container", {
    duration: 2,
    backgroundPosition: `-${step5.xPos - wToRemove}px -${
      step5.yPos - hToRemove
    }px`,
  });
});

$("#step6").click(() => {
  gsap.to("#container", {
    duration: 2,
    backgroundPosition: `-${step6.xPos - wToRemove}px -${
      step6.yPos - hToRemove
    }px`,
  });
});
