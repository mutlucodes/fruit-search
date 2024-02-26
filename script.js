const input = document.querySelector('#fruit');
const suggestionsUL = document.querySelector('.suggestions ul');
const suggestions = document.querySelector('.suggestions');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	if (str.length > 0) {
		results = fruit.filter(fruit => fruit.toLowerCase().includes(str.toLowerCase()))
	}
	return results;
}

function searchHandler(e) {
	const inputVal = e.target.value
	const results = search(inputVal)
	showSuggestions(results, inputVal)
}

function showSuggestions(results, inputVal) {
	suggestionsUL.innerHTML = '' //Clear previous suggestions
	if (results.length > 0) {
		suggestions.style.display = 'block';
		results.forEach(result => {
			const li = document.createElement('li')
			li.textContent = result
			suggestionsUL.appendChild(li)
		});
	} else if (inputVal.length > 0) {
		suggestionsUL.innerHTML =  '<li>No reseults found</li>'
	} else {
		suggestions.style.display = 'none'
	}
}

function useSuggestion(e) {
	if (e.target.tagName === 'LI') {
		input.value = e.target.textContent
		suggestionsUL.innerHTML = '' //Clear suggestions
		suggestions.style.display = 'none'
	}
}

input.addEventListener('keyup', searchHandler);
suggestionsUL.addEventListener('click', useSuggestion);