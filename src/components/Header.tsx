import { Dispatch, SetStateAction, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Search } from 'lucide-react-native';

type HeaderProps = {
  setQuery: Dispatch<SetStateAction<string>>
};

const Header = ({ setQuery }: HeaderProps) => {
  return (
    <View>
      <View>
        <Text style={styles.title}>Contact Directory</Text>
      </View>
      <View style={styles.searchWrapper}>
        <Search size={20} style={styles.icon} />
        <TextInput
          onChangeText={(text) => setQuery(text)}
          placeholder="Search contacts..."
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  icon: {
    position: 'absolute',
    color: '#9CA3AF',
    top: 8,
    left: 5,
  },
  searchWrapper: {
    backgroundColor: '#FFFFFF',
    borderColor: '#D1D5DB',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginTop: 16,
    paddingLeft: 32,
    minWidth: '100%',
  },
});

export default Header;
