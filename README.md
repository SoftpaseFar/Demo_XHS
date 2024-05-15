# Demo_XHS(正在开发中)

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
> 原则：
  - > 职责清晰：每个目录划分都规定具体的职责
  - > 功能全面：包含ui、数据、网络、常量、工具、环境等
  - > 独立解偶：一级目录之间没有职责交叉和耦合
> 目录树
  - src
  - ├── apis
  - ├── assets
  - ├── components
  - ├── constants
  - ├── env
  - ├── hooks
  - ├── modules
  - ├── stores
  - ├── theme
  - ├      └── test.js
  - └── utils

## package.json 全局大管家文件
- 基础字段： name、version、private
- 自定义脚本：scripts，build.gradle中,例如：
  ```shell
  #！Android原生配置
  flavorDimensions "type"
  productFlavors {
  dev {
    resValue（"string"，"app_name"，"测试包"）
    }
  prd {
    resValue（"string"，"app_name"，"生产包"）
    }
  }
  ```
  ```shell
  #！RN的package.json中scripts调用
  "scripts": {
    "android_devDebug": "react-native run-android -variant=devDebug",
    "android_prdDebug": "react-native run-android -variant=prdDebug",
    "ios": "react-native run-ios",
    "start": "react-native start",
    "test": "jest",
    "lint":"eslint ."
  }
  ```
- 包依赖：dependencies、devDependencies
  ```shell
  安装到dependencies：npm i 包名
  安装到devDependencies：npm i --save-dev 包名
  ```
## import/export
## class组件和函数式组件
- class组件
  - 有状态（state），每次都是修改的同一个状态
  - 基于生命周期的管理
  - 面向对象的好处：易于理解，适合新手
- 函数式组件(用的多，90%多)
  - 无状态，每次刷新都是生成一个新的状态
  - 基于状态变化的管理
  - 函数式的好处：简洁，模板代码少，易于复用(基于自定义hock)
  > 常用hock：useState, useEffect, useRef, useWindowDimension. useColorScheme

## JSX特性
- 拆分渲染
- 内联样式与样式表、样式组合 StyleSheet
- 条件渲染、三元表达式、列表渲染、数组渲染等
> 重启页面，命令行按r


# RN基础
## 常用组件
- View
- Text
  - 字体属性: fontSize, fontFamily, fontWeight
  - 行数以及修饰模式：numberOfLines、ellipsizeMode
  - 是否可选中以及选中色号：selectable、selectionColor
  - 点击和长按：onPress、onLongPress
  - 跟随系统字号：allowFontScaling
  - 文字嵌套，注意在内部的Text有些属性不生效
  - 文本对其：textAlign、textAlignVertical
  - 文本装饰: textDecorationStyle, textDecorationLine
  - 文字阴影：textShadowColor、textShadowOffset、textShadowRadius一起使用
- Image
  - 图片源的两种类型：source 本地和网络
  - 缩放模式: resizeMode
  - blurRadius：模糊设置
  - 占位图片: defaultSource
  - 渐入动画时间：fadeDuration
  - 加载成功和加载失败：onLoad、onError
  - 加载开始与加载结束：onLoadStart、onLoadEnd
  - 着色：tintColor 例如图标根据场景可以设置不同的颜色
  - api: Image.getSize() • Image.prefetch()
- ImageBackground: View和Image的结合
  - style#limageStyle
  - ref和imageRef
- TextInput
  - 字体样式：和Text一致
  - 自动聚焦：autoFocus和focus()
  - 自动失焦：blurOnSubmit和blur()
  - 隐藏光标：caretHidden
  - 默认输入：defaultValue
  - 可编辑性：editable
  - 键盘类型：keyboardType (Android和IOS都支持的)
    - default
    - number-pad
    - decimal-pad
    - numeric
    - email-address
    - phone-pad
  - 确定键配置：returnKeyType
    - done
    - go
    - next
    - search
    - send
  - 内容回调: onChangeflonChangeText
  - 选中相关：selection、selectionColor、selectTextOnFocus
  - 对齐方式：textAlign和textAlignVertical
  - 安全模式：secureTextEntry，不能和multiline一块使用
- TouchableOpacity最好用的点击组件
- TouchableHighlight使用略显麻烦的点击组件
- TouchbaleWithoutFeedback几乎不用的
- Button
- ScrolView基础滚动组件
- FlatList高性能列表组件
- SectionList多类型分组列表
- RefreshControl下拉刷新【上拉加载是列表的属性】
- Modal自定义弹窗
- StatusBar适配状态栏
- Switch开关切换
## 常用API
- Alert/console：开发周期的调试工具
  - alert()要区别Alert.alertl
  - console日志输出分级 console.info()、console.debug()、console.warn()、console.error()
  - console.log()
    - 字符串模板 %s、%d、%o 【字符串模板更加方便】
    - %c指定输出样式 color:orange font-size:x-large, x-medium, x-small 浏览器可以看到效果 命令行没效果
    - 可以打印组件树
  - console.table() 浏览器可以看到效果
  - console.group() console.groupEnd() 浏览器效果更好
