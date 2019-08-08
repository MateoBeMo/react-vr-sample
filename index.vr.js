import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import West from './components/west';
import East from './components/east';
import North from './components/north';
import South from './components/south';



export default class react_vr_sample extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('wood-world.jpg')}/>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 0.6,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          You are here
        </Text>
        <North></North>
        <South></South>
        <East></East>
        <West></West>
      </View>
    );
  }
};

AppRegistry.registerComponent('react_vr_sample', () => react_vr_sample);
