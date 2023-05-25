import * as React from 'react';
import { View, Text, Button } from 'react-native';

function DetailsScreen({ navigation }) {
  return (
    <View>
      <Text>Tela de Detalhes</Text>
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default DetailsScreen;