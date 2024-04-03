# Demo_XHS

### 环境准备
MacOS、Android【<a href="https://reactnative.cn/docs/environment-setup" style="color: orange;">开发环境搭建指南</a>】

### 添加环境变量
```bash
#!位置：~/.zshrc
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
### 注意事项
> 如果是M系列芯片
- 下载对应SDK时：SDK Platform勾选Sv2选项并下载
- 下载对应SDK Tools时：SDK Toolsit Android Emulator. Android SDK Platform-Tools、底部三个Layout Inspector选项
- 创建模拟器时：Device Manager > Create Device 设备类型选择Phone，屏幕尺寸随便选系统镜像选择Sv2选项然后一直next就可以

### 安装依赖
- 安装js依赖：npm i
- 安装原生依赖：gradle sync

### 待更新
