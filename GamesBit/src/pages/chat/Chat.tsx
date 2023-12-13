import React, { Fragment, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Balloon from './Balloon';
import styles from './styles';
import io from 'socket.io-client';
import StorageService from '../../services/StorageService';

const socket = io('http://10.5.0.50:3333')
const Chat = ({ route }: any) => {
  const [userData, setUserData] = useState('');
  const options: any = { messages: [] }
  const [content, setContent] = useState('');
  const [chat, setChat] = useState(options)


  useEffect(() => {
    socket.on('connect', () => {
      console.log('websocket connectado' + socket.connect);
      console.log(socket.id)
    })
    socket.on('disconnect', ()=>{
      console.log(socket.connected)
    })
    const fetchData = async () => {
      try {
        const user = await StorageService.get('userData');
        setUserData(user);
        socket.on('chat', (response: any) => {
          setContent('');
          chat.messages.push(response);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [])

  const sendMessage = () => {
    // const newMessage = { content, sentBy: userData, date: new Date() };
    // socket.emit('chat', { content, sentBy: userData, date: new Date() });
    // setChat((prevChat) => ({ messages: [...prevChat.messages, newMessage] }));
    // setContent('');

    socket.emit('chat', { content, sentBy: userData, date: new Date() })
  };
  return (
    <Fragment>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {
          chat.messages.length > 0 ?
            chat.messages.map((m: any, index: number) => (
              <Balloon key={index} message={m} currentUser={userData} />
            )) :
            <Text style={{ marginTop: '5%', alignSelf: 'center', color: '#848484' }}>
              Sem mensagens no momento!
            </Text>
        }
      </ScrollView>
      <SafeAreaView>
        <View style={styles.messageTextInputContainer}>
          <TextInput
            style={styles.messageTextInput}
            placeholder='Digite sua mensagem aqui...'
            placeholderTextColor={Colors.ligth}
            value={content}
            multiline
            onChangeText={(message) => setContent(message)}
          />
          <TouchableOpacity
            style={styles.sendButton}
            disabled={!content}
            onPress={() => sendMessage()}>
            <Text style={{ color: Colors.white }}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Fragment>
  )
};
export default Chat;