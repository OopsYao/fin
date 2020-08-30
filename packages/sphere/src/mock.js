import Mock from 'mockjs'

// Check each API entry
const enabled = process.env.REACT_APP_MOCK // This env is defined in .env.development.local
const mockCheck = (reg) => enabled && reg.test(enabled)

const listTemplate = (repeat, itemTemplate) => {
  const wrapper = Mock.mock({
    [`data|${repeat}`]: [itemTemplate],
  })
  return wrapper.data
}

mockCheck(/post/) &&
  Mock.mock(
    /posts/,
    listTemplate(6, {
      'id|+1': 1,
      title: '@ctitle',
      content: '@cparagraph',
      image: '@image(679x380)',
    }),
  )
