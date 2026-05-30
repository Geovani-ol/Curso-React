// https://api.giphy.com/v1/gifs/random?api_key=48fsKtIS9xotHWXfvxwSNWXYdLIP1tRa&tag=&rating=g

import type { GiphyRandomResponse } from '../data/giphy.response';

const API_KEY = '48fsKtIS9xotHWXfvxwSNWXYdLIP1tRa';

const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`,
);

const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement('img');
  imgElement.src = url;

  const app = document.querySelector('#app');
  if (app) {
    app.appendChild(imgElement);
  } else {
    // Fallback si no existe
    document.body.appendChild(imgElement);
  }
};

myRequest
  .then((response) => response.json())
  .then(({ data }: GiphyRandomResponse) => {
    const imageUrl = data.images.original.url;
    console.log(imageUrl);
    createImageInsideDOM(imageUrl);
  })
  .catch((err) => {
    console.error(err);
  });
