import React from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import { scale, verticalScale } from "react-native-size-matters";
import {Button} from 'react-native-paper';


let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;



export function BigCard(props) {
  const {
    image,
    buttonText,
    buttonColor,
    onClickButton
  } = props;

  return (
    <View style={styles.bigCard} >

      <ImageBackground
        borderRadius={12}
        source={image}
        style={{}}
      >
        <View
          style={styles.bigCardContent}>

          {/* {props.onClickButton ?
            <TouchableOpacity
              onPress={() => props.onClickButton()}
              style={[
                {
                  justifyContent: "center",
                  borderWidth: 0,
                  borderColor: "#eee",
                  alignItems: "center",
                  paddingLeft: 20,
                  paddingRight: 20,
                  height: scale(40),
                  marginTop: 70,
                  shadowRadius: 5,
                  borderRadius: scale(0),
                  backgroundColor: buttonColor
                }
              ]}
            >
              <Text
                style={styles.bigButtonText}
              >
                {buttonText}
              </Text>
            </TouchableOpacity>
            : null} */}
          <Button icon="camera" mode="contained" buttonColor={buttonColor} textColor="#fff"
            onPress={onClickButton} style={{positon: "absolute", bottom: "-35%"}}>{buttonText}</Button>

        </View>
      </ImageBackground>





    </View>
  );
}

export function SmallCard(props) {

  const {onPress} = props;

  return (
    <TouchableOpacity style={styles.smallCard} onPress={onPress}>
      <View style={styles.smallCardContent} >
        <View
          style={{
            flexDirection: "row",
            flex: 1
          }}
        >
          {props.profile ? (
            <View
              style={styles.profile}
            >
              <Image
                source={props.profile}
                style={{
                  width: scale(props.width || 40),
                  height: scale(props.height || 40)
                }}
                borderRadius={5}
              />
            </View>
          ) : null}
          <View
            style={{
              backgroundColor: "transparent",
              flex: props.profile ? 3 : 5,
              justifyContent: "center",
              marginLeft: 3
            }}
          >
            <Text>
              {props.title}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

}


const styles = StyleSheet.create({
  bigCard: {
    backgroundColor: "#fff",
    alignSelf: "center",
    margin: 10,
    flexDirection: "column",
    width: screenWidth - 20,
    borderWidth: 0,
    borderRadius: 5,
    elevation: 2,
    shadowColor: "#777",
    shadowOpacity: 0.16,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  bigCardContent: {
    // backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 5,
    flex: 3,
    height: 350,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center"
  },
  bigButtonText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "900"
  },
  smallCard: {
    backgroundColor: "#fff",
    margin: scale(10),
    alignSelf: "center",
    borderRadius: 5,
    elevation: 2,
    flexDirection: "column",
    width: screenWidth - scale(20),
    shadowColor: "#000",
    shadowOpacity: 0.16,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  smallCardContent: {
    height: verticalScale(75),
    marginRight: scale(20)
  },
  profile: {
    backgroundColor: "transparent",
    flex: 1,
    borderBottomLeftRadius: 12,
    alignItems: "center",
    justifyContent: "center"
  },
});