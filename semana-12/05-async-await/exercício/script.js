const formGithub = document.getElementById("formGithub");
const userGithub = document.getElementById("userGithub");
const namePlaceholder = document.getElementById("namePlaceholder");
const moodImg = document.getElementById("moodImg");

// https://api.github.com/users/${userGithubValue}
// http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC



const handleSubmit = async (e) => {
  e.preventDefault();
  const userNameGithub = await fetch(`https://api.github.com/users/${userGithub.value}`)
    .then(response => response.json())
    .then(user => user.name)

  const gif = await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC`)
    .then(response => response.json())
    .then((gifs) => {
      let random = Math.floor(Math.random() * gifs.data.length)
      return gifs.data[random]
    })


  namePlaceholder.textContent = `${userNameGithub}, seu humor hoje é`
  moodImg.setAttribute('src', gif.images.downsized_large.url)
};



formGithub.onsubmit = handleSubmit;