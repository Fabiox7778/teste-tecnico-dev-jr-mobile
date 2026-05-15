import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import PerfilScreen from './screens/PerfilScreen';
import HabilidadesScreen from './screens/HabilidadesScreen';
import ProjetosScreen from './screens/ProjetosScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState('Perfil');

  const renderScreen = () => {
    switch (activeTab) {
      case 'Perfil':
        return <PerfilScreen />;
      case 'Habilidades':
        return <HabilidadesScreen />;
      case 'Projetos':
        return <ProjetosScreen />;
      default:
        return <PerfilScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {renderScreen()}
      </View>

      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Perfil' && styles.activeTab]}
          onPress={() => setActiveTab('Perfil')}
        >
          <Text style={[styles.tabText, activeTab === 'Perfil' && styles.activeTabText]}>
            Perfil
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'Habilidades' && styles.activeTab]}
          onPress={() => setActiveTab('Habilidades')}
        >
          <Text style={[styles.tabText, activeTab === 'Habilidades' && styles.activeTabText]}>
            Habilidades
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'Projetos' && styles.activeTab]}
          onPress={() => setActiveTab('Projetos')}
        >
          <Text style={[styles.tabText, activeTab === 'Projetos' && styles.activeTabText]}>
            Projetos
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#007AFF',
  },
  tabText: {
    fontSize: 13,
    color: '#999',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#007AFF',
    fontWeight: '600',
  },
});