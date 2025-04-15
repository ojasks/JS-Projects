const url = 'https://api.thecatapi.com/v1/images/search';
const button = document.querySelector('.btn');
const container = document.querySelector('.container');
button.addEventListener('click', async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const imageurl = data[0].url;
    container.innerHTML = `<img src="${imageurl}" alt="Random Cat" class="cat-img" />`;
  } catch (error) {
    container.innerHTML = `<p>😿 Failed to fetch a cat image. Please try again.</p>`;
    console.error('Error fetching the cat image:', error);
  }
});
