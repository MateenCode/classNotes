import React, { useState, useEffect } from 'react';
import './App.css';
import Layout from './Layout';
import HomepageSections from './Components/HomepageSections';
import { getContentfulNav } from './Queries/index';
import * as headings from './Styles/type';

function App() {

  let [data, setData] = useState({});

  const getData = async () => {
    const theData = await getContentfulNav();
    setData(theData);
  }

  useEffect(() => {
    getData()
  }, [])

  if (data.fields) {
    return (
      <Layout>
        <headings.HeaderOne class="homepage">{data.fields.websiteTitle}</headings.HeaderOne>
        <headings.HeaderTwo>{data.fields.websiteSubtitle}</headings.HeaderTwo>
        <headings.BannerImage>
          <img src={data.fields.bannerImage.fields.file.url} alt={data.fields.bannerImage.fields.title} />
        </headings.BannerImage>
        <HomepageSections />
      </Layout>
    )
  }

  return <Layout>...loading</Layout>

}

export default App;
