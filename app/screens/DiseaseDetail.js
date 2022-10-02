import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph, Surface, Text, withTheme, List } from 'react-native-paper';
import {useTranslation} from 'react-i18next'
import {DiseaseInfo} from '../assets/IMLocalize'

function DetailScreen(props) {
    const { i18n, t } = useTranslation();
    const { diseaseIdx } = props;
    const { colors } = props.theme;
    let diseaseName = t('common:disease_name', { returnObjects: true })[diseaseIdx]
    let riskLevel = DiseaseInfo.riskLevel[diseaseIdx];
    let riskLevelStr = "";
    if (riskLevel == 1) {
        riskLevelStr = t('common:mild');
    } else if (riskLevel == 2) {
        riskLevelStr = t('common:need_concern');
    } else {
        riskLevelStr = t('common:server');
    }
    let rescueMethods = t('common:disease_rescues', { returnObjects: true })[diseaseIdx];
    let diseaseDescription = t('common:disease_description', {returnObjects: true})[diseaseIdx];
    let diseasePreventions = t('common:disease_preventions', { returnObjects: true })[diseaseIdx];
    let rescueImage = t('rescue_image', {returnObjects: true})[diseaseIdx];
    let diseaseImage = t('disease_image', {returnObjects: true})[diseaseIdx];
    let preventImage = t('prevention_picture', {returnObjects: true})[diseaseIdx];
    // create style sheet
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 20
        },
        surface: {
            paddingTop: 20,
            paddingBottom: 20,
            elevation: 4,
            backgroundColor: colors.primary
        },
        card: {
            marginBottom: 15
        },
        content: {
            marginTop: 12,
            marginBottom: 5
        }
    });

    return (
        <SafeAreaView>
            <ScrollView>
                <Surface style={styles.surface} elevation={4}>
                    <View style={[styles.container]}>
                        <Title style={{color: "white"}}>{diseaseName}</Title>
                        <List.Item
                            title={riskLevelStr}
                            titleStyle={{color: "white"}}
                            left={props => <List.Icon {...props} icon="alert" color="white" />}
                        />
                        <List.Item
                            title={t("common:dummy")}
                            titleStyle={{color: "white"}}
                            left={props => <List.Icon {...props} icon="earth" color="white" />}
                        />
                    </View>

                </Surface>
                <View style={styles.container}>
                <Card style={styles.card}>
                    <Card.Cover source={{ uri: rescueImage }} />
                    <Card.Content style={styles.content}>
                        <Title>{t("common:rescue")}</Title>
                        {rescueMethods.map((method, i)=>{
                            return <Paragraph key={i} lineBreakMode="tail"> {"⦁ " + method}</Paragraph>;
                        })}
                    </Card.Content>
                    <Card.Actions>
                        <Button>More</Button>
                    </Card.Actions>
                </Card>
                <Card style={styles.card}>
                    <Card.Cover source={{ uri: preventImage }} />
                    <Card.Content style={styles.content}>
                        <Title>{t("common:prevention")}</Title>
                        {diseasePreventions.map((prevention, i)=>{
                            return <Paragraph key={i}>{"⦁ " + prevention}</Paragraph>;
                        })}
                    </Card.Content>
                    <Card.Actions>
                        <Button>More</Button>
                    </Card.Actions>
                </Card>
                <Card style={styles.card}>
                    <Card.Cover source={{ uri: diseaseImage }} />
                    <Card.Content style={styles.content}>
                        <Title>{t("common:more_about") + ' ' + diseaseName}</Title>
                        <Paragraph>{diseaseDescription}</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button>More</Button>
                    </Card.Actions>
                </Card>
                </View>
                
            </ScrollView>
        </SafeAreaView>

    );


}

export default withTheme(DetailScreen);