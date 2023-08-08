import { task, parallel, series} from "gulp";
import { clean } from "./tasks/clean";
import { processIcons } from "./tasks/processIcons";
import { processFonts } from "./tasks/processFonts";
import { processVideos } from "./tasks/processVideos";
import { processSvgs } from "./tasks/processSvgs";
import { createImageRenditions } from "./tasks/createImageRenditions";

// ---------------------------------------------------------------------
// | Helper tasks                                                      |
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
// | Main tasks                                                        |
// ---------------------------------------------------------------------
task(
  "build",
  series(clean, parallel( processIcons, processFonts, processVideos, processSvgs, createImageRenditions))
);
