import { src, dest } from "gulp";
import { paths } from "../config/paths";
import plumber from "gulp-plumber";
import size from "gulp-size";
import { onError } from "../utils/onError";

export const processVideos = () => {
  return new Promise((resolve, reject) => {
    return src(paths.src.assets.videos)
      .pipe(
        plumber({
          errorHandler: onError,
        })
      )
      .pipe(
        size({
          title: "processVideos : ",
          showFiles: true,
          showTotal: true,
        })
      )
      .pipe(dest(`${paths.dist.dir}/videos`))
      .on("error", reject)
      .on("end", resolve);
  });
};
