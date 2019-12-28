module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'Baboc',
      externals: {
        react: 'React'
      }
    }
  }
}
