---
title: Java-SE学习笔记2
index_img: /img/bg/3.jpg
banner_img: /img/bg/3.jpg
author: XiaoSu
categories: Java SE
tags: Note
---
##### 类与对象

> 面向对象三大特征：封装、继承、多态
>
> 方法就是一种封装；private关键字也是一种封装
>
> 间接访问private成员变量，就是定义一对setter/getter方法
>
> boolean类型的getter方法不能写get111，要写is111
>
> this.成员变量名，访问本类中的成员变量
>
> 构造方法：
>
> ![](/img/cr/22.png)
>
> 即使全参构造方法中已经存在this.111 = 111;依然需要setter方法，方便后续修改
>
> 标准的类（Java bean）：所有成员变量都用的private修饰、无参方法、全参方法、每个成员变量都要用getter/setter修饰
>
> 构造方法、getter/setter自动补全：Code->Generate

##### Scanner、匿名对象、Random、Arraylist

> 合理使用api文档，只有java.lang包下的内容不需要导包，其他都需要
>
> 引用类型的一般使用步骤：1.导包：地址.类名2.创建：类名称 对象名 = new 类名称();3.使用：对象名.成员方法名
>
> ![](/img/cr/23.png)
>
> ```java
> Scanner sc = new Scanner(System.in);
> int num = sc.nextInt();
> String str = sc.next();
> ```
>
> 匿名对象：只使用唯一的一次
>
> ```java
> new Person().name = "111";
> new Person().showName();
> ```
>
> Random:.nextint()**整个int范围**；nextint(111)**0(包括)到111(不包括)随机生成int数字**
>
> 
>
> 数组长度不可改变，Arraylist长度可以改变
>
> ArrayList<E> **<E>代表泛型，且只能是引用类型，不能是基本类型**
>
> ```java
> ArrayList<String> list = new ArrayList<>();
> ```
>
> 对于ArrayList，直接打印得到的不是地址，而是内容。如果内容为空，得到的是空的中括号：[]
>
> list.add(111)添加元素；list.get(111)查看元素；list.remove移除元素；list.size()获取长度
>
> 想要存储基本类型就要使用包装类，包装类名称为首字母大写(如byte->Byte,特殊：int->Integer;char->Character)

##### 字符串

> 字符串是常量，他们的值在创建后不能更改，所以字符串可以共享使用
>
> 字符串效果上是char[]字符数组，但是底层原理是一个byte[]字节数组
>
> ![](/img/cr/24.png)
>
> 注意：直接写上双引号，就是字符串对象（jvm帮忙new了）
>
> 字符串常量池：程序中只有直接写上双引号的字符串，才放在字符串常量池中
>
> 对于基本类型：==进行数值的比较
>
> 对于引用类型：==进行地址值的比较
>
> ![](/img/cr/25.png)
>
> 
>
> 要进行字符串内容的比较，使用函数：equals(Object obj)参数可以是任何对象，但只有参数是一个字符串且内容相同时才会给false。
>
> str1.equals(str2)：str1不能为null值，会造成空指针异常；str2可以，只会warning不会报错。因此str1最好为常量，str2为变量
>
> equalsIgnoreCase(String str)忽略大小写，进行内容比较
>
> ![](/img/cr/26.png)
>
> **substring**: substring(int index);  substring(int begin,int end)(**(begin,end]**)
>
> 数字符索引值，从0开始，一个右箭头加一，切割想要的单词时，按住shift键右箭头继续加一
>
> ![](/img/cr/27.png)
>
> 切割字符串：split(String regex)  切割为一个字符串数组
>
> 如果以"."切割，必须以"\\."切割，否则切割不成功

##### static关键字

> 使用static关键字，内容属于类，凡本类对象都共享一份
>
> 修饰成员变量如共同教室，idCoounter
>
> ```java
> 	private int id;
>     private static int idCounter = 0;
> 
>     public Student(111) {
>         111
>         id = ++idCounter;
>     }
> 
>     public Student() {
>         id = ++idCounter;
>     }
> ```
>
> 普通方法可以用*对象名.方法名*使用，静态方法还可以使用*类名.静态方法名*使用(推荐)
>
> ![](/img/cr/28.png)
>
> ![](/img/cr/29.png)
>
> 静态代码块：(静态内容总是优先于非静态内容)(第一次使用本类时执行唯一的一次)
>
> 常用用图：一次性地对静态成员变量进行赋值
>
> ```java
> public class 类名称{
> 	static{
> 		111
> 	}
> }
> ```
