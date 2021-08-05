import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Text,
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import{ AuthContext } from './AuthProvider';
import { DrawerNavProps} from './DrawerParamList';

interface DrawerProps{}


export const DrawerContent: React.FC<DrawerProps> = ({navigation}: DrawerNavProps<any>) => {
    const paperTheme = useTheme();
    const { logout} = useContext(AuthContext);

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const toggleTheme = () => {setIsDarkTheme(!isDarkTheme);}

    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <TouchableOpacity onPress={() => {navigation.navigate('Profile')} }>
                            <View style={{flexDirection:'row',marginTop:15}}>
                                <Avatar.Image
                                    source={{uri: 'http://dev.villanovaice.com/wp-content/uploads/2015/02/Elon-Musk-300x300.jpg'}}
                                    size={50}
                                />
                                <View style={{marginLeft:25, flexDirection: 'column'}}>
                                    <Title style={styles.title}>Elon Musk</Title>
                                    <Caption style={styles.caption}>@elonmusk</Caption>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>
                                    80
                                </Paragraph>
                                <Caption style={styles.caption}> Following </Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>
                                    100
                                </Paragraph>
                                <Caption style={styles.caption}> Followers </Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="cards-outline"
                                    color={color}   
                                    size={size}
                                />
                            )}
                            label="Swipe"
                            onPress={() => {navigation.navigate('Swipe')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="book-search-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Search"
                            onPress={() => {navigation.navigate('Search')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {logout()}}
                />
            </Drawer.Section>

        </View>

    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
