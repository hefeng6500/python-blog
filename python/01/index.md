## 1.课前须知

- 课前
  - 提前十分钟到达教室
  - 有对应的编译 工具,例如pycharm  datagrip  虚拟机  一定要在上课事前提前打开,因为课上可能会有随堂练习
  - 最好在上课前进行几分钟的早读, 读英语单词或者前一天的理论知识
- 上课时
  - 上课时不要在群里发信息聊天(与学习相关的问题可以发)
  - 上课时如果有随堂练习一定要积极敲代码,如果老师说结束练习,一定要立即放下手头的代码听课.(练习的时候,思考大于记忆)
  - 上课要积极反馈(回答问题,提出问题)
- 下课后
  - 要总结重难点
  - 最好每天做xmind总结
  - 课后作业认真完成
  - 如果有时间尽量写技术博客

- 软件安装：
  - 软件要安装在指定文件目录下
    - 例如我的电脑上：D:\software
  - 不要安装在系统盘之上（一般系统盘都是C盘）
- 软件删除：
  - 搜索中输入控制面板 ->应用卸载（程序）->卸载
  - 找到安装目录，将残余文件删除
- 电脑配置要求:
  - 后续项目阶段要使用虚拟机,并且需要电脑有一定的算力基础.
  - 内存:16G
  - cpu : i5 8代之后的标压处理器
  - 显卡可有可无.  但是 最好有. 

## 2.今日内容介绍

- 计算机简介（了解）
- 计算机的组成（了解）
- 编程语言的介绍（理解）
- Python介绍（理解）
- Python环境搭建（掌握）
  - 安装解释器
  - 安装pycharm
  - 创建工程
  - 软件设置
- Python基础语法（掌握）
  - 注释
  - 变量
  - 数据类型
  - 输出
  - 输入
  - 数据类型转换
  - 运算符

## 3.计算机的介绍【了解】

- 计算机就是负责数据存储和计算的电子设备
- 组成：
  - 硬件：在计算机中看得到摸得着的都是硬件
    - 运算器（CPU）：主要负责数据的处理和计算
    - 控制器（CPU）：负责分配资源（资源调度）
    - 存储器：出处数据
      - 内存储器：内存条，临时存储数据
      - 外存储器：硬盘，永久存储数据
    - 输入设备
      - 向计算机中输入信息（键盘，鼠标，麦克风）
    - 输出设备
      - 向用户输出信息（显示器，音箱）
  - 软件
    - 系统软件：
      - windows，macOS，Linux（以后的工作环境）
    - 应用软件:
      - 微信，QQ，pycharm
  - 程序员其实就是在做软件开发工作（咱们写的代码运行起来后其实就是软件或者软件的一部分）
  - 冯·诺伊曼体系（了解）
    - 输入设备将指令输入
    - 控制器分配运算资源和存储资源
    - 从外存储器中获取资源加载到内存中参与计算
    - 将计算结果通过输出设备返回给用户

![image-20220511093727668](./img/image-20220511093727668.png)

## 4.编程语言介绍【了解】

- 编程语言指的就是人和计算机之间进行交互的语言
- 阶段：
  - 低级语言（底层语言）：机器语言，汇编语言
    - 特点：极其繁琐，可读性极差，但是计算机可以直接读懂
  - 高级语言：C语言
    - 特点：要经过解释或者编译后，计算机才能读懂，但是可读性高，简单易学
  - 面向对象阶段：c++ java python Go
    - 特点：编译管理和维护，适合大型应用的开发，开发效率高，周期短，并且更加简单易学

## 5.Python语言介绍【了解】

- 创始人：吉多·范罗苏姆  中国程序员爱称其为龟叔。
- Python语言于1991年发布。
- 特点：简单易学，开源免费，丰富的库
- 缺点：执行效率较慢， 中文文献少（目前已经改善）
- 应用场景：70%以上的开发岗位都可以使用Python完成

## 6.编译型语言和解释型语言的执行流程【了解】

- 编译型语言：需要先将文件编译成指定类型的文件，再执行
  - 编译型语言，在编译过程中消耗的时间比较多，但是运行时，速度比较快
