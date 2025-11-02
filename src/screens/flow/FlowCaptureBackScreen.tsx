import React from 'react';
import FlowCaptureScreen from './FlowCaptureScreen';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'FlowCaptureBack'>;
  route: RouteProp<RootStackParamList, 'FlowCaptureBack'>;
};

export default function FlowCaptureBackScreen({ navigation, route }: Props) {
  return <FlowCaptureScreen navigation={navigation} route={route} angle="Back" />;
}
