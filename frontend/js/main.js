const accueil = {
  btnElt: '#start',
  containerElt: '#accueil',
  xPos: 2380,
  yPos: 4215,
};

const step1 = {
  btnElt: '#step1',
  containerElt: '#step1Elt',
  xPos: 4712,
  yPos: 4157,
};

const step2 = {
  btnElt: '#step2',
  containerElt: '#step2Elt',
  xPos: 4386,
  yPos: 1948,
};

const step3 = {
  btnElt: '#step3',
  containerElt: '#step3Elt',
  xPos: 2868,
  yPos: 1944,
};

const step4 = {
  btnElt: '#step4',
  containerElt: '#step4Elt',
  xPos: 6304,
  yPos: 3104,
};

const step5 = {
  btnElt: '#step5',
  containerElt: '#step5Elt',
  xPos: 7724,
  yPos: 2061,
};

const step6 = {
  btnElt: '#step6',
  containerElt: '#step6Elt',
  xPos: 8206,
  yPos: 4224,
};

const animationDuration = 2;
let wToRemove = $(window).width() / 2;
let hToRemove = $(window).height() / 2;
let stateMachine = accueil;

const eltsArray = [accueil, step1, step2, step3, step4, step5, step6];

// call with sourceObj and an array containing all the other objects
function moveElements(source, duration) {
  // move background
  gsap.to('#container', {
    duration: duration,
    backgroundPosition: `
    -${source.xPos - wToRemove}px 
    -${source.yPos - hToRemove}px
    `,
  });
  // get sourceElt in the center of the screen
  gsap.to(source.containerElt, {
    duration: duration,
    x: `${wToRemove}px`,
    y: `${hToRemove}px`,
  });
  // move all other elements in sync relatively to the source one
  eltsArray
    .filter((elt) => elt !== source)
    .forEach((object) => {
      gsap.to(object.containerElt, {
        duration: duration,
        x: `${wToRemove + object.xPos - source.xPos}px`,
        y: `${hToRemove + object.yPos - source.yPos}px`,
      });
    });
}

// set starting position to start
moveElements(accueil, 0);

$(accueil.btnElt).click(() => {
  moveElements(accueil, animationDuration);
  stateMachine = accueil;
});

$(step1.btnElt).click(() => {
  moveElements(step1, animationDuration);
  stateMachine = step1;
});

$(step2.btnElt).click(() => {
  moveElements(step2, animationDuration);
  stateMachine = step2;
});

$(step3.btnElt).click(() => {
  moveElements(step3, animationDuration);
  stateMachine = step3;
});

$(step4.btnElt).click(() => {
  moveElements(step4, animationDuration);
  stateMachine = step4;
});

$(step5.btnElt).click(() => {
  moveElements(step5, animationDuration);
  stateMachine = step5;
});

$(step6.btnElt).click(() => {
  moveElements(step6, animationDuration);
  stateMachine = step6;
});

$(window).resize(() => {
  wToRemove = $(window).width() / 2;
  hToRemove = $(window).height() / 2;
  moveElements(stateMachine, 0);
});