- 解释型语言：直接使用解释器，翻译一句，执行一句
  - 解释型语言，忽略了编译过程，解释时，一句句执行效率较低
- Python的执行效率比java 慢2-5倍。但是我们开发中一般体会不到。
  - 因为大型的科学计算库使用的是python调用c或者c++库进行计算,计算过程中效率与c或者c++的执行效率有关和python无关
  - 如果python进行的是互联网服务或软件的开发,更大的性能瓶颈是在网络传输中.

<img src="./img/image-20220511103021811.png" alt="image-20220511103021811"  />

## 7.Python解释器【了解】

- 解释器介绍：

  - 主要负责解析Python代码，并交给计算机去执行的工具

- 解释器的分类：

  - CPython:官方的解释器，使用C语言实现
    - 我们使用的就是CPython解释器，目前使用的是Python3.8版本
    - 开发中使用的是3.6之后的版本, 使用最多的是3.7 3.8 3.9 
  - JPython：使用java语言实现的Python解释器，效率低于CPython，但是多任务模式性能优化明显
  - icornPython：CPython解释器的升级版本，能够提供部分交互效果

- 下载Python：https://www.python.org/downloads/

- 安装：

  - 注意：一定要勾选add python 3.8 to path
  - 我们可以将其安装在默认目录下， 因为我们一般不会频繁安装删除查找该目录中的文件内容

  <img src="./img/image-20220511104302487.png" alt="image-20220511104302487" />

- 验证是否安装完成

  - win + r ->在文本框中输入cmd->点击回车->在终端窗口中输入python，能够看到Python版本即为安装成功。
- 卸载：
  - win+r->control->点击回车->卸载程序->右键卸载
  - 查看指定目录下我们安装的Python文件夹是否依然存在，如果存在，删除即可



## 8.Pycharm的介绍【了解】

- Pycharm是一个Python开发的工具，是一个集成化开发环境（IDE）
- IDE：将点吗的编写，编译，运行，调试等一系列集中在一起的运用软件。
- 下载：https://www.jetbrains.com/pycharm/
- 版本：
  - 专业版：需要收费，但是我们可以免费试用30天
  - 社区版（教育版）不需要收费，可以免费使用，功能上有一些缺失
  - 注意：==我们在AI学习中使用教育版即可==

<img src="./img/image-20220511111348666.png" alt="image-20220511111348666" />

- 安装：只要打开安装包一直下一步即可
  - 除了安装路径和下图所示内容全部选择默认设置即可

<img src="./img/image-20220511111509373.png" alt="image-20220511111509373" />



- 启动：第一次启动，全都使用默认配置直接下一步，直到进入项目创建界面即可。

- 进入下图界面，pycharm即安装完成。

  ![image-20220511111828749](./img/image-20220511111828749.png)

## 9.创建一个Python工程【了解】

- 点击newProject

- 指定工程的存储位置，和我们要使用的解释器版本

  <img src="./img/image-20220511112920381.png" alt="image-20220511112920381" style="zoom: 33%;" />

  - 注意：有些同学的解释器列表为空，此时需要点击解释器旁边你的三个点`...`
  - 如果电脑为windows，直接找到python.exe文件，进行绑定即可

  <img src="./img/image-20220511113254086.png" alt="image-20220511113254086" style="zoom:33%;" />

- 点击create进行创建
- 在目录中右键创建一个新的文件

<img src="./img/image-20220511113448520.png" alt="image-20220511113448520" style="zoom:33%;" />



- 可以在代码区书写代码右键->run执行代码

  <img src="./img/image-20220511113722854.png" alt="image-20220511113722854" style="zoom: 33%;" />

## 10.pycharm的基础配置【了解】

- 配置pycharm在windows中直接点击菜单栏中的File->settings即可唤出设置菜单，Mac中是点击pycharm->preference

- 基本配置如下：

  - 配置字体大小

    <img src="./img/image-20220511115057232.png" alt="image-20220511115057232" style="zoom:33%;" />

  - 配置背景主题颜色

    <img src="./img/image-20220511115200582.png" alt="image-20220511115200582" style="zoom:33%;" />

  - 配置码表（编码集）

    <img src="./img/image-20220511115328840.png" alt="image-20220511115328840" style="zoom:33%;" />

