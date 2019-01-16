const Bundler = require('parcel-bundler');
const parcelShowdown = require('../dist');
const path = require('path');

describe('build md', function() {
  it('should produce valid html that can be read from script', async () => {
    const bundler = new Bundler(path.resolve(__dirname, 'testmd', 'index.js'), {
      outDir: path.resolve(__dirname, 'dist'),
      cache: false,
      watch: false,
      target: 'node',
      logLevel: 1,
    });

    await parcelShowdown(bundler);

    const bundle = await bundler.bundle();
  });
});
