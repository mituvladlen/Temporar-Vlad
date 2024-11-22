import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Picker } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Example announcements
const announcements = [
  { id: '1', type: 'Lost', item: 'Black Wallet', location: 'Valea Morilor Park', date: '2024-11-08', addedDate: '2024-11-05' },
  { id: '2', type: 'Found', item: 'Keys with Pikachu keychain', location: 'UTM University Library', date: '2024-11-07', addedDate: '2024-11-06' },
  { id: '3', type: 'Lost', item: 'Pink phone', location: 'Portmall', date: '2024-11-06', addedDate: '2024-11-04' },
  { id: '4', type: 'Lost', item: 'A pair of red gloves with small hearts on the top', location: 'State University of Moldova', date: '2024-11-08', addedDate: '2024-11-05' },
  { id: '5', type: 'Found', item: 'Purple umbrella', location: "Studentilor's street 7/1", date: '2024-11-07', addedDate: '2024-11-06' },
  { id: '6', type: 'Lost', item: 'Cat earring, small', location: '-', date: '2024-11-06', addedDate: '2024-11-04' },
];

const AnnouncementsScreen = () => {
  const [selectedSort, setSelectedSort] = useState('mostRecent');
  const [sortedData, setSortedData] = useState([...announcements]);

  // Sort announcements based on the selected method
  const sortAnnouncements = (method) => {
    let sorted = [...announcements];
    if (method === 'mostRecent') {
      sorted.sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));
    } else if (method === 'name') {
      sorted.sort((a, b) => a.item.localeCompare(b.item));
    } else if (method === 'type') {
      sorted.sort((a, b) => a.type.localeCompare(b.type));
    } else if (method === 'lost') {
      sorted = sorted.filter((a) => a.type === 'Lost');
    } else if (method === 'found') {
      sorted = sorted.filter((a) => a.type === 'Found');
    }
    setSortedData(sorted);
  };

  const handleSortChange = (value) => {
    setSelectedSort(value);
    sortAnnouncements(value);
  };

  const renderAnnouncement = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.type}: {item.item}</Text>
        <Text style={styles.details}>Location: {item.location}</Text>
        <Text style={styles.details}>Date: {item.date}</Text>
        <Text style={styles.dateAdded}>Added: {item.addedDate}</Text>
      </View>
    </View>
  );

  return (
    <LinearGradient colors={['#C3D6F9', '#F1FBFF']} style={styles.container}>
      <Text style={styles.pageTitle}>Last Announcements</Text>

      {/* Sorting Menu */}
      <View style={styles.sortMenu}>
        <Text style={styles.sortLabel}>Sort By:</Text>
        <Picker
          selectedValue={selectedSort}
          onValueChange={handleSortChange}
          style={styles.picker}
        >
          <Picker.Item label="Most Recent" value="mostRecent" />
          <Picker.Item label="Name" value="name" />
          <Picker.Item label="Lost Items" value="lost" />
          <Picker.Item label="Found Items" value="found" />
        </Picker>
      </View>

      {/* Announcements List */}
      <FlatList
        data={sortedData}
        renderItem={renderAnnouncement}
        keyExtractor={(item) => item.id}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#2E4A6F',
  },
  sortMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  sortLabel: {
    fontSize: 16,
    color: '#2E4A6F',
    marginRight: 10,
  },
  picker: {
    flex: 1,
    height: 40,
  },
  card: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  imageContainer: {
    width: 70,
    height: 70,
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
  dateAdded: {
    fontSize: 12,
    color: '#888',
  },
});

export default AnnouncementsScreen;
