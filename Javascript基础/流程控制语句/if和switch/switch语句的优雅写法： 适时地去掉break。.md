## switch 语句的实战举例：替换 if 语句

我们实战开发中，经常需要根据接口的返回码 retCode ，来让前端做不同的展示。

这种场景是业务开发中经常出现的，请一定要掌握。然而，很多人估计会这么写：

### 写法 1（不推荐。这种写法太挫了）

```javascript
let retCode = 1003; // 返回码 retCode 的值可能有很多种情况

if (retCode == 0) {
    alert('接口联调成功');
} else if (retCode == 101) {
    alert('活动不存在');
} else if (retCode == 103) {
    alert('活动未开始');
} else if (retCode == 104) {
    alert('活动已结束');
} else if (retCode == 1001) {
    alert('参数错误');
} else if (retCode == 1002) {
    alert('接口频率限制');
} else if (retCode == 1003) {
    alert('未登录');
} else if (retCode == 1004) {
    alert('（风控用户）提示 活动太火爆啦~军万马都在挤，请稍后再试');
} else {
    // 其他异常返回码
    alert('系统君失联了，请稍候再试');
}
```



如果你是按照上面的 `if else`的方式来写各种条件判断，说明你的代码水平太初级了，会被人喷的，千万不要这么写。这种写法，容易导致**嵌套太深，可读性很差**。

那要怎么改进呢？继续往下看。

### 写法 2（推荐。通过 return 的方式，将上面的写法进行改进）

```javascript
let retCode = 1003; // 返回码 retCode 的值可能有很多种情况
handleRetCode(retCode);

// 方法：根据接口不同的返回码，处理前端不同的显示状态
function handleRetCode(retCode) {
    if (retCode == 0) {
        alert('接口联调成功');
        return;
    }

    if (retCode == 101) {
        alert('活动不存在');
        return;
    }

    if (retCode == 103) {
        alert('活动未开始');
        return;
    }

    if (retCode == 104) {
        alert('活动已结束');
        return;
    }

    if (retCode == 1001) {
        alert('参数错误');
        return;
    }

    if (retCode == 1002) {
        alert('接口频率限制');
        return;
    }

    if (retCode == 1003) {
        alert('未登录');
        return;
    }

    if (retCode == 1004) {
        alert('（风控用户）提示 活动太火爆啦~军万马都在挤，请稍后再试');
        return;
    }

    // 其他异常返回码
    alert('系统君失联了，请稍候再试');
    return;
}
```

上面的**写法 2，是比较推荐的写法：直接通过 return 的方式，让 function 里的代码不再继续往下走，这就达到目的了。对了，因为要用到 return ，所以整段代码是封装到一个 function 里的。**

如果你以后看到有前端小白采用的是**写法 1**，请一定要把**写法 2**传授给他：**不需要那么多的 if else，直接用 return 返回就行了**。

### 写法 3（推荐。将 if else 改为 switch）

```javascript
let retCode = 1003; // 返回码 retCode 的值可能有很多种情况

switch (retCode) {
    case 0:
        alert('接口联调成功');
        break;
    case 101:
        alert('活动不存在');
        break;

    case 103:
        alert('活动未开始');
        break;

    case 104:
        alert('活动已结束');
        break;

    case 1001:
        alert('参数错误');
        break;

    case 1002:
        alert('接口频率限制');
        break;

    case 1003:
        alert('未登录');
        break;

    case 1004:
        alert('（风控用户）提示 活动太火爆啦~军万马都在挤，请稍后再试');
        break;

    // 其他异常返回码
    default:
        alert('系统君失联了，请稍候再试');
        break;
}
```

switch语句的优雅写法： 适时地去掉break。

```javascript
let day = 3;
        switch (day) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                console.log('work');
                break;
            case 6:
            case 7:
                console.log('relax');
                break;
            default:
                break;
        }
```

