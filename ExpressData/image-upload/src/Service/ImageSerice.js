import axios from 'axios'
const url="http://localhost:4000/image"

class ImageSerice {
saveImage(imgurl){
return axios.post(`${url}`,{imgurl})
}
getImage(){
    return axios.get(`${url}`)
}
}

export default new ImageSerice();