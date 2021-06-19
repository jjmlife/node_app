const errorType = require('../constants/error-type')
const service = require('../service/moment.service')

class MomentController {
    async create(ctx, next) {
        const {id, name} = ctx.user;
        const {content} = ctx.request.body;
        if(!content) {
            const error = new Error(errorType.MOMENT_CONTENT_IS_REQUIED)
            return ctx.app.emit('error', error, ctx)
        }
        const ret = await service.create(id,content)
        ctx.body = global.resHandle('moment create success ~')
    }

    async query(ctx, next) {
        const {id} = ctx.user;
        const {page_size, page} = ctx.request.body;
        const ret = await service.query(id, page_size,page)
  
        ctx.body = global.resHandle(ret)
    }

    async deleteMoment(ctx, next) {
        const {momentId} = ctx.request.body;
        const ret = await service.deleteById(momentId)

        ctx.body = global.resHandle('delete moment success~')
    }

    async update(ctx, next) {
        const {id, content} = ctx.request.body;
        const ret = await service.upate(id, content)

        ctx.body = global.resHandle('update moment success~')
    }
}

module.exports = new MomentController()