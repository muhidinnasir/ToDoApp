import {TextInput, View,StyleSheet,Button,Toast} from "react-native";
import {useState} from "react"

function GlobalInputs(props) {
const [enteredGoalText,setEnteredGoalText]= useState('');
function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHundler() {
    if (!enteredGoalText) {
        alert("Goal is required !");
    }else{
        props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
    }
    
  }
 return (
     <View style={styles.inputcontainer}>
        <TextInput style={styles.textInputFeild} placeholder="Insert your goal" onChangeText={goalInputHandler} value={enteredGoalText}/>
        <Button title='Add Goal' onPress={addGoalHundler}/>
    </View>);
}


const styles= StyleSheet.create({
    inputcontainer: {
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:24,
        borderBottomWidth:1,
        borderBottomColor:"#cccc"
       },
       textInputFeild:{
        padding:8,
        marginRight:8,
        borderWidth:1,
        borderColor:"#290854",
        width:"70%"
       },
});
export default GlobalInputs;