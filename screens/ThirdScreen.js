import React from 'react';
import {Text, View, Button, TouchableHighlight, Image, StyleSheet, AppRegistry} from 'react-native';


export default class ThirdScreen extends React.Component{
    static navigationOptions = {
       tabBarLabel: 'Camera screen'
    };

    render(){
        return(
            <View style={styles.textPosition}> 
                <Text>This is the third screen </Text>  
                <Text>Potentially the camera screen</Text>

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

