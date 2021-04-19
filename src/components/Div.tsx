import styled, { css } from 'styled-components'

type DuoType = number | string
type TrioType = DuoType | boolean

function withUnit(value: DuoType) {
  return typeof value === 'number' ? value + 'px' : value
}

const layerStyles = 'position: absolute; top: 0; right: 0; bottom: 0; left: 0;'

const createList = (cb: (v: string) => {}) => (value: TrioType) => {
  if (value === false) return ''
  const _value = typeof value === 'boolean' ? '8px' : withUnit(value)
  return cb(_value)
}

const stuff = {
  // flex-direction
  row: 'flex-direction: row;',
  rowReverse: 'flex-direction: row-reverse;',
  column: 'flex-direction: column;',
  columnReverse: 'flex-direction: column-reverse;',
  wraps: 'flex-wrap: wrap;',
  // justify-content
  justifyStart: 'justify-content: flex-start;',
  justifyEnd: 'justify-content: flex-end;',
  justifyCenter: 'justify-content: center;',
  justifyBetween: 'justify-content: space-between;',
  justifyAround: 'justify-content: space-around;',
  justifyEvenly: 'justify-content: space-evenly;',
  // align-items
  itemsStart: 'align-items: flex-start;',
  itemsEnd: 'align-items: flex-end;',
  itemsCenter: 'align-items: center;',
  itemsBaseline: 'align-items: baseline;',
  itemsStretch: 'align-items: stretch;',
  // align-content
  contentStart: 'align-content: flex-start;',
  contentEnd: 'align-content: flex-end;',
  contentCenter: 'align-content: center;',
  contentBetween: 'align-content: space-between;',
  contentAround: 'align-content: space-around;',
  contentStretch: 'align-content: stretch;',
  // Self-positioning
  flex: (value: DuoType) => `flex: ${value};`,
  flexNone: 'flex: none;',
  selfAuto: 'align-self: auto;',
  selfStart: 'align-self: flex-start;',
  selfEnd: 'align-self: flex-end;',
  selfCenter: 'align-self: center;',
  selfBaseline: 'align-self: baseline;',
  selfStretch: 'align-self: stretch;',
  // Size
  width: (value: DuoType) => `width: ${withUnit(value)};` /* Tested */,
  height: (value: DuoType) => `height: ${withUnit(value)};` /* Tested */,
  minWidth: (value: DuoType) => `min-width: ${withUnit(value)};` /* Tested */,
  minHeight: (value: DuoType) => `min-height: ${withUnit(value)};` /* Tested */,
  maxWidth: (value: DuoType) => `max-width: ${withUnit(value)};` /* Tested */,
  maxHeight: (value: DuoType) => `max-height: ${withUnit(value)};` /* Tested */,
  // Margin
  margin: (value: DuoType) => `margin: ${withUnit(value)};` /* Tested */,
  marginTop: (value: DuoType) => `margin-top: ${withUnit(value)};` /* Tested */,
  marginRight: (value: DuoType) => `margin-right: ${withUnit(value)};` /* Tested */,
  marginBottom: (value: DuoType) => `margin-bottom: ${withUnit(value)};` /* Tested */,
  marginLeft: (value: DuoType) => `margin-left: ${withUnit(value)};` /* Tested */,
  mTop: (value: DuoType) => `margin-top: ${withUnit(value)};`,
  mRight: (value: DuoType) => `margin-right: ${withUnit(value)};`,
  mBottom: (value: DuoType) => `margin-bottom: ${withUnit(value)};`,
  mLeft: (value: DuoType) => `margin-left: ${withUnit(value)};`,
  // Padding
  padding: (value: DuoType) => `padding: ${withUnit(value)};` /* Tested */,
  paddingTop: (value: DuoType) => `padding-top: ${withUnit(value)};` /* Tested */,
  paddingRight: (value: DuoType) => `padding-right: ${withUnit(value)};` /* Tested */,
  paddingBottom: (value: DuoType) => `padding-bottom: ${withUnit(value)};` /* Tested */,
  paddingLeft: (value: DuoType) => `padding-left: ${withUnit(value)};` /* Tested */,
  pTop: (value: DuoType) => `padding-top: ${withUnit(value)};`,
  pRight: (value: DuoType) => `padding-right: ${withUnit(value)};`,
  pBottom: (value: DuoType) => `padding-bottom: ${withUnit(value)};`,
  pLeft: (value: DuoType) => `padding-left: ${withUnit(value)};`,
  // Background
  background: (value: string) => `background: ${value};`,
  backgroundImage: (value: string) => `background-image: url(${value});`,
  cover: 'background-size: cover;',
  contain: 'background-size: contain;',
  // Border
  border: (value: string) => `border: ${value};` /* Tested */,
  radius: (value: DuoType) => `border-radius: ${withUnit(value)};` /* Tested */,
  // Position
  relative: 'position: relative;',
  absolute: 'position: absolute;',
  fixed: 'position: fixed;',
  sticky: 'position: sticky;',
  top: (value: DuoType) => `top: ${withUnit(value)};`,
  right: (value: DuoType) => `right: ${withUnit(value)};`,
  bottom: (value: DuoType) => `bottom: ${withUnit(value)};`,
  left: (value: DuoType) => `left: ${withUnit(value)};`,
  z: (value: DuoType) => `z-index: ${value};`,
  // Text
  font: (value: string) => `font: ${value};` /* Tested */,
  fontFamily: (value: string) => `font-family: ${value};` /* Tested */,
  fontSize: (value: DuoType) => `font-size: ${withUnit(value)};` /* Tested */,
  fontWeight: (value: DuoType) => `font-weight: ${value};` /* Tested */,
  lineHeight: (value: DuoType) => `line-height: ${value};` /* Tested */,
  letterSpacing: (value: DuoType) => `letter-spacing: ${withUnit(value)};` /* Tested */,
  textAlign: (value: string) => `text-align: ${value};` /* Tested */,
  color: (value: string) => `color: ${value};` /* Tested */,
  // Lists
  listLeft: createList((value: string) => `> *:not(:first-child) { margin-left: ${value}; }`),
  listRight: createList((value: string) => `> *:not(:first-child) { margin-right: ${value}; }`),
  listTop: createList((value: string) => `> *:not(:first-child) { margin-top: ${value}; }`),
  listBottom: createList((value: string) => `> *:not(:first-child) { margin-bottom: ${value}; }`),
  columnTop: createList(
    (value: string) => `flex-direction: column; > *:not(:first-child) { margin-top: ${value}; }`
  ),
  columnBottom: createList(
    (value: string) => `flex-direction: column; > *:not(:first-child) { margin-bottom: ${value}; }`
  ),
  // Other
  overflow: (value: string) => `overflow: ${value};` /* Tested */,
  opacity: (value: number) => `opacity: ${value};`,
  // Helpers
  layer: layerStyles,
  square: (value: DuoType) =>
    value !== '' && `width: ${withUnit(value)}; height: ${withUnit(value)};`,
  fullHeight: 'min-height: 100vh;',
  hide: 'display: none;',
  circle: 'border-radius: 50%;',
  clickable: 'cursor: pointer;',
  noPointerEvents: 'pointer-events: none;',
  // TODO: Check if this props.absolute check works
  overlay: (value = 'red', props: any) => `
  position: ${(props.absolute && 'absolute') || 'relative'};
  &::after {
    content: "";
    ${layerStyles}
    background: ${value};
    opacity: 0.2;
    pointer-events: none;
  }`,
}

