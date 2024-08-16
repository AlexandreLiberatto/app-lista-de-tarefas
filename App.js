import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { AppLoading } from 'expo';

export default function App() {

  const image = require('./resources/bg.jpg')

  const [tarefas, setarTarefas] = useState([
    {
      id: 1,
      tarefa: 'Minha tarefa 1.'
    },
    {
      id: 2,
      tarefa: 'Minha outra tarefa.'
    }
  ]);

  function deletarTarefa() {

  }

  return (
    <ScrollView style={{flex:1}}>

        <ImageBackground source={image} style={styles.image}>
          <View style={styles.coverView}>
            <Text style={styles.textHeader}>Lista De Tarefas - Liberato Sistemas</Text>
          </View>
        </ImageBackground>

        {
          tarefas.map(function(val) {
            return (
              <View key={val.id} style={styles.tarefaSingle}>
                <View style={{flex:1, width:'100%', padding:10}}>
                  <Text>{val.tarefa}</Text>
                </View>
                <View style={{alignItems:'flex-end', flex:1, padding:10}}>
                  <TouchableOpacity onPress={()=> deletarTarefa(val.id)}>
                    <AntDesign name="minuscircleo" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })
        }

    </ScrollView>
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
    borderBottomWidth:1,
    borderBottomColor:'black',
    flexDirection:'row',
    paddingBottom:10,
  }
});

/* PAREI NO VIDEO 03 */