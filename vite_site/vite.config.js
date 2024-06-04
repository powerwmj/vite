import { defineConfig } from 'vite';
import path from 'node:path';
import eslintPlugin from 'vite-plugin-eslint';
import eslint from 'vite-plugin-eslint';
import handlebars from 'vite-plugin-handlebars';
import Swiper from 'swiper/bundle';

export default defineConfig(() => {

  return {
    server: {
      port: 3030,
      hmr: {
        overlay: false
      }
    },
    publicDir: path.resolve(__dirname, 'public'),
    root: path.resolve(__dirname, 'src'),
    build: {
      outDir: '../dist',
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
        overrideConfigFile: './.eslintrc.js'
      }),
      new Swiper()
    ],

  }
});