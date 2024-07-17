export interface CountryObj {
    "name": {
      "common": string,
      "official": string,
      }
    "independent": boolean,
    "status": string,
    "unMember": boolean,
    "currencies": {
      "EUR": {
        "name": string,
        "symbol": string
      }
    },
    "capital": string
    "region": string,
    "subregion": string,
    "languages": {
      "deu": string
    },
    "landlocked": boolean,
    "maps": {
      "googleMaps": string,
      "openStreetMaps": string
    },
    "population": number,
    "timezones": [
      string
    ],
    "continents": [
      string
    ],
    "flags": {
      "png": string,
      "svg": string,
      "alt": string
    },
    "coatOfArms": {
      "png": string,
      "svg": string
    }
  }