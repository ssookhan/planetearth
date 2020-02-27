$.getJSON("https://spreadsheets.google.com/feeds/list/1s2mhl-GZkMC9L-pnrKrMnDJ3J6VoZ5SfFpNxajukK80/1/public/values?alt=json", function(data) {

  var sheetData = data.feed.entry;

  var i;
  for (i = 0; i < sheetData.length; i++) {

    var name = data.feed.entry[i]['gsx$_cn6ca']['$t'];
    var id = data.feed.entry[i]['gsx$_cokwr']['$t'];
    var category = data.feed.entry[i]['gsx$_cpzh4']['$t'];
    if (category == 1) {
      category = "earthhistory";
    } else if (category == 2) {
      category = "fossils";
    } else if (category == 3) {
      category = "historic";
    } else if (category == 4) {
      category = "nature";
    } else if (category == 5) {
      category = "rocksandminerals";
    }

    console.log('<div class= "grid-item '+ category + '"><h3 id ="grid-item"></h3><p>'+id+ ': '+name+'</p></div>')
    document.getElementById('demo').innerHTML += '<div class= "grid-item '+ category + '"><h3 id ="grid-item"></h3><p>'+id+ ': '+name+'</p></div>'
    // document.getElementById('demo').innerHTML += ('<tr>' + '<td>' + name + '</td>' + '<td>' + age + '</td>' + '<td>' + email + '</td>' + '</tr>');

  }
  var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'masonry',
  getSortData: {
    name: function (element) {
      return $(element).text();
    }
  }
});

$('.filter button').on("click", function () {
  var value = $(this).attr('data-name');
    $grid.isotope({
      filter: value
    });
  $('.filter button').removeClass('active');
  $(this).addClass('active');
})
});