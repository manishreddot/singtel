import React from 'react'
import {View, StyleSheet} from 'react-native'
import { width } from '../../assects/strings'

export default Indicators = (props) => {
  const activeColor = props.activeColor
  const inactiveColor = props.inactiveColor
  const dotsCount = props.count
  const activeDot = props.activeDot
  const containerStyle = props.containerStyle
  
  const createDots = () => {
    let dot = []
    for(let i = 1; i <= dotsCount; i++) {
      dot.push(<View key={i} style={[styles.dot, {backgroundColor: activeDot === i ? activeColor : inactiveColor,width:activeDot === i ? width/15:null}]}></View>)
    }
    return dot
  }

  return(
    
    <View style={[styles.dotContainer, containerStyle]}>
      {createDots().map((dot, i) => (<React.Fragment key={i}>{dot}</React.Fragment>))}
    </View>
  )
}

const styles = StyleSheet.create({
  dotContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
   
  },
  dot: {
    marginHorizontal: 5,
    paddingHorizontal: 2.5,
    paddingVertical:2.5,
    borderRadius: 100,
  }
})