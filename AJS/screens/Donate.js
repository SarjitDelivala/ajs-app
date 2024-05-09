import React from 'react';
import { Text, StyleSheet, View, Pressable } from 'react-native';

export default function Donate() {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>General Donations</Text>
        <Text style={styles.description}>
          All activities, including development of facilities, are fully funded by donations and contributions from devotees and the community. Arihant Jain Sangh deeply appreciates your kind and generous support.
        </Text>
        <Text style={styles.note}>All donations are tax deductible.</Text>
        <Text style={styles.note}>Donations can be made via e-Transfer, Debit Card, Cheque, or Website.</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Donate Now</Text>
        </Pressable>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Cheque</Text>
        <Text style={styles.description}>
          Send the cheque payable to Arihant Jain Sangh or Shree Arihant Shwetamber Murti Pujak Jain Sangh to:
        </Text>
        <Text style={styles.address}>
          350 Rutherford Rd South, Unit #7, Brampton, ON L6W 4N6
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
    textAlign: 'center',
  },
  note: {
    fontSize: 14,
    marginBottom: 5,
    color: '#777',
    textAlign: 'center',
  },
  address: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#DB4242',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    elevation: 3,
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
