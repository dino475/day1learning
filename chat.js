window.mintlifyWidgetSettings = {
    connection: {
        apiKey: 'Your API kmint_3Zgo5ddPuB3sbyRCEZLG1aqcy',
    },
};

(function () {
    if (!document.getElementById('mintlify-widget')) {
        var script = document.createElement('script');
        script.id = 'mintlify-widget';
        script.src = 'https://unpkg.com/@mintlify/widget@^0';
        script.onload = () => MintlifyWidget.init();
        document.head.appendChild(script);
    }
})();