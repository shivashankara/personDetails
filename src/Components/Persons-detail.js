import React,{useEffect,useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { startGetusers } from '../Action/userAction';


const PersonDetails =(props)=>{
    const persons = useSelector((state)=>{
        // console.log(state);
        return state.users
    })
    const dispatch= useDispatch()   

    useEffect(()=>{
        dispatch(startGetusers())
    },[])

    return(
          
        <div>         
           {/* {console.log('in HTML page',persons)} */}
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map(person =>{
                        return (
                            <tr key={person.id}>
                                <td scope="row">{person.id}</td>
                                <td>{person.firstName}</td>
                                <td>{person.lastName}</td>
                            </tr>
                        )
                    })}
                    
                   
                </tbody>
            </table>
            
        </div>
        )
}

export default PersonDetails;