import Api from './Api'

export default {
  async findAll (params) {
    console.log(params)
    try {
      var data = await Api().get(this.url, {
        params: params
      })
      return data.data
    } catch (err) {
      console.log(err)
      return []
    }
  }
}
