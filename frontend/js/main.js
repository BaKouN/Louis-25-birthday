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
const hookDuration = 0.5;
let wToRemove = $(window).width() / 2;
let hToRemove = $(window).height() / 2;
let stateMachine = accueil;

const eltsArray = [accueil, step1, step2, step3, step4, step5, step6];

// call with sourceObj and an array containing all the other objects
function moveElements(source, duration, delay) {
  // move background
  gsap.to('#container', {
    duration,
    delay,
    backgroundPosition: `
    -${source.xPos - wToRemove}px 
    -${source.yPos - hToRemove}px
    `,
  });
  // get sourceElt in the center of the screen
  if (source.containerElt) {
    gsap.to(source.containerElt, {
      duration,
      delay,
      x: `${wToRemove}px`,
      y: `${hToRemove}px`,
    });
  }
  // move all other elements in sync relatively to the source one
  eltsArray
    .filter((elt) => elt !== source)
    .forEach((object) => {
      gsap.to(object.containerElt, {
        duration,
        delay,
        x: `${wToRemove + object.xPos - source.xPos}px`,
        y: `${hToRemove + object.yPos - source.yPos}px`,
      });
    });
}

$(window).on('load', () => {
  gsap.fromTo(
    '#loading h1',
    1.5,
    {
      'border-right-color': 'rgba(255,255,255,1)',
    },
    {
      'border-right-color': 'rgba(255,255,255,0)',
      'repeat': -1,
      'ease': SteppedEase.config(1),
    },
    0
  );
  $(document).one('keypress', () => {
    gsap.to('#loading h1', {
      duration: 4,
      scrambleText: {
        text: 'Welcome Louis',
        chars: '0123456789',
      },
      onComplete: () => {
        setTimeout(() => {
          $('#loading').hide();
          accueilStartup();
        }, 2000);
      },
    });
  });
});

function accueilStartup() {
  let accueilTl = new TimelineMax({
    paused: true,
  });
  // cursor animation
  accueilTl.fromTo(
    '#accueil-logs1',
    {
      'border-right-color': 'rgba(255,255,255,1)',
    },
    {
      'duration': 1.5,
      'border-right-color': 'rgba(255,255,255,0)',
      'repeat': -1,
      'ease': SteppedEase.config(1),
    }
  );
  // text animation
  accueilTl.fromTo(
    '#accueil-logs1',
    {
      width: 0,
    },
    {
      duration: 2,
      scrambleText: {
        text: 'fetching server data...',
        chars: '0123456789',
      },
      width: $('#accueil-logs1').width(),
      ease: SteppedEase.config(37),
    }
  );
  // stop cursor
  accueilTl.set('#accueil-logs1', {
    delay: 1,
    border: 'none',
  });

  accueilTl.fromTo(
    '#accueil-logs2',
    {
      'border-right-color': 'rgba(255,255,255,1)',
    },
    {
      'duration': 1.5,
      'border-right-color': 'rgba(255,255,255,0)',
      'repeat': -1,
      'ease': SteppedEase.config(1),
    }
  );
  // text animation
  accueilTl.fromTo(
    '#accueil-logs2',
    {
      width: 0,
    },
    {
      duration: 1.5,
      scrambleText: {
        text: 'gps position triangulated, lang: FR',
        chars: '0123456789',
      },
      width: $('#accueil-logs2').width(),
      ease: SteppedEase.config(37),
    }
  );
  // stop cursor
  accueilTl.set('#accueil-logs2', {
    delay: 1,
    border: 'none',
  });

  accueilTl.fromTo(
    '#accueil-logs3',
    {
      'border-right-color': 'rgba(255,255,255,1)',
    },
    {
      'duration': 1.5,
      'border-right-color': 'rgba(255,255,255,0)',
      'repeat': -1,
      'ease': SteppedEase.config(1),
    }
  );
  // text animation
  accueilTl.fromTo(
    '#accueil-logs3',
    {
      width: 0,
    },
    {
      duration: 2,
      scrambleText: {
        text: 'Recuperation de la question de securite...',
        chars: '0123456789',
      },
      width: $('#accueil-logs3').width(),
      ease: SteppedEase.config(37),
    }
  );
  // stop cursor
  accueilTl.set('#accueil-logs3', {
    delay: 1,
    border: 'none',
  });

  accueilTl.fromTo(
    '#accueil-title',
    {
      width: 0,
    },
    {
      duration: 1,
      scrambleText: {
        text: '"Attention les garcons, je vais vous poser une colle"',
        chars: '0123456789',
      },
      width: $('#accueil-title').width(),
      ease: SteppedEase.config(37),
    }
  );
  // stop cursor
  accueilTl.set('#accueil-title', {
    delay: 1,
    border: 'none',
  });

  accueilTl.fromTo(
    '#accueil-question',
    {
      width: 0,
    },
    {
      duration: 3,
      scrambleText: {
        text: 'Qui sont les deux architectes du chateau de bontin ?',
        chars: '0123456789',
      },
      width: $('#accueil-question').width(),
      ease: SteppedEase.config(37),
    }
  );
  // stop cursor
  accueilTl.set('#accueil-question', {
    delay: 1,
    border: 'none',
    onComplete: () => {
      $('#accueil-answer-input').focus();
    },
  });
  accueilTl.killTweensOf('.cursor', 'border-right-color');
  accueilTl.play();
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
