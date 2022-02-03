import umiRequestCancel from 'easy-umi-request-cancel'
import umiReq from 'umi-request'

console.log(umiRequestCancel)

umiReq.use(umiRequestCancel)

const get = () => umiReq.get('http://localhost:3000', {
  // signal
  cancelKey: 'cancelKey1'
})

for (let index = 0; index < 5; index++) {
  get()
}