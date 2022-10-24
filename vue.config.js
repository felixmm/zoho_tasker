module.exports = {
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        productName: "Zoho Tasker",
        publish: "always",
        win: {
          icon: "./public/zoho_tasker.png"
        },
        linux: {
          icon: "./public/zoho_tasker.png"
        },
      }
    }
  }
}