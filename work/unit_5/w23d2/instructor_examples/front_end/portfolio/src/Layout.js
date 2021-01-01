import React from 'react';
import * as layout from './Components/styled/layout'
import { ThemeProvider } from 'styled-components'
import theme from './Components/styled/theme'

export default (props) => {
    return <ThemeProvider theme={theme}>
        <layout.LayoutWrapper>
            <div>
                {props.children}
            </div>
        </layout.LayoutWrapper>
    </ThemeProvider>
}