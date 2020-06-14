import React, { Component } from 'react'
import { Toast, ToastBody, ToastHeader,ButtonGroup,Button  } from 'reactstrap'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as action from '../action/action'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css';

class Comentario extends Component{

  handleEditar = index =>{
    this.props.actualizarIndex(index)
  }

  handleEliminar = index =>{
    this.props.eliminar(index)
  }

  render(){
   
    return(
      <div>
	      <SimpleBar style={{ maxHeight: 500 }}>
        {
          this.props.post.map((item,index)=>{
            return <Toast key={index}>
                      <ToastHeader>
                      {item.nombre} 
                      <ButtonGroup style={{marginLeft: "140px"}} size="sm">
                        <Button color="primary" onClick={() => this.handleEditar(index)}>Editar</Button>
                        <Button color="danger" onClick={() => this.handleEliminar(index)}>Eliminar</Button>
                      </ButtonGroup>
                      </ToastHeader>
                      <ToastBody>
                        {item.comentario}
                      </ToastBody>
                    </Toast>
          })
        }
      </SimpleBar>
    </div>
    )
  }
}
  
const mapStateToProps = state =>{
  return{
    post:state.post
  }
}

const mapDispatchToProps = dispatch =>{
  return bindActionCreators({
    eliminar:action.eliminar,
    actualizarIndex:action.actualizarIndex
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Comentario)