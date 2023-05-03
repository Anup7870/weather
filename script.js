
const getAirQuality = (city) => {
	try {
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '53a90635e1msh23031d22e1cb204p1a9c4djsn4560c9fd3917',
				'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
			}
		};
		fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=' + city, options)
			.then(response => response.json())
			.then((response) => {
				console.log(response)
			})
			.catch(err => console.error(err));
		
	} catch (error) {
		console.log("error is "+ errror);
	}
	

}

const getweather = (city) => {
	const option = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '53a90635e1msh23031d22e1cb204p1a9c4djsn4560c9fd3917',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};
	document.getElementById("City").innerHTML=city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, option)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			// cloud_pct.innerHTML = response.cloud_pct
			document.getElementById("temp").innerHTML = response.temp
			document.getElementById("feels_like").innerHTML = response.feels_like
			document.getElementById("humidity").innerHTML = response.humidity
			document.getElementById("min_temp").innerHTML = response.min_temp
			document.getElementById("max_temp").innerHTML = response.max_temp
			// wind_speed.innerHTML = response.wind_speed
			// wind_degrees.innerHTML = response.wind_degrees
			// sunrise.innerHTML = response.sunrise
			// sunset.innerHTML = response.sunset9
		})
		.catch((err) => {
			console.error(err)
		});
}
setInterval(getweather, 2000);
submit.addEventListener("click", (e) => {
	e.preventDefault();
	let dis = document.getElementById("search").value;
	getweather(dis);
})
search.addEventListener("keydown", (e) => {
	if(e.code==="Enter")
	{ 
		e.preventDefault();
	    let dis = document.getElementById("search").value;
	    getweather(dis);
    }
})
getweather("Delhi");
// getAirQuality("Delhi");
