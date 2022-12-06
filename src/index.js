const init = () => {
    let id = document.getElementById('searchByID');
    let form = document.querySelector('form');
    form.addEventListener('submit', function(e){
      e.preventDefault()
    fetch(`http://localhost:3000/movies/${id.value}`)
    .then(response => response.json())
    .then(data => {
      const title = document.querySelector('section#movieDetails h4');
      const summary = document.querySelector('section#movieDetails p');
      title.innerHTML=data.title
      summary.innerHTML=data.summary
    });
    })
  
  }
  
  document.addEventListener('DOMContentLoaded', init);