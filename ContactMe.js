import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

export default class ContactScreen extends React.Component{

    render(){
        return(
            <View style= {styles.container}>
                <Text> Hello, my name is Jeff. I'm</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent : "center",
        alignItems: "center",
        backgroundColor: 'black',
        fontSize: 20,
        color: 'white'
 
    }

})