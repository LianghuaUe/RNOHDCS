import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export function getLocationPermissionStatusTest() {
  const device = useCameraDevice('back');
  const format = useCameraFormat(device, [
    {videoResolution: {width: 3048, height: 2160}},
    {fps: 60},
  ]);
  const {hasPermission, requestPermission} = useCameraPermission();
  const camera = useRef<Camera>(null);
  const [photoFile, setPhotoFile] = useState<string>('');

  if (!device) {
    return <Text>No Devices</Text>;
  }

  if (!hasPermission) {
    requestPermission();
  }

  const [status, set] = useState<string>('');

  const getLocationPermissionStatus = async () => {
    const res = await Camera.getLocationPermissionStatus();
    res && set(JSON.stringify(res));
    console.log('====================================');
    console.log('res', JSON.stringify(res));
    console.log('====================================');
  };

  return (
    <Tester>
      <TestSuite name="getLocationPermissionStatus">
        <TestCase itShould={`获取位置权限授权情况`}>
          <Camera
            style={style.cameraPreview}
            ref={camera}
            device={device}
            isActive
            preview
            photo
            format={format}
            enableLocation
          />
          <View>
            <Text>getLocationPermissionStatus{status}</Text>
            <Button
              title="getLocationPermissionStatus"
              onPress={getLocationPermissionStatus}
            />
          </View>
        </TestCase>
      </TestSuite>
    </Tester>
  );
}

const style = StyleSheet.create({
  cameraPreview: {width: 300, height: 200},
  actionBtn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    padding: 10,
    gap: 5,
    position: 'absolute',
    top: 300,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
  },
});