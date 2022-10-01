import * as mobilenet from '@tensorflow-models/mobilenet';
import {Camera} from 'expo-camera'
let camera: Camera
import React from 'react';
import { StyleSheet, ImageBackground, View, TouchableOpacity } from 'react-native';
import { CustomTensorCamera } from './CustomTensorCamera';
import { LoadingView } from './LoadingView';
import { PredictionList } from './PredictionList';
import { useTensorFlowModel } from './useTensorFlow';


const CameraPreview = ({photo}) => {
  return (
    <View style={styles.preview}>
      <ImageBackground
        source={{uri: photo && photo.uri}}
        style={styles.previewImage}
      />
    </View>
  )
}

export function ModelView() {
  const model = useTensorFlowModel(mobilenet);
  const [previewVisible, setPreviewVisible] = React.useState(false)
  const [capturedImage, setCapturedImage] = React.useState(null)
  const [predictions, setPredictions] = React.useState([]);

  if (!model) {
    return <LoadingView message="Loading TensorFlow model" />;
  }

  const captureHandler = async() => {
    const photo = await camera.takePictureAsync()
    setPreviewVisible(true)
    setCapturedImage(photo)
  }
  return (<View style={styles.container}>
            <PredictionList predictions={[]} /> 
            <View style={styles.container}>
              {previewVisible && capturedImage ? 
                <CameraPreview photo={capturedImage} /> :
                <Camera 
                  style={styles.camera}
                  ref={(r) => {camera = r}}>
                  <View style = {styles.captureButtonContainer}>
                    <View style={styles.captureButtonInnerContainer}>
                      <TouchableOpacity 
                        style= {styles.captureButton} 
                        onPress = {captureHandler}
                      />
                    </View>
                  </View>
                </Camera>
              }
            </View>
          </View>
          );
  // const model = useTensorFlowModel(mobilenet);
  // const [predictions, setPredictions] = React.useState([]);
  // const [previewVisible, setPreviewVisible] = React.useState(false)
  // const [capturedImage, setCapturedImage] = React.useState(null)

  // const captureHandler = async() => {
  //   const photo = await Camera.takePictureAsync()
  //   setPreviewVisible(true)
  //   setCapturedImage(photo)
  // }

  // if (!model) {
  //   return <LoadingView message="Loading TensorFlow model" />;
  // }

  // return (
  //   <View  style={styles.container} >
  //     <PredictionList predictions={[]} /> 
  //     <View>
  //       {previewVisible && capturedImage ? 
  //       <CameraPreview photo={capturedImage} /> :
  //       <Camera 
  //         style = {styles.camera}>
  //         <View style = {styles.captureButtonContainer}>
  //             <View style={styles.captureButtonInnerContainer}>
  //                 <TouchableOpacity 
  //                   style= {styles.captureButton} 
  //                   onPress = {captureHandler}
  //                 />
  //             </View>
  //         </View>
  //       </Camera>}
  //     </View>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center" 
  },
  preview: {
    backgroundColor: 'transparent',
    flex: 1,
    width: '100%',
    height: '100%'
  },
  previewImage: {
    flex: 1,
  },
  camera: {
    zIndex: 0,
    flex: 1,
    width: '100%'
  },
  captureButtonContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    padding: 20,
    justifyContent: 'space-between',
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
  }
});
