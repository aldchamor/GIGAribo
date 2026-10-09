import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { useColors } from '@/hooks/useColors';
import { ActionButton, BrandMark, FormField, IconButton, Page } from '@/components/MarketplaceUI';
import { useMarketplace } from '@/context/MarketplaceContext';
import { KeyboardAwareScrollViewCompat } from '@/components/KeyboardAwareScrollViewCompat';

export default function RegisterScreen() {
  const colors = useColors();
  const { updateProfile } = useMarketplace();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function createAccount() {
    if (name.trim().length < 2 || !email.includes('@') || password.length < 6) {
      Alert.alert('Review your details', 'Add your name, a valid email, and a password with at least 6 characters.');
      return;
    }
    updateProfile({ name: name.trim(), email: email.trim(), phone: '' });
    router.replace('/location');
  }

  return (
    <Page>
      <KeyboardAwareScrollViewCompat contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled" bottomOffset={72}>
        <IconButton icon="chevron-left" accessibilityLabel="Back" onPress={() => router.back()} />
        <View style={styles.logo}><BrandMark /></View>
        <Text style={[styles.title, { color: colors.foreground }]}>Create your account</Text>
        <Text style={[styles.copy, { color: colors.mutedForeground }]}>Your local service shortlist starts here.</Text>
        <FormField label="Your name" value={name} onChangeText={setName} placeholder="Aldwin Dela Cruz" autoCapitalize="words" />
        <FormField label="Email" value={email} onChangeText={setEmail} placeholder="you@example.com" keyboardType="email-address" autoCapitalize="none" />
        <FormField label="Password" value={password} onChangeText={setPassword} placeholder="At least 6 characters" secureTextEntry />
        <Text style={[styles.disclaimer, { color: colors.mutedForeground }]}>Preview only. Your password isn't stored or sent anywhere.</Text>
        <ActionButton label="Create account" onPress={createAccount} />
        <View style={styles.signin}>
          <Text style={{ color: colors.mutedForeground, fontSize: 13 }}>Already have an account?</Text>
          <Pressable onPress={() => router.replace('/login')}><Text style={{ color: colors.primary, fontWeight: '800', fontSize: 13 }}> Sign in</Text></Pressable>
        </View>
      </KeyboardAwareScrollViewCompat>
    </Page>
  );
}

const styles = StyleSheet.create({
  content: { flexGrow: 1, paddingHorizontal: 23, paddingTop: 9, paddingBottom: 24, gap: 16 },
  logo: { alignItems: 'center', marginTop: 7, marginBottom: 4 },
  title: { fontSize: 25, fontWeight: '800' },
  copy: { fontSize: 13, marginTop: -10 },
  disclaimer: { fontSize: 11, lineHeight: 16, marginTop: -6 },
  signin: { flexDirection: 'row', justifyContent: 'center', marginTop: 'auto' },
});