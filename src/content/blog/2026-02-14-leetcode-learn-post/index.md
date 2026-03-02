---
title: 'Something in leetcode'
slug: 'leetcode-learn-post'
description: 'some record for the learning process in leetcode'
pubDate: 'Feb 14 2026'
tags: ["leetcode"]
coverImage: './image1.jpg'
---

### Leetcode Learning Journey

#### Introduction

I am a high school student who loves programming and algorithm. I have been using leetcode to learn programming and algorithm for a long time. leetcode is a great platform for learning programming and algorithm, and I have made a lot of progress in my learning journey. In this post, I will share some of my experiences and lessons learned from leetcode.  

#### Some basic knowledge (Part 1)
In this part, I will introduce some basic knowledge about programming and algorithm. And this part will record some of the basic knowledge that I have learned from leetcode.
Following shows how to express the max number in the type of int.
```cpp
#include<iostream>
#include<climits>
using namespace std;

int main()
{
    cout << INT_MAX << endl;        // 输出int的最大值
    return 0;
}
```

Besides, I complete the basic programming tasks, with the aim to learn some basic programming gramma. The example is as follow:

```cpp
// String类型的常用方法
stoi(const string& str, size_t* idx = 0, int base = 10)：将字符串转换为整数， 其中idx表示的是转换结束的位置，base表示的是进制数
stol()：将字符串转换为长整数
stof()：将字符串转换为浮点数
stod()：将字符串转换为双精度浮点数
substr(size_t pos, size_t len)：返回字符串的子串，pos表示起始位置，len表示子串长度
find(const string& str, size_t pos = 0)：查找子串在字符串中的位置, str表示的是待查找的子串， pos表示的是起始位置
replace(size_t pos, size_t len, const string& str)：替换字符串中的子串, pos表示的是起始位置，len表示的是待替换的子串长度，str表示的是替换后的子串
to_string(int value)：将整数转换为字符串
count(s.begin(), s.end(), '0'): 统计字符串中0的个数
```

In the C++, STL plays an important role. The following shows the STL container and their usage.

```cpp
// vector: 动态数组，支持随机访问，插入删除操作效率低
vector<type> var = {1, 2, 3, 4, 5}; // 初始化一个vector
vector<type> var(n, val); // 初始化一个长度为n，值为val的vector
vector<type> var(n); // 初始化一个长度为n的vector，值为默认值
vector<type> var; // 初始化一个空的vector
vector<type> var1(var2); // 初始化一个vector，值为var2

vector.push_back(x): 在vector末尾添加一个元素x
vector.pop_back(): 删除vector末尾的元素
vector.size(): 返回vector的长度
vector.empty(): 判断vector是否为空
vector.clear(): 清空vector
vector.begin(): 返回vector的首元素迭代器
vector.end(): 返回vector的尾元素迭代器
vector.front(): 返回vector的首元素
vector.back(): 返回vector的尾元素
vector.at(index): 返回vector中指定位置的元素，index表示的是位置索引

// stack: 栈，支持后进先出(LIFO)操作
stack<type> var; // 初始化一个空的stack
stack.push(x): 在stack末尾添加一个元素x
stack.pop(): 删除stack末尾的元素
stack.top(): 返回stack的栈顶元素
stack.size(): 返回stack的长度
stack.empty(): 判断stack是否为空

// queue: 队列，支持先进先出(FIFO)操作
queue<type> var; // 初始化一个空的queue
queue.push(x): 在queue末尾添加一个元素x
queue.pop(): 删除queue末尾的元素
queue.front(): 返回queue的队头元素
queue.back(): 返回queue的队尾元素
queue.size(): 返回queue的长度
queue.empty(): 判断queue是否为空


// priority_queue: 优先队列，支持根据元素的优先级出队
priority_queue<type> var; // 初始化一个空的优先队列
priority_queue.push(x): 在优先队列中添加一个元素x
priority_queue.pop(): 删除优先队列中的队头元素
priority_queue.top(): 返回优先队列中的队头元素
priority_queue.size(): 返回优先队列的长度
priority_queue.empty(): 判断优先队列是否为空
priority_queue<type, container, compare> var; // 初始化一个空的优先队列，使用自定义的比较函数compare
priority_queue<type, vector<type>, compare> var; // 初始化一个空的优先队列，使用vector作为容器，使用自定义的比较函数compare

// unordered_set: 无序集合，不允许重复元素
unordered_set<type> var; // 初始化一个空的无序集合
unordered_set.insert(x): 在无序集合中添加一个元素x
unordered_set.erase(x): 删除无序集合中的元素x
unordered_set.find(x): 查找无序集合中是否存在元素x
unordered_set.size(): 返回无序集合的长度
unordered_set.empty(): 判断无序集合是否为空

// set: 有序集合，不允许重复元素
set<type> var; // 初始化一个空的有序集合
set.insert(x): 在有序集合中添加一个元素x
set.erase(x): 删除有序集合中的元素x
set.find(x): 查找有序集合中是否存在元素x
set.size(): 返回有序集合的长度
set.empty(): 判断有序集合是否为空

// map: 有序键值对容器，不允许重复键
map<key_type, value_type> var; // 初始化一个空的有序键值对容器
map.insert({key, value}): 在有序键值对容器中添加一个键值对
map.erase(key): 删除有序键值对容器中的键值对，key表示的是键
map.find(key): 查找有序键值对容器中是否存在键key
map.size(): 返回有序键值对容器的长度
map.empty(): 判断有序键值对容器是否为空
map[key]: 返回有序键值对容器中键key对应的值
```
