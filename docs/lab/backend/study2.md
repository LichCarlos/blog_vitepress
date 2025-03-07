# 从Java项目到Spring Boot的进阶学习建议

---

## **学习目标**
1. 掌握Spring Boot核心开发模式  
2. 将原有控制台项目升级为Web应用  
3. 理解企业级开发规范与架构设计  

---

## **技术衔接点**
| 原技术           | 新技术                 | 升级目标                            |
|------------------|-----------------------|-------------------------------------|
| 原生JDBC          | Spring Data JPA       | 简化数据库操作，减少70%的SQL编写量   |
| 控制台交互        | RESTful API + Vue前端 | 实现前后端分离架构                  |
| 集合存储          | MySQL + Redis缓存     | 提升数据访问性能                    |
| 手动事务管理      | Spring声明式事务      | 通过`@Transactional`注解自动管理事务 |

---

## **学习路线与核心内容**

### **第一阶段：Spring Boot基础（2周）**
#### **重点内容**
1. **IoC与AOP**  
   - 依赖注入（`@Autowired`）  
   - 切面编程实现日志记录（`@Around`）  

2. **Web开发基础**  
   - RESTful API设计规范（`@RestController`）  
   - 参数校验（`@Valid` + Hibernate Validator）  

3. **数据访问**  
   - Spring Data JPA快速CRUD（继承`JpaRepository`）  
   - 动态查询（`JpaSpecificationExecutor`）  

#### **实战任务**
- 将成绩管理系统的JDBC替换为Spring Data JPA  
- 开发成绩查询API：`GET /api/scores?studentId=1001`  

---

### **第二阶段：企业级功能扩展（3周）**
#### **重点内容**
1. **安全与权限**  
   - Spring Security实现RBAC权限模型  
   - JWT令牌认证（`jjwt`库）  

2. **中间件集成**  
   - Redis缓存成绩排名数据（`RedisTemplate`）  
   - RabbitMQ异步通知成绩更新  

3. **API文档与测试**  
   - Swagger3自动生成接口文档  
   - 使用Postman进行接口测试  

#### **实战任务**
- 为系统添加教师角色权限控制  
- 实现成绩变更时通过邮件/短信通知（异步消息队列）  

---

### **第三阶段：项目升级与部署（2周）**
#### **重点内容**
1. **前端整合**  
   - 使用Vue3 + Element Plus构建管理界面  
   - Axios调用后端API  

2. **容器化部署**  
   - Docker打包Spring Boot应用（多阶段构建）  
   - Docker Compose编排MySQL/Redis服务  

3. **监控与优化**  
   - Spring Boot Actuator暴露健康检查端点  
   - Prometheus + Grafana监控系统性能  

#### **实战任务**
- 将原有控制台系统升级为Web版（[示例效果](https://example.com)）  
- 部署到云服务器（阿里云/腾讯云）并配置HTTPS  

---

## **学习资源推荐**
| 类型       | 推荐内容                                                                 |
|------------|--------------------------------------------------------------------------|
| **官方文档** | [Spring Boot官方文档](https://spring.io/projects/spring-boot)           |
| **书籍**   | 《Spring实战（第6版）》《Spring Boot编程思想》                          |
| **视频**   | B站[雷丰阳SpringBoot2核心原理](https://www.bilibili.com/video/BV19K4y1L7MT) |
| **项目**   | [mall-learning](https://github.com/macrozheng/mall-learning)（电商系统）|

---

## **关键代码示例**
### **1. Spring Data JPA接口定义**
```java
public interface ScoreRepository extends JpaRepository<Score, Long> {
    // 根据学号查询成绩
    List<Score> findByStudentId(String studentId);
    
    // 自定义JPQL查询
    @Query("SELECT s FROM Score s WHERE s.totalScore > :minScore")
    List<Score> findHighScores(@Param("minScore") int minScore);
}