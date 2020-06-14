export const reducer = (state,action) =>{
    var post = JSON.parse(localStorage.getItem('comentarios'))

    switch(action.type){

        case "INSERTAR":
            post.push(action.payLoad)
            console.log(action.payLoad)
            localStorage.setItem('comentarios',JSON.stringify(post))
            return {post,currentIndex:-1}
        
        case 'ACTUALIZAR':
            post[state.currentIndex] = action.payLoad
            localStorage.setItem('comentarios',JSON.stringify(post))
            return {post,currentIndex:-1}
        
        case 'ELIMINAR':
            post.splice(action.payLoad,1)
            localStorage.setItem('comentarios',JSON.stringify(post))
            return {post,currentIndex:-1}
        
        case 'ACTUALIZAR-INDEX':
            return {post,currentIndex:action.payLoad}

        default:
            return state
    }
}