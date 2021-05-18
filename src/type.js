// 获取数据类型
export function getType(value) {
    const type = typeof(value)
    return type !== 'object' ? type : Object.prototype.toString.call(value).replace(/\[(\w+)\s*(\w+)\]/, "$2").toLowerCase()
}

// 是否对象
export function isObject(value) {
    return getType(value) === 'object' ? true : false
}

// 是否数组
export function isArray(value) {
    return getType(value) === 'array' ? true : false
}

// 是否空数组
export function isEmptyArrary(value) {
    return isArray(value) && !value.length ? true : false
}

// 是否为空
export function isEmpty(value) {
    return [undefined, null, ''].includes(value) ? true : false
}

// 是否空对象
export function isEmptyObject(value) {
    return isObject(value) && !Object.keys(value).length ? true : false
}