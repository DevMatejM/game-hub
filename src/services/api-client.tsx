import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'ebf4c773adb14a6485eb568fbda52735'
    }
})