
// For WebDevSynergy

module.exports = {
    ts: {
        use: true,          // TypeScript -> JavaScript
        dirFrom: "",        // Replacing the path from
        dirTo: "",          // Replacing the path to
        mini: true,         // Using minification
        extjs: ".m.js",     // Output file extension
        middle: true        // Saving an intermediate non-minified file during minification.
    },
    pug: true,              // Pug -> HTML
    styl: true              // Stylus -> CSS
}