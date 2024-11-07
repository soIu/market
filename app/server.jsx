'use server';

import App from '../src/components/App';
import { unstable_headers } from 'expo-router/rsc/headers';
import utils from '../src/utils';

export async function DefaultServerComponent() {
  const headers = await unstable_headers();
  process.env.solu_middleware_path = headers.get('referer');
  process.env.solu_middleware_cookie = headers.get('cookie');
  return <App/>
}
