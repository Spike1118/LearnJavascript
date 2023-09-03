###  if 和 switch如何选择

**如果是对区间进行判断，则建议用 if。如果是对几个固定的值进行判断，那么，数量少的话用 if，数量多的话用switch。**

### 用 return 代替 if else

业务场景举例：

我们在实战业务中涉及到调接口时，一般会这样做：

- 接口返回码为 0 时，前端 resolve。
- 接口返回未登录时，前端跳转到登录页面。
- 接口返回其他情况，或者无返回时，前端 reject。

写法 1、if else 的写法：（不推荐）

```javascript
if (res) {
    if (+res.retCode == 0) {
        resolve(res);
    } else if (+res.retCode == 8888) {
        goLogin();
    } else {
        reject(res);
    }
} else {
    reject();
}
```

写法 2、 return 的写法：（推荐）

```
if (!res || +res.retCode !== 0) {
    if (+res.retCode === 8888) {
        // 未登录
        goLogin();
        return;
    }
    reject(res);
    return;
}
resolve(res);
```

学了Promise再来看这个例子