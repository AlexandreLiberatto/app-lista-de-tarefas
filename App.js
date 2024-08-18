import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TouchableHighlight, Modal, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { AppLoading } from 'expo';
import { TextInput } from 'react-native';


export default function App() {

  const image = require('./resources/bg.jpg')

  const [tarefas, setarTarefas] = useState([
    {
      id: 1,
      tarefa: 'Minha tarefa 1.'
    },
    {
      id: 2,
      tarefa: 'Minha outra tarefa 2.'
    },
    {
      id: 3,
      tarefa: 'Minha outra tarefa 3.'
    }
  ]);

  const [modal, setModal] = useState(true);

  function deletarTarefa(id) {
    
    let newTarefas = tarefas.filter(function(val){
      alert('Tarefa com id '+id+' foi deletada com sucesso!');
      return val.id != id;
    });

    setarTarefas(newTarefas);
  }

  return (
    <ScrollView style={{flex:1}}>

<StatusBar hidden />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput autoFocus={true}></TextInput>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModal(!modal);
              }}
            >
              <Text style={styles.textStyle}>Adicionar Tarefa</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

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
  },
  // Estilos para nossa modal
centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: 'rgba(0, 0, 0, 0.5)'
},
modalView: {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  // Adicionei 'position: "relative"' para o zIndex funcionar
  position: "relative",
  zIndex: 5,
},
openButton: {
  backgroundColor: "#F194FF",
  borderRadius: 20,
  padding: 10,
  elevation: 2
},
textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center"
},
modalText: {
  marginBottom: 15,
  textAlign: "center"
}

  
});

