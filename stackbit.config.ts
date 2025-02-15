import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/{slug}",
          filePath: "content/pages/{slug}.json",
          fields: [
            { 
              name: "title", 
              type: "string", 
              required: true 
            },
            { 
              name: "slug", 
              type: "string", 
              required: true 
            },
            { 
              name: "body", 
              type: "markdown",
              required: true 
            }
          ]
        }
      ]
    })
  ]
});