- 代码提示的时候忽略大小写 

  <img src="./img/image-20220511115503255.png" alt="image-20220511115503255" style="zoom:33%;" />

## 11.注释【掌握】

```python
# 注释的作用: 对于代码起到解释说明的作用,不参与程序的运行

# 程序员最讨厌两种人: 不写注释的人, 要求我写注释的人

# 单行注释
# 单行注释对于一行内容起解释说明作用, 换行后注释效果消失
print('单行注释可以放置在代码末尾')  # 单行注释

'''多行注释
多行注释内部可以随意换行,
注释效果依然存在
'''

"""
多行注释,既可以使用单引号,又可以使用双引号,只要引号是三对即可
"""

# SyntaxError: invalid syntax  语法错误
# print('多行注释不能放置在代码末尾') '''多行注释'''


'''
总结:
单行注释: 
1. 使用 # 注释内容,只对#所在的行生效
2. 可以使用在代码末尾
3. 有快捷键 ctrl + /

多行注释:
1. 使用三对引号进行注释,在引号内部可以随意换行
2. 可以使用单引号和双引号,作用完全相同
3. 多行注释不能写在代码末尾
4. 多行注释没有快捷键,如果对于多行数据内容进行ctrl + / 则对于每一行数据进行单行注释
'''

注意: 所有的符号必须使用英文标点.否则报错
```

==小技巧：一般的输入法可以设置中文下使用英文标点==   

## 12.两个小问题【理解】

- 右键代码run的时候出现弹窗

  方案一：

  <img src="./img/image-20220511145803802.png" alt="image-20220511145803802"  />

  方案二：

  <img src="./img/image-20220511145927820.png" alt="image-20220511145927820" />

- 关于pycharm汉化问题

  <img src="./img/image-20220511150203130.png" alt="image-20220511150203130" style="zoom:33%;" />

  不建议大家进行汉化：原因是你如果汉化了以后在开发中很难给别人调试bug，也错过了一个学英语的机会。

- 只有创建的是.py结尾的文件,才能在pycharm中正常执行

  ![1690430246576](./images/1690430246576.png)

## 13.Python中的变量【掌握】

- 变量的三个特性
  - 容器：用来储存数据的容器
  - 临时：存储在内存当中，程序结束后或重启计算机等情况都可以销毁变量
  - 可变：在运行过程中可以修改变量的值

```python
"""
举例: 牛奶 可乐的案例
我们的数据是在内存中开辟一小块空间保存数据,如果我们想使用这个数据,就需要找到数据的内存地址
内存地址是二进制数据,非常难以记忆,所以我们使用变量名来表示数据,方便调用.

有两个杯子, 一杯是可乐, 一杯是 牛奶,  我们需要将牛奶喝可乐互换.
如果 想要互换我们需要找一个空杯子
1.将牛奶倒入空杯子
2.将可乐倒入原来是牛奶,现在是空杯子的杯子内
3.将牛奶倒入原来是可乐现在是空杯子的杯子内.


上边的表述形式,关系混乱
在开发中我们会这样做
A = 可乐   B = 牛奶  C = 空
1. A 倒入 C
2. B 倒入 A
3. C 倒入 B
交换完成

所以我们在开发中喜欢使用变量来保存和调用数据
"""

# 变量的定义格式: 变量名 = 变量值
name = '小明'
age = 18
gender = '男'
# 变量的调用格式: 直接使用变量名即可调用变量中的数据
print(name)
print(age)
print(gender)
# 在程序运行过程中还可以修改变量的值
age = 19
print(age)
```

## 14.变量的数据类型【掌握】

