// fetch('/json/superheros.json')
// .then(response => response.json())
// .then(data => console.log(data));


fetch('https://gist.githubusercontent.com/mariodev12/a923f2b651a005ca3ca7f851141efcbc/raw/39b06a32e4a58fc1fe63c7478a97edccd21138f1/superheroes.json')
.then(response => response.json())
.then(data => {
  console.log(data)
  const contenedor = document.getElementById('container')
  // contenedor.innerHTML = `
  //   <div class="hero">
  //     <h2>${data[0]['superhero']}</h2>
  //     <h4>${data[0].alter_ego}</h4>
  //     <p>${data[0].publisher}</p>
  //   </div>`
  data.forEach(element => {
    contenedor.innerHTML += `
      <div class="hero">
        <h2>${element['superhero']}</h2>
        <h4>${element.alter_ego}</h4>
        <p>${element.publisher}</p>
      </div>`    
  });
});

