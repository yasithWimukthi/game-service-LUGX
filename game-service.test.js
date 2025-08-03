// game-service.test.js

const axios = require('axios');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000/api/games';

(async () => {
    try {
        console.log(`📡 Testing GET ${BASE_URL}`);
        const getResponse = await axios.get(BASE_URL);
        if (getResponse.status === 200) {
            console.log('✅ GET /api/games passed');
        } else {
            console.error(`❌ GET failed with status ${getResponse.status}`);
            process.exit(1);
        }

        console.log(`📡 Testing POST ${BASE_URL}`);
        const postData = {
            title: 'Automated Test Game',
            price: 19.99,
            platform: 'PC',
        };

        const postResponse = await axios.post(BASE_URL, postData);
        if (postResponse.status === 201 || postResponse.status === 200) {
            console.log('✅ POST /api/games passed');
        } else {
            console.error(`❌ POST failed with status ${postResponse.status}`);
            console.error(postResponse.data);
            process.exit(1);
        }
    } catch (err) {
        console.error('❌ Error during test:', err.message);
        process.exit(1);
    }
})();
