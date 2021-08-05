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


const courses = [
    { name: "Course1", description: "Enter Course Description Here" },
    { name: "Course2", description: "Enter Course Description Here" },
    { name: "Course3", description: "Enter Course Description Here" },
    { name: "Course4", description: "Enter Course Description Here" },
]

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
    minWidth: 500
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

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
                        <Typography gutterBottom variant="h6" component="h6">
                            {course.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {course.description}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Bookmark
                        </Button>
                        <Button size="small" color="primary">
                        Share
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </View>
  );
}