```python
"""
# 为什么变量要有不同的数据类型?
#变量保存数据
1.不同的数据类型在不同的存储区域
2.不同的数据类型使用的数据结构不同
3.不同的数据类型占用的空间大小不同
4.不同的数据类型具备的功能不同

分类:
    整型: 保存的是整数, int
    浮点型: 保存的是小数, float
    布尔型: 表示是或者否  True False  , bool
    字符串类型: 表示多个字符的组合, str
    列表: list(后边会讲)
    元组: tuple(后边会讲)
    字典: dict(后边会讲)
    集合: set(后边会讲)

使用type函数可以查询数据的数据类型
"""
# 整型
int1 = 10
print(int1)  # 10 数据的值
print(type(int1))  # <class 'int'> 数据类型

# 浮点型
float1 = 12.1
print(float1)  # 12.1
print(type(float1))  # <class 'float'>

# 布尔型
bool1 = False
print(bool1)  # False
print(type(bool1))  # <class 'bool'>

# 字符串类型
str1 = 'abc'
print(str1)  # abc
print(type(str1))  # <class 'str'>

# 思考:说出以下数据的数据类型
# 1. '123'  只要使用引号包裹起来的数据都是字符串数据
print('123')  # 123
print(type('123'))  # <class 'str'>
# 2. float1 = 10 所有的变量名,都不能决定数据类型是什么
float1 = 10
print(float1) # 10
print(type(float1)) # <class 'int'>
# 3. name
# 如果在字符组合外部不书写引号,则该数据为变量名
# 变量需要先定义再调用,如果该变量名没有被定义则会报错
# NameError: name 'name' is not defined
# name = 123
# print(name)
# print('name')
# print(type(name))
```

## 15.标识符和关键字【理解】

```python
# 标识符: 程序员自己定义的,有特殊功能的字符组合
# 关键字: 系统或者python定义的有特殊功能的字符组合, 程序员定义标识符不能使用关键字

# 注意: 关键字不用背,因为我们书写在pycharm中共会变色
bool1 = False

'''
标识符的命名规则:
1. 只能由字母数字,下划线组成
2. 不能以数字开头
3. 不能使用关键字
4. 严格区分大小写
'''
# 1. 只能由字母数字,下划线组成
a123___456 = 12
print(a123___456)
# a123_$_456 = 13 # SyntaxError: invalid syntax
# a123_ _456 = 13 # SyntaxError: invalid syntax
# a123_传智_456 = 13 # SyntaxError: invalid syntax
# print(a123_传智_456) # 如果智商正常不要使用中文

# 2. 不能以数字开头
# 123a = 123
# print(123a)

# 3. 不能使用关键字
# False = 123
# print(False)

# 4. 严格区分大小写
# NameError: name 'A' is not defined
# a = 10
# print(A)

'''
# 标识符的命名规范:
# 大驼峰命名法: 每个单词首字母大写
# Python中的类名使用大驼峰命名法
StudentNum

# 小驼峰命名法: 除了首字母外其余单词首字母大写
studentNum

# 下划线分隔法: 单词中间用下划线分隔开
# Python中的变量名 函数名 方法名 文件名等 使用下划线分隔法
student_num

标识符要做到见名知意,增强代码的可读性
name  age  gender= '今天天气好晴朗'
'''
# __ = 1
# print(__)
#
# ___________ = 12
# ____________ = 15

# 注意: 我们学习过程中,文件名没有遵循标识符命名规则,因为按序编写文件方便大家查找复习
# 但是在开发中,所有的python文件名称必须遵循标识符的命名规则,且不能包含中文信息

```

## 16.输出【掌握】

