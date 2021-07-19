import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'MLModelCI',
  favicon:
    'https://raw.githubusercontent.com/cap-ntu/ML-Model-CI/master/docs/img/iconv1.svg',
  logo: 'https://raw.githubusercontent.com/cap-ntu/ML-Model-CI/master/docs/img/iconv1.svg',
  outputPath: 'docs-dist',
  mode: 'site',
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/cap-ntu/ML-Model-CI',
    },
  ],
  // more config: https://d.umijs.org/config
});
