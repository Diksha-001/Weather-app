const request =require("request");

const openWeatherMap ={
    BASE_URL:"https://api.openweathermap.org/data/2.5/weather?q=",
    SECRET_KEY: "af454c14aca14f8a5d890bb1258124d4",

};

const weatherData = (address,callback) => {
const url=openWeatherMap.BASE_URL + encodeURIComponent(address) + "&appid=" + openWeatherMap.SECRET_KEY; 
console.log(url);

request({ url, json:true},(error, data) =>{
    if(error){
        callback(true,"unable to fetch the data, please try again" + error);
    }
    callback(false, data?.body);
});
};
module.exports=weatherData;