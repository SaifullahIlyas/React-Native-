import React from 'react';
import { View,Text, Button } from 'react-native';

const FixedDimensionsBasics = () => {
    return (
      <View style = {{alignItems : 'center',justifyContent : 'center',backgroundColor : 'green',flex :1}}>
        <View style ={{padding : 10,width : '90%',aspectRatio:1,borderRadius:10,backgroundColor : 'blue',justifyContent:'flex-start'}}>
          <Text style = {{ backgroundColor :'black'}}>Hello this is me sdnmsdnmdsnmdsndsmsndmsdmsdndsmndsmsdsmdn</Text>
          <Button title = 'Hello' color = '#FFFFFF'/>
        </View>
      </View>
    );
};

export default FixedDimensionsBasics;