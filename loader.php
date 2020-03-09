<?php
header('Content-Type: application/javascript');
$baseUrl = (isset($_SERVER['HTTPS']) ? 'https' : 'http') .'://'.$_SERVER['SERVER_NAME'].dirname($_SERVER['SCRIPT_NAME']).'/';
?>
(() => {

    const baseUrl = '<?= $baseUrl; ?>';

    const load = (tagName, url) => {
        return new Promise(resolve => {
            const element = document.createElement(tagName);
            if(tagName === 'link') {
                element.rel = 'stylesheet';
                element.href = `${baseUrl}${url}`;
            }else{
                element.src = `${baseUrl}${url}`;
            }
            element.addEventListener('load', () => resolve());
            document.head.appendChild(element);
        });
    };

    (async () => {
        const appContainer = document.createElement('div');
        appContainer.id = 'auto-adaptive-app';
        document.body.appendChild(appContainer);

        await load('link',   'dist/app.css');
        await load('script', 'dist/chunk-vendors.js');
        await load('script', 'dist/app.js');
    })();

})();

/*
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.createElement('script');
    loader.src = 'https://synergy.od.ua/auto-adaptive/loader.js';
    document.head.appendChild(loader);
});

*/
