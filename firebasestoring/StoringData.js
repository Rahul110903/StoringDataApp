import axios from 'axios';
import React, {useState} from 'react';
import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Loading from './Loading';

const StoringData = () => {
  const [data, setData] = useState({
    id: '',
    name: '',
    rollno: '',
  });
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(false);
  const [submitting,setSubmitting]=useState(false)

  const postData = users => {
    setSubmitting(true)
    axios.post(
      'https://react-native-course-5a06d-default-rtdb.firebaseio.com/users.json',
      users,
    );
    setSubmitting(false)
    Alert.alert('Submitted', 'Data has been added successfully');
  };

  const getData = async () => {
    setLoading(true);
    const response = await axios.get(
      'https://react-native-course-5a06d-default-rtdb.firebaseio.com/users.json',
    );
    const expenses = [];

    for (const key in response.data) {
      const expenseObj = {
        ids: key,
        name: response.data[key].name,
        rollno: response.data[key].rollno,
      };
      expenses.push(expenseObj);
    }
    setUsers(expenses);
    setLoading(false);
  };

  if(submitting){
    return <Loading/>
  }

  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <Text style={styles.text}>Storing the Data</Text>
      </View>
      <Text style={{color: 'white', fontSize: 20}}>Id</Text>

      <TextInput
        style={styles.inputText}
        value={data.id}
        onChangeText={text =>
          setData(prev => {
            return {
              ...prev,
              id: text,
            };
          })
        }
      />
      <Text style={{color: 'white', fontSize: 20}}>Name</Text>
      <TextInput
        style={styles.inputText}
        value={data.name}
        onChangeText={text =>
          setData(prev => {
            return {
              ...prev,
              name: text,
            };
          })
        }
      />
      <Text style={{color: 'white', fontSize: 20}}>Rollno.</Text>
      <TextInput
        style={styles.inputText}
        value={data.rollno}
        onChangeText={text =>
          setData(prev => {
            return {
              ...prev,
              rollno: text,
            };
          })
        }
      />
      <Button title="Post Data" onPress={() => postData(data)} />
      <View style={{marginVertical: 10}}>
        <Button title="Get Data" onPress={getData} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
          Name
        </Text>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
          Roll No.
        </Text>
      </View>

      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={users}
          renderItem={element => {
            return (
              <View style={styles.displayItemContainer}>
                <Text style={{color: 'white', fontSize: 17}}>
                  {element.item.name}
                </Text>
                <Text style={{color: 'white', fontSize: 17}}>
                  {element.item.rollno}
                </Text>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  innercontainer: {
    alignSelf: 'center',
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  inputText: {
    backgroundColor: 'white',
    marginVertical: 10,
    color:"black"
  },
  displayItemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    borderColor: 'yellow',
    borderWidth: 1,
    padding: 5,
  },
});
export default StoringData;
