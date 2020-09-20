/** @jsx jsx */
import { jsx, Heading, Text, Box } from 'theme-ui';
import * as React from 'react';
import Head from 'next/head';

export default function TermsOfService(): JSX.Element {
  return (
    <>
      <Head>
        <title>ZOO: Terms of Service</title>
      </Head>
      <article sx={{ display: 'flex', gap: 4, flexDirection: 'column' }}>
        <Heading as="h1">Terms of Service</Heading>
        <Box>
          <Heading as="h2">1. Terms</Heading>
          <Text>
            By accessing the website at{' '}
            <a href={process.env.NEXT_PUBLIC_APP_URL}>{process.env.NEXT_PUBLIC_APP_URL}</a>, you are
            agreeing to be bound by these terms of service, all applicable laws and regulations, and
            agree that you are responsible for compliance with any applicable local laws. If you do
            not agree with any of these terms, you are prohibited from using or accessing this site.
            The materials contained in this website are protected by applicable copyright and
            trademark law.
          </Text>
        </Box>
        <Box>
          <Heading as="h2">2. Use License</Heading>
          <Text>
            Permission is granted to temporarily download one copy of the materials (information or
            software) on ZOO's website for personal, non-commercial transitory viewing only. This is
            the grant of a license, not a transfer of title, and under this license you may not:
          </Text>
          <br />
          <Text>
            Modify or copy the materials; use the materials for any commercial purpose, or for any
            public display (commercial or non-commercial); attempt to decompile or reverse engineer
            any software contained on ZOO's website; remove any copyright or other proprietary
            notations from the materials; or transfer the materials to another person or “mirror”
            the materials on any other server. This license shall automatically terminate if you
            violate any of these restrictions and may be terminated by ZOO at any time. Upon
            terminating your viewing of these materials or upon the termination of this license, you
            must destroy any downloaded materials in your possession whether in electronic or
            printed format.
          </Text>
        </Box>
        <Box>
          <Heading as="h2">3. Disclaimer</Heading>
          <Text>
            a. The materials on ZOO's website are provided on an ‘as is’ basis. ZOO makes no
            warranties, expressed or implied, and hereby disclaims and negates all other warranties
            including, without limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of intellectual property or other
            violation of rights.
          </Text>
          <br />
          <Text>
            b. Further, ZOO does not warrant or make any representations concerning the accuracy,
            likely results, or reliability of the use of the materials on its website or otherwise
            relating to such materials or on any sites linked to this site.
          </Text>
        </Box>
        <Box>
          <Heading as="h2">4. Limitations</Heading>
          <Text>
            In no event shall ZOO or its suppliers be liable for any damages (including, without
            limitation, damages for loss of data or profit, or due to business interruption) arising
            out of the use or inability to use the materials on ZOO's website, even if ZOO or a ZOO
            authorized representative has been notified orally or in writing of the possibility of
            such damage. Because some jurisdictions do not allow limitations on implied warranties,
            or limitations of liability for consequential or incidental damages, these limitations
            may not apply to you.
          </Text>
        </Box>
        <Box>
          <Heading as="h2">5. Accuracy of materials</Heading>
          <Text>
            The materials appearing on ZOO website could include technical, typographical, or
            photographic errors. ZOO does not warrant that any of the materials on its website are
            accurate, complete or current. ZOO may make changes to the materials contained on its
            website at any time without notice. However ZOO does not make any commitment to update
            the materials.
          </Text>
        </Box>
        <Box>
          <Heading as="h2">5. Accuracy of materials</Heading>
          <Text>
            The materials appearing on ZOO website could include technical, typographical, or
            photographic errors. ZOO does not warrant that any of the materials on its website are
            accurate, complete or current. ZOO may make changes to the materials contained on its
            website at any time without notice. However ZOO does not make any commitment to update
            the materials.
          </Text>
        </Box>
        <Box>
          <Heading as="h2">6. Links</Heading>
          <Text>
            ZOO has not reviewed all of the sites linked to its website and is not responsible for
            the contents of any such linked site. The inclusion of any link does not imply
            endorsement by ZOO of the site. Use of any such linked website is at the user’s own
            risk.
          </Text>
        </Box>
        <Box>
          <Heading as="h2">7. Modifications</Heading>
          <Text>
            ZOO may revise these terms of service for its website at any time without notice. By
            using this website you are agreeing to be bound by the then current version of these
            terms of service.
          </Text>
        </Box>
        <Box>
          <Heading as="h2">8. Governing Law</Heading>
          <Text>
            These terms and conditions are governed by and construed in accordance with the laws of
            Vancouver, Canada and you irrevocably submit to the exclusive jurisdiction of the courts
            in that State or location.
          </Text>
        </Box>
      </article>
    </>
  );
}
