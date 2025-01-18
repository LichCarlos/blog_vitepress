## 16届蓝桥杯备赛周练1
**<span style="font-size: 20px;">移动创新实验室</span>**
- **资料来源：<span style="font-size: 18px;">柴浩天</span>**
- **编辑者：<span style="font-size: 18px;">柴浩天</span>**
- **如有问题: <span style="font-size: 18px;">请在下方评论区留言或在工作日工作时间钉钉群提问</span>**
## 学习大纲
1. **习题一：实现基数排序**
   - 实现基数排序算法。

2. **习题二：最大化股票交易的利润**
   - 实现一个算法寻找最大化股票交易利润的策略。

3. **习题三：求解台阶问题**
   - 现一个算法求解台阶问题。

4. **习题四：确定翻转的位数**
   - 实现一个算法确定将一个二进制整数翻转为另一个二进制整数，需要翻转的位数。

5. **习题五：寻找岛屿的周长**
   - 实现一个算法找到岛屿的周长。

6. **习题六：合并区间**
   - 对于给定的区间，实现一个算法合并区间组的范围。

7. **习题七：用杂志拼接信件**
   - 实现一个算法确定能否由杂志构成信件。

8. **习题八：乌托邦树**
   - 实现一个算法得到乌托邦树的高度。

9. **习题九：铺设道路**
   - 春春是一名道路工程师，负责铺设一条长度为 
n 的道路。

铺设道路的主要工作是填平下陷的地表。整段道路可以看作是 
n 块首尾相连的区域，一开始，第 
i 块区域下陷的深度为 
d
i
  。

春春每天可以选择一段连续区间 
[
L
,
R
]
[L,R]，填充这段区间中的每块区域，让其下陷深度减少 1。在选择区间时，需要保证，区间内的每块区域在填充前下陷深度均不为 0 。

春春希望你能帮他设计一种方案，可以在最短的时间内将整段道路的下陷深度都变为 0 。



10. **习题十：晚会节目单**
    - 小明要组织一台晚会，总共准备了 

n 个节目。然后晚会的时间有限，他只能最终选择其中的 
m 个节目。
这 
n 个节目是按照小明设想的顺序给定的，顺序不能改变。
小明发现，观众对于晚上的喜欢程度与前几个节目的好看程度有非常大的关系，他希望选出的第一个节目尽可能好看，在此前提下希望第二个节目尽可能好看，依次类推。
小明给每个节目定义了一个好看值，请你帮助小明选择出 
m 个节目，满足他的要求。

