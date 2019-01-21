import React,{Component} from 'react';
import { connect } from 'react-redux';


class PhotoDetails extends React.Component {
    
    componentDidMount(){
        if(this.props.images!==undefined && this.props.images.length!==undefined && this.props.images.length>=0){
            let imageSelected = this.props.images.filter(img=>img.id===this.props.match.params.id)
            console.log(imageSelected)
            this.setState(state =>{               
                return {
                    selectedImage :imageSelected[0]
                }
            })
        }
       
    }
    render(){
        return(
            <div>
                 <ul>{
          this.props && this.props.images !== undefined  && this.props.images.length!==undefined && this.props.images.length!==0 
          &&  this.props.images.filter(img=>img.id===this.props.match.params.id).map((img) =>
          <li key={img.id}>
          <div>
             <img src={ img.url}/>  
                {img.title}
          </div>
           </li>
           )
        }          
          </ul>   
               </div>
        )
    }
}
const mapStateToProps= (state,props)=> {
    return {images:state}
}

export default connect(mapStateToProps) (PhotoDetails);
