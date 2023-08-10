
  // Function to fetch items from the API
async function fetchItemsFromAPI(page) {
	const response = await fetch(`https://example-api.com/items?page=${page}`);
	const data = await response.json();
	return data;
  }
  
  // Main function to loop through the API and fetch items in batches
  async function fetchItemsInBatches() {
	let page = 1;
	let items = [];
	let batch;
  
	do {
	  batch = await fetchItemsFromAPI(page);
	  items = items.concat(batch);
	  page++;
	} while (batch.length > 0);
  
	return items;
  }
  
  // Call the main function and handle the result
  fetchItemsInBatches()
	.then((items) => {
	  console.log('Fetched items:', items);
	})
	.catch((error) => {
	  console.error('Error fetching items:', error);
	});
  
  