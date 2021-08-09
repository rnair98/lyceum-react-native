import * as React from 'react';
import { FC, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
import axios from '../axios';
import {AntDesign, Feather} from '@expo/vector-icons';

export default function DashCards() {

    const [courses, setCourses] = React.useState([]);
    React.useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/lyceum/cards');
            
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
        }
        axios.post('/lyceum/like', dataBody)
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
                                {course.name}
                            </Typography>
                            <CardActions style={{}}>
                                <Button size="small" color="primary" onClick={() => {console.log("Like!")}}>
                                <AntDesign name="like2" size={20}/>
                                </Button>
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
