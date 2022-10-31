import { src, dest, lastRun } from "gulp";
import { paths } from "../config/paths";
import plumber from "gulp-plumber";
import debug from "gulp-debug";
import size from "gulp-size";
import { onError } from "../utils/onError";

export const processAssets = () => {
  return new Promise((resolve, reject) => {
    return (
      src(paths.src.assets.assetFiles)
      .pipe(
        plumber({
          errorHandler: onError,
        })
      )
        // .pipe(debug({title: 'processAssets : '}))
        .pipe(
          size({
            title: "processAssets : ",
            showFiles: true,
            showTotal: true,
          })
        )
        .pipe(dest([`${paths.dist.dir}/assets`]))
        .on("error", reject)
        .on("end", resolve)
    );
  });
};
