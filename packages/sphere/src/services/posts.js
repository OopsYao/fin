// Here we use axios instead of fetch,
// partly because mockjs cannot detect the latter
import axios from 'axios'

const fetchPosts = async () => {
  const resp = await axios.get('posts')
  // TODO err handling
  return resp.data
}

export { fetchPosts }
