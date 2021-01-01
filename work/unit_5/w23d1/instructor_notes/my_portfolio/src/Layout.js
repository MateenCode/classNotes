import React from 'react';
import { LayoutWrapper } from './Styles/layout';

const Layout = (props) => {
    return (
        <LayoutWrapper>
            {props.children}
        </LayoutWrapper>
    )
}

export default Layout;