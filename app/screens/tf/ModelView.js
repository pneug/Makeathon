import * as mobilenet from '@tensorflow-models/mobilenet';
import {Camera} from 'expo-camera'
let camera: Camera
import React from 'react';
import { StyleSheet, ImageBackground, View, TouchableOpacity } from 'react-native';
import * as tf from '@tensorflow/tfjs';
import {fetch, decodeJpeg} from '@tensorflow/tfjs-react-native';
import { LoadingView } from './LoadingView';
import { PredictionList } from './PredictionList';
import { useTensorFlowModel } from './useTensorFlow';

const TEXTURE_SIZE = { width: 1080, height: 1920 };

const TENSOR_WIDTH = 100;

const CAMERA_RATIO = TEXTURE_SIZE.height / TEXTURE_SIZE.width;

const TENSOR_SIZE = [TENSOR_WIDTH * CAMERA_RATIO, TENSOR_WIDTH];


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

  const img2tensor = async(image_uri, target_size) => {
    // image_uri: string, path to image
    // target_size: tuple, (height, weight)
    // return: tensor, shape (1, height, width, 3)
    const response = await fetch(image_uri, {}, {isBinary: true});
    const imageDataArrayBuffer = await response.arrayBuffer();
    // Load image as Unit8Array
    const imageData = new Uint8Array(imageDataArrayBuffer);
    const imageTensor = decodeJpeg(imageData); // reterns: a 3D tensor of shape [height, width, 1/3]
    const resized = tf.image.resizeBilinear(imageTensor, target_size);
    return resized;
  }

  const captureHandler = async() => {
    const photo = await camera.takePictureAsync()
    setPreviewVisible(true)
    setCapturedImage(photo)
    const imgTensor = img2tensor(photo.uri, TENSOR_SIZE)
    const predictions = await model.classify(imgTensor)
    setPredictions(predictions);
  }

  return (<View style={styles.container}>
              {previewVisible && capturedImage ? 
                <View style={styles.container}>
                  <PredictionList predictions={[]} /> 
                  <CameraPreview photo={capturedImage} />
                </View> :
                <View style={styles.container}>
                  <ModelCamera 
                    model={model}
                    setPredictions={setPredictions}
                    captureHandler={captureHandler}/>
                </View>
              }
          </View>
          );
}

function ModelCamera({ model, setPredictions, captureHandler }) {
  return React.useMemo(
    () => (
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
    ), [setPredictions]);
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
