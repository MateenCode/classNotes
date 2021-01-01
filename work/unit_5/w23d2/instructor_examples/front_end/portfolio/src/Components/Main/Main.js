import React, { useState, useEffect } from 'react';
import * as Queries from '../../Queries';
import RichText from './RichText'
import * as headings from '../styled/headings'

export default () => {

    const [data, setData] = useState({})

    const getData = async () => {
        let theData = await Queries.getContentfulHomepage();
        setData(theData);
    }

    useEffect(() => {
        getData()
    }, []);
    console.log(data)
    if (Object.entries(data).length > 0) {
        const { content } = data.fields;
        return (
            <main>
                {content.map((section) => {
                    const { textContent, sectionTitle } = section.fields;
                    return (
                        <section>
                            <headings.HeaderTwo align="center">
                                {sectionTitle}
                            </headings.HeaderTwo>
                            <div> <RichText content={textContent} /></div>
                        </section>
                    )

                })}
            </main>
        )
    }

    return <div> loading</div>
}
