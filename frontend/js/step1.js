$('#crossword-answer-input').on('keypress', (e) => {
  if (e.which == 13) {
    let userAnswer = e.target.value;
    if (userAnswer.toLowerCase() == 'gugtheaacres') {
      $('.crossword-answer').attr('data-before', 'bien joué !');
      setTimeout(() => {
        moveElements(step3, animationDuration);
      }, 5000);
    } else {
      $('#crossword-answer-input').val('');
      $('.crossword-answer').attr('data-before', 'Ca ne fonctionne pas..');
    }
  }
});
