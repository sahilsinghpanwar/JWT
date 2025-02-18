// const asynchandler = () => {}




export {asynchandler}

// function ko further ek function kai under pass kr deya
const asynchandler = (fn) => async(req, res, next) => {
    try {
        await(req, res, next);
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message,
        })
    }
}