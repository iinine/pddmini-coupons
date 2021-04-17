有部分人真的没有武德，恶意投诉你大爷！！！拼多多云函数及部件代码中的goods_id修改为goods_sign，具体的自己调试


# pddmini-coupons
原生小程序云开发，别人领外卖打车券拼多多购物，你拿佣金，轻松赚个零花钱
## 整合拼多多及外卖原生小程序源码

## 使用方法

### 拼多多配置
`该小程序使用微信原生+云函数开发。`

* 申请多多进宝应用，不做详细叙述，申请地址：[https://jinbao.pinduoduo.com/](https://jinbao.pinduoduo.com/)、[https://open.pinduoduo.com/](https://open.pinduoduo.com/)
* 在微信开发者工具中导入项目`wechat-xcx`文件夹，并开启云开发。
* 修改`env.js`的配置。
* 修改`functions\pquery\pdd\utils.js`里拼多多相关的配置参数。上传云函数。


### 外卖配置
`该小程序使用微信原生+云函数开发。`
* 注册好美团联盟和淘宝联盟（淘宝联盟就是饿了么联盟）
* 美团联盟：美团联盟
* 淘宝联盟： 阿里妈妈
* 分别到美团联盟里拿到美团外卖的推广链接，淘宝联盟里拿到饿了么外卖的推广链接，
* 美团联盟要用企业信息去注册，也就是说你需要有一个公司
* 淘宝联盟用个人信息就可以

* 需要把db里面的数据库数据导入到云数据库中，并设置放开好权限！
* 消息订阅ID需要自己去小程序后台申请在填写！

### 注册微信小程序
* 微信公众平台：微信公众平台
* 注册一个微信小程序，个人资质就可以，只需要一个邮箱号

### 开发
代码非常的简单，就是列表，列表里面是跳转链接，点哪领哪个券

小程序名：多实惠省钱购
具体功能可以用微信扫码看看

### 其他问题

* 如果遇到领券 搜索接口报错，需要用这个接口[https://jinbao.pinduoduo.com/third-party/api-detail?apiName=pdd.ddk.rp.prom.url.generate](https://jinbao.pinduoduo.com/third-party/api-detail?apiName=pdd.ddk.rp.prom.url.generate)对`pid`备案一次，channel_type: 10。接口会返回以下格式的参数：

```json
{"rp_promotion_url_generate_response":{"url_list":[{"mobile_url":"xxxxx","url":"xxxx"}],"request_id":"xxx"}}
```
* 登录上述的url，用你的账号授权一次。用该接口[https://jinbao.pinduoduo.com/third-party/api-detail?apiName=pdd.ddk.member.authority.query](https://jinbao.pinduoduo.com/third-party/api-detail?apiName=pdd.ddk.member.authority.query)查询下是否备案成功，成功后就没权限问题。


* 怎么获取饿了么和美团的推广链接
  
  美团联盟：https://union.meituan.com/

  饿了么、双十一：https://pub.alimama.com/

  饿了么聚合页CPS推广：https://market.m.taobao.com/app/qn/toutiao-new/index-pc.html#/detail/10628647/?_k=h8emzf

  去淘宝联盟开通淘宝客权限，可以直接调用api生成

  不想写代码的话可以用api测试工具生成推广链接：api测试工具
  

## 感谢
非常感谢原作者   https://github.com/hedongshu/miniapp-coupons 提供的代码

也非常感谢原作者 https://github.com/sgxiang/pdd-coupon 提供的代码

特别感谢原作者  https://github.com/zwpro/coupons 提供的代码
