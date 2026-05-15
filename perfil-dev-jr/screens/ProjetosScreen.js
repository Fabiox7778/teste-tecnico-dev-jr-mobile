import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';

export default function ProjetosScreen() {
  const [mensagem, setMensagem] = useState('');

  const handleEnviarContato = () => {
    if (mensagem.trim() === '') {
      Alert.alert('Erro', 'Digite uma mensagem');
      return;
    }
    Alert.alert('Sucesso', 'Mensagem enviada!');
    setMensagem('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Projetos e Contato</Text>

        {/* Projeto 1 */}
        <View style={styles.card}>
          <Text style={styles.projectTitle}>ClubeLivro_BackEnd</Text>
          <Text style={styles.projectDesc}>API REST em Node.js e PostgreSQL para a plataforma Clube do Livro. Responsável pelo gerenciamento de obras literárias, simulados e integração entre equipes. Projeto Integrador SENAI + SESI 2026.</Text>
          <View style={styles.tags}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Ver</Text>
            </View>
          </View>
        </View>

        {/* Projeto 2 */}
        <View style={styles.card}>
          <Text style={styles.projectTitle}>react-native-buscacep</Text>
          <Text style={styles.projectDesc}>App simples em React Native para consulta de endereços utilizando a API do ViaCEP, com validações de campo, estados de carregamento e interface estilizada.</Text>
          <View style={styles.tags}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Ver</Text>
            </View>
          </View>
        </View>

        <View style={styles.tag}>
          <Text style={styles.tagTextBig}>+ Projetos</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contato</Text>
          
          <Text style={styles.label}>Email: fabiotrevizolli8@email.com</Text>
          <Text style={styles.label}>GitHub: <Text style={styles.link} onPress={() => Linking.openURL('https://github.com/Fabiox7778')}>github.com/Fabiox7778</Text></Text>
          <Text style={styles.label}>LinkedIn: linkedin.com/in/Fabio_Trevizolli</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Enviar Mensagem</Text>
          <TextInput
            style={styles.input}
            placeholder="Sua mensagem..."
            placeholderTextColor="#999"
            multiline
            numberOfLines={4}
            value={mensagem}
            onChangeText={setMensagem}
          />
          <TouchableOpacity style={styles.button} onPress={handleEnviarContato}>
            <Text style={styles.buttonText}>Enviar Contato</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    paddingBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  card: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  projectDesc: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  tags: {
    flexDirection: 'row',
    gap: 8,
  },
  tag: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  tagTextBig: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center'
  },
  section: {
    marginTop: 25,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#000',
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  link: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#000',
    textAlignVertical: 'top',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
