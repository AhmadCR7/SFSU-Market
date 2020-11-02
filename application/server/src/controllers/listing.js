const { models } = require('../database/connectDb')
const Sequelize = require('sequelize')

let backupListings

export const getListings = (req, res) => {
  const category = req.query.category

  // hold some listings as backup in case of no results (always show user something)
  if (!backupListings) {
    models.listing
      .findAll({ limit: 10 })
      .then((listings) => {
        backupListings = listings
      })
      .catch((e) => console.error('Error getting backupListings.'))
  }

  // search with a query
  if (req.query.searchQuery) {
    const search = req.query.searchQuery
    // search with JUST a query.
    if (category === 'all') {
      models.listing
        .findAll({
          where: {
            title: { [Sequelize.Op.substring]: search },
          },
        })
        .then((listings) => {
          checkIfBackupNeededAndSendListings(backupListings, listings, res)
        })
        .catch((e) => {
          sendErrorArray(
            `Error finding listings with the search parameter of: ${search}`,
            res
          )
        })
      return
    }

    let categoryId
    // search with query and category selected
    models.category
      .findOne({
        where: {
          name: category,
        },
      })
      .then((category) => {
        categoryId = category.id
        return models.listing.findAll({
          where: {
            title: { [Sequelize.Op.substring]: req.query.searchQuery },
            categoryId,
          },
        })
      })
      .then((listings) => {
        checkIfBackupNeededAndSendListings(backupListings, listings, res)
      })
      .catch((e) => {
        sendErrorArray('Error fetching listing of specified category', res)
      })
    return
  }

  // search with just a category
  if (category === 'all') {
    models.listing
      .findAll()
      .then((listings) => {
        res.send({
          data: listings,
          errors: null,
        })
      })
      .catch((e) => {
        sendErrorArray('Error fetching all listings', res)
      })
    return
  } else {
    models.category
      .findOne({
        where: {
          name: category,
        },
      })
      .then((category) => {
        return category.id
      })
      .then((categoryId) => {
        return models.listing.findAll({ where: { categoryId } })
      })
      .then((listings) => {
        checkIfBackupNeededAndSendListings(backupListings, listings, res)
      })
      .catch((e) => {
        sendErrorArray(
          `Error fetching all listings of category: ${category}`,
          res
        )
      })
    return
  }
}

const checkIfBackupNeededAndSendListings = (backupListings, listings, res) => {
  if (listings.length === 0) {
    res.send({
      data: backupListings,
      errors: null,
    })
  } else {
    res.send({
      data: listings,
      errors: null,
    })
  }
}

const sendErrorArray = (errorString, res) => {
  res.send({
    data: [],
    errors: [errorString],
  })
}
