import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import babel from "rollup-plugin-babel";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  external: ["react", "react-dom", "lodash"],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    postcss({
      extensions: [".css", ".less"], // 支持 .less 文件
      extract: true, // 是否提取成单独的 CSS 文件
      minimize: true, // 是否压缩 CSS
      use: [
        ["less", { javascriptEnabled: true }], // 配置 LESS 处理
      ],
    }),
    babel({
      exclude: "node_modules/**",
    }),
    terser(),
  ],
};
