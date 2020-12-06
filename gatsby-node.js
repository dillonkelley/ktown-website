module.exports.onCreateNode = async ({
  node,
  actions,
  createNodeId,
  store,
  cache,
}) => {
  const crypto = require(`crypto`)

  if (node.internal.type === "StrapiAboutMe") {
    const newNode = {
      id: createNodeId(`about-${node.id}`),
      parent: node.id,
      slug: node.slug,
      title: node.title,
      published_at: node.published_at,
      children: [],
      internal: {
        content: node.bio || " ",
        type: "about",
        mediaType: "text/markdown",
        contentDigest: crypto
          .createHash("md5")
          .update(node.bio || " ")
          .digest("hex"),
      },
    }
    actions.createNode(newNode)
    actions.createParentChildLink({
      parent: node,
      child: newNode,
    })
  }
}
