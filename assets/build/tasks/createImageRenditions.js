import gulpResponsive from "gulp-responsive";
import { src, dest } from "gulp";
import plumber from "gulp-plumber";
import { paths } from "../config/paths";
import size from "gulp-size";
import { onError } from "../utils/onError";

const imgRenditionConf = {
  "*": [
    {
      rename: {
        suffix: "-original",
        extname: ".webp",
      },
    },
  ],
};

export const createImageRenditions = () => {
  return new Promise((resolve, reject) => {
    return src(paths.src.assets.images)
      .pipe(
        plumber({
          errorHandler: onError,
        })
      )
      .pipe(
        gulpResponsive(imgRenditionConf, {
          quality: 85,
          progressive: true,
          withMetadata: false,
          withoutEnlargement: false,
        })
      )
      .pipe(
        size({
          title: "createImageRenditions : ",
          showFiles: true,
          showTotal: true,
        })
      )
      .pipe(dest(`${paths.dist.dir}/images`))
      .on("error", reject)
      .on("end", resolve);
  });
};
