

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    //empty array to store json data from ab0ove endpoint
    const cities = [];
    // return promise
    fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data)); 
    
    //returns an array consisting cities with matchingword
    function findMatches(wordToMatch, cities) {
        return cities.filter(place => {
        // here we need to figure out if the city or state matches what was searched
            const regex = new RegExp(wordToMatch, 'gi');
            return place.city.match(regex) || place.state.match(regex)
        });
    }

    // putting comma in population number 
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    
    //display city,state corresponding to the matching word 
    function displayMatches() {
        const matchArray = findMatches(this.value, cities);
        
        const html = matchArray.map(place => {
            const regex = new RegExp(this.value, 'gi'); //Regex g-> global, i-> case insensitive
            const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
            const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
            return `
                <li>
                    <span class="name">${cityName}, ${stateName}</span>
                    <span class="population">${numberWithCommas(place.population)}</span>
                </li>
                `;
            }).join('');
        suggestions.innerHTML = html;
    }

    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');
 
    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', displayMatches);
   
