let obj: any = {
    num:0
}

obj.foo()
obj()
obj.name = 'lucy'

// 在使用any的情况下，obj可以调用不存在的字段或者方法，没有提示错误，但是这是错误的；
// 可以不使用any就会进行检查