# El Hierro | Sensores

In this project a set of climatic measures of El Hierro island (Canary Islands) are presented for different regions where sensors are available. The purpose is completely educative in order to gain some skills in different personally interested technologies.

**This project makes use of an open API developed by [GRAFCAN](https://sensores.grafcan.es/api/v1.0/) therefore an API key is needed for authentication.**

## API Key

The Api key can be injected as an evironment variable under the name `API_KEY`. For NextJS applications like this, you can create env files which are automatically read when starting NextJS development or production server (`npm run dev` or `npm start` respectively)

### env files automatically readed by NextJS

- .env.local
- .env.development.local
- .env.test.local
- .env.production.local

#### Example env file

```
#.env.local
API_KEY=jhbsdf.6sdflk.fBTSvvb45v
```

## Used Technologies

- [NextJS](https://nestjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [ReduxJS](https://redux.js.org)

## Presented Measures

- Temperature
- Dew Point
- Pressure
- Rain Intensity
- Accumulated Rain
- Relative Humidity
- Wind Direction
- Wind Speed

## Sensors Locations

- Malpaso
- Frontera
- La Dehesa
- Timijiraque
