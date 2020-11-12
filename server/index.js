import 'babel-polyfill'
import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from "react-router";
import htmlToRender from "./htmlToRender";
import serverStore from "./serverStore";
import { Provider } from "react-redux";
import { renderRoutes, matchRoutes } from "react-router-config";
import Routes from '../routes/Routes'

const app = express()
app.use(express.static('public'))

app.get('*', (req, res, next) => {
    const store = serverStore()

    const promises = matchRoutes(Routes, req.path).map(({route}) => {
        return route.loadData ? route.loadData(store) : null
    })

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderToString(
            <Provider store={store}>
                <StaticRouter context={context} location={req.path}>
                    <div>{ renderRoutes(Routes) }</div>
                </StaticRouter>
            </Provider>
        )
        res.send(htmlToRender(content,store))
    })
})

const port = 3000
app.listen(port, () => console.log(`server listing at ${port}`))
