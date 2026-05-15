import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

export default function HabilidadesScreen() {
  const [habilidades] = useState([
    { id: 1, nome: 'JavaScript' },
    { id: 2, nome: 'React Native' },
    { id: 3, nome: 'Python' },
    { id: 4, nome: 'n8n' },
    { id: 5, nome: 'Node.js' },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.titulo}>Minhas Habilidades</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Técnicas</Text>
          <View style={styles.techGrid}>
            {habilidades.map((habilidade) => (
              <View key={habilidade.id} style={styles.techTag}>
                <Text style={styles.techTagText}>{habilidade.nome}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Soft Skills</Text>
          <View style={styles.softSkillsGrid}>
            <TouchableOpacity style={styles.skillTag}>
              <Text style={styles.skillTagText}>Trabalho em Equipe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.skillTag}>
              <Text style={styles.skillTagText}>Comunicação</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.skillTag}>
              <Text style={styles.skillTagText}>Resolução de Problemas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.skillTag}>
              <Text style={styles.skillTagText}>Criatividade</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Idiomas</Text>
          <Text style={styles.idiomaItem}>🇧🇷 Português - Nativo</Text>
          <Text style={styles.idiomaItem}>🇺🇸 Inglês - Intermediário</Text>
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
  scrollContent: {
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#000',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#000',
  },
  techGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  techTag: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  techTagText: {
    fontSize: 13,
    color: '#007AFF',
    fontWeight: '500',
  },
  softSkillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  skillTag: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  skillTagText: {
    fontSize: 13,
    color: '#007AFF',
    fontWeight: '500',
  },
  idiomaItem: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
    paddingVertical: 8,
  },
});
