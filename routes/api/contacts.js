const express = require('express')
const router = express.Router()
const contactsController = require('../../controllers/contacts')
const validate = require('../volidation/validation')

router
  .get('/', contactsController.listContacts)
  .post('/', validate.createContact, contactsController.addContact)

router
  .get('/:contactId', contactsController.getContactById)
  .delete('/:contactId', contactsController.removeContact)
  .patch(
    '/:contactId',
    validate.updateContact,
    contactsController.updateContact,
  )
router.patch(
  '/:contactId/favorite',
  validate.validateStatusContact,
  contactsController.updateStatusContact
)

module.exports = router
