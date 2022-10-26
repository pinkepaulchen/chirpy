import { AllProjectsDocument } from '@chirpy-dev/graphql';

import { query } from '../common/gql';

export type AllProjectStaticPathParams = { params: { domain: string } }[];

export async function getAllProjectStaticPathsByDomain(): Promise<AllProjectStaticPathParams> {
  const projects = await query(AllProjectsDocument, {}, 'projects');

  return (
    projects.map(({ domain }) => {
      return {
        params: {
          domain,
        },
      };
    }) || []
  );
}
