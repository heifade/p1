import { ProjectConfigModel } from "./src/model/projectConfig/ProjectConfigModel";
import { CompileModel } from "./src/model/projectConfig/CompileModel";

let projectConfig: ProjectConfigModel = {
  projectType: "node",
  compile: [
    {
      outDir: "./es/"
    },
    {
      outDir: "./lib/"
    }
  ],
  command: false,
  documents: true,
  sourceInclude: ["./src/**/*"]
};

export default projectConfig;