## 习题一：实现基数排序
**<span style="font-size: 20px;">将整数按位数切割,然后将数值统一为同样的数位长度，数位较短的数前面补零。
从最低位开始，依次进行一次排序。
从最低位排序一直到最高位排序完成以后, 数列就变成一个有序序列。
请编写代码，完成 排序，对给定数据进行升序排列。</span>**
- **资料来源：<span style="font-size: 18px;">柴浩天</span>**
- **参考答案：<span style="font-size: 12px;">答案并不唯一</span>**
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        // 读取待排序元素个数 N
        int N = scan.nextInt();
        int[] array = new int[N];

        // 读取待排序的元素
        for (int i = 0; i < N; i++) {
            array[i] = scan.nextInt();
        }

        // 关闭 scanner
        scan.close();

        // 执行基数排序
        radixSort(array);

        // 输出结果
        for (int num : array) {
            System.out.print(num + " ");
        }
    }

    private static void radixSort(int[] array) {
        // 获取数组中最大值，以确定最大的位数
        int max = getMax(array);

        // 对于每一个位数执行计数排序
        for (int exp = 1; max / exp > 0; exp *= 10) {
            countSort(array, exp);
        }
    }

    private static void countSort(int[] array, int exp) {
        int output[] = new int[array.length]; // 输出数组
        int i;
        int count[] = new int[10];
        for (i = 0; i < 10; i++)
            count[i] = 0;

        // 存储出现次数
        for (i = 0; i < array.length; i++)
            count[(array[i] / exp) % 10]++;

        // 更改 count[i]，使得它包含实际位置
        for (i = 1; i < 10; i++)
            count[i] += count[i - 1];

        // 构建输出数组
        for (i = array.length - 1; i >= 0; i--) {
            output[count[(array[i] / exp) % 10] - 1] = array[i];
            count[(array[i] / exp) % 10]--;
        }

        // 将输出数组的内容复制到原数组
        for (i = 0; i < array.length; i++)
            array[i] = output[i];
    }

    private static int getMax(int[] array) {
        int max = array[0];
        for (int i = 1; i < array.length; i++) {
            if (array[i] > max)
                max = array[i];
        }
        return max;
    }
}
```
- **难度：<span style="font-size: 12px;">中等</span>**
- **测试用例通过比例：<span style="font-size: 12px;">4/4</span>**
- **内存：<span style="font-size: 12px;">41584KB</span>**
- **评测机制：<span style="font-size: 12px;">ACM</span>**
- **评测结果：：<span style="font-size: 12px;">通过</span>**


## 习题二：最大化股票交易的利润
**<span style="font-size: 20px;">股票价格每天都在变化，以数组的索引表示交易日，以数组的元素表示每天的股票价格。
可以通过买入和卖出获得利润。一天只能进行一次买入或卖出操作，一次买入加卖出操作称为一次交易次数。
你只能交易一次，求使得利润最大的交易策略。
</span>**
- **资料来源：<span style="font-size: 18px;">柴浩天</span>**
- **参考答案：<span style="font-size: 12px;">答案并不唯一</span>**

```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        // 读取天数 N
        int N = scan.nextInt();
        
        // 如果没有交易日或者只有1天，则无法进行交易，利润为0
        if (N <= 1) {
            System.out.println(0);
            return;
        }
        
        // 读取每天的股票价格
        int[] prices = new int[N];
        for (int i = 0; i < N; i++) {
            prices[i] = scan.nextInt();
        }

        // 关闭 scanner
        scan.close();

        // 初始化最大利润为最小整数值，最低价格为第一天的价格
        int maxProfit = Integer.MIN_VALUE;
        int minPrice = prices[0];

        // 计算最大利润
        for (int i = 1; i < N; i++) {
            // 更新最大利润，确保即使是负利润也记录下来
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
            
            // 更新最低价格
            minPrice = Math.min(minPrice, prices[i]);
        }

        // 输出结果
        System.out.println(maxProfit);
    }
}
```
- **难度：<span style="font-size: 12px;">中等</span>**
- **测试用例通过比例：<span style="font-size: 12px;">2/2</span>**
- **内存：<span style="font-size: 12px;">40876KB</span>**
- **评测机制：<span style="font-size: 12px;">ACM</span>**
- **评测结果：：<span style="font-size: 12px;">通过</span>**



## 习题三：求解台阶问题
**<span style="font-size: 20px;">
对于高度为 
n
n 的台阶，从下往上走，每一步的阶数为 1，2，3 中的一个。问要走到顶部一共有多少种走法。
</span>**
- **资料来源：<span style="font-size: 18px;">柴浩天</span>**
- **参考答案：<span style="font-size: 12px;">答案并不唯一</span>**

```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        int N = scan.nextInt(); 
         
        System.out.println(countWaysOptimized(N));

        scan.close();
    }

    private static long countWaysOptimized(int n) {
        if (n == 0) return 1;
        if (n < 0) return 0;

        // 使用三个变量来存储最近的三个状态
        long a = 1, b = 1, c = 2;

        for (int i = 3; i <= n; i++) {
            long temp = a + b + c;
            a = b;
            b = c;
            c = temp;
        }

        return n >= 3 ? c : n == 2 ? b : a;
    }
}

```

- **难度：<span style="font-size: 12px;">中等</span>**
- **测试用例通过比例：<span style="font-size: 12px;">5/5</span>**
- **内存：<span style="font-size: 12px;">40868KB</span>**
- **评测机制：<span style="font-size: 12px;">ACM</span>**
- **评测结果：：<span style="font-size: 12px;">通过</span>**

## 习题四：确定翻转的位数
**<span style="font-size: 20px;">例如将 11101 翻转为 00111，需要翻转的位置为第 1，2 和 4 位置，则需要翻转的位数为 3。
输入描述
输入两行，为两个二级制整数，均不超过 100 位。
</span>**
- **资料来源：<span style="font-size: 18px;">柴浩天</span>**
- **参考答案：<span style="font-size: 12px;">答案并不唯一</span>**

```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        // 读取两个二进制字符串
        String binary1 = scan.nextLine();
        String binary2 = scan.nextLine();

        // 确保两个字符串长度相同，较短的字符串前面补0
        int maxLength = Math.max(binary1.length(), binary2.length());
        binary1 = String.format("%" + maxLength + "s", binary1).replace(' ', '0');
        binary2 = String.format("%" + maxLength + "s", binary2).replace(' ', '0');

        // 调用方法并输出结果
        System.out.println(countFlips(binary1, binary2));

        scan.close();
    }

    private static int countFlips(String b1, String b2) {
        int flips = 0;
        for (int i = 0; i < b1.length(); i++) {
            if (b1.charAt(i) != b2.charAt(i)) {
                flips++;
            }
        }
        return flips;
    }
}


