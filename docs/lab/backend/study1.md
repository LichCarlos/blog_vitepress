# Java学习路线（从入门到成绩管理系统项目）

---

## **第一阶段：Java基础（2周）**
**目标**：掌握基础语法与环境搭建  
✅ **核心内容**  
- JDK 17 + IntelliJ IDEA 配置  
- 数据类型（基本类型/包装类/类型转换）  
- 流程控制（if-else/switch表达式/循环）  
- 数组与字符串操作（内存模型分析）  
- 方法重载与递归调用  

📚 **学习资料**  
- 书籍：《Java核心技术 卷I》（第3-5章）  
- 视频：[B站-宋红康零基础Java](https://www.bilibili.com)  
- 工具：[JShell](https://docs.oracle.com/javase/9/jshell/) 快速测试代码片段  

---

## **第二阶段：面向对象编程（2周）**
**目标**：掌握OOP思想与异常处理  
✅ **核心内容**  
- 类与对象（构造方法链/this关键字）  
- 封装/继承/多态（方法重写规则）  
- 接口与抽象类（默认方法/模板模式）  
- 自定义异常（如`InvalidScoreException`）  
- 实战：银行账户管理系统（控制台）  

📚 **学习资料**  
- 书籍：《Head First Java》（第4-7章）  
- 案例：[GitHub-OOP学生管理系统](https://github.com/search?q=java+oop+project)  
- 工具：[Java VisualVM](https://visualvm.github.io) 分析对象内存  

---

## **第三阶段：高级特性与IO（2周）**
**目标**：掌握集合框架与文件操作  
✅ **核心内容**  
- 集合源码（ArrayList扩容/HashMap红黑树）  
- 泛型与Lambda表达式（函数式接口）  
- 多线程（ThreadPoolExecutor/synchronized）  
- IO流（字节流/字符流/Apache POI操作Excel）  
- 实战：多线程文件下载器  

📚 **学习资料**  
- 书籍：《Effective Java》（第5-7章）  
- 视频：[B站-黑马程序员IO实战](https://www.bilibili.com)  
- 工具：[JUnit 5](https://junit.org/junit5/) 单元测试  

---

## **第四阶段：MySQL与JDBC（1.5周）**
**目标**：掌握数据库开发与优化  
✅ **核心内容**  
- SQL语法（JOIN查询/事务ACID特性）  
- 索引优化（EXPLAIN执行计划分析）  
- JDBC编程（PreparedStatement防注入）  
- 连接池配置（HikariCP参数调优）  
- 实战：转账事务管理系统  

📚 **学习资料**  
- 书籍：《SQL必知必会》（第4-8章）  
- 练习：[LeetCode数据库题库](https://leetcode.cn/problemset/database/)  
- 工具：[Flyway](https://flywaydb.org) 数据库版本管理  

---

## **项目实战：成绩管理系统（2周）**
✅ **技术栈**  
```mermaid
graph TD
    A[控制台交互] --> B[JDBC数据存储]
    B --> C[Apache POI导入Excel]
    C --> D[成绩排序算法]