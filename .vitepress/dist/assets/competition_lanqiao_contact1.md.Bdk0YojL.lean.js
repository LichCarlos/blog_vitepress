import{_ as s,c as a,a2 as p,o as l}from"./chunks/framework.w7Qyxd7T.js";const o=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"competition/lanqiao/contact1.md","filePath":"competition/lanqiao/contact1.md","lastUpdated":null}'),e={name:"competition/lanqiao/contact1.md"};function i(r,n,c,t,b,u){return l(),a("div",null,n[0]||(n[0]=[p(`<h2 id="_16届蓝桥杯备赛周练1" tabindex="-1">16届蓝桥杯备赛周练1 <a class="header-anchor" href="#_16届蓝桥杯备赛周练1" aria-label="Permalink to &quot;16届蓝桥杯备赛周练1&quot;">​</a></h2><p><strong><span style="font-size:20px;">移动创新实验室</span></strong></p><ul><li><strong>资料来源：<span style="font-size:18px;">柴浩天</span></strong></li><li><strong>编辑者：<span style="font-size:18px;">柴浩天</span></strong></li><li><strong>如有问题: <span style="font-size:18px;">请在下方评论区留言或在工作日工作时间钉钉群提问</span></strong></li></ul><h2 id="学习大纲" tabindex="-1">学习大纲 <a class="header-anchor" href="#学习大纲" aria-label="Permalink to &quot;学习大纲&quot;">​</a></h2><ol><li><p><strong>习题一：实现基数排序</strong></p><ul><li>实现基数排序算法。</li></ul></li><li><p><strong>习题二：最大化股票交易的利润</strong></p><ul><li>实现一个算法寻找最大化股票交易利润的策略。</li></ul></li><li><p><strong>习题三：求解台阶问题</strong></p><ul><li>现一个算法求解台阶问题。</li></ul></li><li><p><strong>习题四：确定翻转的位数</strong></p><ul><li>实现一个算法确定将一个二进制整数翻转为另一个二进制整数，需要翻转的位数。</li></ul></li><li><p><strong>习题五：寻找岛屿的周长</strong></p><ul><li>实现一个算法找到岛屿的周长。</li></ul></li><li><p><strong>习题六：合并区间</strong></p><ul><li>对于给定的区间，实现一个算法合并区间组的范围。</li></ul></li><li><p><strong>习题七：用杂志拼接信件</strong></p><ul><li>实现一个算法确定能否由杂志构成信件。</li></ul></li><li><p><strong>习题八：乌托邦树</strong></p><ul><li>实现一个算法得到乌托邦树的高度。</li></ul></li><li><p><strong>习题九：铺设道路</strong></p><ul><li>春春是一名道路工程师，负责铺设一条长度为 n 的道路。</li></ul></li></ol><p>铺设道路的主要工作是填平下陷的地表。整段道路可以看作是 n 块首尾相连的区域，一开始，第 i 块区域下陷的深度为 d i 。</p><p>春春每天可以选择一段连续区间 [ L , R ] [L,R]，填充这段区间中的每块区域，让其下陷深度减少 1。在选择区间时，需要保证，区间内的每块区域在填充前下陷深度均不为 0 。</p><p>春春希望你能帮他设计一种方案，可以在最短的时间内将整段道路的下陷深度都变为 0 。</p><ol start="10"><li><strong>习题十：晚会节目单</strong><ul><li>小明要组织一台晚会，总共准备了</li></ul></li></ol><p>n 个节目。然后晚会的时间有限，他只能最终选择其中的 m 个节目。 这 n 个节目是按照小明设想的顺序给定的，顺序不能改变。 小明发现，观众对于晚上的喜欢程度与前几个节目的好看程度有非常大的关系，他希望选出的第一个节目尽可能好看，在此前提下希望第二个节目尽可能好看，依次类推。 小明给每个节目定义了一个好看值，请你帮助小明选择出 m 个节目，满足他的要求。</p><h2 id="习题一-实现基数排序" tabindex="-1">习题一：实现基数排序 <a class="header-anchor" href="#习题一-实现基数排序" aria-label="Permalink to &quot;习题一：实现基数排序&quot;">​</a></h2><p><strong><span style="font-size:20px;">将整数按位数切割,然后将数值统一为同样的数位长度，数位较短的数前面补零。 从最低位开始，依次进行一次排序。 从最低位排序一直到最高位排序完成以后, 数列就变成一个有序序列。 请编写代码，完成 排序，对给定数据进行升序排列。</span></strong></p><ul><li><strong>资料来源：<span style="font-size:18px;">柴浩天</span></strong></li><li><strong>参考答案：<span style="font-size:12px;">答案并不唯一</span></strong></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import java.util.Scanner;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Scanner scan = new Scanner(System.in);</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        // 读取待排序元素个数 N</span></span>
<span class="line"><span>        int N = scan.nextInt();</span></span>
<span class="line"><span>        int[] array = new int[N];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 读取待排序的元素</span></span>
<span class="line"><span>        for (int i = 0; i &lt; N; i++) {</span></span>
<span class="line"><span>            array[i] = scan.nextInt();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 关闭 scanner</span></span>
<span class="line"><span>        scan.close();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 执行基数排序</span></span>
<span class="line"><span>        radixSort(array);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 输出结果</span></span>
<span class="line"><span>        for (int num : array) {</span></span>
<span class="line"><span>            System.out.print(num + &quot; &quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static void radixSort(int[] array) {</span></span>
<span class="line"><span>        // 获取数组中最大值，以确定最大的位数</span></span>
<span class="line"><span>        int max = getMax(array);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 对于每一个位数执行计数排序</span></span>
<span class="line"><span>        for (int exp = 1; max / exp &gt; 0; exp *= 10) {</span></span>
<span class="line"><span>            countSort(array, exp);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static void countSort(int[] array, int exp) {</span></span>
<span class="line"><span>        int output[] = new int[array.length]; // 输出数组</span></span>
<span class="line"><span>        int i;</span></span>
<span class="line"><span>        int count[] = new int[10];</span></span>
<span class="line"><span>        for (i = 0; i &lt; 10; i++)</span></span>
<span class="line"><span>            count[i] = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 存储出现次数</span></span>
<span class="line"><span>        for (i = 0; i &lt; array.length; i++)</span></span>
<span class="line"><span>            count[(array[i] / exp) % 10]++;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 更改 count[i]，使得它包含实际位置</span></span>
<span class="line"><span>        for (i = 1; i &lt; 10; i++)</span></span>
<span class="line"><span>            count[i] += count[i - 1];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 构建输出数组</span></span>
<span class="line"><span>        for (i = array.length - 1; i &gt;= 0; i--) {</span></span>
<span class="line"><span>            output[count[(array[i] / exp) % 10] - 1] = array[i];</span></span>
<span class="line"><span>            count[(array[i] / exp) % 10]--;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 将输出数组的内容复制到原数组</span></span>
<span class="line"><span>        for (i = 0; i &lt; array.length; i++)</span></span>
<span class="line"><span>            array[i] = output[i];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static int getMax(int[] array) {</span></span>
<span class="line"><span>        int max = array[0];</span></span>
<span class="line"><span>        for (int i = 1; i &lt; array.length; i++) {</span></span>
<span class="line"><span>            if (array[i] &gt; max)</span></span>
<span class="line"><span>                max = array[i];</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return max;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br></div></div><ul><li><strong>难度：<span style="font-size:12px;">中等</span></strong></li><li><strong>测试用例通过比例：<span style="font-size:12px;">4/4</span></strong></li><li><strong>内存：<span style="font-size:12px;">41584KB</span></strong></li><li><strong>评测机制：<span style="font-size:12px;">ACM</span></strong></li><li><strong>评测结果：：<span style="font-size:12px;">通过</span></strong></li></ul><h2 id="习题二-最大化股票交易的利润" tabindex="-1">习题二：最大化股票交易的利润 <a class="header-anchor" href="#习题二-最大化股票交易的利润" aria-label="Permalink to &quot;习题二：最大化股票交易的利润&quot;">​</a></h2><p><strong><span style="font-size:20px;">股票价格每天都在变化，以数组的索引表示交易日，以数组的元素表示每天的股票价格。 可以通过买入和卖出获得利润。一天只能进行一次买入或卖出操作，一次买入加卖出操作称为一次交易次数。 你只能交易一次，求使得利润最大的交易策略。 </span></strong></p><ul><li><strong>资料来源：<span style="font-size:18px;">柴浩天</span></strong></li><li><strong>参考答案：<span style="font-size:12px;">答案并不唯一</span></strong></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import java.util.Scanner;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Scanner scan = new Scanner(System.in);</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        // 读取天数 N</span></span>
<span class="line"><span>        int N = scan.nextInt();</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        // 如果没有交易日或者只有1天，则无法进行交易，利润为0</span></span>
<span class="line"><span>        if (N &lt;= 1) {</span></span>
<span class="line"><span>            System.out.println(0);</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        // 读取每天的股票价格</span></span>
<span class="line"><span>        int[] prices = new int[N];</span></span>
<span class="line"><span>        for (int i = 0; i &lt; N; i++) {</span></span>
<span class="line"><span>            prices[i] = scan.nextInt();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 关闭 scanner</span></span>
<span class="line"><span>        scan.close();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 初始化最大利润为最小整数值，最低价格为第一天的价格</span></span>
<span class="line"><span>        int maxProfit = Integer.MIN_VALUE;</span></span>
<span class="line"><span>        int minPrice = prices[0];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 计算最大利润</span></span>
<span class="line"><span>        for (int i = 1; i &lt; N; i++) {</span></span>
<span class="line"><span>            // 更新最大利润，确保即使是负利润也记录下来</span></span>
<span class="line"><span>            maxProfit = Math.max(maxProfit, prices[i] - minPrice);</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>            // 更新最低价格</span></span>
<span class="line"><span>            minPrice = Math.min(minPrice, prices[i]);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 输出结果</span></span>
<span class="line"><span>        System.out.println(maxProfit);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><ul><li><strong>难度：<span style="font-size:12px;">中等</span></strong></li><li><strong>测试用例通过比例：<span style="font-size:12px;">2/2</span></strong></li><li><strong>内存：<span style="font-size:12px;">40876KB</span></strong></li><li><strong>评测机制：<span style="font-size:12px;">ACM</span></strong></li><li><strong>评测结果：：<span style="font-size:12px;">通过</span></strong></li></ul><h2 id="习题三-求解台阶问题" tabindex="-1">习题三：求解台阶问题 <a class="header-anchor" href="#习题三-求解台阶问题" aria-label="Permalink to &quot;习题三：求解台阶问题&quot;">​</a></h2><p><strong><span style="font-size:20px;"> 对于高度为 n n 的台阶，从下往上走，每一步的阶数为 1，2，3 中的一个。问要走到顶部一共有多少种走法。 </span></strong></p><ul><li><strong>资料来源：<span style="font-size:18px;">柴浩天</span></strong></li><li><strong>参考答案：<span style="font-size:12px;">答案并不唯一</span></strong></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import java.util.Scanner;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Scanner scan = new Scanner(System.in);</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        int N = scan.nextInt(); </span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>        System.out.println(countWaysOptimized(N));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        scan.close();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static long countWaysOptimized(int n) {</span></span>
<span class="line"><span>        if (n == 0) return 1;</span></span>
<span class="line"><span>        if (n &lt; 0) return 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 使用三个变量来存储最近的三个状态</span></span>
<span class="line"><span>        long a = 1, b = 1, c = 2;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        for (int i = 3; i &lt;= n; i++) {</span></span>
<span class="line"><span>            long temp = a + b + c;</span></span>
<span class="line"><span>            a = b;</span></span>
<span class="line"><span>            b = c;</span></span>
<span class="line"><span>            c = temp;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return n &gt;= 3 ? c : n == 2 ? b : a;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><ul><li><strong>难度：<span style="font-size:12px;">中等</span></strong></li><li><strong>测试用例通过比例：<span style="font-size:12px;">5/5</span></strong></li><li><strong>内存：<span style="font-size:12px;">40868KB</span></strong></li><li><strong>评测机制：<span style="font-size:12px;">ACM</span></strong></li><li><strong>评测结果：：<span style="font-size:12px;">通过</span></strong></li></ul><h2 id="习题四-确定翻转的位数" tabindex="-1">习题四：确定翻转的位数 <a class="header-anchor" href="#习题四-确定翻转的位数" aria-label="Permalink to &quot;习题四：确定翻转的位数&quot;">​</a></h2><p><strong><span style="font-size:20px;">例如将 11101 翻转为 00111，需要翻转的位置为第 1，2 和 4 位置，则需要翻转的位数为 3。 输入描述 输入两行，为两个二级制整数，均不超过 100 位。 </span></strong></p><ul><li><strong>资料来源：<span style="font-size:18px;">柴浩天</span></strong></li><li><strong>参考答案：<span style="font-size:12px;">答案并不唯一</span></strong></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import java.util.Scanner;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Scanner scan = new Scanner(System.in);</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        // 读取两个二进制字符串</span></span>
<span class="line"><span>        String binary1 = scan.nextLine();</span></span>
<span class="line"><span>        String binary2 = scan.nextLine();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 确保两个字符串长度相同，较短的字符串前面补0</span></span>
<span class="line"><span>        int maxLength = Math.max(binary1.length(), binary2.length());</span></span>
<span class="line"><span>        binary1 = String.format(&quot;%&quot; + maxLength + &quot;s&quot;, binary1).replace(&#39; &#39;, &#39;0&#39;);</span></span>
<span class="line"><span>        binary2 = String.format(&quot;%&quot; + maxLength + &quot;s&quot;, binary2).replace(&#39; &#39;, &#39;0&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 调用方法并输出结果</span></span>
<span class="line"><span>        System.out.println(countFlips(binary1, binary2));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        scan.close();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static int countFlips(String b1, String b2) {</span></span>
<span class="line"><span>        int flips = 0;</span></span>
<span class="line"><span>        for (int i = 0; i &lt; b1.length(); i++) {</span></span>
<span class="line"><span>            if (b1.charAt(i) != b2.charAt(i)) {</span></span>
<span class="line"><span>                flips++;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return flips;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><ul><li><strong>难度：<span style="font-size:12px;">中等</span></strong></li><li><strong>测试用例通过比例：<span style="font-size:12px;">1/1</span></strong></li><li><strong>内存：<span style="font-size:12px;">42004KB</span></strong></li><li><strong>评测机制：<span style="font-size:12px;">ACM</span></strong></li><li><strong>评测结果：：<span style="font-size:12px;">通过</span></strong></li></ul><h2 id="习题四-确定翻转的位数-1" tabindex="-1">习题四：确定翻转的位数 <a class="header-anchor" href="#习题四-确定翻转的位数-1" aria-label="Permalink to &quot;习题四：确定翻转的位数&quot;">​</a></h2><p><strong><span style="font-size:20px;">例如将 11101 翻转为 00111，需要翻转的位置为第 1，2 和 4 位置，则需要翻转的位数为 3。 输入描述 输入两行，为两个二级制整数，均不超过 100 位。 </span></strong></p><ul><li><strong>资料来源：<span style="font-size:18px;">柴浩天</span></strong></li><li><strong>参考答案：<span style="font-size:12px;">答案并不唯一</span></strong></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import java.util.Scanner;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Scanner scan = new Scanner(System.in);</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        // 读取两个二进制字符串</span></span>
<span class="line"><span>        String binary1 = scan.nextLine();</span></span>
<span class="line"><span>        String binary2 = scan.nextLine();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 确保两个字符串长度相同，较短的字符串前面补0</span></span>
<span class="line"><span>        int maxLength = Math.max(binary1.length(), binary2.length());</span></span>
<span class="line"><span>        binary1 = String.format(&quot;%&quot; + maxLength + &quot;s&quot;, binary1).replace(&#39; &#39;, &#39;0&#39;);</span></span>
<span class="line"><span>        binary2 = String.format(&quot;%&quot; + maxLength + &quot;s&quot;, binary2).replace(&#39; &#39;, &#39;0&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 调用方法并输出结果</span></span>
<span class="line"><span>        System.out.println(countFlips(binary1, binary2));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        scan.close();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static int countFlips(String b1, String b2) {</span></span>
<span class="line"><span>        int flips = 0;</span></span>
<span class="line"><span>        for (int i = 0; i &lt; b1.length(); i++) {</span></span>
<span class="line"><span>            if (b1.charAt(i) != b2.charAt(i)) {</span></span>
<span class="line"><span>                flips++;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return flips;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><ul><li><strong>难度：<span style="font-size:12px;">中等</span></strong></li><li><strong>测试用例通过比例：<span style="font-size:12px;">1/1</span></strong></li><li><strong>内存：<span style="font-size:12px;">42004KB</span></strong></li><li><strong>评测机制：<span style="font-size:12px;">ACM</span></strong></li><li><strong>评测结果：：<span style="font-size:12px;">通过</span></strong></li></ul><h2 id="习题五-寻找岛屿的周长" tabindex="-1">习题五：寻找岛屿的周长 <a class="header-anchor" href="#习题五-寻找岛屿的周长" aria-label="Permalink to &quot;习题五：寻找岛屿的周长&quot;">​</a></h2><p><strong><span style="font-size:20px;">给定一个包含 0 和 1 的二维网格地图，其中 1 表示陆地， 0 表示水域。 网格单元在水平和垂直方向上连接。网格完全被水包围，并且网格上只有一个岛，岛上没有湖泊。 网格中一个单元是一个边长为 1 的正方形。网格是矩形，宽度和高度不超过 100。 需要实现一个算法确定岛的周长。岛的周长指的是 1 与 0 相邻的边的个数乘以边长。 </span></strong></p><ul><li><strong>资料来源：<span style="font-size:18px;">柴浩天</span></strong></li><li><strong>参考答案：<span style="font-size:12px;">答案并不唯一</span></strong></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>import java.util.Scanner;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Scanner scan = new Scanner(System.in);</span></span>
<span class="line"><span>        int N = scan.nextInt(); // 网格的高度</span></span>
<span class="line"><span>        int M = scan.nextInt(); // 网格的宽度</span></span>
<span class="line"><span>        int[][] grid = new int[N][M];</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        // 读取网格地图</span></span>
<span class="line"><span>        for (int i = 0; i &lt; N; i++) {</span></span>
<span class="line"><span>            for (int j = 0; j &lt; M; j++) {</span></span>
<span class="line"><span>                grid[i][j] = scan.nextInt();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        int perimeter = 0;</span></span>
<span class="line"><span>        // 遍历每个网格单元</span></span>
<span class="line"><span>        for (int row = 0; row &lt; N; row++) {</span></span>
<span class="line"><span>            for (int col = 0; col &lt; M; col++) {</span></span>
<span class="line"><span>                if (grid[row][col] == 1) { // 如果是陆地</span></span>
<span class="line"><span>                    perimeter += 4; // 每块陆地默认增加4条边</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    // 如果上方也是陆地，则减去2条边（当前陆地和上方陆地各减一条）</span></span>
<span class="line"><span>                    if (row &gt; 0 &amp;&amp; grid[row - 1][col] == 1) {</span></span>
<span class="line"><span>                        perimeter -= 2;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    // 如果左方也是陆地，则减去2条边（当前陆地和左方陆地各减一条）</span></span>
<span class="line"><span>                    if (col &gt; 0 &amp;&amp; grid[row][col - 1] == 1) {</span></span>
<span class="line"><span>                        perimeter -= 2;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        System.out.println(perimeter); // 输出岛屿的周长</span></span>
<span class="line"><span>        scan.close();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><ul><li><strong>难度：<span style="font-size:12px;">中等</span></strong></li><li><strong>测试用例通过比例：<span style="font-size:12px;">2/2</span></strong></li><li><strong>内存：<span style="font-size:12px;">41132KB</span></strong></li><li><strong>评测机制：<span style="font-size:12px;">ACM</span></strong></li><li><strong>评测结果：：<span style="font-size:12px;">通过</span></strong></li></ul><h2 id="习题六-合并区间" tabindex="-1">习题六：合并区间 <a class="header-anchor" href="#习题六-合并区间" aria-label="Permalink to &quot;习题六：合并区间&quot;">​</a></h2><p><strong><span style="font-size:20px;">每个区间包含两个值，后一个值比前一个值大，用来表示范围。 需要将连续的范围合并。两个区间的范围有重合，或者两个范围相接，则认为它们是连续的。将所有连续的范围合并，最终得到不连续的区间。 例如对于区间表 [(2, 3), (3, 5), (7, 9), (8, 10)]，合并范围后的结果为 [(2, 5), (7, 10)]。 </span></strong></p><ul><li><strong>资料来源：<span style="font-size:18px;">柴浩天</span></strong></li><li><strong>参考答案：<span style="font-size:12px;">答案并不唯一</span></strong></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>import java.util.Scanner;</span></span>
<span class="line"><span>import java.util.ArrayList;</span></span>
<span class="line"><span>import java.util.Collections;</span></span>
<span class="line"><span>import java.util.Comparator;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Interval {</span></span>
<span class="line"><span>    int start;</span></span>
<span class="line"><span>    int end;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Interval(int start, int end) {</span></span>
<span class="line"><span>        this.start = start;</span></span>
<span class="line"><span>        this.end = end;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Scanner scan = new Scanner(System.in);</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        // 读取区间的数目 N</span></span>
<span class="line"><span>        int N = scan.nextInt();</span></span>
<span class="line"><span>        ArrayList&lt;Interval&gt; intervals = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 读取 N 个区间并存储到列表中</span></span>
<span class="line"><span>        for (int i = 0; i &lt; N; i++) {</span></span>
<span class="line"><span>            int start = scan.nextInt();</span></span>
<span class="line"><span>            int end = scan.nextInt();</span></span>
<span class="line"><span>            intervals.add(new Interval(start, end));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 关闭 scanner</span></span>
<span class="line"><span>        scan.close();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 按照区间的起始位置进行排序</span></span>
<span class="line"><span>        Collections.sort(intervals, Comparator.comparingInt(i -&gt; i.start));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 合并区间</span></span>
<span class="line"><span>        ArrayList&lt;Interval&gt; merged = mergeIntervals(intervals);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 输出结果</span></span>
<span class="line"><span>        for (Interval interval : merged) {</span></span>
<span class="line"><span>            System.out.println(interval.start + &quot; &quot; + interval.end);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static ArrayList&lt;Interval&gt; mergeIntervals(ArrayList&lt;Interval&gt; intervals) {</span></span>
<span class="line"><span>        ArrayList&lt;Interval&gt; merged = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>        if (intervals.isEmpty()) return merged;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Interval current = intervals.get(0);</span></span>
<span class="line"><span>        for (int i = 1; i &lt; intervals.size(); i++) {</span></span>
<span class="line"><span>            Interval next = intervals.get(i);</span></span>
<span class="line"><span>            if (current.end &gt;= next.start) { // 区间有重合或相接</span></span>
<span class="line"><span>                current = new Interval(current.start, Math.max(current.end, next.end)); // 合并区间</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                merged.add(current); // 添加之前的区间</span></span>
<span class="line"><span>                current = next; // 更新当前区间为下一个区间</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        merged.add(current); // 添加最后一个区间</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return merged;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br></div></div><ul><li><strong>难度：<span style="font-size:12px;">中等</span></strong></li><li><strong>测试用例通过比例：<span style="font-size:12px;">3/3</span></strong></li><li><strong>内存：<span style="font-size:12px;">42600KB</span></strong></li><li><strong>评测机制：<span style="font-size:12px;">ACM</span></strong></li><li><strong>评测结果：：<span style="font-size:12px;">通过</span></strong></li></ul><h2 id="习题七-用杂志拼接信件" tabindex="-1">习题七：用杂志拼接信件 <a class="header-anchor" href="#习题七-用杂志拼接信件" aria-label="Permalink to &quot;习题七：用杂志拼接信件&quot;">​</a></h2><p><strong><span style="font-size:20px;"> 影视剧中信件大多是从报纸或杂志上的字符剪下来拼接而成的。 杂志和信件均由字符串构成，对于给定的杂志和信件，确定信件是否可以由杂志上的字符构成。 例如杂志为 ab，信件为 aa，则不能构成。杂志为 aab，信件为 aa，则可以构成。 </span></strong></p><ul><li><strong>资料来源：<span style="font-size:18px;">柴浩天</span></strong></li><li><strong>参考答案：<span style="font-size:12px;">答案并不唯一</span></strong></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>import java.util.Scanner;</span></span>
<span class="line"><span>import java.util.HashMap;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Scanner scan = new Scanner(System.in);</span></span>
<span class="line"><span>        String magazine = scan.nextLine(); // 第一行输入为杂志字符串</span></span>
<span class="line"><span>        String letter = scan.nextLine();   // 第二行输入为信件字符串</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        // 创建两个哈希表来存储字符频率</span></span>
<span class="line"><span>        HashMap&lt;Character, Integer&gt; magazineChars = new HashMap&lt;&gt;();</span></span>
<span class="line"><span>        HashMap&lt;Character, Integer&gt; letterChars = new HashMap&lt;&gt;();</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        // 记录杂志中每个字符的出现次数</span></span>
<span class="line"><span>        for (char c : magazine.toCharArray()) {</span></span>
<span class="line"><span>            magazineChars.put(c, magazineChars.getOrDefault(c, 0) + 1);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        // 记录信件中每个字符的出现次数</span></span>
<span class="line"><span>        for (char c : letter.toCharArray()) {</span></span>
<span class="line"><span>            letterChars.put(c, letterChars.getOrDefault(c, 0) + 1);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        // 检查信件中的字符是否都在杂志中有足够的数量</span></span>
<span class="line"><span>        for (char c : letterChars.keySet()) {</span></span>
<span class="line"><span>            if (magazineChars.getOrDefault(c, 0) &lt; letterChars.get(c)) {</span></span>
<span class="line"><span>                System.out.println(&quot;NO&quot;);</span></span>
<span class="line"><span>                scan.close();</span></span>
<span class="line"><span>                return;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        // 如果所有信件字符都能被满足，则输出YES</span></span>
<span class="line"><span>        System.out.println(&quot;YES&quot;);</span></span>
<span class="line"><span>        scan.close();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><ul><li><strong>难度：<span style="font-size:12px;">中等</span></strong></li><li><strong>测试用例通过比例：<span style="font-size:12px;">3/3</span></strong></li><li><strong>内存：<span style="font-size:12px;">41144KB</span></strong></li><li><strong>评测机制：<span style="font-size:12px;">ACM</span></strong></li><li><strong>评测结果：：<span style="font-size:12px;">通过</span></strong></li></ul><h2 id="习题八-乌托邦树" tabindex="-1">习题八：乌托邦树 <a class="header-anchor" href="#习题八-乌托邦树" aria-label="Permalink to &quot;习题八：乌托邦树&quot;">​</a></h2><p><strong><span style="font-size:20px;"> 乌托邦树每年经历 2 个生长周期。每年春天，它的高度都会翻倍。每年夏天，它的高度都会增加 1 米。 对于一颗在春天开始时种下的高 1 米的树，问经过指定周期后，树的高度为多少。 </span></strong></p><ul><li><strong>资料来源：<span style="font-size:18px;">柴浩天</span></strong></li><li><strong>参考答案：<span style="font-size:12px;">答案并不唯一</span></strong></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import java.util.Scanner;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Scanner scan = new Scanner(System.in);</span></span>
<span class="line"><span>        int N = scan.nextInt(); // 输入指定周期数</span></span>
<span class="line"><span>        int height = 1; // 初始高度</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        for (int cycle = 1; cycle &lt;= N; cycle++) {</span></span>
<span class="line"><span>            if (cycle % 2 == 1) { // 奇数周期，即春天，树高翻倍</span></span>
<span class="line"><span>                height *= 2;</span></span>
<span class="line"><span>            } else { // 偶数周期，即夏天，树高加1米</span></span>
<span class="line"><span>                height += 1;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        System.out.println(height); // 输出最终高度</span></span>
<span class="line"><span>        scan.close();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ul><li><strong>难度：<span style="font-size:12px;">中等</span></strong></li><li><strong>测试用例通过比例：<span style="font-size:12px;">3/3</span></strong></li><li><strong>内存：<span style="font-size:12px;">41104KB</span></strong></li><li><strong>评测机制：<span style="font-size:12px;">ACM</span></strong></li><li><strong>评测结果：：<span style="font-size:12px;">通过</span></strong></li></ul><h2 id="习题九-铺设道路" tabindex="-1">习题九：铺设道路 <a class="header-anchor" href="#习题九-铺设道路" aria-label="Permalink to &quot;习题九：铺设道路&quot;">​</a></h2><p><strong><span style="font-size:20px;"> 春春是一名道路工程师，负责铺设一条长度为 n 的道路。 铺设道路的主要工作是填平下陷的地表。整段道路可以看作是 n 块首尾相连的区域，一开始，第 i 块区域下陷的深度为 d i 。 春春每天可以选择一段连续区间 [ L , R ] [L,R]，填充这段区间中的每块区域，让其下陷深度减少 1。在选择区间时，需要保证，区间内的每块区域在填充前下陷深度均不为 0 。 春春希望你能帮他设计一种方案，可以在最短的时间内将整段道路的下陷深度都变为 0 。 </span></strong></p><ul><li><strong>资料来源：<span style="font-size:18px;">柴浩天</span></strong></li><li><strong>参考答案：<span style="font-size:12px;">答案并不唯一</span></strong></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import java.util.Scanner;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Scanner scan = new Scanner(System.in);</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        // 读取道路长度 n</span></span>
<span class="line"><span>        int n = scan.nextInt();</span></span>
<span class="line"><span>        int[] depths = new int[n];</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        // 读取每个区域的下陷深度</span></span>
<span class="line"><span>        for (int i = 0; i &lt; n; i++) {</span></span>
<span class="line"><span>            depths[i] = scan.nextInt();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        // 初始化所需天数为第一个区域的深度</span></span>
<span class="line"><span>        int daysNeeded = depths[0];</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        // 遍历每个区域的下陷深度，并更新所需天数</span></span>
<span class="line"><span>        for (int i = 1; i &lt; n; i++) {</span></span>
<span class="line"><span>            if (depths[i] &gt; depths[i - 1]) {</span></span>
<span class="line"><span>                daysNeeded += depths[i] - depths[i - 1];</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 关闭 scanner</span></span>
<span class="line"><span>        scan.close();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 输出结果，即最少需要的天数</span></span>
<span class="line"><span>        System.out.println(daysNeeded);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><ul><li><strong>难度：<span style="font-size:12px;">中等</span></strong></li><li><strong>测试用例通过比例：<span style="font-size:12px;">10/10</span></strong></li><li><strong>内存：<span style="font-size:12px;">62776KB</span></strong></li><li><strong>评测机制：<span style="font-size:12px;">ACM</span></strong></li><li><strong>评测结果：：<span style="font-size:12px;">通过</span></strong></li></ul><h2 id="习题十-晚会节目单" tabindex="-1">习题十：晚会节目单 <a class="header-anchor" href="#习题十-晚会节目单" aria-label="Permalink to &quot;习题十：晚会节目单&quot;">​</a></h2><p><strong><span style="font-size:20px;"> 小明要组织一台晚会，总共准备了 n 个节目。然后晚会的时间有限，他只能最终选择其中的 m 个节目。 这 n 个节目是按照小明设想的顺序给定的，顺序不能改变。 小明发现，观众对于晚上的喜欢程度与前几个节目的好看程度有非常大的关系，他希望选出的第一个节目尽可能好看，在此前提下希望第二个节目尽可能好看，依次类推。 小明给每个节目定义了一个好看值，请你帮助小明选择出 m 个节目，满足他的要求。 </span></strong></p><ul><li><strong>资料来源：<span style="font-size:18px;">柴浩天</span></strong></li><li><strong>参考答案：<span style="font-size:12px;">答案并不唯一</span></strong></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import java.util.Scanner;</span></span>
<span class="line"><span>import java.util.Deque;</span></span>
<span class="line"><span>import java.util.ArrayDeque;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Scanner scan = new Scanner(System.in);</span></span>
<span class="line"><span>        int n = scan.nextInt(); // 节目的数量</span></span>
<span class="line"><span>        int m = scan.nextInt(); // 要选择的数量</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        Deque&lt;Integer&gt; deque = new ArrayDeque&lt;&gt;(); // 单调递减栈</span></span>
<span class="line"><span>        int[] shows = new int[n]; // 存储每个节目的好看值</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        for (int i = 0; i &lt; n; i++) {</span></span>
<span class="line"><span>            shows[i] = scan.nextInt();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        for (int i = 0; i &lt; n; i++) {</span></span>
<span class="line"><span>            // 当deque不为空，且当前节目好看值大于deque尾部元素，</span></span>
<span class="line"><span>            // 同时还有移除的空间（n - i &gt; m - deque.size()）时，移除尾部元素。</span></span>
<span class="line"><span>            while (!deque.isEmpty() &amp;&amp; shows[i] &gt; deque.peekLast() &amp;&amp; n - i &gt; m - deque.size()) {</span></span>
<span class="line"><span>                deque.pollLast();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>            if (deque.size() &lt; m) { // 如果还没有选够m个节目，则将当前节目加入deque</span></span>
<span class="line"><span>                deque.offerLast(shows[i]);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        // 输出选定的m个节目好看值</span></span>
<span class="line"><span>        StringBuilder result = new StringBuilder();</span></span>
<span class="line"><span>        for (Integer value : deque) {</span></span>
<span class="line"><span>            result.append(value).append(&quot; &quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        System.out.println(result.toString().trim()); // 移除末尾多余的空格</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        scan.close();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><ul><li><strong>答案评分：<span style="font-size:12px;">走丢了...</span></strong></li></ul>`,65)]))}const g=s(e,[["render",i]]);export{o as __pageData,g as default};
