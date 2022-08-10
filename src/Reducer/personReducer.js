const initialUsers = []

const personReducers = (state = initialUsers, action) => {
   
    switch(action.type){
        case 'GET_USER':
            // console.log('shivashankara',action.payload)
            return[...action.payload]
        default:
            return [...state]
    }
}
export default personReducers;

