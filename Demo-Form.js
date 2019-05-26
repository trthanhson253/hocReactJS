import React, {Component} from 'react';
import Header from './components/Header';
import Product from './components/Product';

class Demo extends Component {
  constructor(props){
    super(props);
    this.state = {
      txtName:'',
      txtPassword:''
    };
  }
  
  onHandleChange= (event) => {
    var target=event.target;
    var name=target.name;
    var value=target.value;

    this.setState({
      [name]:value
    })
  }
  onHandleSubmit= (event) => {
   event.preventDefault();
   console.log(this.state);
  }
  

  render() {
    

    return (
      <div>
        <Header />     
        
        <div className="container">
            <div className="row">   
                
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  
                  <div className="panel panel-primary">
                      <div className="panel-heading">
                        <h3 className="panel-title">Form</h3>
                      </div>
                      <div className="panel-body">
                        
                        <form onSubmit={ this.onHandleSubmit }>
                         
                          <div className="form-group">
                            <label>Username: </label>
                            <input type="text" className="form-control" 
                              name='txtName'
                              onChange={ this.onHandleChange }
                              value= { this.state.txtName }
                                />
                          </div>
                          <div className="form-group">
                            <label>Password: </label>
                            <input type="password" className="form-control" 
                              name='txtPassword'
                              onChange={ this.onHandleChange }
                              value= { this.state.txtPassword }
                            />
                          </div>
                        
                          
                        
                          <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        
                      </div>
                  </div>
                  
                </div>
                
                
            </div>   
        </div>
        
        
        
       </div>
     );
  }
}


export default Demo;
