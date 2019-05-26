import React, {Component} from 'react';
import Header from './components/Header';
import Product from './components/Product';

class Demo extends Component {
  onClick1(){
    console.log('Day la 1');
  }

  onClick2(text){
    console.log(text);
  }

  onProduct= () => {
    console.log(this.refs.name1.value);
  }

  render() {
    var products = [
      {
          id:1,
          name: 'asdfadsf',
          price:18,
          status:true
      },
      {
          id:2,
          name:'asdf',
          price:19,
          status:true
      },
      {
          id:3,
          name:'aasd',
          price:39,
          status:true
      }
  ];

  var elements=products.map((product,index)=>{
    let result='';
    if(product.status){
      result=<Product key={product.id} price={ product.price }> { product.name }</Product>
    }
    return result;
})

    return (
      <div>
        <Header />     
        <div className="row">   
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">           
            
              <div className="form-group">
                <label>Ten SP: </label>
                <input type="text" ref="name1" />
              </div>           
              <button type="submit" className="btn btn-primary" onClick ={ this.onProduct }>Lưu</button>
                      
          </div>    
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
             { elements }
             
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
             
             <button type="button" className="btn btn-danger" onClick ={ this.onClick1 }>Click 1</button>
             <button type="button" className="btn btn-danger" onClick ={ () => {this.onClick2('Son') } }>Click 2</button>
             
          </div>
        </div>    
        
       </div>
     );
  }
}


export default Demo;
