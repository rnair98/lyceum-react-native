import * as React from 'react';
import { SafeAreaView, StatusBar, View } from "react-native"
import ImagedCarouselCard from "react-native-imaged-carousel-card";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import {data} from './CarouselData'


const CarouselCards = () => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)


  return (
    <>
      <SafeAreaView>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            backgroundColor: "#transparent",
            bottom: 80,
          }}
        >
          <ImagedCarouselCard
            height={200}
            width={200}
            shadowColor="#051934"
            borderRadius={16}
            source={{
              uri:
                "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/32/d719a2d0d946d59e1151bc10ec29f5/Specialization-Certificate-Emblem---IDS---600x600.png?auto=format%2Ccompress&dpr=1&w=268"
            }}
            text="Data Science Foundations"
            overlayBorderBottomLeftRadius={0}
            overlayBorderBottomRightRadius={0}
          />
          <View style={{ marginTop: 20 }}>
            <ImagedCarouselCard
              source={{uri:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/a4/079d5e7c7b45ac9107f22bfcfeab91/Specialization-logo.png?auto=format%2Ccompress&dpr=1&w=268"}}
              text="Deep Learning Specialization"
              overlayBorderBottomLeftRadius={0}
              overlayBorderBottomRightRadius={0}
              />
          </View>

          <View style={{ marginTop: 20 }}>
            <ImagedCarouselCard
              height={200}
              width={200}
              shadowColor="#051934"
              borderRadius={16}
              source={{
                uri:
                  "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/c8/8d6df01eb311e6b5f5f786b289d8ba/pythondatascience_specialization_final.png?auto=format%2Ccompress&dpr=1&w=268"
              }}
              text="Data Science with Python"
              overlayBorderBottomLeftRadius={0}
              overlayBorderBottomRightRadius={0}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <ImagedCarouselCard
              source={{uri: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/ed/96c1a56aa14d9f80cb17f7db8ef189/Group-35.png?auto=format%2Ccompress&dpr=1&w=268"}}
              height={200}
              width={200}
              style={{borderRadius: 30}}
              text="SalesForce Cloud Certification"
              overlayBorderBottomLeftRadius={0}
              overlayBorderBottomRightRadius={0}
              />
          </View>
        </View>
      </SafeAreaView>
    </>

  )
}



export default CarouselCards