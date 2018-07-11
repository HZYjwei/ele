// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": {
      utf8: false
    },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 3, //转化为视窗单位值是的小数位数
      viewportUnit: 'vw', //转换的视窗单位
      selectorBlackList: ['.ignore', '.hairlines'], //不转换的类
      minPixelValue: 1, //小于等于1px的不转换
      mediaQuery: false //允许媒体查询转换'px'
    },
    "postcss-viewport-units": {},
    "cssnano": {
      "preset": "advanced",
      autoprefixer: false,
      "postcss-zindex": false
    }
    //cssnano和postcss-cssnext都有autoprefiexer的
  }
}
