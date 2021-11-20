import bounce_ui from './public/dist/bounce_ui.umd.js';
export default ({
    app, router, siteData
}) => {
    app.use(bounce_ui);
}