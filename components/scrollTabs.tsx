import * as React from 'react';
import {StyleSheet} from 'react-native';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { SafeAreaView, ScrollView } from 'react-native';
import { Center } from '../src/Center';
import { useTheme } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

interface scrollTabProps {
    data: {
        name: string;
        position: number;
    }[]
    views: (JSX.Element | JSX.Element[])[]
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#becdf0",
        position: 'relative',
      },
    appContainer: {
          flex: 2,
          flexDirection: "column",
          width: "100vw",
          height: "40vh"
        },
    text: {
        fontFamily: "FiraSansCondensed_400Regular",
        fontSize: 14,
        color: "rgba(80,81,81,1)",
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: {width: -0.5, height: 1.5},
        textShadowRadius: 4
    }
  }));

const styles = StyleSheet.create({
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingVertical: 50,
        paddingHorizontal: 40,
        width: "90%",
        flexDirection: 'column',
        position: 'relative',
    },
})

function TabPanel(props: TabPanelProps) {
    const { colors } = useTheme();
    const classes = useStyles();
    const { children, value, index, ...other } = props;

    return (

        value === index && (
        <SafeAreaView style={{flex: 3, justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent", top: 10}}>
        <ScrollView style={[styles.footer, {
            backgroundColor: colors.background
        }]}>
            <Animatable.View
                animation="fadeInUpBig">
                <Center>
                    {children}
                </Center>  
            </Animatable.View>
        </ScrollView>
        </SafeAreaView>
        )
    // </div>
    );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

export const ScrollTab: React.FC<scrollTabProps> = ({data,views}: scrollTabProps) => {
    const { colors } = useTheme();
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

  return (
    <>
      <Paper 
        style={{
            display:"flex",
            alignItems:"center", 
            justifyContent: "center",
            backgroundColor: "transparent",
            borderColor: "transparent",
            boxShadow: "none",
            }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label={data[0].name} {...a11yProps(0)} className={classes.text}/>
          <Tab label={data[1].name} {...a11yProps(1)} className={classes.text}/>
          <Tab label={data[2].name} {...a11yProps(2)} className={classes.text}/>
          <Tab label={data[3].name} {...a11yProps(3)} className={classes.text}/>
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        {views[0]}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {views[1]}
      </TabPanel>
      <TabPanel value={value} index={2}>
      </TabPanel>
      <TabPanel value={value} index={3}>
        {views[3]}
      </TabPanel>
    </>
  );
}

