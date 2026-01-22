const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'micro19',
  shared: {},
  exposes: {
    './DashboardComponent': './src/app/shared/dashboard/dashboard.component.ts',
    './MfeCompComponent':'./src/app/pages/mfe-comp/mfe-comp.component.ts',
    './bootstrap': './src/bootstrap.ts',
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
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@primeng/themes',
    '@softarc/native-federation-node',
    'es-module-shims',
    'primeng',
    'rxjs',
    'tslib',
    'zone.js',
    // Add further packages you don't need at runtime
  ],
  // skipSharingNextInternals: [
  //   '@primeng/themes/types',
  //   '@primeng/core/primeng-chart'
  // ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
  
});
