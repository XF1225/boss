boss项目
项目搭建：（vue-cli3用）vue create boss（vue-cli2用）vue init webpack boss
统一项目样式以及解决一像素边框问题，网上下载reset.css和border.css并在main.js引入，比如import './assets/css/reset.css'，在index.html中添加maximum-scale=1.0, minimum-scale=1.0,user-scalable=no
vue中axios封装：新建request.js，添加请求拦截器service.interceptors.request.use(config=>{}),添加响应拦截器service.interceptors.response.use(response=>{}),封装get方法export function getdata(url,params){return new promise((resolve,reject)=>{axios.get(url,{params:params}).then(response=>{resolve(response.data)}).catch(err=>{reject(err)})})},在main.js引入getdata import {getdata} from './utils/request'，vue。prototype.$getdata=getdata
使用百度地图api：先申请百度地图ak，然后安装百度地图插件vue-baidu-map并在main.js中引入 import BaiduMap from 'vue-baidu-map'，vue.use(BaiduMap ,{ak:'申请的ak'})在public/index.html里添加ak,创建公共的map.vue
使用better-scroll实现下拉刷新，上拉加载：先安装依赖 cnpm i better-scroll --save（不需要在main.js中引入 ）在需要在组件中先引入better-scroll，在mounted中加入this.srcoll=new Bscroll(this.$refs.wrapper,{probeType:3,click:true})
项目打包：npm run build
上传到GitHub中解决的问题：error: failed to push some refs to 'https://github.com/XF1225/boss.git' 0@DESKTOP-J7AJ10J MINGW64 ~/desktop/boss (main) $ git branch default 0@DESKTOP-J7AJ10J MINGW64 ~/desktop/boss (main) $ git push -u origin default -f （解决办法链接：https://blog.csdn.net/henusyb/article/details/89385386?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-5.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-5.control）
如何在GitHub部署自己的个人网站：https://www.cnblogs.com/civil/p/10153646.html
Github怎么创建文件夹：https://blog.csdn.net/WILDCHAP_/article/details/107596157
使用到的技术：better-scroll实现下拉刷新，上拉加载，百度地图api，axios封装，localstorage缓存的使用，element-ui库的使用等。
