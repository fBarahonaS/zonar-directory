import { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { User } from '../types/user';
import UserCard from './UserCard';
import Header from './Header';

const Dashboard = () => {
  const numOfUsers = 1000;
  const url = `https://randomuser.me/api/?results=${numOfUsers}`;
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchData();

    return () => {};
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Header />

      <ScrollView>
        <UserCard users={users} />
      </ScrollView>
    </View>
  );

};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 16,
    textAlign: 'center',
  }
});

export default Dashboard;
