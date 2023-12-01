require("dotenv").config();
async function getBMI(weight, height) {
    const url = 'https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial?weight=' + weight + '&height=' + height;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.BMI_APIKEY,
            'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        //console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}

module.exports = { getBMI };