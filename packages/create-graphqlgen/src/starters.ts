export interface Starter {
  name: string
  description: string
  repo: StarterRepository
}

export interface StarterRepository {
  uri: string
  branch: string
  path: string
}

export const defaultStarter: Starter = {
  name: 'standard',
  description: 'standard starter',
  repo: {
    uri: 'https://github.com/prisma/graphql-resolver-codegen',
    branch: 'feature/models',
    path: 'packages/graphqlgen-starter',
  },
}
