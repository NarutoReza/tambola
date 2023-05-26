const Model = require('../Model/Model')
const { generateTicket } = require('../Tambola')

exports.viewData = async(req, res) => {
    try{
        const viewData = await Model.find()
        res.json(viewData)
    }
    catch(err){
        message: err
    }
}

exports.viewSingleData= async(req, res) => {
    try{
        const viewSingleData = await Model.findById(req.params.postId)
        res.json(viewSingleData)
    }
    catch(err){
        message: err
    }
}

exports.viewSingleData2= async(req, res) => {
    const name = {"name": req.body.name}
    try{
        const posts = await Model.find(name)
        res.json(posts)
    }
    catch(err){
        message: err
    }
}

exports.addData = async(req, res) => {

    const tickets = generateTicket()

    const data = new Model({
        name: req.body.name,
        tickets: tickets
    })
    try{
        const addData = await data.save()
        res.json(addData)
    }
    catch(err){
        message: err
    }
}

// = async(req, res) => {
//     try{
        
//     }
//     catch(err){
//         message: err
//     }
// }