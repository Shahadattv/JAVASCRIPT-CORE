const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))

}
loadCountries();

const displayCountries = countries => {
    const countryDiv = document.getElementById('country');


    countries.forEach(county => {

        const div = document.createElement('div');
        // for css
        div.classList.add('babu');


        div.innerHTML = `
            <h3> COUNTRY NAME:-${county.name}</h3>
            <p>CAPITAL:-${county.capital}</p>
            <button onclick="localCountryByName('${county.name}')"> DETAILS </button>
            
        `;
        countryDiv.appendChild(div);

    });

};
// for onclick inside inner html
const localCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]));


};
const displayCountryDetail = country => {
    // console.log(country);
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = `
    <h5> COUNTRY NAME:-${country.name}</h5>
    <p> POPULATION:-${country.population}</p>
   <img width="200px" src="${country.flag}">
    
    
    `
}