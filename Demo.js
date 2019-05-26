import React, {Component} from 'react';
import Header from './components/Header';
import Product from './components/Product';

class Demo extends Component {
  render() {
    var products = [
      {
          id:1,
          name:'A',
          price:18,
          status:true
      },
      {
          id:2,
          name:'B',
          price:19,
          status:false
      },
      {
          id:3,
          name:'C',
          price:39,
          status:false
      }
  ];

  var elements=products.map((product,index)=>{
    let result='';
    if(product.status){
      result= <Product key={product.id} price={ product.price }> { product.name }</Product>
    }
    return result;
})

    return (
      <div>
        <Header />     
        <div className="row">       
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
             { elements }
             {/* <Product name="b" price="45"/> 
             <Product name="ac" price="45"/>  */}
             
          </div>
              
        </div>    
        
       </div>
     );
  }
}


export default Demo;
