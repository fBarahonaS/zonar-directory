import { View, Text, Image, StyleSheet } from "react-native";
import { User } from "../types/user";

type UserCardProps = {
  users: User[]
};

const UserCard = ({ users }: UserCardProps) => 
  users.map((user, index) => (
    <View
      key={index}
      style={styles.card}
    >
      <View style={styles.imgWrapper}>
        <Image
          source={{uri: user.picture.thumbnail}}
          style={styles.img}
        />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.name}>{`${user.name.first} ${user.name.last}`}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </View>
  ));

  const styles = StyleSheet.create({
    card: {
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
      padding: 12,
      marginBottom: 8,
      flexDirection: 'row',
    },
    imgWrapper:{
      padding: 12,
    },
    img: {
      width: 50,
      height: 50,
      borderRadius: 25
    },
    cardContent:{
      justifyContent: 'center',
    },
    name: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#1F2937'
    },
    email: {
      fontSize: 14,
      color: '#6B7280'
    }
  });

export default UserCard;
