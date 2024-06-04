import { defineConfig } from 'vite';
import path from 'node:path';
import eslintPlugin from 'vite-plugin-eslint';
import eslint from 'vite-plugin-eslint';
import handlebars from 'vite-plugin-handlebars';


export default defineConfig(() => {

  return {
    server: {
      port: 1234,
      hmr: {
        overlay: false
      }
    },
    publicDir: path.resolve(__dirname, 'public'),
    root: path.resolve(__dirname, 'src'),
    build: {
      outDir: '../dist',
      // output: {
      //   assetFileNames: (assetInfo) => {
      //     let result = 'assets/images/[name][extname]';
      //     if (assetInfo.name.split('.')[1] === 'css') {
      //       result = 'assets/styles/[name][extname]';
      //     }
      //     return result;
      //   },
      //   chunkFileNames: 'assets/js/[name].js',
      //   entryFileNames: 'assets/js/[name].js',
      // },
    },
    preview: {
      host: true,
    },
    plugins: [
      handlebars({
        partialDirectory: path.resolve(__dirname, './src/assets/common'),
      }),
      eslint({
        cache: false,
        fix: true,
      }),
      eslintPlugin({
        // ESLint의 설정 파일 경로를 지정합니다.
        configFile: './.eslintrc.js'
      }),
    ],

  }
});