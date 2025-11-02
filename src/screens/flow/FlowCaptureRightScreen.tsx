import React from 'react';
import FlowCaptureScreen from './FlowCaptureScreen';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'FlowCaptureRight'>;
  route: RouteProp<RootStackParamList, 'FlowCaptureRight'>;
};

export default function FlowCaptureRightScreen({ navigation, route }: Props) {
  return <FlowCaptureScreen navigation={navigation} route={route} angle="Right" />;
}
