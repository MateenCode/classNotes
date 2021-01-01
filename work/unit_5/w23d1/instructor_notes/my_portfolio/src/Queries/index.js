import { ContentfulClient } from 'react-contentful';

export const contentfulClient = new ContentfulClient({
    accessToken: process.env.REACT_APP_API_TOKEN,
    space: process.env.REACT_APP_SPACE_ID
});

export const getContentfulNav = async () => {
    const data = await contentfulClient.getEntry('Xypu738KbeBX7Wg23BNyN');
    return data;
}

// getting the homepage and sections
export const getContentfulHomepage = async () => {
    const data = await contentfulClient.getEntry('KASyfNYddC7bZT41aQGct');
    return data;
}