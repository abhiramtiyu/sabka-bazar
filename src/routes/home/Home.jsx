import React, { useEffect, useState } from 'react';
import Carousal from '../../Component/carousal/Carousal';
import HomeCatagory from '../../Component/homecatagory/HomeCatagory';
import {urlList,getchApi} from  "../../utility/service"
const Home=()=>{
    const [banners, setBanners] =useState([])
    const [homeCategory,setHomeCategory] = useState([])
    const getBanners = async ()=>{
        try{
            const response = await getchApi(urlList.Banner);
            setBanners( response)
        }catch(e){
           console.log("Api failed")
        }
    }
    const getProduct = async ()=>{
        try{
            const response = await getchApi(urlList.categories);
            setHomeCategory(response)
        }catch(e){
           console.log("Api failed")
        }
    }

    useEffect(()=>{
        getBanners();
        getProduct();
    },[])


    return(
        <>
        <div className='page-annime'>
            <Carousal banners={banners}/>
            <HomeCatagory homeCategory={homeCategory}/>
        </div>
        </>
    )
}
export default Home;