import Api from './Api'

export default {
  async findAll (params) {
    try {
      var data = await Api().get(this.url, {
        params: params
      })
      return data.data
    } catch (err) {
      console.log(err)
      return []
    }
  },

  create (category) {
    return Api().post('category', category)
  },

  update (id, category) {
    return Api().put(`category/${id}`, category)
  }
}
