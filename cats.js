document.addEventListener("DOMContentLoaded", function() {

  var catButton = document.querySelector('.summon-cats');

  catButton.addEventListener('click', function() {
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      data: {},
      dataType: 'json'
    }).done(function(responseData) {
      var catList = responseData['cats'];
      catList.forEach(function(cat) {
        var image = document.createElement('img');
        image.src = cat.photo;
        image.alt = 'Photo of ' + cat.name;
        var catBox = document.querySelector('.cat-box');
        catBox.appendChild(image);
      });
    });
  });






});
