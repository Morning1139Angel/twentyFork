import { Company, Person } from '~/generated/graphql';

type MockedPerson = Pick<
  Person,
  | 'id'
  | 'firstname'
  | 'lastname'
  | 'email'
  | '__typename'
  | 'phone'
  | 'city'
  | '_commentCount'
  | 'createdAt'
> & {
  company: Pick<Company, 'id' | 'name' | 'domainName' | '__typename'>;
};

export const mockedPeopleData: Array<MockedPerson> = [
  {
    id: '7dfbc3f7-6e5e-4128-957e-8d86808cdf6b',
    __typename: 'Person',
    firstname: 'Alexandre',
    lastname: 'Prot',
    email: 'alexandre@qonto.com',
    company: {
      id: '5c21e19e-e049-4393-8c09-3e3f8fb09ecb',
      name: 'Qonto',
      domainName: 'qonto.com',
      __typename: 'Company',
    },
    phone: '06 12 34 56 78',
    _commentCount: 1,
    createdAt: '2023-04-20T13:20:09.158312+00:00',

    city: 'Paris',
  },
  {
    id: '7dfbc3f7-6e5e-4128-957e-8d86808cdf6d',
    __typename: 'Person',
    firstname: 'John',
    lastname: 'Doe',
    email: 'john@linkedin.com',
    company: {
      id: '7dfbc3f7-6e5e-4128-957e-8d86808cdf6e',
      name: 'LinkedIn',
      domainName: 'linkedin.com',
      __typename: 'Company',
    },
    phone: '06 12 34 56 78',
    _commentCount: 1,
    createdAt: '2023-04-20T13:20:09.158312+00:00',

    city: 'Paris',
  },
  {
    id: '7dfbc3f7-6e5e-4128-957e-8d86808cdf6f',
    __typename: 'Person',
    firstname: 'Jane',
    lastname: 'Doe',
    email: 'jane@sequoiacap.com',
    company: {
      id: '7dfbc3f7-6e5e-4128-957e-8d86808cdf6g',
      name: 'Sequoia',
      domainName: 'sequoiacap.com',
      __typename: 'Company',
    },
    phone: '06 12 34 56 78',
    _commentCount: 1,
    createdAt: '2023-04-20T13:20:09.158312+00:00',

    city: 'Paris',
  },
  {
    id: '7dfbc3f7-6e5e-4128-957e-8d86808cdf6h',
    __typename: 'Person',
    firstname: 'Janice',
    lastname: 'Dane',
    email: 'janice@facebook.com',
    company: {
      id: '7dfbc3f7-6e5e-4128-957e-8d86808cdf6i',
      name: 'Facebook',
      domainName: 'facebook.com',
      __typename: 'Company',
    },
    phone: '06 12 34 56 78',
    _commentCount: 2,
    createdAt: '2023-04-20T13:20:09.158312+00:00',

    city: 'Paris',
  },
];
