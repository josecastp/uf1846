const Country = require('../models/country').CountryModel;

exports.getHomePage = (req, res) => {
    res.render('index');
}

exports.postSendData = async (req, res) => {
    console.log("valor de req.body------------------->",req.body);
    //console.log("countryName--------------> ",countryName)
    
   
    const fakeData = {
        countryName: 'Marte',
        population: 46438420,
        urlFlag: "https://restcountries.eu/data/esp.svg"
    }

    //Valores de fakeData ()
   const name= fakeData.countryName;
   const population= fakeData.population
   const flagURL= fakeData.urlFlag;

   //Creamos nueva instancia
    const country = new Country({
        name,
        flagURL,
        population
    });
    
    //Inserción en la BBDD:
    await country.save();


    res.send("Dades rebudes:" + JSON.stringify(fakeData));
}