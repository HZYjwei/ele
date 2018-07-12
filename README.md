# elem

ele项目，开始搭建与2018/7/11
技术栈
>framework：
  vue + vue-router + vuex + axios
>js:
  es6
>css:
  less

>自适应方式：
  vw(用postcss兼容)，使用方式[《如何在Vue项目中使用vw实现移动端适配》](https://www.w3cplus.com/mobile/vw-layout-in-vue.html)。
  缺点：在webpack打包的时候在css(style)加上这句,那么如果style属性中有px值动态改变就会有问题（不能将px转义为vw），
  ```css
    height: 13.333vw;
    line-height: 13.333vw;
    content: "viewport-units-buggyfill; height: 13.333vw; line-height: 13.333vw";
  ```

> v-touch + fastclick:
v-touch中tap好像不能`@tap.stop`,所以使用了`@click`

ui库
ElementUI， iconfont


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
