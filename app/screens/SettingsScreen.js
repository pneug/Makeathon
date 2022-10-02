import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { List, MD3Colors, Dialog} from 'react-native-paper';
// import { StyleSheet } from "react-native";

export default function SettingsScreen(props){
    const [cropTitle, setCropTitle] = useState('Cocoa');
    const [languageTitle, setlanguageTitle] = useState('English')
    const [SMSTitle, setSMSTitle] = useState('off')
    const [visible, setVisible] = useState(false)

    const cropTypeIcon= ()  => {
        const color = cropTitle === 'Cocoa' ? MD3Colors.tertiary40 : MD3Colors.error40
        return (<List.Icon icon="barley" color={color}/>);
    }

    const languageIcon= ()  => {
        const color = languageTitle === 'English' ? MD3Colors.tertiary40 : MD3Colors.error40
        return (<List.Icon icon="card-text" color={color}/>);
    }

    const SMSIcon= ()  => {
        const color = SMSTitle === 'off' ?  MD3Colors.tertiary40 : MD3Colors.error40
        return (<List.Icon icon="email-alert-outline" color={color}/>);
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

    const SMSHandlder = () => {
        if (SMSTitle === 'off') {
            setSMSTitle('on')
        } else{
            setSMSTitle('off')
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
                <List.Item
                    title="SMS Warning"
                    description={SMSTitle} 
                    left={SMSIcon}
                    onPress= {SMSHandlder}
                />
            </List.Section>
        </ScrollView>
    );
}
