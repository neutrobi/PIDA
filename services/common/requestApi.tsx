import axios from 'axios';
import https from 'https';
const httpsAgent = new https.Agent({
	rejectUnauthorized: false,
	passphrase: 'YYY',
});

const requestApi = axios.create({ httpsAgent });

export default requestApi;
