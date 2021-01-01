import React, { useState, useEffect } from 'react';
import { getContentfulHomepage } from '../Queries/index'

const HomepageSections = () => {
    const [data, setData] = useState({});

    const getData = async () => {
        const theData = await getContentfulHomepage();
        setData(theData);
    }

    useEffect(() => {
        getData();
    }, []);


    if (Object.entries(data).length > 0) {
        return (
            <main>
                {data.fields.homepageSections.map((section) => {
                    const { sectionTitle, textContent } = section.fields;
                    return (
                        <section>
                            <h2>{sectionTitle}</h2>
                        </section>
                    )
                })}
            </main>
        )
    }

    return <div>loading</div>
}

export default HomepageSections;