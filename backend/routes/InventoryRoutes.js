const express = require('express')
const { VerifyCookie } = require('../middlewares/UserAuth')
const { HandleGetInventory, HandleAddInventory, HandleUpdateInventory, HandleDeleteInventory } = require('../controller/InventoryControl')


const InventortRoutes = express.Router()



InventortRoutes.get('/getInventory',VerifyCookie, HandleGetInventory)
InventortRoutes.post('/postInventory', VerifyCookie,HandleAddInventory)
InventortRoutes.put('/updateInventory/:id', VerifyCookie,HandleUpdateInventory)
InventortRoutes.delete('/deleteInventory/:id',VerifyCookie,HandleDeleteInventory)


module.exports={InventortRoutes}