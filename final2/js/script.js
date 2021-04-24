function createFilter(type) {
  console.log('#' + type + '-filter input:checked', 'type')
  var filter = [];
  $('#' + type + '-filter input:checked').each(function (index, element) {
    console.log(index, element, element.value, 'print')
    filter.push('[data-' + type + "^='" + element.value + "']");
  });
  console.log(filter, 'filter')
  return filter.join(',') || '*';
}

$(document).on('change', 'input[type=checkbox]', function () {

  $('.leaflet-zoom-animated > g > circle')
    .hide()
    // .filter(createFilter('desc'))
    // .filter(createFilter('age'))
    // .filter(createFilter('gender'))
    // .filter(createFilter('price'))
    .show();

  $('#reset').click(function (e) {
    $('input:checked').removeAttr('checked');
    $('.leaflet-zoom-animated > g > circle').show();
    e.preventDefault();
  });
});
