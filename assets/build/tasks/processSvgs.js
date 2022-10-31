import { src, dest } from "gulp";
import { paths } from "../config/paths";
import plumber from "gulp-plumber";
import size from "gulp-size";
import { onError } from "../utils/onError";

export const processSvgs = () => {
  return new Promise((resolve, reject) => {
    return src(paths.src.assets.svgs)
    .pipe(
      plumber({
        errorHandler: onError,
      })
    )
      .pipe(
        size({
          title: "processSvgs : ",
          showFiles: true,
          showTotal: true,
        })
      )
      .pipe(dest(`${paths.dist.dir}/svgs`))
      .on("error", reject)
      .on("end", resolve);
  });
};
