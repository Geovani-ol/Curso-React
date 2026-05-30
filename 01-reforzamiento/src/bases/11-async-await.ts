// https://api.giphy.com/v1/gifs/random?api_key=48fsKtIS9xotHWXfvxwSNWXYdLIP1tRa&tag=&rating=g

import type { GiphyRandomResponse } from '../data/giphy.response';

const API_KEY = '48fsKtIS9xotHWXfvxwSNWXYdLIP1tRa';

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

const getRandomGifUrl = async (): Promise<string> => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`,
  );

  const { data }: GiphyRandomResponse = await response.json();

  return data.images.original.url;
};

// getRandomGifUrl().then((url) => createImageInsideDOM(url));
getRandomGifUrl().then(createImageInsideDOM);
