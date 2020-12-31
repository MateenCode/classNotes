const express = require("express")
const app = express()
const wrapper = (body, pageName, heading = false) => {
    const h1 = heading? pageName : ''
    return function () {
        return (`
            <html>
                <head>
                  <title> ${pageName} </title>
                </head>
                 <body>
                  <h1>${h1}</h1>
                    ${body}
                </body>
            </html>
        `)
    }
}
const buildElement = ({ element, content }) => {
    if (typeof content != 'object') {
        return (`
        <${element}> 
            ${content.toString()}
        </${element}>
        `)
        }else if(content == null){
        return (`
        <${element}> 
        </${element}>
        `)
        } else if(Array.isArray(content)) {
        return (`
        <${element}> 
            ${content.join(' ')}
        </${element}>
        `)
        }else {
        return (`
        <${element}>
           ${buildElement(content)}
        </${element}>
        `)
    }
}
const html = ({ wrapper, builder, elementArray, pageName }) => {
    const content = elementArray.map((item)=> {
        return builder({element:'div', content: item})
    }).join('')
    return wrapper(content, pageName, true)
}
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
              <title> CodeComeUp.Com </title>
            </head>
            <body>
                <h1> Hello I am Getting Started </h1>
            </body>
        </html>
        `)
})
app.get('/:page', (req,res) => {
    const response = html({
        wrapper: wrapper,
        builder: buildElement,
        elementArray: [{element: 'h1', content: 'I work'},2,3],
        pageName: req.params.page
    })
    res.send(response())
})
app.listen(3000)