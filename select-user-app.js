if ((navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) || ('ontouchstart' in window || navigator.maxTouchPoints) || navigator.userAgent.match(/SamsungBrowser/i)) {
    var script = document.createElement('script');
    script.src = 'mobile-app.js';
    document.body.appendChild(script);
} else {
    var script = document.createElement('script');
    script.src = 'app.js';
    document.body.appendChild(script);
}
