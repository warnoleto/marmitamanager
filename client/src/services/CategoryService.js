import Api from './Api'

export default {
  async findAll (params) {
    var data = await Api().get(this.url, {
      params: params
    })
    return data.data
  }
}
