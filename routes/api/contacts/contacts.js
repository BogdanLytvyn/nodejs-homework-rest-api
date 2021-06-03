const express = require('express')
const router = express.Router()
const validate = require('./validation')
const contactController = require('../../../controllers/contacts')
const guard = require('../../../helpers/guard')

router.get('/', guard, contactController.getAllContacts)
router.post('/', guard, validate.createContact, contactController.addContact)
router.get('/:id', guard, contactController.getContactById)
router.delete('/:id', guard, contactController.deleteContact)
router.patch('/:id', guard, validate.updateContact, contactController.updateContact)

module.exports = router
