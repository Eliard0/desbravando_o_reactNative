import React from "react";
import {Button} from 'react-native'

export default props=>{
    
    function execultar(){
        console.warn("funcionando")
    }

    return (
        <Button 
        title="precione"
        onPress={execultar}/>
    )
}