```

- **难度：<span style="font-size: 12px;">中等</span>**
- **测试用例通过比例：<span style="font-size: 12px;">1/1</span>**
- **内存：<span style="font-size: 12px;">42004KB</span>**
- **评测机制：<span style="font-size: 12px;">ACM</span>**
- **评测结果：：<span style="font-size: 12px;">通过</span>**


## 习题四：确定翻转的位数
**<span style="font-size: 20px;">例如将 11101 翻转为 00111，需要翻转的位置为第 1，2 和 4 位置，则需要翻转的位数为 3。
输入描述
输入两行，为两个二级制整数，均不超过 100 位。
</span>**
- **资料来源：<span style="font-size: 18px;">柴浩天</span>**
- **参考答案：<span style="font-size: 12px;">答案并不唯一</span>**

```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        // 读取两个二进制字符串
        String binary1 = scan.nextLine();
        String binary2 = scan.nextLine();

        // 确保两个字符串长度相同，较短的字符串前面补0
        int maxLength = Math.max(binary1.length(), binary2.length());
        binary1 = String.format("%" + maxLength + "s", binary1).replace(' ', '0');
        binary2 = String.format("%" + maxLength + "s", binary2).replace(' ', '0');

        // 调用方法并输出结果
        System.out.println(countFlips(binary1, binary2));

        scan.close();
    }

    private static int countFlips(String b1, String b2) {
        int flips = 0;
        for (int i = 0; i < b1.length(); i++) {
            if (b1.charAt(i) != b2.charAt(i)) {
                flips++;
            }
        }
        return flips;
    }
}


```

- **难度：<span style="font-size: 12px;">中等</span>**
- **测试用例通过比例：<span style="font-size: 12px;">1/1</span>**
- **内存：<span style="font-size: 12px;">42004KB</span>**
- **评测机制：<span style="font-size: 12px;">ACM</span>**
- **评测结果：：<span style="font-size: 12px;">通过</span>**


## 习题五：寻找岛屿的周长
**<span style="font-size: 20px;">给定一个包含 0 和 1 的二维网格地图，其中 1 表示陆地， 0 表示水域。
网格单元在水平和垂直方向上连接。网格完全被水包围，并且网格上只有一个岛，岛上没有湖泊。
网格中一个单元是一个边长为 1 的正方形。网格是矩形，宽度和高度不超过 100。
需要实现一个算法确定岛的周长。岛的周长指的是 1 与 0 相邻的边的个数乘以边长。
</span>**
- **资料来源：<span style="font-size: 18px;">柴浩天</span>**
- **参考答案：<span style="font-size: 12px;">答案并不唯一</span>**

```

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int N = scan.nextInt(); // 网格的高度
        int M = scan.nextInt(); // 网格的宽度
        int[][] grid = new int[N][M];
        
        // 读取网格地图
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                grid[i][j] = scan.nextInt();
            }
        }

        int perimeter = 0;
        // 遍历每个网格单元
        for (int row = 0; row < N; row++) {
            for (int col = 0; col < M; col++) {
                if (grid[row][col] == 1) { // 如果是陆地
                    perimeter += 4; // 每块陆地默认增加4条边

                    // 如果上方也是陆地，则减去2条边（当前陆地和上方陆地各减一条）
                    if (row > 0 && grid[row - 1][col] == 1) {
                        perimeter -= 2;
                    }

                    // 如果左方也是陆地，则减去2条边（当前陆地和左方陆地各减一条）
                    if (col > 0 && grid[row][col - 1] == 1) {
                        perimeter -= 2;
                    }
                }
            }
        }
        
        System.out.println(perimeter); // 输出岛屿的周长
        scan.close();
    }
}

```

- **难度：<span style="font-size: 12px;">中等</span>**
- **测试用例通过比例：<span style="font-size: 12px;">2/2</span>**
- **内存：<span style="font-size: 12px;">41132KB</span>**
- **评测机制：<span style="font-size: 12px;">ACM</span>**
- **评测结果：：<span style="font-size: 12px;">通过</span>**

## 习题六：合并区间
**<span style="font-size: 20px;">每个区间包含两个值，后一个值比前一个值大，用来表示范围。
需要将连续的范围合并。两个区间的范围有重合，或者两个范围相接，则认为它们是连续的。将所有连续的范围合并，最终得到不连续的区间。
例如对于区间表 [(2, 3), (3, 5), (7, 9), (8, 10)]，合并范围后的结果为 [(2, 5), (7, 10)]。
</span>**
- **资料来源：<span style="font-size: 18px;">柴浩天</span>**
- **参考答案：<span style="font-size: 12px;">答案并不唯一</span>**

```

