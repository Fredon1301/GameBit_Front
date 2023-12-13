import { StyleSheet, View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    bubbleWrapper: {
        flexDirection: 'column',
    },
    bubbleWrapperSent: {
        alignSelf: 'flex-end',
        marginLeft: 40,

    },
    bubbleWrapperReceived: {
        alignSelf: 'flex-start',
        marginRight: 40,
    },
    balloon: {
        padding: 0,
        borderRadius: 16,
    },
    balloonSent: {
        backgroundColor: Colors.primary,
    },
    balloonReceived: {
        backgroundColor: Colors.black,
    },
    balloonText: {
        fontSize: 10,
    },
    balloonTextSent: {
        color: Colors.black,
    },
    balloonTextReceived: {
        color: Colors.black
    },

});

const Balloon = ({message, currentUser}: any) => {
    const sent = currentUser === message.sentBy;
    const balloonColor = sent ? styles.balloonSent : styles.balloonReceived;
    const balloonTextColor = sent
    ? styles.balloonTextSent
    : styles.balloonTextReceived;
 const bubbleWrapper = sent
    ? styles.bubbleWrapperSent
    : styles.bubbleWrapperReceived;

    if(message) {
        return (
            <View style = {{marginBottom: '2%'}}>
                <View style = {{...styles.bubbleWrapper, ...bubbleWrapper}}>
                    <Text>
                        {message.sentBy}
                    </Text>
                    <Text style = {{...styles.balloonText, ...balloonTextColor}}>
                        {message.content}
                    </Text>
                </View>
            </View>
        )
    
    } else {
        return <></>
    }
}

export default Balloon;