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
      duration: 5,
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
      'duration': 0.75,
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
    delay: 2,
    border: 'none',
  });

  accueilTl.fromTo(
    '#accueil-logs2',
    {
      'border-right-color': 'rgba(255,255,255,1)',
    },
    {
      'duration': 0.75,
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
      duration: 2,
      scrambleText: {
        text: 'gps position: 45.7722 4.8695 lang: FR',
        chars: '0123456789',
      },
      width: $('#accueil-logs2').width(),
      ease: SteppedEase.config(37),
    }
  );
  // stop cursor
  accueilTl.set('#accueil-logs2', {
    delay: 2,
    border: 'none',
  });

  accueilTl.fromTo(
    '#accueil-logs3',
    {
      'border-right-color': 'rgba(255,255,255,1)',
    },
    {
      'duration': 0.75,
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
    delay: 2,
    border: 'none',
  });

  accueilTl.fromTo(
    '#accueil-title',
    {
      'border-right-color': 'rgba(255,255,255,1)',
    },
    {
      'duration': 0.75,
      'border-right-color': 'rgba(255,255,255,0)',
      'repeat': -1,
      'ease': SteppedEase.config(1),
    }
  );
  accueilTl.fromTo(
    '#accueil-title',
    {
      width: 0,
    },
    {
      duration: 2,
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
    delay: 2,
    border: 'none',
  });

  accueilTl.fromTo(
    '#accueil-question',
    {
      'border-right-color': 'rgba(255,255,255,1)',
    },
    {
      'duration': 0.75,
      'border-right-color': 'rgba(255,255,255,0)',
      'repeat': -1,
      'ease': SteppedEase.config(1),
    }
  );
  accueilTl.fromTo(
    '#accueil-question',
    {
      width: 0,
    },
    {
      duration: 2,
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
    delay: 2,
    border: 'none',
    onComplete: () => {
      $('#accueil-answer-input').prop('disabled', false);
      $('#accueil-answer-input').focus();
    },
  });
  accueilTl.killTweensOf('.cursor', 'border-right-color');
  accueilTl.play();
}

// ANSWER VALIDATION
$('#accueil-answer-input').on('keypress', (e) => {
  if (e.which == 13) {
    let answerRegex = new RegExp(
      '^(?=.*\\bmansart\\b)((?=.*\\bvau\\b)|(?=.*\\blevau\\b)).*$',
      'gmi'
    );
    if (answerRegex.test(e.target.value)) {
      $('#accueil-answer-input').prop('disabled', true);
      $('#accueil-answer-input').val('');
      giveFeeback(true);
      setTimeout(() => {
        rightAnswerAnimation();
      }, 4);
      moveElements(step1, animationDuration, 21);
    } else {
      $('#accueil-answer-input').val('');
      giveFeeback(false);
    }
  }
});

function giveFeeback(answerIsRight) {
  $('#accueil-answer-input').val('');
  gsap.fromTo(
    '#accueil-feedback',
    {
      width: 0,
    },
    {
      duration: 0.5,
      scrambleText: {
        text: answerIsRight ? 'Bonne reponse' : 'X Mauvaise reponse',
        chars: '0123456789',
        newClass: answerIsRight ? 'right-answer' : 'wrong-answer',
      },
      width: $('#accueil-feedback').width(),
      ease: SteppedEase.config(37),
    }
  );
}

function rightAnswerAnimation() {
  $('.cursor').empty();
  const goodAnswerTl = new TimelineMax({});
  // cursor animation
  goodAnswerTl.fromTo(
    '#accueil-logs1',
    {
      'border-right-color': 'rgba(255,255,255,1)',
    },
    {
      'duration': 0.75,
      'border-right-color': 'rgba(255,255,255,0)',
      'repeat': -1,
      'ease': SteppedEase.config(1),
    }
  );
  // text animation
  goodAnswerTl.fromTo(
    '#accueil-logs1',
    {
      width: 0,
    },
    {
      duration: 2,
      scrambleText: {
        text: "Content de voir que vous etes arrives jusqu'ici M. De Bontin",
        chars: '0123456789',
      },
      width: $('#accueil-logs1').width(),
      ease: SteppedEase.config(37),
    }
  );
  // stop cursor
  goodAnswerTl.set('#accueil-logs1', {
    delay: 0.75,
    border: 'none',
  });
  // cursor animation
  goodAnswerTl.fromTo(
    '#accueil-logs2',
    {
      'border-right-color': 'rgba(255,255,255,1)',
    },
    {
      'duration': 0.75,
      'border-right-color': 'rgba(255,255,255,0)',
      'repeat': -1,
      'ease': SteppedEase.config(1),
    }
  );
  // text animation
  goodAnswerTl.fromTo(
    '#accueil-logs2',
    {
      width: 0,
    },
    {
      duration: 2,
      scrambleText: {
        text: 'Vous trouverez sur ce site les donnees cryptees',
        chars: '0123456789',
      },
      width: $('#accueil-logs2').width(),
      ease: SteppedEase.config(37),
    }
  );
  // stop cursor
  goodAnswerTl.set('#accueil-logs2', {
    delay: 0.75,
    border: 'none',
  });
  // cursor animation
  goodAnswerTl.fromTo(
    '#accueil-logs3',
    {
      'border-right-color': 'rgba(255,255,255,1)',
    },
    {
      'duration': 0.75,
      'border-right-color': 'rgba(255,255,255,0)',
      'repeat': -1,
      'ease': SteppedEase.config(1),
    }
  );
  // text animation
  goodAnswerTl.fromTo(
    '#accueil-logs3',
    {
      width: 0,
    },
    {
      duration: 2,
      scrambleText: {
        text: 'La france a besoin de vous',
        chars: '0123456789',
      },
      width: $('#accueil-logs3').width(),
      ease: SteppedEase.config(37),
    }
  );
  // stop cursor
  goodAnswerTl.set('#accueil-logs3', {
    delay: 0.75,
    border: 'none',
  });
  // cursor animation
  goodAnswerTl.fromTo(
    '#accueil-title',
    {
      'border-right-color': 'rgba(255,255,255,1)',
    },
    {
      'duration': 0.75,
      'border-right-color': 'rgba(255,255,255,0)',
      'repeat': -1,
      'ease': SteppedEase.config(1),
    }
  );
  // text animation
  goodAnswerTl.fromTo(
    '#accueil-title',
    {
      width: 0,
    },
    {
      duration: 2,
      scrambleText: {
        text: 'Bonne chance',
        chars: '0123456789',
      },
      width: $('#accueil-title').width(),
      ease: SteppedEase.config(37),
    }
  );
  // stop cursor
  goodAnswerTl.set('#accueil-title', {
    delay: 0.75,
    border: 'none',
  });
  // text animation
  goodAnswerTl.fromTo(
    '#accueil-question',
    {
      width: 0,
    },
    {
      duration: 4,
      scrambleText: {
        text: 'FIN DE LA TRANSMISSION.',
        chars: '0123456789',
      },
      width: $('#accueil-question').width(),
      ease: SteppedEase.config(37),
    }
  );
}
