const path = require("path");
const NODE_ENV = process.env.NODE_ENV;


/** @type {import('webpack').Configuration} */

module.exports = {
  name: "express-server",
  entry: "./src/index.ts",
  // WEBPACK PUEDE COMPILAR PARA MÚLTIPLES ENTORNOS U OBJETIVOS 
  // INDICA AL PAQUETE WEB QUE SE DIRIJA A UN ENTORNO ESPECÍFICO
  target: "node",

  // development
  mode: NODE_ENV,

  // EVITA LA AGRUPACIÓN DE CIERTOS IMPORTS y PAQUETES ED Y, EN SU LUGAR, RECUPERE ESTAS DEPENDENCIAS EXTERNAS EN TIEMPO DE EJECUCIÓN
  externals: {
    express: "require('express')",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      /* Para que pueda leer archivos typescript */
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
};
