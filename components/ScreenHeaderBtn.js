import { Image, TouchableOpacity,StyleSheet } from "react-native";
import urlImage from "../assets/menu.png"
const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={urlImage}  
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
    
  );
};
const styles = StyleSheet.create({
    btnContainer: {
      width: 40,
      height: 40,
      backgroundColor: "#FAFAFC",
      borderRadius: 12 / 1.25,
      justifyContent: "center",
      alignItems: "center",
    },
    btnImg: (dimension) => ({
      width: dimension,
      height: dimension,
      borderRadius: 12 / 1.25,
    }),
  });
export default ScreenHeaderBtn;
