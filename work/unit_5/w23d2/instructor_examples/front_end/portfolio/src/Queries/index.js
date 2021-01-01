import { ContentfulClient } from 'react-contentful';


export const contentfulClient = new ContentfulClient({
    accessToken: process.env.REACT_APP_API_TOKEN,
    space: process.env.REACT_APP_SPACE_ID
});

export const getContentfulNav = async () => {
    try {
        let theData = await contentfulClient.getEntry('7BLlGJ0WPC7hnloOLV8My0');
        return theData;
    } catch (error) {
        return error
    }
}

export const getContentfulHomepage = async () => {
    try {
        let theData = await contentfulClient.getEntry({ entryId: '4DFUpxCaPGSr3UbZArPOEw', include: 3 });
        return theData;
    } catch (error) {
        return error
    }

}