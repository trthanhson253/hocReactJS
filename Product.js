import React, {Component} from 'react';

class Product extends Component {
    showInfo(product){
        if(product.status){
            return <h3>Status: {product.status ? 'Active':'Deactive'}</h3>
        }
    }


  render() {
    var a='Xin Chào';
    var product = {
        id:1,
        name:'Iphone 7 Plus',
        price: 845,
        status:true
    };
    var users = [
        {
            id:1,
            name:'A',
            age:18
        },
        {
            id:2,
            name:'B',
            age:19
        },
        {
            id:3,
            name:'C',
            age:39
        }
    ];
    var elements=users.map((user,index)=>{
        return <div key="index">
                    <h3>Tên: { user.name }</h3>
                    <h3>Tên: { user.age }</h3>
                </div>
    })
    return(
        <div>    
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="thumbnail">
                    <img alt="iphone6" width="250" height="250" src="https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-gold-hh-600x600-600x600-600x600.jpg" />
                    <div className="caption">
                        <h3>{ this.props.children }</h3>
                        <p>
                            { this.props.price } USD
                        </p>
                        <p>
                            <a className="btn btn-primary">Buy</a>
                            
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
      );
    }
}

export default Product;
