const path = require("path");

export default {
   root: path.resolve(__dirname, "src"),
   base: "",
   publicDir: path.resolve(__dirname, "public"),
   build: {
      outDir: path.resolve(__dirname, "dist"),
      rollupOptions: {
         input: {
            index: path.resolve(__dirname, "src/index.html"),
            useCase1: path.resolve(__dirname, "src/use-case-1.html"),
            useCase2: path.resolve(__dirname, "src/use-case-2.html"),
            useCase3: path.resolve(__dirname, "src/use-case-3.html"),
            useCase4: path.resolve(__dirname, "src/use-case-4.html"),
            articulo1: path.resolve(__dirname, "src/articulo-1.html"),
            articulo2: path.resolve(__dirname, "src/articulo-2.html"),
         },
         output: {
            chunkFileNames: "js/[name]-[hash].js",
            entryFileNames: "js/[name]-[hash].js",

            assetFileNames: ({ name }) => {
               if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
                  return "img/[name]-[hash][extname]";
               }

               if (/\.css$/.test(name ?? "")) {
                  return "css/[name]-[hash][extname]";
               }

               // default value
               // ref: https://rollupjs.org/guide/en/#outputassetfilenames
               return "assets/[name]-[hash][extname]";
            },
         },
      },
   },
   resolve: {
      alias: {
         "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
         "@assets": path.resolve(__dirname, "img/"),
      },
   },
   server: {
      hot: true,
   },
};
