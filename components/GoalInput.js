import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props =>{   

    const [enteredText, setInput]= useState('');

    const inputHandler = (inputText) => {
        setInput(inputText);
      };

    const addGoalHandler= ()=> {
      if(enteredText === ''){
        return;
      }
      props.goalAdd(enteredText);
      setInput('');
    };
    

        return(
          <Modal animationType="slide" visible={props.vis}>
            <View style={styles.inputContainer}>
              <TextInput
              placeholder="Course Goal" 
              style={styles.input}
              onChangeText= {inputHandler}
              value={enteredText}
              />
              <View style={styles.button}>
                <View style={styles.b}>
                  <Button  title="ADD" onPress={addGoalHandler}/>
                </View>
                <View style={styles.b}>
                  <Button  title="CANCEL" color="red" onPress={props.onCancel}/>
                </View>
              </View>
            </View> 
          </Modal>

        
        );
    }


const styles= StyleSheet.create({
    input: {
        width: '80%',
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        marginBottom:10
      },
    inputContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
      },
    button: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems:'center',
      width:'60%'
    },
    b:{
      width:100
    }
})

export default GoalInput;