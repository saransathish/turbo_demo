// src/queries.ts
import { gql } from '@apollo/client';

export const GetJobs = gql`
  query{
  getALLjobs{
    id
    ext_id
    job_title
    description
  }
}
`;
