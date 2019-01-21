import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class PhotoList extends Component {
 
 state = {
   searchText : ""
 }
 
 searchTitle(value){
 console.log(value);
  this.setState({
    searchText :value
  });
};
 
  render() {  
    return (
      <div className="flex">
         <div>
           Search Text : <input type='text' onChange = {(e)=> this.searchTitle(e.target.value)}></input>
         </div>
        <ul>{
          this.props && this.props.images !== undefined  && this.props.images.length!==undefined && this.props.images.length!==0 
          &&  this.props.images.filter(item => item.title.includes(this.state.searchText)).map((img) =>
          <li key={img.id}>
          <div>
               <Link to={`/${img.id}`}><img src={ img.thumbnailImageURL}/> </Link> 
                {img.title}
          </div>
           </li>
           )
        }          
          </ul>        
      
      </div>
    );
  }
}

const mapStateToProps = (state,props) =>{
  return {
   images : state
 }
}
export default connect(mapStateToProps)(PhotoList);