import java.util.Scanner;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

class Interval {
    int start;
    int end;

    Interval(int start, int end) {
        this.start = start;
        this.end = end;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        // 读取区间的数目 N
        int N = scan.nextInt();
        ArrayList<Interval> intervals = new ArrayList<>();

        // 读取 N 个区间并存储到列表中
        for (int i = 0; i < N; i++) {
            int start = scan.nextInt();
            int end = scan.nextInt();
            intervals.add(new Interval(start, end));
        }

        // 关闭 scanner
        scan.close();

        // 按照区间的起始位置进行排序
        Collections.sort(intervals, Comparator.comparingInt(i -> i.start));

        // 合并区间
        ArrayList<Interval> merged = mergeIntervals(intervals);

        // 输出结果
        for (Interval interval : merged) {
            System.out.println(interval.start + " " + interval.end);
        }
    }

    private static ArrayList<Interval> mergeIntervals(ArrayList<Interval> intervals) {
        ArrayList<Interval> merged = new ArrayList<>();
        if (intervals.isEmpty()) return merged;

        Interval current = intervals.get(0);
        for (int i = 1; i < intervals.size(); i++) {
            Interval next = intervals.get(i);
            if (current.end >= next.start) { // 区间有重合或相接
                current = new Interval(current.start, Math.max(current.end, next.end)); // 合并区间
            } else {
                merged.add(current); // 添加之前的区间
                current = next; // 更新当前区间为下一个区间
            }
        }
        merged.add(current); // 添加最后一个区间

        return merged;
    }
}

```

- **难度：<span style="font-size: 12px;">中等</span>**
- **测试用例通过比例：<span style="font-size: 12px;">3/3</span>**
- **内存：<span style="font-size: 12px;">42600KB</span>**
- **评测机制：<span style="font-size: 12px;">ACM</span>**
- **评测结果：：<span style="font-size: 12px;">通过</span>**

## 习题七：用杂志拼接信件
**<span style="font-size: 20px;">
影视剧中信件大多是从报纸或杂志上的字符剪下来拼接而成的。
杂志和信件均由字符串构成，对于给定的杂志和信件，确定信件是否可以由杂志上的字符构成。
例如杂志为 ab，信件为 aa，则不能构成。杂志为 aab，信件为 aa，则可以构成。
</span>**
- **资料来源：<span style="font-size: 18px;">柴浩天</span>**
- **参考答案：<span style="font-size: 12px;">答案并不唯一</span>**

```

import java.util.Scanner;
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String magazine = scan.nextLine(); // 第一行输入为杂志字符串
        String letter = scan.nextLine();   // 第二行输入为信件字符串
        
        // 创建两个哈希表来存储字符频率
        HashMap<Character, Integer> magazineChars = new HashMap<>();
        HashMap<Character, Integer> letterChars = new HashMap<>();
        
        // 记录杂志中每个字符的出现次数
        for (char c : magazine.toCharArray()) {
            magazineChars.put(c, magazineChars.getOrDefault(c, 0) + 1);
        }
        
        // 记录信件中每个字符的出现次数
        for (char c : letter.toCharArray()) {
            letterChars.put(c, letterChars.getOrDefault(c, 0) + 1);
        }
        
        // 检查信件中的字符是否都在杂志中有足够的数量
        for (char c : letterChars.keySet()) {
            if (magazineChars.getOrDefault(c, 0) < letterChars.get(c)) {
                System.out.println("NO");
                scan.close();
                return;
            }
        }
        
        // 如果所有信件字符都能被满足，则输出YES
        System.out.println("YES");
        scan.close();
    }
}


```

- **难度：<span style="font-size: 12px;">中等</span>**
- **测试用例通过比例：<span style="font-size: 12px;">3/3</span>**
- **内存：<span style="font-size: 12px;">41144KB</span>**
- **评测机制：<span style="font-size: 12px;">ACM</span>**
- **评测结果：：<span style="font-size: 12px;">通过</span>**


## 习题八：乌托邦树
**<span style="font-size: 20px;">
乌托邦树每年经历 2 个生长周期。每年春天，它的高度都会翻倍。每年夏天，它的高度都会增加 1 米。
对于一颗在春天开始时种下的高 1 米的树，问经过指定周期后，树的高度为多少。
</span>**
- **资料来源：<span style="font-size: 18px;">柴浩天</span>**
- **参考答案：<span style="font-size: 12px;">答案并不唯一</span>**

```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int N = scan.nextInt(); // 输入指定周期数
        int height = 1; // 初始高度
        
        for (int cycle = 1; cycle <= N; cycle++) {
            if (cycle % 2 == 1) { // 奇数周期，即春天，树高翻倍
                height *= 2;
            } else { // 偶数周期，即夏天，树高加1米
                height += 1;
            }
        }
        
        System.out.println(height); // 输出最终高度
        scan.close();
    }
}

