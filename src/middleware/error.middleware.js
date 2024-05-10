import EErros from "../services/errors/enums.js";
import logger from "../logger.js";

export default (error, req, res, next) => {
    logger.error(error.cause)

    switch(error.code) {
        case EErros.INVALID_TYPES_ERROR:
            res.status(400).send({ status: 'error', error: error.name, cause: error.cause });
            break
        default:
            res.send({ status: 'error', error: 'Unhandled error' })
            break
    }
}