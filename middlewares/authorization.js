const { Comment } = require('../models');

async function isUserOwnComment(req, res, next) {
    try {
        const userId = req.UserId;
        const params = req.params;
        const ArtikelId = params.id;

        const comment = await Comment.findOne({ where: { id: ArtikelId } });

        if (comment && comment.UserId == userId) {
            next();
        } else {
            throw new Error({msg: "Bukan Punya Anda!"});
        }
    } catch (error) {
        next(error);
    }
}

module.exports = isUserOwnComment;

