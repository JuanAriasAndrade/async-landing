const API = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UC9k0tTsh_qStx0HPuPftSsg&filter=videos_latest&hl=en&gl=US';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '682173a252msh16078d7dde3935dp1d9512jsn015190031821',
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
};

const content = null || document.getElementById('content')

async function fetchData(urlApi){
	const response =await fetch(urlApi,options)
	const data = await response.json()
	return data
}

//función anónima que se invoca a si misma
(async () => {
	try{
		const videos = await fetchData(API)
		console.log(videos);
		let view = `
		${videos.contents.map(item =>`
			<div class="group relative">
				<div
				class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
				<img src="${item.video.thumbnails[0].url}" alt="${item.video.title}" class="w-full">
				</div>
				<div class="mt-4 flex justify-between">
				<h3 class="text-sm text-gray-700">
					<span aria-hidden="true" class="absolute inset-0"></span>
					${item.video.title}
				</h3>
				</div>
			</div>
			`).slice(0,4).join("")}
		`
		content.innerHTML = view
	}catch(error){
		alert(error)
	}
})()

