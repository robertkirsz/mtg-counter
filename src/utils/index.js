import _ from 'lodash'

export const ascendingBy = (key) => (a, b) => a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0

export const descendingBy = (key) => (a, b) => a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0

// Returns random number from the min - max range
export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Returns random date object
export const getRandomDate = (start, end, startHour, endHour) => {
  const date = new Date(+start + Math.random() * (end - start))
  const hour = startHour + Math.random() * (endHour - startHour) | 0
  date.setHours(hour)
  return date
}

// Finds element by it's ID in an array and returns it's index and contents
export const getObject = (elements, elementId, searchBy = 'id') => {
  const elementIndex = _.findIndex(elements, element => element[searchBy] === elementId)

  return {
    index: elementIndex,
    data: elements[elementIndex]
  }
}

// recursively deletes all object props which are empty objects
export const deleteEmptyObjects = (obj = {}) => {
  const output = Array.isArray(obj) ? obj.slice() : Object.assign({}, obj)
  if (_.isEmpty(obj)) {
    return obj
  } else {
    for (let key in obj) {
      if (typeof obj[key] === 'object') {
        if (_.isEmpty(obj[key])) {
          delete output[key]
        } else {
          output[key] = deleteEmptyObjects(output[key])
        }
      }
    }
  }
  return output
}

// recursively deletes all the props/keys specified from object
// As 'keys' accepts array of strings or string
export const removeKeys = (obj = {}, keys = []) => {
  keys = Array.isArray(keys) ? keys : [keys]
  keys.forEach((key) => {
    if (obj) {
      delete obj[key]
      for (const prop in obj) {
        if (Array.isArray(obj[prop])) {
          obj[prop].forEach((arrayItem) => {
            removeKeys(arrayItem, [key])
          })
        } else if (typeof obj[prop] === 'object') {
          removeKeys(obj[prop], [key])
        }
      }
    }
  })
  return obj
}

// checks if one node is contained in another
export const isContainedIn = (target, container) => {
  let node = target
  while (node) {
    if (node === container) {
      return true
    }
    node = node.parentNode
  }
  return false
}

export const isNotEmptyArray = (variable) => (
  !!(Array.isArray(variable) && variable.length)
)

// Returns object with pressed key info
export const keyboardKeys = (e) => {
  const keys = {}

  switch (e.keyCode) {
    case 37: keys.left  = true; break
    case 38: keys.up    = true; break
    case 39: keys.right = true; break
    case 40: keys.down  = true; break
    case 9:  keys.tab   = true; break
    case 13: keys.enter = true; break
    case 27: keys.esc   = true; break
    case 8:  keys.bkspc = true; break
    default: break
  }

  if (e.shiftKey && keys.tab) {
    keys.shiftTab = true
    _.unset(keys, 'tab')
  }

  return keys
}

// Blurs any focused element
export const blurEverything = () => {
  if ('activeElement' in document) document.activeElement.blur()
}

export const stringify = (json) => {
  return JSON.stringify(json, null, 2)
}

export const bindMethods = classInstance => Object.getOwnPropertyNames(Object.getPrototypeOf(classInstance))
    .filter(property => typeof classInstance[property] === 'function')
    .forEach(method => classInstance[method] = classInstance[method].bind(classInstance))

export const arraysEqual = (a, b) => {
  if (a === b) return true
  if (a == null || b == null) return false
  if (a.length != b.length) return false

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false
  }

  return true
}

export const saveGameState = (state) => {
  localStorage.setItem('MtgCounterGameState', JSON.stringify(state))
  return state
}
