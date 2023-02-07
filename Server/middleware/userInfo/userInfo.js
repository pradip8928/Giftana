const axios = require('axios');
const requestIp = require('request-ip');
const userInfo = async(req, res, next) => {
    const { headers, originalUrl } = req;

    try {
        const ipApi = "7248c8d39b480cc2f5fdebc90e45304b";
        const responseIP = await axios.get(`http://api.ipstack.com/check?access_key=${ipApi}`);
        const { ip } = responseIP.data;


        // const userIp = requestIp.getClientIp(req);
        const userIp = ip;
        const lastVisitedPage = originalUrl;
        const apiKey = "at_Ic6WoAvBuPz4Os0LJbwq0vxRi9Ea5";

        // console.log(`User IP: ${ip}`);
        console.log(`Last Visited Page: ${lastVisitedPage}`);
        const response = await axios.get(`https://ip-geolocation.whoisxmlapi.com/api/v1?apiKey=${apiKey}&ipAddress=${ip}`);
        const { location } = response.data;
        const userLocation = `${location.country}, ${location.region}`;

        console.log(`User Location: ${userLocation}`);

        res.locals.userInfo = {
            userIp,
            userLocation,
            lastVisitedPage,
        };

        next();
    } catch (error) {
        console.log(`Error retrieving user location: ${error.message}`);
        console.log(`User IP: ${userIp}`);
        console.log(`Last Visited Page: ${lastVisitedPage}`);
        res.locals.userInfo = {
            userIp: "user IP is not found",
            userLocation: "Location not available",
            lastVisitedPage: "last visited page is not found",
        };

        next();
    }
};

module.exports = userInfo;