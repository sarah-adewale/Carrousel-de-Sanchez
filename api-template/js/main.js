//Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   console.log(choice)

//   const url = `https://rickandmortyapi.com/api/character/?name=${choice}`

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data.results)
        
//         document.querySelector('img').src = data.results[0].image
//         document.querySelector('h3').innerText = data.results[0].name
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

