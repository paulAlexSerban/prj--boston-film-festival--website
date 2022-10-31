import { task, series, parallel, watch } from "gulp";
import { paths } from "./config/paths";
import { clean } from "./tasks/clean";

import { compileHtml } from "./tasks/compileHtml";
import { compileScss } from "./tasks/compileScss";

import { transpileJavaScript } from "./tasks/transpileJavaScript";

import { processAssets } from "./tasks/processAssets";

// ---------------------------------------------------------------------
// | Helper tasks                                                      |
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
// | Main tasks                                                        |
// ---------------------------------------------------------------------


task("build", series(clean, processAssets, parallel( compileHtml, compileScss, transpileJavaScript)));

task("watch", () => {
  watch(paths.src.html.htmlFiles, series(compileHtml));
  watch(paths.src.styles.scssFiles, series(compileScss));
  watch(paths.src.scripts.javaScriptFiles, series(transpileJavaScript));
});
