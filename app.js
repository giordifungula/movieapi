// API Link
const app = document.getElementById('root');

let logo = document.createElement('img');
logo.src = 'https://www.greyhound.co.za/wp-content/uploads/2018/12/movie.jpg';

let container = document.createElement('div');
container.setAttribute('class', 'content');

app.appendChild(logo);
app.appendChild(container);

// Add Logo and container to HTML Pge



let api = 'http://api.open-notify.org/astros.json';
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
  // Begin accessing JSON data here 
    console.log('Inside the onload function');
    var data = JSON.parse(this.response);
    console.log(data);

    

    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
          console.log('Movie Title is', movie.title);
          console.log('Movie despriction is', movie.description);

          // Create Card Elements and set attribute
          const card = document.createElement('div');
          card.setAttribute('class', 'card');

          const h1 = document.createElement('h1');
          h1.textContent = movie.title;

          const h3 = document.createElement('h3');
          h3.textContent = 'Director: ' + movie.director;

          const p = document.createElement('p');
          movie.description = movie.description.substring(0, 300);
          // makes the length 300 characters for description
          p.textContent = `${movie.description}...`;

          container.appendChild(card);
          card.appendChild(h1);
          card.appendChild(h3);
          card.appendChild(p);

        });
      } else {
        const errorMsg = document.createElement('article');
        errorMsg.textContent = 'WOAAAAAHHHHHHH, SORRY not working bRu!!';
        app.appendChild(errorMsg);
        console.log('error');
      }

  }

  console.log(app)

// Send request
request.send();