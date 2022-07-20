let supers = [
  {
      "superhero":"Batman", 
      "publisher":"DC Comics", 
      "alter_ego":"Bruce Wayne",
  },
  {
      "superhero":"Superman", 
      "publisher":"DC Comics", 
      "alter_ego":"Kal-El",
  },
  {
      "superhero":"Flash", 
      "publisher":"DC Comics", 
      "alter_ego":"Jay Garrick",
  }
]

supers = []

const getSupers = () => {
  // resolve == heroes => console.log(heroes)
  return new Promise((resolve, reject) => {
    if(supers.length === 0){
      reject('No hay superherores')
    }
    setTimeout(() => {
      resolve(supers)
    }, 2000)
  })
}

function salioBien(heroes) {
  console.log(heroes.length)
}

// getSupers()
// // ejemplo con funcion flecha por parametro
// .then(heroes => console.log(heroes))
// // ejemplo con funcion tradicional
// // .then(salioBien)
// .catch(mensaje => console.log(mensaje))

// ejemplo de Async / Await

async function fechSupers() {
  try {
    const supersFech = await getSupers()
    console.log(supersFech)   
  } catch (error) {
    console.log(error)
  }
}

fechSupers()