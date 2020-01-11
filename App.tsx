import React from 'react';
import { Block, Text } from './src/components'

import AuthState from './src/contex/auth/authState'

import Root from './Root'

export default function App() {
  return (
    <AuthState>
      <Root />
    </AuthState>
  );
}
