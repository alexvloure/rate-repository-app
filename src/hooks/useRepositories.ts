import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { data = {}, loading, refetch } = useQuery(GET_REPOSITORIES);
  const { repositories = null } = data;

  const repositorieNodes = repositories
    ? repositories.edges.map((edge: any) => edge.node)
    : [];

  return { loading, repositories: repositorieNodes, refetch };
};

export default useRepositories;
