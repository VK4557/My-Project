import client from "./client"

const endPoint= '/users?page=2'
const getData = () => client.get(endPoint)

const addData= (listing, onUploadProgress) => {
    const data=new FormData;
    // data.append('name',
    // {   title: listing.title, 
    //     subTitle: listing.subTitle,
    //     price: listing.price
    // });
    // data.append('job',
    // {
    //     categories: listing.categories,
    //     images: listing.images
    // })
    data.append('name',listing.title)
    data.append('job',listing.subTitle)
    return client.post('/users',data,{
        onUploadProgress: (progress)=> onUploadProgress(progress.loaded/progress.total)
    });
}

export default {
    getData,
    addData
}