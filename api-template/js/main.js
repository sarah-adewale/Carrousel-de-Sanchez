
document.querySelector('.btn').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)

  const url = `https://rickandmortyapi.com/api/character/?name=${choice}`
//   const xterObj = data.results[0]
  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.results)
        const xterObj = data.results[0]
        // const episodes = xterEpisodes(data.results[0].episodes)
        
        document.querySelector('#rick-image').src = xterObj.image
        document.querySelector('.character-name').innerText = xterObj.name
        document.querySelector('.character-species').innerText = xterObj.species
        // document.querySelector('#character-species').innerText = xterObj.species
        document.querySelector('.location-title').innerText = xterObj.location.name
        // const episodes = xterEpisodes(data.results[0].episodes)
        // function xterEpisodes(arr){
        //     arr.forEach(element => {
        //         element
        //         console.log(element)
        //     });
        //     return document.querySelector('.character-episode-name').innerText = episodes
            
        // }
        // document.querySelector('.character-episode-name').innerText = xterObj.

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

