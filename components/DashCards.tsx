import * as React from 'react';
import { FC, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { SafeAreaView, ScrollView, View, StyleSheet, Text, Linking } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
import axios from '../axios';
import {AntDesign, Feather, Ionicons} from '@expo/vector-icons';


interface DashCardProps{
    likes: boolean;
    matches: boolean;
}

export default function DashCards({likes,matches}:DashCardProps) {

    const [courses, setCourses] = React.useState([]);
    React.useEffect(() => {
        async function fetchData() {
            let req = null;
            if (likes === true) {
                req = await axios.get('/lyceum/likedcourses');
            } else if (matches === true) {
                req = await axios.get('/lyceum/matches');
            } else {
                req = await axios.get('/lyceum/cards');
            }
            
            setCourses(req.data)
        }

        fetchData();
    }, []); 

    const useStyles = makeStyles({
    root: {
        maxWidth: 1000,
        minWidth: 500
    },
    });

    const classes = useStyles();

    function like(course){
        const dataBody = {
            "name": course.name,
            "platform": course.platform,
            "instructor": course.instructor,
            "imgUrl": course.imgUrl,
            "url": course.url,
            "affiliation": course.affiliation,
            "description": course.description,
        }
        axios.post('/lyceum/likedcourses', dataBody)
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });          
    }



  return (
        <View>
            {courses.map((course, idx) => (
                <Card style={{
                    width:wp("85%"),
                    height:hp("15%"),
                    marginBottom: 20,
                }}>
                    <CardActionArea>
                        <CardContent>
                        <View style={{flexDirection:"row", alignItems:"flex-end", justifyContent: "space-between"}}>
                            <Typography gutterBottom variant="h6" component="h6">
                            <Text onPress={() => Linking.openURL(course.url)}>{course.name}</Text>
                            </Typography>
                            <CardActions style={{}}>
                                {likes === false && matches === false &&
                                    <Button size="small" color="primary" onClick={
                                        () => {
                                            like(course);
                                        }
                                    }>
                                        <AntDesign name="like2" size={20}/>
                                    </Button>
                                }
                                {(likes === true || matches === true) &&
                                    <Button size="small" color="primary"onClick={() => {console.log("Deleted!")}}>
                                        <Ionicons name="ios-trash-outline" size={20}/>
                                    </Button>
                                }
                                <Button size="small" color="primary"onClick={() => {console.log("Share!")}}>
                                    <Feather name="share" size={20}/>
                                </Button>
                            </CardActions>
                        </View>
                        <View style={{paddingBottom:"50vh"}}>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {typeof(course.description) === "string" ? course.description.split('\n')[0]: <></>}
                            </Typography>
                        </View>
                        </CardContent>
                    </CardActionArea>

                </Card>
            ))}
        </View>
  );
}
