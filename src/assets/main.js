const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCi_H16KwbdXbpxPD4ULZtYg&part=snippet%2Cid&order=date&maxResults=5';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dcfb3dff69msh3af29e0e8d66ce3p17a582jsn9c5d68be95c7',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
const content = null || document.getElementById('content');


async function fetchData(urlAPI) {
 const response = await fetch(urlAPI, options);
 const data = await response.json();
 return data;
}

(async () => {
 try {
  const videos = await fetchData(API);
  let view = `
  ${videos.items.map(video => `
  <div class="group relative">
    <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
      <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
    </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
        ${video.snippet.title}
      </h3>
    </div>
  </div>
  `)} 
  `;
  content.innerHTML = view;
 } catch (error) {
  console.log(error);
 }
})();