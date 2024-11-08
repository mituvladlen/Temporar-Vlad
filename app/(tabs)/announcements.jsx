import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const announcements = [
  { id: '1', type: 'Lost', item: 'Black Wallet', location: 'Park', date: '2024-11-08' },
  { id: '2', type: 'Found', item: 'Keys', location: 'Library', date: '2024-11-07' },
  { id: '3', type: 'Lost', item: 'Phone', location: 'Mall', date: '2024-11-06' },
];

const AnnouncementsScreen = () => {
  const renderAnnouncement = ({ item }) => (
    <View style={styles.card}>
      <Text>{item.type}: {item.item}</Text>
      <Text>Location: {item.location}</Text>
      <Text>Date: {item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={announcements}
        renderItem={renderAnnouncement}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default AnnouncementsScreen;
