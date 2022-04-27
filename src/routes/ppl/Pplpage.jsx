import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/esm/Row';
import '../../Component/ppl/ppl.scss'
import Pplsidebar from '../../Component/ppl/Pplsidebar';
import Pplproduct from '../../Component/ppl/Pplproduct';
import {memo, useState,useEffect} from 'react';
import {urlList,getchApi} from  "../../utility/service"

const Pplpage=()=>{
    const [catagory,setCatagory] = useState([]);
    const [product,setProduct] = useState([]);
    const [filteredProduct,setFilteredProduct] = useState([]);
    const [msg,setMsg] = useState(false);
    const getCategory = async ()=>{
        try{
            const response = await getchApi(urlList.categories);
            setCatagory(response)
        }catch(e){
           console.log("Api failed")
        }
    }
    const getProducList = async ()=>{
        try{
            const response = await getchApi(urlList.products);
            setProduct(response)
            setFilteredProduct(response)
        }catch(e){
           console.log("Api failed")
        }
    }
    useEffect(()=>{
        getCategory();
        getProducList();
    },[])
    const sortCatagory=(catItem)=>{
        const filterResult = product.filter((current)=>{
            return current.category === catItem
        })
        setFilteredProduct(filterResult);
        setMsg(false);
        if(filterResult.length==0){
            setMsg(true);
        }
    }
    return(
        <>
          <Container className='page-annime'>
              <Row>
                  <Pplsidebar catagory={catagory} sortCatagory={sortCatagory}></Pplsidebar>
                  <Pplproduct product={filteredProduct} msg={msg}></Pplproduct>
              </Row>
          </Container>
        </>
    )
}
export default memo(Pplpage);