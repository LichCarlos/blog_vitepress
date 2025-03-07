# 面向对象编程（OOP）详解

面向对象编程是一种通过“对象”来组织代码的编程范式，其核心思想是将数据和行为封装在一起。OOP的三大特性为：**封装**、**继承**和**多态**。

## 核心概念

### 1. 封装（Encapsulation）

#### 定义
封装是指将数据（属性）和行为（方法）绑定在一起，并隐藏内部实现细节，仅暴露必要的接口供外部访问。

#### 核心思想
- **隐藏实现细节**：使用`private`修饰符保护属性。
- **提供公共接口**：通过`public`的`getter`和`setter`方法访问或修改属性。

#### 示例代码
```java
public class Student {
    private String name;
    private int age;

    public String getName() { return name; }
    public void setName(String name) {
        if (name == null || name.isEmpty()) throw new IllegalArgumentException("姓名不能为空");
        this.name = name;
    }

    public int getAge() { return age; }
    public void setAge(int age) {
        if (age < 0 || age > 120) throw new IllegalArgumentException("年龄不合法");
        this.age = age;
    }
}
```

#### 优点
- 提升安全性
- 增加灵活性
- 改善易维护性

### 2. 继承（Inheritance）

#### 定义
继承允许一个类（子类）基于另一个类（父类）创建，复用父类的属性和方法，并能够扩展或重写这些行为。

#### 核心思想
- 代码复用
- 扩展功能
- 方法重写

#### 示例代码
```java
public class Animal {
    private String name;
    public Animal(String name) { this.name = name; }
    public void eat() { System.out.println(name + " is eating."); }
}

public class Dog extends Animal {
    public Dog(String name) { super(name); }
    @Override public void eat() { System.out.println("Dog " + getName() + " is eating bones."); }
    public void bark() { System.out.println("Woof! Woof!"); }
}
```

#### 优点
- 减少代码冗余
- 提高可扩展性
- 支持多态性

### 3. 多态（Polymorphism）

#### 定义
多态指同一个方法在不同对象中具有不同的实现方式，分为编译时多态（方法重载）和运行时多态（方法重写）。

#### 核心思想
- 方法重写
- 向上转型

#### 示例代码
```java
public class Animal {
    public void makeSound() { System.out.println("Animal is making a sound."); }
}

public class Dog extends Animal {
    @Override public void makeSound() { System.out.println("Dog is barking."); }
}

public class Cat extends Animal {
    @Override public void makeSound() { System.out.println("Cat is meowing."); }
}

public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        Animal myCat = new Cat();

        myDog.makeSound(); // 输出：Dog is barking.
        myCat.makeSound(); // 输出：Cat is meowing.
    }
}
```

#### 优点
- 增强灵活性
- 提高可扩展性
- 简化代码结构

## 面向对象设计原则

1. **单一职责原则（SRP）**：类应只负责一项职责。
2. **开闭原则（OCP）**：对扩展开放，对修改关闭。
3. **里氏替换原则（LSP）**：子类应当能够替换父类而不会影响程序的功能。
4. **依赖倒置原则（DIP）**：高层模块不应依赖低层模块，二者都应依赖于抽象。
5. **接口隔离原则（ISP）**：客户端不应被强迫依赖它不需要的接口。
