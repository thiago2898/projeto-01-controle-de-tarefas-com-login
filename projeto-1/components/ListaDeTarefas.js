import {
  View,
  Text,
  TouchableOpacity,
  Button,
  FlatList,
  TextInput,
} from 'react-native';
import { useState } from 'react';

import styles from '../styles';

export default function ListaDeTarefas({ route }) {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [taskFunction, setNewTaskFunction] = useState('');
  const [completedTasks, setCompletedTasks] = useState([]);

  function addTask() {
    if (newTask.trim() === '' || taskFunction.trim() === '') return;

    const taskObject = {
      id: Date.now().toString(),
      name: newTask,
      setFunction: taskFunction,
      completed: false,
    };

    setTaskList([...taskList, taskObject]);
    setNewTask('');
    setNewTaskFunction('');
  }

  function completeTask(index) {
    const newList = taskList.map((task) =>
      task.id === index ? { ...task, completed: true } : task
    );

    setTaskList(newList);

    const alreadyExists = completedTasks.some((task) => task.id === index);

    if (!alreadyExists) {
      const completedTask = newList.find((task) => task.id === index);
      setCompletedTasks([...completedTasks, completedTask]);
    }
  }

  function removeTask(index) {
    const newList = taskList.filter((task) => task.id !== index);
    setTaskList(newList);

    const newCompleted = completedTasks.filter((task) => task.id !== index);
    setCompletedTasks(newCompleted);
  }

  const { userName } = route.params;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        gap: 15,
        backgroundColor: '#ecf0f1',
        padding: 8,
      }}>
      <Text style={{ fontSize: 25, fontWeight: 1 }}>
        Seja bem-vindo(a) à sua lista de tarefas, {userName}!
      </Text>

      <TextInput
        placeholder="Nome da tarefa"
        onChangeText={setNewTask}
        value={newTask}
        style={styles.input}
      />

      <TextInput
        placeholder="Função da tarefa"
        onChangeText={setNewTaskFunction}
        value={taskFunction}
        style={styles.input}
      />

      <Button title="Adicionar tarefa" onPress={addTask} />

      <FlatList
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              padding: 20,
              marginTop: 30,
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#e6e6e6',
              borderRadius: 12,
            }}>
            <Text style={[styles.task, item.completed && styles.completed]}>
              {item.name}
            </Text>

            <Text>Função da tarefa: {item.setFunction}</Text>

            <TouchableOpacity
              onPress={() => completeTask(item.id)}
              style={styles.complete}>
              <Text>Complete</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => removeTask(item.id)}
              style={styles.remover}>
              <Text>Remover Tarefa</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Text>Completed tasks: {completedTasks.length}</Text>
    </View>
  );
}
