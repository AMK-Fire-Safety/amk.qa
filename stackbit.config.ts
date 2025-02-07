import { defineStackbitConfig, SiteMapEntry } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Page",
          type: "page",              // Mark this model as a page
          urlPath: "/{slug}",        // URL structure for the page
          filePath: "content/pages/{slug}.json", // Where page content is stored
          fields: [
            { name: "title", type: "string", required: true },
            { name: "body", type: "markdown" }
          ]
        }
      ]
    })
  ],
  siteMap: ({ documents, models }) => {
    // Filter out the page models (in case you add more later)
    const pageModels = models.filter((m) => m.type === "page");
    return documents
      .filter((d) => pageModels.some((m) => m.name === d.modelName))
      .map((document) => ({
        stableId: document.id,
        urlPath: `/${document.modelName.toLowerCase()}/${document.id}`,
        document,
        // Mark the page with slug "home" as the homepage
        isHomePage: document.modelName === "Page" && document.slug === "home",
      })) as SiteMapEntry[];
  }
});
