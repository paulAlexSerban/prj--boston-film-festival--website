export const paths = {
  src: {
    meta: {
      metaFiles: "./source/meta/*"
    },
    assets: {
      assetFiles: ["../../assets/dist/**/*"],
    },
    html: {
      htmlDir: "./source",
      htmlFiles:"./source/**/*.html"
    },
    styles: {
      scssDir: `../living-style-guide/source/`,
      scssFiles: [`../living-style-guide/source/**/*.scss`],
      scssPages: [`../living-style-guide/source/**/*.page.scss`],
    },
    scripts: {
      javaScriptDir: `../js-component-library/source/`,
      javaScriptFiles: [`../js-component-library/source/**/*.js`],
      javaScriptEntry: [`../js-component-library/source/**/*.entry.js`],
    }
  },
  dist: {
    dir: `./dist`,
  },
};
