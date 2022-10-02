import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { List, MD3Colors, View, SafeAreaView} from 'react-native-paper';
// import { StyleSheet } from "react-native";
import { useTranslation } from 'react-i18next';

export default function SettingsScreen(props){
    const { i18n, t } = useTranslation();
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
            i18n.changeLanguage('en')
        }
        else {
            setlanguageTitle('English')
            i18n.changeLanguage('twi')
        }
    }

    return (
        <ScrollView>
            <List.Section>
                <List.Item 
                    title={t("default_crop")}
                    description={cropTitle}
                    left={cropTypeIcon}
                    onPress= {cropTypeHandler}
                />
                <List.Item
                    title={t("language")}
                    description={languageTitle} 
                    left={languageIcon}
                    onPress= {languageHandler}
                />
            </List.Section>
        </ScrollView>
    );
}
