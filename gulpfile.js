const { src, dest, series, watch } = require('gulp')
const gulpSass = require('gulp-sass')(require('sass'))

const SRC_SASS_FILE = './sass/index.s[ac]ss'
const ALL_SASS_FILES = './sass/**/*.s[ac]ss'
const DEST = './css'

function compileStyles() {
  return src(SRC_SASS_FILE).pipe(gulpSass()).pipe(dest(DEST))
}

function watchTask() {
  watch([ALL_SASS_FILES], compileStyles)
}

// exports.default = series(compileStyles, watchTask)
module.exports = { default: series(compileStyles, watchTask) }
