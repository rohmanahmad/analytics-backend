const loadModule = function (c) {
    for (let i in c) {
        let sc = document.createElement('script');
        sc.type = 'module';
        sc.src = c[i] + '?c=' + new Date().getTime();
        sc.setAttribute('async', ''); // make it async!
        document.body.appendChild(sc);
    }
}
const loadCss = function (x) {
    for (let i in x) {
        let ln = document.createElement('link');
        ln.type = 'text/css';
        ln.rel = 'stylesheet';
        ln.href = x[i] + '?c=' + new Date().getTime();
        ln.setAttribute('defer', ''); // make it sync!
        document.head.appendChild(ln);
    }
}
const modules = [
    'dist/bundle.min.js'
]
const css = [
    './assets/accounts/style.css'
]
loadCss(css);
loadModule(modules);
