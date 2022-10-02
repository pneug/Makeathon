import * as tf from "@tensorflow/tfjs";
import React from "react";
import * as mobilenet from '@tensorflow-models/mobilenet';
import { fetch, decodeJpeg, bundleResourceIO } from '@tensorflow/tfjs-react-native';


async function myFunction() {

  const modelUrl_tomato ="https://tensroflowjs.s3.eu-central-1.amazonaws.com/tomato_model_tfjs/model.json";
  const model = await tf.loadLayersModel(modelUrl_tomato);


  //const modelUrl ="https://tensroflowjs.s3.eu-central-1.amazonaws.com/model_final/model.json";
  //const model = await tf.loadGraphModel(modelUrl);

  //const modelUrl = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_130_224/classification/3/default/1";
  //const model = await tf.loadGraphModel(modelUrl, { fromTFHub: true });

  //const modelUrl = "https://tfhub.dev/google/imagenet/mobilenet_v2_140_224/classification/2";
  //const model = await tf.loadGraphModel(modelUrl, { fromTFHub: true });

  //const model = await mobilenet.load();

  const zeros = tf.zeros([0,112,112,3]);

  const prediction = model.predict(zeros);
  //const prediction = model.classify(zeros);
  
  return prediction;
  } 


export function useTensorFlowModel(modelKind) {

  const [model, setModel] = React.useState(null);
  const isMounted = React.useRef(true);

  //const model1 =  tf.loadLayersModel('dsfsdf');
  //console.log("dsfdfs")

  React.useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  }, []);

  React.useEffect(() => {
    setModel(null);
    
    modelKind.load().then((model) => {
    });
  }, [modelKind]);


  myFunction().then(
    function (value) {
      //console.log(value);
      console.log("sdafhjkldsfjkhfdsjkhasdsfddfddjahkfdjakdfsjkdsfjkhldfajskdfkhjs");
      //console.log(typeof value);
      console.log(value)
      value.print()
      //value.classify(3);
      //console.log(value.summary());
      //console.log("sdafhjkldsfjkhfdsjkhasdsfddfddjahkfdjakdfsjkdsfjkhldfajskdfkhjs");
    },
    function (error) {
      console.log(error);
      console.log("sdf8998-s");
    }
  );

  return model;
}

export function useTensorFlowLoaded() {
  const [isLoaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    let isMounted = true;
    tf.ready().then(() => {
      if (isMounted) {
        setLoaded(true);
      }
    });
    return () => (isMounted = false);
  }, []);

  return isLoaded;
}
