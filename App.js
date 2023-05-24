import { useState } from 'react';
import { StyleSheet,View,FlatList,SafeAreaView,StatusBar } from 'react-native';
import GlobalItem from "./components/GlobalItem";
import GlobalInputs from './components/GlobalInputs';
import {Stack} from 'expo-router';
import { ScreenHeaderBtn } from "./components/ScreenHeaderBtn";

export default function App(props) {
const [courseGoals,setCourseGoal]= useState([]);
function addGoalHundler(enteredGoalText) {
  setCourseGoal((currentCourseGoals) => [...currentCourseGoals,{text: enteredGoalText, key: Math.random().toString()},]);
}

function deleteGoalItem(id) {
  setCourseGoal(currentCourseGoals=>{
    return (currentCourseGoals.filter((item)=> item.id !== id)
    );
  });
}
  return (
    <SafeAreaView style={{flex:1 , backgroundColor:"#FAFAFC"}}>
      {/* <Stack.Screen
      options={{
        headerStyle:{
          backgroundColor:"#FAFAFC",
        },
        headerShadowVisible:false,
        headerLeft:()=>(
          <ScreenHeaderBtn dimension="70%" handlePress = {() => {}}/>
        ),
        headerTitle:"Home",
      }}
      /> */}
      <StatusBar
      animated={true}
      backgroundColor="#181645"
      barStyle={'default'}
      showHideTransition={'fade'}
      hidden={false}
      />
    <View style={styles.appcontainer}>
      <GlobalInputs onAddGoal= {addGoalHundler} />
      <View style={styles.listGoal}>
        <FlatList data={courseGoals} renderItem={(itemData)=>{return<GlobalItem text = {itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalItem}/>;}} alwaysBounceVertical={true}/>
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    flex:1,
    padding:50,
    paddingHorizontal:16,
  },
   listGoal:{
    flex:5,
   },
});
