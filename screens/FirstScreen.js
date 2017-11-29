import React from 'react';
import {Text, View, Button, TouchableHighlight, Image, StyleSheet, AppRegistry} from 'react-native';


export default class FirstScreen extends React.Component{
    static navigationOptions = {
       tabBarLabel: 'First'
    };

    render(){
        return(
            <View style={styles.textPosition}> 
                <Text>Screen 1</Text>  
                <Image 
                source = {require('../images/Bean.png')}
                style= {{width:60, height:60}}>
                </Image>
            

            </View>

        )
    }
}

const styles = StyleSheet.create({
    textPosition: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
      },
      preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
      },
      capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
      }
})

