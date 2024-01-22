const path = require("path");

module.exports = {
  babel: {
    plugins: [
      [
        "module-resolver",
        {
          root: [path.resolve("./")],
          alias: {
            "@": "./src",
          },
        },
      ],
    ],
  },
};
