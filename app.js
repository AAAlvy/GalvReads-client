// $(appReady);

let API_URL = 'https://andy-greads.herokuapp.com/api/v1/';
$.get(API_URL, books => {
  books.forEach(book=> {
    let bookSource = $("#book-template").html();
    let bookTemplate = Handlebars.compile(bookSource);
    let bookContext = {
      "TITLE": book.title,
      "GENRE": book.genre,
      "DESCRIPTION": book.description,
      "COVER_URL": book.cover_url,
      "ID": book.id
    };
    $(".book-list").append(bookTemplate(bookContext));
  });
});
function getUrl() {
	API_URL = 'https://andy-greads.herokuapp.com/api/v1/';
		console.log(window.location.href);
	if(window.location.href == 'http://127.0.0.1:8080/' || window.location.href == 'http://127.0.0.1:8080/index.html') {
		API_URL = 'http://localhost:3000/api/v1/';
	}
}
