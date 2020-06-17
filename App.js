import React , {useState} from 'react';
import { StyleSheet, View, Button,FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals]= useState([]);
  const [isModalOpen, setModal] = useState(false);

  const addGoal = ip => {
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: ip}]);
    setModal(false);
  }

  const cancelGoal = ()=> {
    setModal(false);
  }

  const deleteFun = goalId => {
    return(
      setCourseGoals(currentGoals=> {
        return(
          currentGoals.filter((goal)=> goal.id !== goalId)
        )
      })
    )
  }

  return (
    <View style={styles.screen}>  
      <Button title="Add New Goal" onPress={()=> setModal(true)}/> 
      <GoalInput goalAdd={addGoal} vis={isModalOpen} onCancel={cancelGoal}/> 
      <FlatList
        keyExtractor= {(item,index)=> item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} id={itemData.item.id} onDelete={deleteFun}/>}
        /> 
    </View> 
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});

