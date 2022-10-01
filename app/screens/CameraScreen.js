import { Camera } from "expo-camera";
import React from "react";
import { Button } from 'react-native';

import { LoadingView } from "./tf/LoadingView";
import { ModelView } from "./tf/ModelView";
import { useTensorFlowLoaded } from "./tf/useTensorFlow";

function CameraScreen(props) {
    const isLoaded = useTensorFlowLoaded();
    const [permission, requestPermission] = Camera.useCameraPermissions();
  
    if (!permission?.granted) {
      return (
        <LoadingView message="Camera permission is required to continue">
          <Button title="Grant permission" onPress={requestPermission} />
        </LoadingView>
      );
    }
    
    if (!isLoaded) {
      return <LoadingView message="Loading TensorFlow" />;
    }
  
    return <ModelView />;
}

export default CameraScreen;

