import axios from 'axios'
var convert = require('xml-js');


const getRequiredFiled = (persons) => {
    const newArray = [];
    persons.forEach(ele => {
        newArray.push({
            id: ele.id._text,
            firstName: ele.firstName._text,
            lastName: ele.lastName._text
        })
    })
    return newArray
}



export const startGetusers = () => {
    return (dispatch) => {
        //api call   
        const urlJson = 'index.json';
        const urlXml = 'index.xml';       

        axios.all([axios.get(urlJson), axios.get(urlXml)])
            .then((values) => {
                const [json, xml] = values;
                // console.log('json', json.data);

                // convert XML to json 
                var result = convert.xml2json(xml.data, {
                    compact: true,
                    spaces: 4
                });
                result = JSON.parse(result)
                const persons = result.persons.person;

                // method is responsible for getting required field 
                const formatedObj = getRequiredFiled(persons)
                // console.log(formatedObj)

                // combining 2 response
                const final_result = [...formatedObj, ...json.data.person]

                // console.log('final_result',formatedObj,json.data.person);

                // Sort by id 
                const sortObject = final_result.sort((a, b) => {
                    if (a.id > b.id) {
                        return 1
                    } else if (a.id < b.id) {
                        return -1
                    } else {
                        return 0
                    }
                })
                dispatch(setUsers(sortObject))
            })
            .catch(e => {
                alert(e.message)
            })


    }
}

export const setUsers = (users) => {
    return {
        type: 'GET_USER',
        payload: users
    }
}