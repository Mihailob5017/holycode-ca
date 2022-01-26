// Note: I was having problems with the CORS policy when trying fetch data from the given URL.
// Since I couldn't find the solution that didn't require changing the backend, I created a dummy.json file in public and copied data into it.
// Im fetching data from there

export const getData = () => {
	return fetch('dummy.json')
		.then((response) => {
			return response.json();
		})
		.then((response) => {
			return response;
		})
		.catch((error) => {
			console.log(error);
			return;
		});
};
