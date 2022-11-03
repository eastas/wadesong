/*
 * @Description:
 * @Version: 0.1
 * @Autor: qbh
 * @Date: 2022-07-25 11:39:18
 * @LastEditors: qbh
 * @LastEditTime: 2022-07-28 17:45:11
 */
import { cloneDeep } from 'lodash'
// 处理日期格式
export function parseTime(time: any, pattern: string) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time)
    } else if (typeof time === 'string') {
      time = time.replace(new RegExp(/\//gm), '--')
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000
    }
    date = new Date(time)
  }

  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  } as any
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/gi, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

// 添加日期范围
export function addDateRange(params: any, dateRange: any, propName: any) {
  var search = cloneDeep(params)
  if (null != dateRange && '' != dateRange) {
    if (!propName) {
      propName = 'createTime'
    }
    search[propName + '_begin'] = parseTime(dateRange[0], '{y}-{m}-{d}')
    search[propName + '_end'] = parseTime(dateRange[1], '{y}-{m}-{d}')
  }
  return search
}

//搜索框模糊查询参数加工
export function fuzzyQuery(text, type) {
  switch (type) {
    case 'like': // 模糊查询
      if (text === undefined) {
        text = ''
      }
      text = '*' + text + '*'
      break
    case 'ne': // 不等于
      text = '!' + text
      break
    case 'ge': //大于等于
      text = '>=' + text
      break
    case 'le': //小于等于
      text = '<=' + text
      break
    default:
  }
  return text
}

// 参数模糊查询集成方法
export function paramsFuzzyQuery(params, props: Array<{ prop: string; type: string }>) {
  params = cloneDeep(params)
  props.forEach((ele) => {
    if (params[ele.prop] !== undefined) {
      params[ele.prop] = fuzzyQuery(params[ele.prop], ele.type)
    }
  })
  return params
}

// 动态获取静态资源 优
export function getAssetSrc(name: string) {
  return new URL(`/src/assets/${name}`, import.meta.url).href
}

// 多级属性查找
export function getDeepValue(key: any[] | string, data) {
  if (JSON.stringify(data) == '{}' && !key && !key.length) {
    return false
  }

  if (typeof key === 'string') {
    const part = / *.(svg|jpg|png|ico|gif|webp)/i
    if (part.test(key)) {
      return false
    }
    key = key.split('.')
  }

  if (Array.isArray(key)) {
    if (key.length > 1) {
      return getDeepValue(key, data[key.shift()])
    } else {
      return data[key[0]]
    }
  }
}

// 处理表格没数据时 显示 --
export function noDataFormatter(e) {
  if (e) {
    return e
  } else {
    return '--'
  }
}
// 处理下拉多选框 选对应的字段 赋值为1
export function multipleOne(arr, filterType) {
  if (arr.length) {
    const one = arr.indexOf('ischainLen')
    const two = arr.indexOf('isnotchainLen')
    const three = arr.indexOf('isInchain')
    const four = arr.indexOf('isOutchain')
    const five = arr.indexOf('isdomeAdv')
    const six = arr.indexOf('isabrdAdv')
    if (one !== -1) {
      filterType.ischainLen = '1'
    } else {
      filterType.ischainLen = ''
    }
    if (two !== -1) {
      filterType.isnotchainLen = '1'
    } else {
      filterType.isnotchainLen = ''
    }
    if (three !== -1) {
      filterType.isInchain = '1'
    } else {
      filterType.isInchain = ''
    }
    if (four !== -1) {
      filterType.isOutchain = '1'
    } else {
      filterType.isOutchain = ''
    }
    if (five !== -1) {
      filterType.isdomeAdv = '1'
    } else {
      filterType.isdomeAdv = ''
    }
    if (six !== -1) {
      filterType.isabrdAdv = '1'
    } else {
      filterType.isabrdAdv = ''
    }
  } else {
    filterType = {
      ischainLen: '',
      isnotchainLen: '',
      isInchain: '',
      isOutchain: '',
      isdomeAdv: '',
      isabrdAdv: ''
    }
  }

  return filterType
}

// 获取当前时间
const curDate = new Date()
export function getCurTime() {
  let yy = curDate.getFullYear()
  let mm = curDate.getMonth() + 1
  let dd = curDate.getDate()
  let hh = curDate.getHours()
  let mf = curDate.getMinutes() < 10 ? '0' + curDate.getMinutes() : curDate.getMinutes()
  // let time = yy + '--' + mm + '--' + dd + ' ' + hh + ':' + mf
  let time = yy + '--' + mm + '--' + dd
  return time
}

// 搜索结果 关键字高亮
export function brightenKeyword(val, keyword) {
  const Reg = new RegExp(keyword, 'i')
  if (val) {
    return val.replace(Reg, `<span style="background-color: #f00;">${keyword}</span>`)
  } else {
    return ''
  }
}

// 下载

export const disabledDate = (time: Date) => {
  return time.getTime() > Date.now()
}
