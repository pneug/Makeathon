import * as mobilenet from '@tensorflow-models/mobilenet';
import {Camera} from 'expo-camera'
let camera;
import React from 'react';
import { StyleSheet, ImageBackground, View, TouchableOpacity } from 'react-native';
import * as tf from '@tensorflow/tfjs';
import {fetch, decodeJpeg} from '@tensorflow/tfjs-react-native';
import { LoadingView } from './LoadingView';
import { PredictionList } from './PredictionList';
import { useTensorFlowModel } from './useTensorFlow';
import * as FileSystem from 'expo-file-system';
import {Buffer} from 'buffer'

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

function _base64ToArrayBuffer(base64) {
  var binary_string = window.atob(base64);
  var len = binary_string.length;
  var bytes = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}

export function ModelView() {
  const model = useTensorFlowModel(mobilenet);
  const [previewVisible, setPreviewVisible] = React.useState(false)
  const [capturedImage, setCapturedImage] = React.useState(null)
  const [prediction, setPrediction] = React.useState(null);

  if (!model) {
    return <LoadingView message="Loading TensorFlow model" />;
  }

  const img2tensor = async(image_uri, target_size) => {
    // image_uri: string, path to image
    // target_size: tuple, (height, weight)
    // return: tensor, shape (1, height, width, 3)
    console.log('image_uri', image_uri);
    try {
      //Read a jpg file with FileSystem      
      const response = await FileSystem.readAsStringAsync(image_uri, { encoding: FileSystem.EncodingType.Base64 });
      const imageDataArrayBuffer = Buffer.from(response, "base64");
      // Load image as Unit8Array
      const imageData = new Uint8Array(imageDataArrayBuffer);
      const imageTensor = decodeJpeg(imageData); // reterns: a 3D tensor of shape [height, width, 1/3]
      console.debug("Decoded tensor type " + typeof imageTensor, "Shape: " + imageTensor.shape);
      // const resized = tf.image.resizeBilinear(imageTensor, target_size);
      // console.debug("resized tensor type " + typeof resized, "Shape: " + resized.shape);
      return imageTensor;
    } catch (error) {
      console.error(error);
    }    
  }

  const getRandomInt = () => {
    return Math.floor(Math.random() * 2);
  }

  const captureHandler = async() => {
    const photo = await camera.takePictureAsync()
    setPreviewVisible(true)
    setCapturedImage(photo)
    // const imgTensor = img2tensor(photo.uri, TENSOR_SIZE)
    // const predictions = await model.classify(imgTensor)
    let prediction = getRandomInt()
    setPrediction(prediction)
  }

  return (<View style={styles.container}>
              {previewVisible && capturedImage ? 
                <View style={styles.container}>
                  <PredictionList prediction={prediction} /> 
                  <CameraPreview photo={capturedImage} />
                </View> :
                <View style={styles.container}>
                  <ModelCamera 
                    model={model}
                    setPredictions={setPrediction}
                    captureHandler={captureHandler}/>
                </View>
              }
          </View>
          );
}

function ModelCamera({ model, setPrediction, captureHandler }) {
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
    ), [setPrediction]);
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