function camelToKebab(value: string) {
  if (typeof value !== 'string') return value
  return value.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}

// @ts-ignore
function memoize(func) {
  const cache = {}

  // @ts-ignore
  return (...args) => {
    const item = args[0]

    if (item in cache) {
      // @ts-ignore
      return cache[item]
    } else {
      const result = func(item)
      // @ts-ignore
      cache[item] = result
      return result
    }
  }
}

// @ts-ignore
const isDivProp = memoize(item => Object.keys(stuff).includes(item))

// @ts-ignore
function createCss(props) {
  // @ts-ignore
  return (previous, current) => {
    // @ts-ignore
    const stuffValue = stuff[current]
    const propValue = props[current]
    if (typeof stuffValue === 'string' && propValue) return `${previous}${stuffValue}`
    if (typeof stuffValue === 'function') return `${previous}${stuffValue(propValue, props)}`
    return previous
  }
}

function doStuff(props: any) {
  return Object.keys(props).filter(isDivProp).reduce(createCss(props), '')
}

function doMediaQueriesStuff(props = {}) {
  // @ts-ignore
  const { styledKitMediaQueries = {} } = props.theme || {}
  const queryNames = Object.keys(styledKitMediaQueries)

  if (!queryNames.length) return

  const queryNameToValuesMap = queryNames.reduce((all, query) => {
    // @ts-ignore
    const declaration = props[query]

    if (!declaration) return all

    if (typeof declaration === 'string') return { ...all, [query]: declaration }

    if (Array.isArray(declaration)) {
      return {
        ...all,
        [query]: declaration.reduce((all, property) => {
          // @ts-ignore
          const stuffProperty = stuff[property]
          if (typeof stuffProperty !== 'string') return all
          return `${all}${stuffProperty}`
        }, ''),
      }
    }

    return {
      ...all,
      [query]: Object.keys(declaration).reduce((all, property) => {
        const value = declaration[property]
        // @ts-ignore
        const stuffProperty = stuff[property]
        if (value === false) return all
        if (!stuffProperty) return `${all}${camelToKebab(property)}:${value};`
        return `${all}${
          typeof stuffProperty === 'function' ? stuffProperty(value, props) : stuffProperty
        }`
      }, ''),
    }
  }, {})

  // prettier-ignore
  return queryNames.reduce(
    (all, query) =>
      // @ts-ignore
      !queryNameToValuesMap[query]
        ? all
        // @ts-ignore
        : css`${all} ${styledKitMediaQueries[query]`${queryNameToValuesMap[query]}`}`, ''
  )
}

