import { ContentfulClient } from 'react-contentful';


export const contentfulClient = new ContentfulClient({
    accessToken: process.env.REACT_APP_API_TOKEN,
    space: process.env.REACT_APP_SPACE_ID
});

export const getContentfulNav = async () => {
    let theData = await contentfulClient.getEntry('7BLlGJ0WPC7hnloOLV8My0');
    return theData;
}

export const getContentfulHomepage = async () => {
    let theData = await contentfulClient.getEntry('4DFUpxCaPGSr3UbZArPOEw');
    return theData;
}