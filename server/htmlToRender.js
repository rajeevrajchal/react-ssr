import Helmet from "react-helmet";
import serialize from 'serialize-javascript'
export default (markup, state) => {
    const helmetData = Helmet.renderStatic();
    const html = `
    <!DOCTYPE html>
        <head>
            ${helmetData.title.toString()}
            ${helmetData.meta.toString()}
            <link rel="stylesheet" href="/css/style.css"/>
        </head>
        <body>
            <div id="root">
                ${markup}
            </div>
            <script>window.INITIAL_STATE = ${serialize(state.getState())}</script>
            <script src="/js/bundle.js" defer></script>
        </body>
    </html>
    `;
    return html
}
