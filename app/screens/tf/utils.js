import React from "react";
import * as tf from '@tensorflow/tfjs';
import {fetch, decodeJpeg} from '@tensorflow/tfjs-react-native';


export async function img2tensor(image_uri, target_size) {
    // image_uri: string, path to image
    // target_size: tuple, (height, weight)
    // return: tensor, shape (1, height, width, 3)
    const response = await fetch(image_uri, {}, {isBinary: true});
    const imageDataArrayBuffer = await response.arrayBuffer();
    // Load image as Unit8Array
    const imageData = new Uint8Array(imageDataArrayBuffer);
    const imageTensor = decodeJpeg(imageData); // reterns: a 3D tensor of shape [height, width, 1/3]
    const resized = tf.image.resizeBilinear(imageTensor, target_size);
    const batched = resized.expandDims(0);
    return batched;
}