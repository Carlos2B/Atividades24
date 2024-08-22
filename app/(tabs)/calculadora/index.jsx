import React from "react";
import Calculadora from '../../../components/Calculadora';
import {Text, View} from 'react-native';

const style = function(){
   return ({
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
    })
}


export default PrimeiraFuncao = function() {

return <View style={style().container}>
    <Calculadora />
    </View>;

}


