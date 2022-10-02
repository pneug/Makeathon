import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { List, MD3Colors, View, SafeAreaView} from 'react-native-paper';
// import { StyleSheet } from "react-native";

export default function SettingsScreen(props){
    const [cropTitle, setCropTitle] = useState('Cocoa');
    const [languageTitle, setlanguageTitle] = useState('English')

    const cropTypeIcon= ()  => {
        const color = cropTitle === 'Cocoa' ? MD3Colors.tertiary40 : MD3Colors.error40
        return (<List.Icon icon="barley" color={color}/>);
    }

    const languageIcon= ()  => {
        const color = languageTitle === 'English' ? MD3Colors.tertiary40 : MD3Colors.error40
        return (<List.Icon icon="card-text" color={color}/>);
    }

    const cropTypeHandler = () => {
        if (cropTitle === 'Cocoa') {
            setCropTitle('Tomato');
        }
        else{ 
            setCropTitle('Cocoa');
        }
    }

    const languageHandler = () => {
        if (languageTitle === 'English'){
            setlanguageTitle('Twi')
        }
        else {
            setlanguageTitle('English')
        }

    }

    return (
        <ScrollView>
            <List.Section>
                <List.Item 
                    title="Default Crop" 
                    description={cropTitle}
                    left={cropTypeIcon}
                    onPress= {cropTypeHandler}
                />
                <List.Item
                    title="Language"
                    description={languageTitle} 
                    left={languageIcon}
                    onPress= {languageHandler}
                />
            </List.Section>
        </ScrollView>
    );
}
