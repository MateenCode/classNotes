import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import * as headings from './Components/styled/headings';
import * as layout from './Components/styled/layout';
import Main from './Components/Main/Main'
import * as Queries from './Queries';

function App() {
  const [data, setData] = useState({})

  const getData = async () => {
    let theData = await Queries.getContentfulNav();
    setData(theData);
  }

  useEffect(() => {
    getData()
  }, []);

  if (data.fields) {
    return <Layout>
      <header>
        <headings.HeaderOne align="right">
          {data.fields.wesbiteTitle}
        </headings.HeaderOne>
        <headings.HeaderTwo larger>
          {data.fields.subtitle}
        </headings.HeaderTwo>
        <layout.HeaderImage>
          <img src={data.fields.headerImage.fields.file.url} alt="" />
        </layout.HeaderImage>
      </header>
      <Main />
    </Layout>
  }

  return <div>loading</div>

}

export default App;
