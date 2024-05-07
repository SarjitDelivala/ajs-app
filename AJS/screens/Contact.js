import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { WebView } from 'react-native-webview';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [webviewHeight, setWebviewHeight] = useState(500); // Initial height

  const handleSendEmail = async () => {
    try {
      const response = await fetch('YOUR_BACKEND_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        Alert.alert('Email Sent', 'Your message has been sent successfully.');
      } else {
        Alert.alert('Error', 'Failed to send email. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      Alert.alert('Error', 'Failed to send email. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{
          html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.385905762172!2d-79.72019492358795!3d43.68173997110073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3c0b5faf7bf5%3A0x6ac163754fe256e9!2sArihant%20Jain%20Sangh%20(AJS)!5e0!3m2!1sen!2sca!4v1715047638758!5m2!1sen!2sca" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        }}
        style={[styles.webview, { height: webviewHeight }]}
        onMessage={(event) => {
          const height = Number(event.nativeEvent.data);
          setWebviewHeight(height);
        }}
      />
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        multiline
        style={[styles.input, { height: 100 }]}
      />
      <Button title="Send Email" onPress={handleSendEmail} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  webview: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 5,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default Contact;
