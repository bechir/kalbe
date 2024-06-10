import { NavigationContainerRef } from '@react-navigation/core';
import { StackActions } from '@react-navigation/routers';
import { RootStackParamList } from 'Routes';
import * as React from 'react';

export const navigationRef = React.createRef<NavigationContainerRef<RootStackParamList>>();

export function navigate(name: keyof RootStackParamList, params?: any) {
  navigationRef.current?.navigate(name, params);
}

export function replace(name: keyof RootStackParamList, params?: any) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

export function goBack() {
  navigationRef.current?.dispatch(StackActions.pop());
}
