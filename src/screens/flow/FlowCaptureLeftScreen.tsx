import React from 'react';
import FlowCaptureScreen from './FlowCaptureScreen';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'FlowCaptureLeft'>;
  route: RouteProp<RootStackParamList, 'FlowCaptureLeft'>;
};

export default function FlowCaptureLeftScreen({ navigation, route }: Props) {
  return <FlowCaptureScreen navigation={navigation} route={route} angle="Left" />;
}
