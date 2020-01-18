import React from 'react';
import { Block, Text } from './src/components'

import AuthState from './src/contex/auth/authState'

import AppRoot from './src/AppRoot'

export default function App() {
  return (
    <AuthState>
      <AppRoot />
    </AuthState>
  );
}
