const{Todo} =require('../models')

class todosController{
    static async getall(req,res,next){
        try{
            const data= await Todo.findAll({where : {status: 'active'}});
            res.status(200).json(data)
        }catch (err){
            next(err)

        }
    }
    static getByid = async(req,res,next)=>{
        const {id} =  req.params;
        try{            
            const data =  await Todo.findByPk(id);
            if(!data) throw(console.log("data tidak ada "))       
            res.status(200).json(data)  
            }catch(error){
            next(error)
            
        }
    }
    static create = async(req,res,next)=>{
        const {title,status} =  req.body;
        try{
            const data = await Todo.create(
                {
                    title,
                    status
                });
            res.status(201).json(data)

        }catch(error){
            next(error)
            
        }
    }
    static delete = async(req,res,next)=>{
        const {id}= req.params;
        try{
            await Todo.update({status : 'inactive'},
            {where: {id}})
            res.status(201).json({message :"succes update"})
        }catch(error){
            next(error)
            
        }
    }
}

module.exports = todosController