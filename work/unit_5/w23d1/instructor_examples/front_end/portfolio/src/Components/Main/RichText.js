import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import * as headings from '../styled/headings'

export default (props) => {

    let [html, toHtml] = useState('')

    useEffect(() => {

    }, []);

    return <headings.BodyCopy>
        <ReactMarkdown
            escapeHtml={false}
            source={documentToHtmlString(props.content)}
        />
    </headings.BodyCopy>
}