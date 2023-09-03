# DOM的核心操作

##  一、元素的创建

### 我们通过DOM获取的元素是一个对象

### 1document.write('<div>123</div>')

### 2innerHTML数组拼接

```javascript
arr.push('<a href="#">百度</a>');
inner.innerHTML=arr.join('');	//oin() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串
//用逗号或指定的分隔符字符串分隔。如果数组只有一个元素，那么将返回该元素而不使用分隔符。
//指定一个字符串来分隔数组的每个元素。如果需要，将分隔符转换为字符串。如果省略，数组元素用逗号（,）分隔。如果 separator 是空字符串（""），则所有元素之间都没有任何字符。
```

### 3document.createElement('element')

## 二、元素节点的添加

### 1node.appendChild(child)
node.appendChild()方法将一个节点添加到指定父节点的子节点列表末尾。类似于CSS里的after伪元素
### 2node.insertBefore(child,指定元素)
node.insertBefore()方法将一个节点添加到指定父节点的子节点列表前面。类似于CSS里的before伪元素
## 三、元素节点的删除
### 1 node.removeChild()
## 四、改
**主要修改dom元素的属性，样式，内容，表单元素的值等**
1.修改元素属性：src、href、titel等
2.修改元素样式：style、className
3.修改元素内容： innerText、innerHTML等
4.修改表单元素： value、disabled、type等
## 五、查
**主要查询dom的元素**
1.DOM提供的API方法：getElementById()、getElementsByTagName() 老用法，不推荐
2.H5新增方法：querySelector()、querySelectorAll()	提倡
3.利用节点获取元素：父(parentNode)、子(children)、兄(previousElementSibling、nextElementSibling)
## 六、属性操作
**主要针对自定义属性**
1.element.setAttribute('属性','值')	设置元素属性值
2.element.getAttribute('属性')	获取元素属性值
3.element.removeAttribute('属性')		移除属性

