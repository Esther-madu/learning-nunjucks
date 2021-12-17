const { src, dest, series, watch } = require('gulp')
const del = require('del')
const njk = require('gulp-nunjucks-render')
const beautify = require('gulp-beautify')
const connect = require('gulp-connect')

function clean() {
    return del(['dist'])
}

function html() {
    return src('src/html/pages/*.+(html|njk)')
        .pipe(njk({ path: ['src/html'], }))
        .pipe(beautify.html({ indent_size: 4, preserve_newlines: false }))
        .pipe(dest('dist'))
        .pipe(connect.reload());
}

function assets() {
    return src('src/assets/**/*')
        .pipe(dest('dist/assets'))
        .pipe(connect.reload());
}

function watchFiles() {
    watch('src/html/**/*', html)
    watch('src/assets/**/*', assets)
}

connect.server({
    root: 'dist',
    livereload: true,
    port: 1000,
})

exports.build = series(clean, html, assets);
exports.default = series(clean, html, assets, watchFiles);