```

- **难度：<span style="font-size: 12px;">中等</span>**
- **测试用例通过比例：<span style="font-size: 12px;">3/3</span>**
- **内存：<span style="font-size: 12px;">41104KB</span>**
- **评测机制：<span style="font-size: 12px;">ACM</span>**
- **评测结果：：<span style="font-size: 12px;">通过</span>**

## 习题九：铺设道路
**<span style="font-size: 20px;">
春春是一名道路工程师，负责铺设一条长度为 
n 的道路。
铺设道路的主要工作是填平下陷的地表。整段道路可以看作是 
n 块首尾相连的区域，一开始，第 
i 块区域下陷的深度为 
d
i
  。
春春每天可以选择一段连续区间 
[
L
,
R
]
[L,R]，填充这段区间中的每块区域，让其下陷深度减少 1。在选择区间时，需要保证，区间内的每块区域在填充前下陷深度均不为 0 。
春春希望你能帮他设计一种方案，可以在最短的时间内将整段道路的下陷深度都变为 0 。
</span>**
- **资料来源：<span style="font-size: 18px;">柴浩天</span>**
- **参考答案：<span style="font-size: 12px;">答案并不唯一</span>**

```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        // 读取道路长度 n
        int n = scan.nextInt();
        int[] depths = new int[n];
        
        // 读取每个区域的下陷深度
        for (int i = 0; i < n; i++) {
            depths[i] = scan.nextInt();
        }
        
        // 初始化所需天数为第一个区域的深度
        int daysNeeded = depths[0];
        
        // 遍历每个区域的下陷深度，并更新所需天数
        for (int i = 1; i < n; i++) {
            if (depths[i] > depths[i - 1]) {
                daysNeeded += depths[i] - depths[i - 1];
            }
        }

        // 关闭 scanner
        scan.close();

        // 输出结果，即最少需要的天数
        System.out.println(daysNeeded);
    }
}

```

- **难度：<span style="font-size: 12px;">中等</span>**
- **测试用例通过比例：<span style="font-size: 12px;">10/10</span>**
- **内存：<span style="font-size: 12px;">62776KB</span>**
- **评测机制：<span style="font-size: 12px;">ACM</span>**
- **评测结果：：<span style="font-size: 12px;">通过</span>**

## 习题十：晚会节目单
**<span style="font-size: 20px;">
小明要组织一台晚会，总共准备了 
n 个节目。然后晚会的时间有限，他只能最终选择其中的 
m 个节目。
这 
n 个节目是按照小明设想的顺序给定的，顺序不能改变。
小明发现，观众对于晚上的喜欢程度与前几个节目的好看程度有非常大的关系，他希望选出的第一个节目尽可能好看，在此前提下希望第二个节目尽可能好看，依次类推。
小明给每个节目定义了一个好看值，请你帮助小明选择出 
m 个节目，满足他的要求。
</span>**
- **资料来源：<span style="font-size: 18px;">柴浩天</span>**
- **参考答案：<span style="font-size: 12px;">答案并不唯一</span>**

```
import java.util.Scanner;
import java.util.Deque;
import java.util.ArrayDeque;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt(); // 节目的数量
        int m = scan.nextInt(); // 要选择的数量
        
        Deque<Integer> deque = new ArrayDeque<>(); // 单调递减栈
        int[] shows = new int[n]; // 存储每个节目的好看值
        
        for (int i = 0; i < n; i++) {
            shows[i] = scan.nextInt();
        }
        
        for (int i = 0; i < n; i++) {
            // 当deque不为空，且当前节目好看值大于deque尾部元素，
            // 同时还有移除的空间（n - i > m - deque.size()）时，移除尾部元素。
            while (!deque.isEmpty() && shows[i] > deque.peekLast() && n - i > m - deque.size()) {
                deque.pollLast();
            }
            
            if (deque.size() < m) { // 如果还没有选够m个节目，则将当前节目加入deque
                deque.offerLast(shows[i]);
            }
        }
        
        // 输出选定的m个节目好看值
        StringBuilder result = new StringBuilder();
        for (Integer value : deque) {
            result.append(value).append(" ");
        }
        System.out.println(result.toString().trim()); // 移除末尾多余的空格
        
        scan.close();
    }
}

```

- **答案评分：<span style="font-size: 12px;">走丢了...</span>**


