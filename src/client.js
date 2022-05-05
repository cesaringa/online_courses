import * as contentful from 'contentful'

export const client = contentful.createClient ( {
    // space: process.env.REACT_APP_SPACE_ID,
    space: '0l7txpomr6tz',
    // accessToken: process.env.REACT_APP_ACCESS_TOKEN
    accessToken: 'Ig4rm2U52SYfeoEjq94uETqvcEfUvpO3NKoNr4QtqIk'
})