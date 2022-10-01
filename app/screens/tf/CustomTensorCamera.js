import { cameraWithTensors } from '@tensorflow/tfjs-react-native';
import { Camera } from 'expo-camera';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const TEXTURE_SIZE = { width: 1080, height: 1920 };

const TENSOR_WIDTH = 100;

const CAMERA_RATIO = TEXTURE_SIZE.height / TEXTURE_SIZE.width;

const TENSOR_SIZE = {
  width: TENSOR_WIDTH,
  height: TENSOR_WIDTH * CAMERA_RATIO,
};

const TensorCamera = cameraWithTensors(Camera);

export function CustomTensorCamera({ style, width, setIsCapture, ...props }) {
  const sizeStyle = React.useMemo(() => {
    const ratio = width / TEXTURE_SIZE.width;
    const cameraWidth = TEXTURE_SIZE.width * ratio;
    const cameraHeight = TEXTURE_SIZE.height * ratio;
    return {
      maxWidth: cameraWidth,
      minWidth: cameraWidth,
      maxHeight: cameraHeight,
      minHeight: cameraHeight,
    };
  }, [width]);

  const captureHandler = () => {
  }

  return (
    <TensorCamera
      {...props}
      style={[style, sizeStyle]}
      cameraTextureWidth={TEXTURE_SIZE.width}
      cameraTextureHeight={TEXTURE_SIZE.height}
      resizeWidth={TENSOR_SIZE.width}
      resizeHeight={TENSOR_SIZE.height}
      resizeDepth={3}
      autorender={false}>
      <View style = {styles.captureButtonContainer}>
          <View style={styles.captureButtonInnerContainer}>
              <TouchableOpacity 
                style= {styles.captureButton} 
                onPress = {captureHandler}
              />
          </View>
      </View>
    </TensorCamera>
  );
}

const styles = StyleSheet.create({
  captureButtonContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    padding: 20,
    justifyContent: 'space-between'
  },
  captureButtonInnerContainer: {
    alignSelf: 'center',
    flex: 1,
    alignItems: 'center'
          
  },
  captureButton: {
    width: 70,
    height: 70,
    bottom: 0,
    borderRadius: 50,
    backgroundColor: '#fff'
  },
  buttonIcon: {}
})