export type DivProps = {
  // Display
  block?: boolean
  inline?: boolean
  // flex-direction
  row?: boolean
  rowReverse?: boolean
  column?: boolean
  columnReverse?: boolean
  wraps?: boolean
  // justify-content
  justifyStart?: boolean
  justifyEnd?: boolean
  justifyCenter?: boolean
  justifyBetween?: boolean
  justifyAround?: boolean
  justifyEvenly?: boolean
  // align-items
  itemsStart?: boolean
  itemsEnd?: boolean
  itemsCenter?: boolean
  itemsBaseline?: boolean
  itemsStretch?: boolean
  // align-content
  contentStart?: boolean
  contentEnd?: boolean
  contentCenter?: boolean
  contentBetween?: boolean
  contentAround?: boolean
  contentStretch?: boolean
  // Self-positioning
  flex?: number | string
  flexNone?: boolean
  selfAuto?: boolean
  selfStart?: boolean
  selfEnd?: boolean
  selfCenter?: boolean
  selfBaseline?: boolean
  selfStretch?: boolean
  // Size
  width?: number | string
  height?: number | string
  minWidth?: number | string
  minHeight?: number | string
  maxWidth?: number | string
  maxHeight?: number | string
  // Margin
  margin?: number | string
  marginTop?: number | string
  marginRight?: number | string
  marginBottom?: number | string
  marginLeft?: number | string
  mTop?: number | string
  mRight?: number | string
  mBottom?: number | string
  mLeft?: number | string
  // Padding
  padding?: number | string
  paddingTop?: number | string
  paddingRight?: number | string
  paddingBottom?: number | string
  paddingLeft?: number | string
  pTop?: number | string
  pRight?: number | string
  pBottom?: number | string
  pLeft?: number | string
  // Background
  background?: string
  backgroundImage?: string
  cover?: boolean
  contain?: boolean
  // Border
  border?: string
  radius?: number | string
  // Position
  relative?: boolean
  absolute?: boolean
  fixed?: boolean
  sticky?: boolean
  top?: number | string
  right?: number | string
  bottom?: number | string
  left?: number | string
  z?: number | string
  // Text
  font?: string
  fontFamily?: string
  fontSize?: number | string
  fontWeight?: number | string
  lineHeight?: number | string
  letterSpacing?: number | string
  textAlign?: string
  color?: string
  // Lists
  listLeft?: boolean | number | string
  listRight?: boolean | number | string
  listTop?: boolean | number | string
  listBottom?: boolean | number | string
  columnTop?: boolean | number | string
  columnBottom?: boolean | number | string
  // Other
  overflow?: string
  opacity?: number
  // Helpers
  layer?: boolean
  square?: number | string
  fullHeight?: boolean
  hide?: boolean
  circle?: boolean
  clickable?: boolean
  noPointerEvents?: boolean
  overlay?: string
}

export default styled.div<DivProps>`
  display: ${({ block, inline }) =>
    block && inline ? 'inline-block' : block ? 'block' : inline ? 'inline-flex' : 'flex'};
  ${doStuff}
  ${doMediaQueriesStuff}
`
