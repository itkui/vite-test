import registryAxiosCancel from 'easy-axios-cancel'
import axios from 'axios'

registryAxiosCancel(axios)

// const { signal } = abortCOntroller

const get = () => axios.get('http://localhost:3000', {
  // signal
})

for (let index = 0; index < 5; index++) {
  get()
}

export { };