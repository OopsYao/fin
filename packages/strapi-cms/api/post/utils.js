const removeMd = require('remove-markdown')

module.exports = {
  excerpt: (fulltext) => {
    // Make sure it is string
    fulltext = String(fulltext)

    // Remove head
    const match = fulltext.match(/#.+[\r\n]/)
    let headless = fulltext
    if (match) {
      const { index } = match
      const [head] = match
      headless = fulltext.substr(index + head.length)
    }

    // Remove markdown format
    let plaintext = removeMd(headless)

    // Remove linebreak and trim
    plaintext = plaintext.replace(/[\r\n]/g, '').trim()

    // 55 characters at most
    return plaintext.substr(0, 55)
  },
}
