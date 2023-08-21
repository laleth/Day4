fetch("https://restcountries.com/v3.1/all")
.then((res)=> {
    return res.json();
}).then ((data)=>{  
    for (const countryCode in data) {
        const country = data[countryCode];
        if (country.flags) {
            console.log("Country:", country.name.common);
            console.log("Regions:", country.region);
            console.log("Sub-Regions:", country.subregion);
            console.log("Population:", country.population);
            console.log("---------");          
        }
      }
})
.catch(error => console.error("An error occurred:", error));