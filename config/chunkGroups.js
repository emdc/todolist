const ReactModules = [
  'react',
  'react-dom',
  'react-router',
  'react-router-dom',
  'history',
  'redux',
  'redux-thunk'
];

const RemovedModules = [].concat(ReactModules);

const ReactBundleTest = new RegExp(`[\\/]node_modules[\\/](${ReactModules.join('|')})[\\/]`);
const VendorBundleTest = new RegExp(`[\\/]node_modules[\\/](?!${RemovedModules.join('|')})`);

module.exports = (() => ({
  react: {
    test: ReactBundleTest,
    chunks: 'initial',
    name: 'react',
    enforce: true
  },
  vendor: {
    test: VendorBundleTest,
    chunks: 'initial',
    name: 'vendor',
    enforce: true
  }
}))();