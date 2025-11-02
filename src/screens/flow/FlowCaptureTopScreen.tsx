import React from 'react';
import FlowCaptureScreen from './FlowCaptureScreen';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'FlowCaptureTop'>;
  route: RouteProp<RootStackParamList, 'FlowCaptureTop'>;
};

export default function FlowCaptureTopScreen({ navigation, route }: Props) {
  return <FlowCaptureScreen navigation={navigation} route={route} angle="Top" />;
}
