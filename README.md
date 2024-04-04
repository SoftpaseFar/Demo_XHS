# Demo_XHS

# 环境准备
MacOS、Android【<a href="https://reactnative.cn/docs/environment-setup" style="color: orange;">开发环境搭建指南</a>】

## 添加环境变量
```bash
#!位置：~/.zshrc
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
## 注意事项
> 如果是M系列芯片
- 下载对应SDK时：SDK Platform勾选Sv2选项并下载
- 下载对应SDK Tools时：SDK Toolsit Android Emulator. Android SDK Platform-Tools、底部三个Layout Inspector选项
- 创建模拟器时：Device Manager > Create Device 设备类型选择Phone，屏幕尺寸随便选系统镜像选择Sv2选项然后一直next就可以

## 初始化项目
- 初始化项目(推荐)：прх react-native init Demo_XHS
- 初始化项目(指定RN版本)：npx react-native init Demo_XHS -version x.xx.x

## 安装依赖
- 安装JS依赖：npm i
- 安装原生依赖：gradle sync 注意：需要安装JDK11

## 常用命令
```bash
查看许碧设备: adb devices
运行设备：npm run android
```

### ES6新特性
- 变量申明 let
- 对象属性简写
- Object.assign对象合并
- 解构赋值
- 展开运算符
- 模板字符串
 Promisee
- import#lexport

## Babel
为了兼容浏览器出现的翻译器，在工程的babel.config.js中配置【待更新】

# 相关知识

## CSS_Flex布局
- 横向和纵向布局：direction
- 主轴和交叉轴对齐：justifyContent、alignltems
- 元素的放大和缩小：flexGrow、flexShrink

## 安装nrm，切换taobao源
```bash
npm i -g nrm
nrm Is
nrm add taobao https://registry.npm.taobao.org/
nrm use taobao 
nrm test taobao
```

## adb命令真机测试
- USB链接 adb devices 可以显示
- WIFI链接
  - adb connect IP:端口(默认5555) 
  - 断开 adb disconnect IP:端口
- adb常用操作
  - 查看设备 adb devices
  - 停止 adb kill-server
  - 启动 adb start-server
  - 端口映射 adb reverse tcp:8080 tcp:8080
  - 进入沙盒 adb shell
  - push文件到手机 adb push 文件路径 手机目标路径(比如/sdcard/)
  - pull文件到电脑 adb pull 手机文件 电脑目录

## UI包括 StatusBar状态栏、ActionBar标题栏、ContentView内容、Navigation导航
## RN中页面跳转默认是一个Activity 也可以有多个
## 原生的dialog RN中是Modal<-Window
## 常需要修改的原生文件
- 配置
  - Manifest 权限、第三方注册组件元数据、等等
  - gradle 一般是app下的 签名、依赖、等等
- 应用
  - MainActivity 比如科大讯飞模块需要一些初始化时
  - strings.xml 应用名称等
  - mipmap 图标
- 桥接
  - ReactPackage, ReactModule, ViewManager 等等

## RN和原生组价的对应关系
| React Native 组件 | Android 对应组件                          | iOS 对应组件                |
|-------------------|----------------------------------------|--------------------------|
| `<View>`          | `android.view.View`                    | `UIView`                 |
| `<Text>`          | `android.widget.TextView`              | `UITextView`             |
| `<Image>`         | `android.widget.ImageView`            | `UIImageView`           |
| `<ScrollView>`    | `android.widget.ScrollView`            | `UIScrollView`           |
| `<TextInput>`     | `android.widget.EditText`              | `UITextField`           |
| `<Button>`        | `android.widget.Button`                | `UIButton`               |
| `<Switch>`        | `android.widget.Switch`                | `UISwitch`               |
| `<FlatList>`      | `androidx.recyclerview.widget.RecyclerView` | `UITableView`       |
| `<Modal>`         | `android.app.Dialog`                   | `UIViewController`       |
| `<ActivityIndicator>` | `android.widget.ProgressBar`        | `UIActivityIndicatorView` |
| `<Picker>`        | `android.widget.Spinner`               | `UIPickerView`           |

## RN常见的热修复框架
- PUSHY 国内
- App Center 国外的比较慢 不过比PUSHY强大

# RN基础
## 工程目录
- `index.js`：应用的入口文件，从这里加载 `App.js`。
- `App.js`：应用的主组件，定义了应用的界面和逻辑。
- `package.json`：定义了项目的元数据和依赖关系。
- `package-lock.json`：锁定安装时的包的版本，以确保项目的依赖一致性。
- `babel.config.js`：Babel 的配置文件，用于设置代码转译的规则。
- `app.json`：配置应用的名称、图标等信息。
- `/node_modules`：存放所有的项目依赖库。通常不会直接修改这里的文件，也不会将其加入版本控制系统。

## 构建通用源码目录结构
- > 原则：
- > 职责清晰：每个目录划分都规定具体的职责
- > 功能全面：包含ui、数据、网络、常量、工具、环境等
- > 独立解偶：一级目录之间没有职责交叉和耦合



## 待更新
