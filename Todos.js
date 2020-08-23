/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Fragment } from 'react';
import { FlatList, StyleSheet, Pressable, Text, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Appbar, TextInput, Button } from 'react-native-paper';

import Todo from './Todo';

function Todos() {
  const ref = firestore().collection('todos');
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    return ref.onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        const { title, complete } = doc.data();
        list.push({
          id: doc.id,
          title,
          complete,
        });
      });

      setTodos(list);
    });
  };

  const addTodo = async () => {
    await ref.add({
      title: todo,
      complete: false,
    });
    setTodo('');
  };

  return (
    <Fragment>
      <Appbar>
        <Appbar.Content title={'TODOs List'} />
      </Appbar>
      <FlatList
        style={styles.container}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Todo {...item} />}
      />
      <View style={{ marginBottom: 20, paddingHorizontal: 16 }}>
        <View style={{ borderRadius: 10, overflow: 'hidden' }}>
          <Pressable
            onPress={() => null}
            android_ripple={{
              color: 'rgba(0,0,0,0.2)',
              borderless: false,
            }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? 'rgba(21,151,184, 0.9)'
                  : 'rgb(21,151,184)',
              },
            ]}>
            <Text style={{ padding: 20, textAlign: 'center', color: 'white' }}>
              Button
            </Text>
          </Pressable>
        </View>
      </View>
      <TextInput label={'New Todo'} value={todo} onChangeText={setTodo} />
      <Button onPress={addTodo}>Add TODO</Button>
    </Fragment>
  );
}

export default Todos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
});
