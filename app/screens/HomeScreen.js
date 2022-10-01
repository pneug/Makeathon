import React, {Component} from 'react';
import {StyleSheet,
        SafeAreaView,
        Image,
        View,
        Text, 
        FlatList,
        TouchableOpacity} from 'react-native';

function HomeScreen({navigation}) {

    const cameraPressHandler = () => {
        navigation.navigate('Camera');
    }
    const warningPressHandler = () => {
        navigation.navigate('Warning');
    } 
    const weatherPressHandler = () => {
        navigation.navigate('Weather');
    }


    return (
        <View style = {styles.background}>
            <View style = {styles.topView}>
                <Text style = {styles.Head}>Crop Helper</Text>
                <View>
                    <TouchableOpacity 
                        onPress = {cameraPressHandler}
                        style = {styles.cameraButton} > 
                        <Image 
                            source={require('../assets/camera-icon.png')}
                            style={styles.ButtonIcon}
                        />
                        <Text style={styles.ButtonText}>Disease Detection</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style = {styles.introTextView}>
                <Text style = {styles.introText}>What's New</Text>
            </View>
            <View style = {styles.functionView}>
                <TouchableOpacity 
                    onPress = {warningPressHandler}
                    style = {styles.warningButton} > 
                    <Image 
                        source={require('../assets/regional-warning-icon.png')}
                        style={styles.ButtonIcon}
                    />
                    <Text style={styles.ButtonText}>Regional Warning</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress = {weatherPressHandler}
                    style = {styles.weatherButton} > 
                    <Image 
                        source={require('../assets/weather-icon.png')}
                        style={styles.ButtonIcon}
                    />
                    <Text style={styles.ButtonText}>Weather Forcast</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    Head: {
        position: 'absolute',
        top: 5
    },
    topView: {
        position: 'absolute',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 20,
        top: 10,
        width: '95%',
        height: '40%',
        backgroundColor: '#C6EBC5',
        padding: 20
    },
    introTextView: {
        width: '95%',
        alignSelf: 'auto',
    },
    introText: {
        textAlign: 'left'
    },
    functionView: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '50%',
        width: '95%',
    },
    cameraButton: {
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: '#FFF',
        borderRadius: 10,
        flexWrap: 'wrap',
        alignContent:'center',
    },
    warningButton : {
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    weatherButton : {
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    ButtonIcon: {
        padding: 10,
        margin: 20,
        height: 'auto',
        width: '30%',
        borderRadius: 10,
    },
    ButtonText: {},
})

export default HomeScreen;