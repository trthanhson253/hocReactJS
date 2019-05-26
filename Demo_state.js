import React, {Component} from 'react';
import Header from './components/Header';
import Product from './components/Product';

class Demo extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : [
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
    ],
    isActive:'true'
    };
  }
  onClick1(){
    console.log('Day la 1');
  }

  onClick2(text){
    console.log(text);
  }

  onSetState= () => {
    this.setState({
      isActive:!this.state.isActive
    });
  }

  render() {
    
  var elements=this.state.products.map((product,index)=>{
    let result='';
    if(product.status){
      result= <tr key={ index }>
                <td>{ index }</td>
                <td>{ product.name }</td>
                <td>
                <span className="label label-danger">{ product.price }</span>
                </td>
              </tr>
    }
    return result;
})

    return (
      <div>
        <Header />     
        
        <div className="container">
            <div className="row">   
                
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Name</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                     { elements }
                  </tbody>
                </table>
                <button type="submit" className="btn btn-primary" onClick ={ this.onSetState }>Active: { this.state.isActive ? 'true':'false'  }</button>
            </div>   
        </div>
        
        
        
       </div>
     );
  }
}


export default Demo;
