const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

const themeVariables = lessToJS(
    fs.readFileSync(path.resolve(__dirname, './static/styles/_var.less'), 'utf8')
)

module.exports = withLess({
  lessLoaderOptions: {
    cssModules: true,
    javascriptEnabled: true,
    modifyVars: themeVariables
  }
})