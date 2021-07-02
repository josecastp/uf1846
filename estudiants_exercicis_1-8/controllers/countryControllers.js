const Country = require('../models/country').CountryModel;

exports.getHomePage = (req, res) => {
    res.render('index');
}

exports.postSendData = (req, res) => {
    //let countryName = element.querySelector('#countryName')
   // console.log("countryName--> ",countryName)
    /* const namename: String,
    flagURL: String,
    population: Number */
    let countryName;
    const fakeData = {
        conuntryName: countryName,
        population: 46438420,
        urlFlag: "https://restcountries.eu/data/esp.svg"
    }

    res.send("Dades rebudes:" + JSON.stringify(fakeData));
}