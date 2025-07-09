//Задача № 1
function cachingDecoratorNew(func) {
  const cache = []
  return function (...args) {
    const argsString = JSON.stringify(args)
    const hash = md5(argsString)
    const cacheItemIndex = cache.findIndex((item) => item.hash === hash)
    if (cacheItemIndex !== -1) {
      console.log(`Из кеша: ${cache[cacheItemIndex].result}`)
      return `Из кеша: ${cache[cacheItemIndex].result}`
    } else {
      const result = func(...args)
      console.log(`Вычисляем: ${result}`)
      cache.push({ hash, result })
      if (cache.length > 5) {
        cache.shift()
      }
      return `Вычисляем: ${result}`
    }
  }
}

//Задача № 2
function debounceDecoratorNew(func, interval) {
  let timeoutId = null
  let lastArgs = null
  let lastContext = null
  let lastCallTime = 0

  const wrapper = function (...args) {
    if (wrapper.allCount === undefined) wrapper.allCount = 0
    if (wrapper.count === undefined) wrapper.count = 0

    wrapper.allCount++

    const now = Date.now()

    if (lastCallTime === 0) {
      func.apply(this, args)
      wrapper.count++
      lastCallTime = now
      return
    }

    if (now - lastCallTime >= interval) {
      func.apply(this, args)
      wrapper.count++
      lastCallTime = now
    } else {
      lastArgs = args
      lastContext = this
      if (timeoutId !== null) {
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(() => {
        func.apply(lastContext, lastArgs)
        wrapper.count++
        lastCallTime = Date.now()
        timeoutId = null
      }, interval)
    }
  }

  wrapper.totalCalls = 0
  wrapper.allCount = 0
  wrapper.count = 0
  return wrapper
}