const { models } = require('../database/connectDb')

export const getAllCategories = (req, res) => {
  models.category.findAll({
    attributes: ['id', 'name']
  })
  .then(categories=> {
    res.send({
      data: categories,
      errors: null
    })
  })
  .catch(e=>{
    res.send({
      data: null,
      errors: ['Error fetching all categories']
    })
  })
}