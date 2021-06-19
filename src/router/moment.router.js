const Router = require('koa-router')
const {
    create,
    query,
    deleteMoment,
    update
} = require('../controller/moment.controller')
const {
    verifyAuth,
    verifyPermission
} = require('../middleware/auth.middleware')

const router = new Router({
    prefix: '/moment'
})


router.post('/create',verifyAuth, create)
router.get('/query', verifyAuth, query)
router.post('/delete',verifyAuth, verifyPermission,deleteMoment)
router.post('/update',verifyAuth, verifyPermission,update)

module.exports = router;
