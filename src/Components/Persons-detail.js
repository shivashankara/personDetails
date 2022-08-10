import React,{useEffect,useDispatch} from 'react';

const PersonDetails =(props)=>{

    // const dispatch= useDispatch()

    useEffect(()=>{
        // dispatch()
    },[])

    return(
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">sdfshgs</td>
                        <td>sdagfsdgsdf</td>
                        <td>sdfgfsdghsdfh</td>
                    </tr>
                    <tr>
                    <td scope="row">sdfshgs</td>
                        <td>sdagfsdgsdf</td>
                        <td>sdfgfsdghsdfh</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
        )
}

export default PersonDetails;