import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f33a484cf794d08d0148764789aaba32';

export const fetchWeater = async query => {
    let weatherData = {};
    try {
        const { data } = await axios.get(URL, {
            params: {
                q: query,
                APPID: API_KEY,
                units: 'metric',
            },
        });
        weatherData = data;
    } catch (error) {
        console.log(error);
    }
    return weatherData;
};