- Dimensions/useWindowDimensions：适配屏幕宽高
- Platform：轻松获取平台属性
 - console.log(Platform.OS) 查看当前所属平台
 - console.log(Platform.Version) 比如Android版本号
 - console.log(Platform.constants) 提供设备底层信息
 - console.log(Platform.isPad)
 - console.log(Platform.isTV)
 - Platform.select
     ```JavaScript
     const style = Platform.select({
     andrid: {
       marginTop: 20,
     },
     ios: {
       marginTop: 0,
     },
     default: {
       marginTop: 10,
     });
     console. log(style);
     // Andrid下输出：("marginTop": 20)
     ```
- StyleSheet： 灵活构建样式表
  - StyleSheet.compose()
  - StyleSheet.flatten() 属性重复，后边的会覆盖前边的
  - StyleSheet.absoluteFill() 布满全清使用，实际想布满全屏需要写一串代码，这个直接一句话
  - StyleSheet.hairlineWidth 头发丝尺寸 1个尺寸 比如分割线
- Linking：一个api帮你省掉50行代码
  - 打开链接：openURL()、canOpenURL() 网页链接、地图定位geo:经,纬度、拨打电话tel:电话号码、发送短信smsto:例如10086、发送邮件mailto:邮箱地址、应用跳转
  - Linking.openSettings() 跳转到当前应用的设置页面
  - 安卓隐式跳转：Linking.sendIntent()
  - 狭取初始化url:getInitialURL() 这啥玩意？^*^
- PixelRatio：像素比例工具
  - PixelRatio.roundToNearestPixel() 由于像素比舍入会空出一个像素 这样可以自动计算防止空出一个像素产生难以捉摸的问题
- BackHandler：针对安卓返回键的适配不再是难题
  - 添加监听：BackHandler.addEventListener()
  - 移除监听: BackHandler.removeEventListener()
  - 退出应用：BackHandler.exitApp() 
  - 社区hook： @react-native-community/hooks 省掉上述固定流程，直接写逻辑
    ```shell
    npm install @react-native-community/hooks
    import {
      useBackHandler
    } from '@react-native-community/hooks'
    useBackHandler(()=>{
      return true
    })
    ```
- PermissionAndroid：一个api帮你解决Android原生动态权限问题
  > 切记原生manifest注册权限
  - 属性存在PermissionAndroid.PERMISSIONS中
  - 检查权限：PermissionsAndroid.check()
  - 申请权限：PermissionsAndroid.request()
  - 社情多个权限: PermissionsAndroid.requestMultiple()
- Vibration： 简单好用的震动交互 默认400ms IOS单次震动只能400ms
  - 原生申明权限：android.permission.VIBRATE 
  - Vibration.vibrate() 发起震动
  - Vibration.vibrate([100, 500, 200, 500]); 震动时间模式 Android中停100震500，停200震500
  - Vibration.vibrate([100, 200, 300, 400]); 震动时间模式 IOS中停100震400，停200震400，停300震400，停400震400
  - Vibration.vibrate([100, 200, 300, 400]，true); 循环震动
  - Vibration.cancel() 停止震动
- ToastAndroid： 安卓平台的提示 【逐渐被弱化】 弹出提示：ToastAndroid.show()
- transform：矩阵变换的伪3D效果
- Keyboard：键盘操作有神器
## 动画系统
> 四大动画类型：平移、旋转、缩放、渐变
- 平移：需要用 <Animated.View></Animated.View> 示例：
```javascript
export default () => {
    const marginLeft = useRef(new Animated.Value(0)).current;
    return (<View>
      <Button title='按钮' onPress={() => {
        Animated.timing(marginLeft, {
          toValue: 300,
         durationn: 200,
          useNativDriverr: false
        }).start();
      }} />
      <Animated.View
        style={[styles.view,
          { marginLeft: marginLeft }
        ]}
      />
    </View>);
  }
```
- 旋转示例：
```javascript
export default () => {
const rotate = useRef(new Animated.Value(0)).current;
const rotateValue = rotate.interpolate({
inputRange: [0, 30],
outputRange: ['0deg', '30deg']
});
return (<View>
<Button title='按钮' onPress={() => {
  Animated.timing(rotate, {
    toValue: 30,
    duration: 100,
    useNativeDriver: false
  }).start();
}} />
<Animated.View
  style={[styles.view,
    { transform: [{ rotate: rotateValue }] }
  ]}
/>
</View>);
}

```
- 缩放示例：
```javascript

export default () => {
const scale = useRef(new Animated.Value(1)).current;

return (<View>
<Button title='按钮' onPress={() => {
  Animated.timing(scale, {
    toValue: 1.5,
    duration: 100,
    useNativeDriver: false
  }).start();
}} />
<Animated.View
  style={[styles.view,
    { transform: [{ scale: scale }] }
  ]}
/>
</View>);
}
```
- 渐变示例：
```javascript
export default () => {
const opacity = useRef(new Animated.Value(1)).current;

return (<View>
 <Button title='按钮' onPress={() => {
   Animated.timing(opacity, {
     toValue: 0.1,
     duration: 1000,
     useNativeDriver: false
   }).start();
 }} />
 <Animated.View
   style={[styles.view,
     // { transform: [{ scale: scale }] },
     { opacity: opacity }
   ]}
 />
</View>);
}
```
- 支持动画的组件
  - Animated.Image
  - Animated.View
  - Animated.ScrollView
  - Animated.FlatList
  - Animated.Text
  - Animated.SectionList
 - 平移动画的多重属性支持
   - marginLeft, marginRight, marginTop, marginBottom
   - translateX, translateY
   - left, right, top, bottom
