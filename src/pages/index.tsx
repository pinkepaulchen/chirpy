import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Heading } from '$/components/Heading';
import { Button } from '$/components/Button';
import { Text } from '$/components/Text/Text';
import { useCurrentUser } from '$/hooks/useCurrentUser';
import { Layout } from '$/components/Layout';

function Home(): JSX.Element {
  const { data } = useCurrentUser();
  const router = useRouter();
  const handleClickDashboard = React.useCallback(() => {
    router.push('/dashboard');
  }, [router]);
  return (
    <Layout>
      <main>
        <Head>
          <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
        </Head>
        <Heading as="h1" className="text-center">
          Welcome to {process.env.NEXT_PUBLIC_APP_NAME}!
        </Heading>
        <Text className="py-6">{process.env.NEXT_PUBLIC_APP_NAME} is a comment service.</Text>
        {data?.currentUser ? (
          <Button onClick={handleClickDashboard}>Dashboard</Button>
        ) : (
          <Button shadow>Start for free</Button>
        )}
      </main>
    </Layout>
  );
}

export default Home;
