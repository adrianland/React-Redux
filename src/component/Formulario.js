import React, { Component } from 'react'
import * as action from '../action/action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Form, FormGroup, Label, Input, Toast, ToastBody, ToastHeader  } from 'reactstrap'


class Formulario extends Component {

    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
        if(this.props.currentIndex === -1)
            return{
                nombre:'',
                comentario:''
            }
        else
            return this.props.post[this.props.currentIndex]
    }

    componentDidUpdate(prevProps) {
        if(prevProps.currentIndex !== this.props.currentIndex || prevProps.post.length !== this.props.post.length)
            this.setState({
                ...this.returnStateObject()
            })
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        if(this.props.currentIndex === -1)
            this.props.insertar(this.state)
        else
            this.props.actualizar(this.state)
    }

    render(){
        return(
            <div>
                <Toast>
                    <ToastHeader icon="primary">
                        Formulario
                    </ToastHeader>
                    <ToastBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label >Nombre</Label>
                                <Input type="text" 
                                    name="nombre" 
                                    id="nombre" 
                                    placeholder="Escribe tu nombre"
                                    value={this.state.nombre}
                                    onChange={this.handleInputChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label >Comentario</Label>
                                <Input type="textarea" 
                                    name="comentario" 
                                    id="comentario" 
                                    placeholder="Escribe tu Comentario"
                                    value={this.state.comentario}
                                    onChange={this.handleInputChange} />
                            </FormGroup>
                            <Button type='submit'>Publicar</Button>
                        </Form>
                    </ToastBody>
                </Toast>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        post: state.post,
        currentIndex:state.currentIndex
    }
}

const mapDispactchToProps = dispatch =>{
    return bindActionCreators({
        insertar:action.insertar,
        actualizar:action.actualizar
    },dispatch)
}

export default connect(mapStateToProps,mapDispactchToProps)(Formulario)