- 三大动画函数
  - Animated.decay（）：衰减动画函数
    - velocity： 初始速度、deceleration：衰减系数，越小衰减越快
    ```javascript
    export default () => {
        const marginLeft = useRef(new Animated.Value(0)).current;
        return (<View>
          <Button title='按钮' onPress={() => {
            Animated.decay(marginLeft, {
              velocity: 1,
              deceleration: 0.999,
              useNativDriverr: false
            }).start();
          }} />
          <Animated.View
            style={[styles.view,
      { marginLeft: marginLeft }
               ]}
          />
        </View>);
       }
    ```
  - Animated.spring（）：弹性动画函数
    - toValue：目标值
    - 弹性模型：三组配置
      - bounciness（弹性）：控制弹性，越大越弹，默认值8 | speed（速度）：控制“弹”的速度，默认值12
      - tension（张力）：控制速度，越大速度越快，默认值40 | friction（摩擦）：控制弹性与过冲，越小越弹，默认值7
      - stiffness（刚度）：弹簧刚度系数，越大越弹，默认为100 | damping（阻尼）：弹簧运动因摩擦力而受到阻尼，越小越弹，默认值10 | mass（质量）：附着在弹簧未端的物体的质量，越大惯性越大，动画越难停下，越小惯性越小，动画很快停下，默认值1
      - 其它参数
        - velocity（速度）：附着在弹簧上物体的初始速度，默认值0
        - overshootClamping（过冲）：弹簧是否应夹紧而不应弹跳，默认为false
        - restDisplacementThreshold（恢复位移阈值）：从静止状态开始的位移阈值，低于该阈值，弹簧应被视为静止状态，默认为0.001
        - restspeedthreshold（弹簧静止速度），单位为像素/秒，默认为0.001
        - delay（延迟）：延迟后启动动画，默认为0
  - Animated.timing（）：时间动画函数
      - easing：时间动画函数
      - 四种内置动画 back 回拉、bounce、ease、elastic
      ```javascirpt
      easing: Easing.back(3),
      easing: Easingeasee,
      easing: Easing.bouncee,
      elasticeasing: Easing.elastic(1),
      ```
      - 三种标准函数 linear：一次方函数、quad： 二次方函数、cubic：三次方函数
      - 四种补充函数 [Easing.bezier (0,0,1,1)](https://cubic-bezier.com/)、Easing.circle 环形、Easing.sin 正弦、Easing.exp 指数
      - 组合 Easing.in(Easingbouncee) 加速＋弹跳、Easing.out(Easing.exp) 减速＋指数、Easing.inOut(Easing.elastic(1)) 加减速+弹性 [查看组合效果](https://easings.net/#)
 - 矢量动画
 ```javascript
 export default () => {
 const vector = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
 return (<View>
   <Button title='按钮' onPress={() => {
     Animated.timing(vector, {
       toValue: { x: 300, y: 500 },
       durationn: 500,
       useNativDriverr: false
     }).start();
   }} />
   <Animated.View
     style={[styles.view,
       { marginLeft: vector.x, marginTop: vector.y }
     ]}
   />
 </View>);
 }
 ```
 - 四种组合公动画
   - Animated.parallel() 并发、Animated.sequence() 序列、Animated.stagger() 有序/交错、Animated.delay() 延迟
 - 跟随动画延迟难题：传统的会有延迟，因为是异步，需要重新渲染页面，而动画方式直接桥接原生底层 【待补充】
 - 布局动画 LayoutAnimation 简单 性能高
   - 开启 index.js
   ```javascript
   import {AppRegistry, UIManager, Platform} from 'react-native';
   import App from './App';
   import {name as appName} from './app.json';
   
   if (Platform.OS === 'android') {
     if (UIManager.setLayoutAnimationEnabledExperimental) {
       console.log('enable …');
       UIManager.setLayoutAnimationEnabledExperimental(true);
     }
   }
   
   AppRegistryregisterComponentt(appName, () => App);
   ```
   - 示例
   ```javascript
   export default () => {
     const [showView, setShowView] = useState(false);
     return (
       <View>
         <Button title='按钮' onPress={() => {
           LayoutAnimation.configureNext(
             LayoutAnimation.Presets.linear,
             // LayoutAnimation.Presets.easeInEaseOut,
             // LayoutAnimation.Presets.spring,
             () => {
               console.log('动画结束');
             },
             () => {
               console.log('动画异常');
             }
           );
           // LayoutAnimationspringg(),
           setShowView(true);
         }} />
         {showView && <view style={styles.view} />}
   
       </View>
     );
   }
   ```



## 待更新