```python
# 输出: 使用计算机向用户返回数据叫做输出
# 输出函数  :  print

# 普通数据输出
print(123)  # 输出数值
print('窗前明月光')  # 输出字符串
print(1 + 3)  # 输出计算式
print('传智', '教育', 520)  # 一次输出多个数据内容

# 输出格式化后的字符串
# 记住: 格式化和print没有任何关系,他只负责输出
# 格式化字符串的格式: '要输出的字符信息 %占位符' % 变量  此时就可以将变量与字符串格式化拼接到一起

# 输出小明今年13岁了
print('小明今年13岁了')
# 过了一年,小明涨了一岁
print('小明今年14岁了')

print('----------------')
# 此后每年输出年龄都需要修改代码,不方便,所以我们希望可以使用变量存储学员年龄,当年龄变化时输出内容也发生变化
age = 13
print('小明今年%d岁了' % age)
age = 14
print('小明今年%d岁了' % age)

# 思考: 为什么说格式化和print没有关系,是字符串的功能
str1 = '小李今年%d岁了' % age
print('程序结束')

# 多占位符的格式化方式
name = '张强'
age = 22
gender = '女'

# 格式化输出,将数据输出到控制台上,输出"学员的名称是张强, 年龄22岁, 性别为女"
# 多占位符格式化字符串方式: '要输入的字符串信息, %占位符1, %占位符2....' % (变量1, 变量2 ....)

# TypeError: %d format: a number is required, not str
# 占位符一定要数据类型准确, %d 接收整型数据  %f 接收浮点型数据 %s 接收字符串类型数据
# print('学员的名称是%s, 年龄%d岁, 性别为%s' % name, age, gender)
# TypeError: not enough arguments for format string
# 在格式化字符串时,百分号后只能识别一个数据,所以如果有多个变量需要使用括号括起来
print('学员的名称是%s, 年龄%d岁, 性别为%s' % (name, age, gender))  # 学员的名称是张强, 年龄22岁, 性别为女

# 注意: 多占位符格式化字符串时,要注意:
# 1. 占位符的数量和变量的数量必须保持一致,不能多,也不能少
# 2. 占位符与变量顺序要依次对应,不能交叉赋值也不能跳跃赋值
# 3. 占位符与变量一定要数据类型完全对应
# 4. 在格式化字符串时,百分号后只能识别一个数据,所以如果有多个变量需要使用括号括起来


# 练习:
# 定义三个变量  自己的姓名(str) 年龄(int) 身高(float)
# 使用格式化输出的方式,输出自己的个人信息
```

- 使用占位符完成精度处理

```python
# 练习:
# 定义三个变量  自己的姓名(str) 年龄(int) 身高(float)
# 使用格式化输出的方式,输出自己的个人信息
name = '小强'
age = 18
height = 1.76
stu_NO = 12111

# 使用格式化拼接字符串的方式,可以进行精度处理
# %f: 浮点型可以保留n位小数  例如%.nf 保留n位小数
    # 保留两位小数时会进行四舍五入
# %d: 可以占n为不足位用空格或者0补齐, 例如%0nd
    # 如果不足则使用0补齐,如果查出n位则原样显示

# 我的名字是小强, 我的年龄是18岁, 我的身高是1.760000米,我的学号是12
print('我的名字是%s, 我的年龄是%d岁, 我的身高是%f米,我的学号是%d' % (name, age, height, stu_NO))
# 我的名字是小强, 我的年龄是18岁, 我的身高是1.76米,我的学号是012
print('我的名字是%s, 我的年龄是%d岁, 我的身高是%.2f米,我的学号是%03d' % (name, age, height, stu_NO))
# 我的名字是小强, 我的年龄是18岁, 我的身高是1.8米,我的学号是12111
print('我的名字是%s, 我的年龄是%d岁, 我的身高是%.1f米,我的学号是%03d' % (name, age, height, stu_NO))
```

## 17.详解输出函数【了解】

```python
# print函数中有一些参数
# sep 多个数据之间的分隔符, 默认使用空格进行分隔
# end 打印结束之后的结束符,默认使用 换行符

# 需求1: 一次打印多个学员的姓名,并且在学员名称之间使用逗号进行分隔
print('小明', '小刚', '小丽')  # 同时打印,但是间隔符默认为空格
print('宝强', '羽凡', '乃亮', sep=',')  # 一次打印,中间用逗号隔开

# 需求2: 打印一首诗, 每次打印完成后,不使用换行符,而是使用,分隔
print('飒爽英姿五尺枪', end=',')
print('曙光初照演兵场', end=',')
print('中华儿女多奇志', end=',')
print('不爱红妆爱武装')

# 特殊符号: \n(换行符) \t(制表位,就是为了对齐文字,可以理解为多个空格)  按tab键和其效果一致
print('小明\n小丽')
print('小明\t小丽')
```

## 18.输入【掌握】

