import { Keyboard, KeyboardAvoidingView, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Feather } from '@expo/vector-icons'
import { useState } from "react";

export function Email() {
  const [email, setEmail] = useState('')

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: '#F5F6F7'
          }}
        >
          <View
            style={{
              flex: 1,
              padding: 24,
            }}
          >
            <Feather name="arrow-left" size={28} />

            <Text
              style={{
                fontSize: 24,
                marginTop: 32
              }}
            >
              Boas-vindas à Vanq!
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginTop: 12
              }}
            >
              Fazemos a gestão dos usuários por meio do seu email. Digite-o abaixo e clique em avancar.
            </Text>

            <TextInput
              placeholder='Email'
              style={{
                backgroundColor: '#ffffff',
                fontSize: 16,
                height: 56,
                paddingHorizontal: 16,
                borderRadius: 12,
                marginTop: 24
              }}
              value={email}
              onChangeText={setEmail}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
            />

            <TouchableOpacity
              style={{
                backgroundColor: !!email ? '#101010' : '#D9DADB',
                borderRadius: 12,
                height: 48,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 'auto'
              }}
              activeOpacity={0.7}
              disabled={!email}
            >
              <Text
                style={{
                  color: !!email ? '#ffffff' : '#86868B',
                  fontSize: 18,
                }}
              >
                Avançar
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
