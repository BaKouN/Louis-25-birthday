$('.sudoku').on('input', 'input', function () {
  var $input = $(this);
  $input.attr('value', $input.val());
});
