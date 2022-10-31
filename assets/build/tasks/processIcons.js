import { src, dest } from "gulp";
import { paths } from "../config/paths";
import plumber from "gulp-plumber";
import size from "gulp-size";
import { onError } from "../utils/onError";

export const processIcons = () => {
  return new Promise((resolve, reject) => {
    return src(paths.src.assets.icons)
      .pipe(
        plumber({
          errorHandler: onError,
        })
      )
      .pipe(
        size({
          title: "processIcons : ",
          showFiles: true,
          showTotal: true,
        })
      )
      .pipe(dest(`${paths.dist.dir}/icons`))
      .on("error", reject)
      .on("end", resolve);
  });
};
