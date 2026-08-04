import { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { User } from '../types/user';
import UserCard from '../components/UserCard';
import Header from '../components/Header';
import useFiltering from '../hooks/useFiltering';
import AlertComponent from '../helpers/AlertComponent';

const Dashboard = () => {
  const numOfUsers = 1000;
  const url = `https://randomuser.me/api/?results=${numOfUsers}`;
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [displayErrorAlert, setDisplayErrorAlert] = useState<boolean>(false);


  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url, { signal });
        const data = await response.json();
        console.log(data.results);
        setUsers(data.results);
      } catch (err) {
        setDisplayErrorAlert(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    setFilteredUsers(useFiltering(query, users) ?? []);
  }, [query, users]);

  const filteredUsersMsg = filteredUsers.length > 0 ?
    `Filtered Contacts: ${filteredUsers.length}` :
    'No contacts found';

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Header setQuery={setQuery} />
        {query.length > 0 && (
          <AlertComponent
            type="info"
            message={filteredUsersMsg}
          />
        )}
      </View>

      {
        isLoading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <>
            <ScrollView style={styles.content}>
              <UserCard
                users={
                  query.length > 0 ?
                  filteredUsers :
                  users
                }
              />
            </ScrollView>

            {
              displayErrorAlert && (
                <AlertComponent
                  type="error"
                  message="Failed to fetch users. Please try again later."
                />
              )
            }
          </>
        )
      }
    </View>
  );

};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 16,
    textAlign: 'center',
    flexDirection: 'column',
  },
  header: {
    marginTop: 48,
    marginBottom: 16,
  },
  content: {
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Dashboard;
