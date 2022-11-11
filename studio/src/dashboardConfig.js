export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "636e6714e36464027a940373",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-99fw7iz6",
                  apiId: "f0bdfc6b-9c60-4b78-8dc2-bdadd7589f99",
                },
                {
                  buildHookId: "636e671408e2d405cc23af84",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ihc8hipm",
                  apiId: "b6d50347-1b27-4b2e-b708-9997d94a791b",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/bzandstra2/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ihc8hipm.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
