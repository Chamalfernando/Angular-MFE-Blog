const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'Micro20',

  exposes: {
    './bootstrap': './src/bootstrap.ts',
  },

  shared: {
    // ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    '@angular-architects/native-federation',
    '@angular/animations',
    '@angular/cdk',
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/elements',
    '@angular/forms',
    '@angular/material',
    '@angular/platform-browser',
    '@angular/router',
    '@softarc/native-federation-node',
    '@tailwindcss/postcss',
    'es-module-shims',
    'postcss',
    'rxjs',
    'tailwindcss',
    'tslib',
    'zone.js',
    // Add further packages you don't need at runtime
  ],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

  features: {
    // New feature for more performance and avoiding
    // issues with node libs. Comment this out to
    // get the traditional behavior:
    ignoreUnusedDeps: true
  }
});
