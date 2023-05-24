import {View,Text,StyleSheet,Pressable,Image} from "react-native";


function GlobalItem(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.goalText}>{props.text}</Text>
      <Pressable android_ripple={{color:"#cdb5ec"}}  onPress={props.onDeleteItem.bind(this,props.id)}>
      <Image
        style={{height:30,width:50,}}
        source={require('../assets/77.png')}
      /></Pressable>
      </View>
      );
}

const styles = StyleSheet.create({
  container:{
    flex:5,
    padding:10,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:10,
    
  },
  goalText:{
    padding:10,
    margin:8,
    flex:1,
    borderRadius:6,
    backgroundColor:"#290854",
    color:"white",
    padding:8,
    textAlign:"left",
       }
});

export default GlobalItem;

