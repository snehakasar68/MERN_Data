import React, { Component } from 'react'
import ImageSerice from './Service/ImageSerice'

 class FileUploading extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             imgurl:null,
             imgALT:null,
             images:[]
        }
    }
    imgDisplay=(e)=>{
        e.preventDefault()
        ImageSerice.getImage().then(res=>{
           
            this.setState({
                images:res.data
            })
            console.log(this.state.images)
        })
    }
    imgUploadHandler=(e)=>{
        e.preventDefault()
        const {files}=document.querySelector('input[type="file"]')
        const formData=new FormData();
        formData.append('file',files[0])
        formData.append('upload_preset',"rpapxknl")
        const options={
            method:"POST",
            body:formData
        }
        return fetch('https://api.Cloudinary.com/v1_1/dnncq77ue/image/upload',options)
        .then(res=>res.json()).then(res=>{
            console.log(res)
            this.setState({
                imgurl:res.secure_url
            })
            console.log(this.state.imgurl);
            ImageSerice.saveImage(this.state.imgurl).then(res=>{
                console.log(res);
            }).catch(err=>{console.log(err);})
          
        }).catch(err=>console.log(err))
        
    }
    render() {
        const {imgALT,imgurl,images}=this.state
        return (
            <form><br></br>
             <div className="form-group"><br></br>
            <input type="file"/>   <br></br>     
            </div>
            <button className="btn" onClick={this.imgUploadHandler}>upload</button>
            <button className="btn" onClick={this.imgDisplay}>Display</button>
            <br></br><p>image </p>
            {
                imgurl && (<img src={imgurl} style={{height:"50px",weight:"50px"}} alt={imgALT} className="display-image" />)
            }
            {
                images.map(img=>{
                    return(
                        <img src={img.imgurl} style={{height:"50px",weight:"50px"}} alt="cant display" />
                    )
                })
            }
            </form>
            
        )
    }
}

export default FileUploading
