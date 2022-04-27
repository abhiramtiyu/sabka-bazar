export const urlList = {
    "Banner" :  "http://localhost:4000/banners",
    "products" : "http://localhost:4000/products",
    "categories": "http://localhost:4000/categories",
    "addToCart": "http://localhost:4000/addToCart"
}

export const getchApi=(apiUrl)=>
    {return fetch(apiUrl)
    .then((response)=> response.json())
    .then(data=>data)
}
export const postApi=(apiUrl)=>
    {return fetch(apiUrl,{
        method:"POST"
    })
    .then((response)=> response.json())
    .then(data=>data)}
