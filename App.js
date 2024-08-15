import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { AppLoading } from 'expo';

export default function App() {

  const image = require('./resources/bg.jpg')


  return (
    <View style={{flex:1}}>

        <ImageBackground source={image} style={styles.image}>
          <View style={styles.coverView}>
            <Text style={styles.textHeader}>Lista De Tarefas - Liberato Sistemas</Text>
          </View>
        </ImageBackground>
        <AntDesign name="minuscircleo" size={24} color="black" />

        <View style={styles.tarefaSingle}>
          
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width:'100%',
    height:80,
    resizeMode: "cover",
  },

  coverView: {
    width:'100%',
    height:80,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  textHeader: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    marginTop: 45,
  },

  tarefaSingle: {
    marginTop: 30,
    width: '100%',
    borderBottomColor:'black',
    flexDirection:'row',
    paddingBottom:10,
  }
});

/* parei no video 2, 09:03 */
