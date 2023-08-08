import { src, dest } from "gulp";
import { paths } from "../config/paths";
import plumber from "gulp-plumber";
import size from "gulp-size";
import { onError } from "../utils/onError";

export const processFonts = () => {
  return new Promise((resolve, reject) => {
    return src(paths.src.assets.fonts)
      .pipe(
        plumber({
          errorHandler: onError,
        })
      )
      .pipe(
        size({
          title: "processFonts : ",
          showFiles: true,
          showTotal: true,
        })
      )
      .pipe(dest(`${paths.dist.dir}/fonts`))
      .on("error", reject)
      .on("end", resolve);
  });
};
