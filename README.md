
# GEOIP api

### Get Geo ip

#### 1. Run
```npm install```

#### 2. Update the datafiles
Replace ```YOUR_LICENSE_KEY``` with your license key obtained from [maxmind.com](https://support.maxmind.com/account-faq/license-keys/how-do-i-generate-a-license-key/).  
You can create maxmind account [here](https://www.maxmind.com/en/geolite2/signup).

```cd node_modules/geoip-lite && npm run-script updatedb license_key=YOUR_LICENSE_KEY```

#### 3. Run the app
```node app.js```

#### 4. Replace ```YOUR_REQUEST_IP_ADDRESS``` and open URL.
```URL: localhost/api?ip=YOUR_REQUEST_IP_ADDRESS```

For example :

```http://127.0.0.1:3000/api?ip=207.97.227.239```

#### 5. Result:

*Response success*
```
{
	"success": true,
	"data": {
	"range": [
		3479298048,
		3479306239
	],
	"country": "US",
	"region": "FL",
	"eu": "0",
	"timezone": "America/New_York",
	"city": "Orlando",
	"ll": [
		28.4647,
		-81.2468
	],
	"metro": 534,
	"area": 20
	}
}
```

*Response fail*
```
{
	"success": false,
	"data": {}
}
```