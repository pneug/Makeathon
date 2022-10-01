import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View
} from 'react-native';
import { Title } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { BigCard, SmallCard } from '../components/Cards';
import {t} from '../assets/IMLocalize';

function WelcomeScreen({navigation}) {


    const cameraPressHandler = () => {
        navigation.navigate('CameraScreen');
    }
    const warningPressHandler = () => {
        navigation.navigate('WarningScreen');
    }
    const weatherPressHandler = () => {
        navigation.navigate('WeatherScreen');
    }


    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView>
                    <BigCard
                        price={" "}
                        image={require("../assets/images/vegetables.png")}
                        buttonText={t('common.scan')}
                        buttonColor={"#4383FF"}
                        onClickButton={cameraPressHandler}
                    />
                    <View style={styles.containerPadding}>
                        <Title>What's New</Title>
                    </View>

                    <SmallCard
                        title={t('common.regional_warning')}
                        profile={require("../assets/regional-warning-icon.png")}
                        onPress={warningPressHandler}
                    />

                    <SmallCard
                        title={t('common.weather')}
                        profile={require("../assets/weather-icon.png")}
                        onPress={weatherPressHandler}
                    />
                    


                    {/* <View style={styles.functionView}>
                        <TouchableOpacity
                            onPress={warningPressHandler}
                            style={styles.warningButton} >
                            <Image
                                source={require('../assets/regional-warning-icon.png')}
                                style={styles.ButtonIcon}
                            />
                            <Text style={styles.ButtonText}>Weather Forcast</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={weatherPressHandler}
                            style={styles.weatherButton} >
                            <Image
                                source={require('../assets/weather-icon.png')}
                                style={styles.ButtonIcon}
                            />
                            <Text style={styles.ButtonText}>Weather Forcast</Text>
                        </TouchableOpacity>
                    </View> */}


                </ScrollView>
            </SafeAreaView>

            {/* <ImageBackground style = {styles.topView} source={require("../assets/images/vegetables.png")}>
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
            </ImageBackground> */}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    containerPadding: {
        padding: 20
    },
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#FFF',
        resizeMode: "contain"
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
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
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 10,
        flexWrap: 'wrap',
        alignContent: 'center',
    },
    warningButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    weatherButton: {
        flexDirection: 'row',
        alignItems: 'center',
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

export default WelcomeScreen;