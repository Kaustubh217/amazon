const axios = require('axios');

const fetchAndSeedData = async () => {
    try {
        const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        const jsonData = response.data;
    } catch (error) {
        console.error('Error fecthing data:', error.message);
    }
};

fetchAndSeedData();