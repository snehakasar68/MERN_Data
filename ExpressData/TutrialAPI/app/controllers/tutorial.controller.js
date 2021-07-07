const db=require("../models");
const Tutorial=db.tutorials;
exports.create=(req,res)=>{
    if(!req.body.title){
        res.status(400).send({message:"Content can not be empty!!"})
        return;
    }
    console.log("Im in post ")
    console.log(req.body.title)
    console.log(req.body.description)
    console.log(req.body.published)

    const tutorial=new Tutorial({
        title:req.body.title,
        description:req.body.description,
        published:req.body.published?req.body.published:false
    });
    
    tutorial.save(tutorial).then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "Some error occurred while creating the tutorials"
        })
    })
};
exports.findAll=(req,res)=>{
    const title=req.query.title;
    var condition=title?{title:{$regex:new RegExp(title),$options:"i"}}:{}
    Tutorial.find(condition)
    .then((data)=>{
        res.send(data)
    }).catch(err=>{
        res.status(500).send({
            message:err.message || "Some error occurred while retriving tutorilas"
        })
    })

}
exports.findOne=(req,res)=>{
    const id=req.params.id;
    Tutorial.findById(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:"Not found tutorial with id:"+id})

        }
        else res.send(data);
    }).catch(err=>{
        res.status(500).send({message:"Error..!! while retrieving data"});
    })
}
exports.update=(req,res)=>{
    const id=req.params.id;
    if(!req.body){
        return res.status(400).send({message:"Data can't be empty while update"})
    }
    Tutorial.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(400).send({
                message:`Cannot update tutorial with id:${id}`
            })
        }
        else{
         res.send("Tutorial updated successfully")       
        }
    }).catch(err=>{
        res.status(500).send({
            message:"Error While updating..!!"
        })
    })
}
exports.delete=(req,res)=>{
    const id=req.params.id;
    Tutorial.findByIdAndRemove(id,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404).send({
                message:`Cannot delete tutorial with id:${id}`
            })
        }
        else{
            res.send({
                message:"Tutorial was deleted successfully..!!"
            })
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:"Could not delete tutorial with id:"+id
        })
    })
}
exports.deleteAll=(req,res)=>{
Tutorial.deleteMany({})
.then(data=>{
    res.send({
        message:`${data.deletedCount} Tutorials were deleted successfully..!!`
    })
})
.catch(err=>{
    res.status(500).send({
        message:"Some error occured while deleting.!"
    })
})
}