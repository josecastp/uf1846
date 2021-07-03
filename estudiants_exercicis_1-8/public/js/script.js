{
    async function getCountryDetails(countryName) { 
        console.log("countryName: ",countryName)
    
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`);

        const data = await response.json();

        return data;

    }


    /**
     * Exercici 5b. Haz que las opciones del array de objetos 'optionsValues' se carguen dinàmicamente cuando la pàgina se renderice en el navegador
     */
    function setDynamicOptions() {
        const optionsValues = [{
            value: 'spain',
            label: 'España'
        }, {
            value: 'venezuela',
            label: 'Venezuela',
        }, {
            value: 'peru',
            label: 'Perú'
        }
        ]
    }

    setDynamicOptions();

    /** 
     * 
     * EJERCICIO 6
     */

    async function setCountryFlag(event) {
        let countryName = event.target.value;
        console.log("evento value---------->",event)

        let countryData = await getCountryDetails(countryName);
        // Descomenta la següent línia si no has aconseguit implementar la primera part de l'exercici. Comenta la línia anterior també.   
        //let countryData = await getCountryDetailsFake(countryName);

        document.querySelector('#imatgeSeleccionada').src = countryData[0].flag;
        document.querySelector('#population').value = countryData[0].population;
        document.querySelector('#urlFlag').value = countryData[0].flag;
    }

    function getCountryDetailsFake(countryName) {
        const data = {
            spain: "https://restcountries.eu/data/esp.svg",
            france: "https://restcountries.eu/data/fra.svg",
            italy: "https://restcountries.eu/data/ita.svg"
        }

        return data.countryName;
    }


    // Descomentar para probar el Ejercicio 6
    //console.log("Información sobre España:", getCountryDetails('spain'));

    document.querySelector('.w3-select').onchange = setCountryFlag;

}
