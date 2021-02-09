import { data } from 'jquery';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCategories } from '../../admin/helper/adminapicall';
import '../../styles/Categories.scss';

const Categories = () => {
  const [categories, setCategories] = useState([])
  
  let arr = []
  useEffect(() => {
    preLoad();
  }, []);
  const preLoad = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        let position = 0;
        let arr = []
        data.map((item,index) => {
          if(!arr[position]){
            arr[position] = []
          }
          if(index === 0){
            arr[position].push(item)
          }
          else{
            if(index%4 === 0){
              position = position+1;
              arr[position] = []
              arr[position].push(item)
            }
            else{
              arr[position].push(item)
            }
          }
        })
        setCategories(arr)
      }
    });
  };
    return (
        <div className="categoties bg-light py-5">
          <div className="container">
            <h2 className="heading text-center mb-5">Categories</h2>
            <div className="row">
              <div className="col-lg-12">
                <div id="Carousel" className="carousel slide">
                  <div className="carousel-inner">
                    { categories.map((category, ind) => {
                      return (
                        <div className={"item carousel-item " + (ind === 0 ? 'active' : '')}   key={ind}>
                          <div className="row">
                           {category.map((cat,indx) => {
                              return(
                                <div className="col-lg-3" key={indx}>
                                  <Link to="/" className="category-block">
                                    {cat.name} <br></br>Collection
                                  </Link>
                                </div>
                              )
                           })}
                          </div>
                      </div>
                      )
                    })}
                  </div><a data-slide="prev" href="#Carousel" className="left carousel-control">&#x2039;</a>
                  <a data-slide="next" href="#Carousel" className="right carousel-control">&#x203A;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Categories


// const data = [1,2,3,4,5,5,6,5,3];

// arr = []
// pos = 0

// data.map((item,indx) => {
//   if(!arr[pos]){
//     arr[pos] = []
//   }
//   if(indx%4 === 0) {
//     arr[pos].push(item)
//     pos =  pos+1;
//   }
//   else{
//     arr[pos].push(item)
//   }
// })
// console.log(arr)
 
// arr = [[1,2,3,4], [,3,3,3,3], []]