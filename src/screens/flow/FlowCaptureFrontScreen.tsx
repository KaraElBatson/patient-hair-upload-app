import React from 'react';
import FlowCaptureScreen from './FlowCaptureScreen';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'FlowCaptureFront'>;
  route: RouteProp<RootStackParamList, 'FlowCaptureFront'>;
};

export default function FlowCaptureFrontScreen({ navigation, route }: Props) {
  return <FlowCaptureScreen navigation={navigation} route={route} angle="Front" />;
}