```python
# 输入: 就是人类向计算机中输入数据(记住我们输入的数据一定是可以被保存,可以被使用的,否则没有意义)
# 输入数据的函数是 input
# input是一个阻塞函数, 在运行后会阻塞到input函数的调用位置,等待数据的输入.如果没有输入代码将不会向下继续执行
# 思考: input 在开发中时给谁看的呢? 程序员
# input()

# input函数中可以添加提示信息, 也就是在让程序员输入数据前提示要输入的内容
# input('请输入您的密码:')

# 可以使用变量接受input输入进来的数据信息
password = input('请输入您的密码:')

print('密码是:%s' % password) # 密码是:abc

# 注意: 我们input函数中书写的内容仅仅是提示信息,真正变量获取的是用户从控制台输入的信息
```

- 输入的练习

```python
# 练习
# 需求： 在键盘上输入一个学员的基本信息  姓名 年龄  身高  学号
# 对于该学员的基本信息进行格式化输出，拼接完成后，输出到控制台上

name = input('请输入您的姓名: ')
age = input('请输入您的年龄: ')
height = input('请输入您的身高: ')
stu_NO = input('请输入您的学号: ')

print(type(name), type(age), type(height), type(stu_NO))

# 输出学员的基本信息
# 快速格式化代码的快捷键 ctrl + alt + L
# TypeError: %d format: a number is required, not str
# 注意: input接收的所有数据都是字符串数据类型 需要使用%s进行接收
# print('该学员的姓名是%s, 年龄是%d岁, 身高是%f米, 学号是%d' % (name, age, height, stu_NO))
print('该学员的姓名是%s, 年龄是%s岁, 身高是%s米, 学号是%s' % (name, age, height, stu_NO))
```

## 19.数据类型转换【理解】

```python
# 为什么要进行数据类型转换:
# 不同的数据有不用的功能, 比如字符串类型数据没有办法进行数学运算 除法减法等.
# 不同数据类型的数据没有办法进行数学运算 比如 字符串数据类型无法加1

#  数据类型转换的方式,就是给数据穿一层衣服
'''
数据类型转换的格式:
将数据转换为int类型数据: int(值或变量)
将数据转换为float类型数据: float(值或变量)
将数据转换为str类型数据: str(值或变量)

注意:被转换的数据一定是可以被转换的否则会报错
'''


# 有三个变量 price 、 weight 、 money ，输出 苹果单价 9.00 元／⽄，购买了 5.00 ⽄，需要⽀付 45.00 元
# 需求: 商品单价和购买重量需要从键盘进行键入, 最终的总价是计算得出的,并输出

# 创建三个变量,其中weight 和 price 需要手动录入
price = input('请输入苹果的单价:(元/斤)')
weight = input('请输入购买苹果的重量:(斤)')
# TypeError: can't multiply sequence by non-int of type 'str'
# 非int类型数据不能和字符串类型数据相乘
total_price = float(price) * float(weight)

print('苹果单价为%s元/斤, 购买了%s斤, 需支付%.2f元' % (price, weight, total_price))

print('------------------------------')

# 可以将str数据类型转换为int类型
str1 = '11'
int1 = int(str1)
print(type(int1))
print(int1)

# ValueError: invalid literal for int() with base 10: 'aa'
# 数据类型转换过程中不成立则报错
# str2 = 'aa'
# int2 = int(str2)
# print(type(int2))
# print(int2)
```

## 文件共享

- 安装共享文件的软件

- 安装完成后点击加号，输入密钥

  ![image-20220511121552800](./img/image-20220511121552800.png)

- 输入密钥，点击下一步 选择一个新建的空文件夹
- 点击确定就可以开始同步数据了
- 注意事项：要选择空文件夹 ，因为我给你的是只读密钥，所以你的文件夹中如果有和我的文件中不一样的地方，会强行删除，并且不会放入回收站。

注意事项:

1. 选择首选项勾选覆盖已修改的文件,如果不勾选你打开或修改过该文件后将不再继续同步

2. 取消勾选将在文件夹中存储已删除的文件

   - 如果已经有归档文件了可以删除,归档文件位置 在下图所示目录下所有的文件都可以删除
     - ![1690426810377](./images/1690426810377.png)

   ![1690426732133](./images/1690426732133.png)

### 作业

1. 完成课程资料中day01的作业内容
2. 将今天的内容总结一份xmind
3. 将上述内容做完后提交到作业共享文件夹下