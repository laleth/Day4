fetch("https://restcountries.com/v3.1/all")
.then((res)=> {
    return res.json();
}).then ((data)=>{  
    for (const countryCode in data) {
        const country = data[countryCode];
        if (country.flags) {
          console.log("Flags:", country.flags);
          console.log("---------");
        }
      }
})
.catch(error => console.error("An error occurred:", error));