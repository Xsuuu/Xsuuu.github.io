---
title: Java-SE学习笔记
index_img: /img/bg/2.jpg
banner_img: /img/bg/2.jpg
author: XiaoSu
categories: Java SE
tags: Note
---
##### 十进制和二进制之间的转换

> ![](/img/cr/2.png)
>
> HEX->十六进制；DEC->十进制；OCT->八进制；BIN->二进制

##### 计算机存储单位：

> ![](/img/cr/4.png)
>
> ![](/img/cr/1.png)

##### JDK、JRE和JVM之间的关系:

> ![](/img/cr/3.png)

##### HelloWord代码的编译运行：

> ```cmd
> javac HelloWorld.java
> java HelloWorld
> ```
>
> ```java
> public class HelloWorld {
> 	public static void main(String[] args) {
> 		System.out.println("Hello World!!!");
> 	}
> }
> ```

##### 关键字、标识符和常量：

> ![](/img/cr/8.png)
>
> ![](/img/cr/9.png)
>
> * 两个单引号之间不能什么都没有，也不能有两个及以上个字符
>
> * 空常量不能直接打印输出

##### 数据类型：

> ![](/img/cr/10.png)
>
> ![](/img/cr/11.png)

![](/img/cr/12.png)

##### 类型转换

> 自动和强制，自动类型转换必须是范围小的转换成范围大的
>
> 强制类型转换一般不推荐使用，可能会发生精度损失和数据溢出
>
> byte/short/char在进行运算时，先变成int类型，再进行运算
>
> boolean类型不能发送数据类型转换

##### ascii码

> 48->0;65->A;97->a
>
> ![](/img/cr/13.png)

##### 运算

> 运算时类型不统一时，结果会是数据类型范围大的那一个（字符串和任何数据类型连接都会变成字符串）
>
> 对于字符串，+号相当于拼接符
>
> 只有变量才能自增自减和赋值，常量不行
>
> 三元运算翻译必须两个表达式都符合左侧数据类型的要求
>
> 三元运算符的结果必须被使用
>
> 对于byte/short/char类型，如果右侧赋值的数值没有超过范围，javac编译器自动强制转换（byte）/（short）/（char）
>
> 赋值时右侧表达式全是常量，javac编译器直接得到结果，存储结果而非表达式

##### 结构

> ![](/img/cr/14.png)
>
> do while循环的while后的分号不能忘记
>
> 死循环标准格式：while(true){}

##### IDEA

> ![](/img/cr/15.png)
>
> shift+f6  相同内容同时修改
>
> psvm、5.fori、array.fori

##### 方法

> ```java
> public static int sum(int a, int b){}
> ```
>
> 方法重载：方法名称一样，参数列表不一样（个数、类型、多类型顺序）（与方法返回值类型和参数名称无关）

##### 数组

> ##### 数组的定义
>
> > 类型统一且长度不可变
> >
> > 动态初始化数组（创建数组时直接指定数据个数多少）
> >
> > ```java
> > int[] arrayA = new int[300];
> > ```
> >
> > 静态初始化
> >
> > ```java
> > String[] arrayB = new String[]{"d", "sddf", "gdd"};
> > int[] arrayC = {1,2,3,4}
> > ```
> >
> > 动态初始化数组可以拆分成两步，而动态初始化不行
> >
> > ```java
> > int[] arrayA;
> > arrayA = new int[300];
> > ```
> >
> > 
> >
> > 直接打印数组，得到的是数组对应的内存地址哈希值
> >
> > ![](/img/cr/16.png)
>
> ##### 数组的内存
>
> > ![](/img/cr/17.png)
> >
> > ![](/img/cr/18.png)
> >
> > ![](/img/cr/19.png)
> >
> > 所以叫引用类型
>
> ##### 数组异常
>
> > 如果访问数组元素的时候，索引编号并不存在，那么将会发生
> >
> > 数组索引越界异常
> >
> > ArrayIndexOutOfBoundsException
> >
> > 数组没有进行new初始化，就会发生
> >
> > 空指针异常
> >
> > NullPointerException
>
> ##### 数组函数使用
>
> > 获取数组的长度：array.length
> >
> > 遍历输出数组所有的值
> >
> > Arrays.toString()数组转换为字符串

##### 类与对象

> 成员变量直接定义在类中，方法外面
>
> 成员方法不要写static关键字
>
> 类名称 对象名 = new 类名称（）；
>
> ```java
> Student stu = new Student();
> ```
>
> ![](/img/cr/20.png)
>
> 注意：方法并不是直接存放在堆里面，堆里面存放的只是堆在方法区的内存地址
>
> 当一个对象作为参数，传递到方法中时，实际上传递进去的是对象的地址值
>
> 对象作为返回值时，返回的值也是对象的地址值
>
> ![](/img/cr/21.png)

