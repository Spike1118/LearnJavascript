# void运算符
 **void运算符的作用是执行一个表达式，然后不返回任何值，或者说返回undefined**
## void运算符的两种写法
```javascript
void 0 //undefined
void(0) //undefined
```
建议采用第一种方式，即总用圆括号，因为void运算符的优先级很高，如果不使用括号，容易造成错误结果
## void的主要用途
例子如下
```javascript
<script>
function f() {
  console.log('Hello World');
}
</script>
<a href="http://example.com" onclick="f(); return false;">点击</a>
```
上面的代码中，点击链接后，会先执行onclick的代码，但onclick会返回false,所以浏览器不会跳转到example.com
可以用void运算符代替上面的写法
```javascript
<a href="javascript: void(f())">文字</a>
```