const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const message = err.errors && err.errors[0] ? err.errors[0].message : 'Unknown error';
        const status = 422; 
        console.log(message);
        const error = {
            status,
            message,
            
        };
        next(error);
        // res.status(400).json({ msg: message });

    }
};

module.exports = validate;  //export validate function to be used in other files.