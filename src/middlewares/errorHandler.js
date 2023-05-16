export default function errorHandler(err, req, res, next){
    console.log(err);
    return res.json({
        status: 500,
        method: req.method,
        path: req.url,
        response: err.message
    })
}