const { Option } = require('../models')

module.exports = {
  async create (req, res) {
    try {
      const option = await Option.create(req.body)
      const optionJson = option.toJSON()
      res.send({option: optionJson})
    } catch (err) {
      res.status(400).send({
        error: 'There was an error trying to create the Option!'
      })
    }
  },

  async update (req, res) {
    const id = parseInt(req.params.id)
    try {
      const arrResult = await Option.update({
        description: req.body.description
      }, {
        where: {id: id}
      })

      if (arrResult[0] === 0) {
        res.status(404).send({
          error: 'Option not found!'
        })
      } else {
        const option = await Option.findById(id)
        res.send({option: option.toJSON()})
      }
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'There was an error trying to udpate the Option!'
      })
    }
  },

  async findAll (req, res) {
    try {
      let listdata = null

      if (req.query.search) {
        const search = req.query.search
        listdata = await Option.findAll({
          where: {
            description: {
              $like: `%${search}%`
            }
          }
        })
      } else {
        listdata = await Option.findAll()
      }

      res.send({
        data: listdata,
        count: listdata.length
      })
    } catch (err) {
      res.status(400).send({
        error: `Can't list all the options`
      })
    }
  },

  async delete (req, res) {
    const id = parseInt(req.params.id)
    try {
      const option = await Option.findById(id)

      if (option) {
        const deleted = await option.destroy()
        res.send({
          option: deleted.toJSON(),
          deleted: true
        })
      } else {
        res.status(404).send({
          error: 'Option not found'
        })
      }
    } catch (err) {
      res.status(400).send({
        error: `Can't delete the option!`
      })
    }
  },

  async findById (req, res) {
    const id = parseInt(req.params.id)
    try {
      const option = await Option.findById(id)
      if (option) {
        res.send({
          option: option.toJSON()
        })
      } else {
        res.status(404).send({
          error: 'Option not found'
        })
      }
    } catch (err) {
      res.status(400).send({
        error: `Can't load the option!`
      })
    }
  }

}
