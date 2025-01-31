import { FilterConfigType } from '@/filters-and-sorts/interfaces/filters/interface';
import { SEARCH_COMPANY_QUERY } from '@/search/services/search';
import {
  IconBuildingSkyscraper,
  IconCalendarEvent,
  IconMail,
  IconMap,
  IconPhone,
  IconUser,
} from '@/ui/icons/index';
import { icon } from '@/ui/themes/icon';
import { Company, QueryMode } from '~/generated/graphql';

export const fullnameFilter = {
  key: 'fullname',
  label: 'People',
  icon: <IconUser size={icon.size.md} stroke={icon.stroke.md} />,
  type: 'text',
  operands: [
    {
      label: 'Contains',
      id: 'like',
      whereTemplate: (searchString: string) => ({
        OR: [
          {
            firstname: {
              contains: `%${searchString}%`,
              mode: QueryMode.Insensitive,
            },
          },
          {
            lastname: {
              contains: `%${searchString}%`,
              mode: QueryMode.Insensitive,
            },
          },
        ],
      }),
    },
    {
      label: "Doesn't contain",
      id: 'not_like',
      whereTemplate: (searchString: string) => ({
        NOT: [
          {
            AND: [
              {
                firstname: {
                  contains: `%${searchString}%`,
                  mode: QueryMode.Insensitive,
                },
              },
              {
                lastname: {
                  contains: `%${searchString}%`,
                  mode: QueryMode.Insensitive,
                },
              },
            ],
          },
        ],
      }),
    },
  ],
} satisfies FilterConfigType<string>;

export const emailFilter = {
  key: 'email',
  label: 'Email',
  icon: <IconMail size={icon.size.md} stroke={icon.stroke.md} />,
  type: 'text',
  operands: [
    {
      label: 'Contains',
      id: 'like',
      whereTemplate: (searchString: string) => ({
        email: { contains: `%${searchString}%`, mode: QueryMode.Insensitive },
      }),
    },
    {
      label: "Doesn't contain",
      id: 'not_like',
      whereTemplate: (searchString: string) => ({
        NOT: [
          {
            email: {
              contains: `%${searchString}%`,
              mode: QueryMode.Insensitive,
            },
          },
        ],
      }),
    },
  ],
} satisfies FilterConfigType<string>;

export const companyFilter = {
  key: 'company_name',
  label: 'Company',
  icon: <IconBuildingSkyscraper size={icon.size.md} stroke={icon.stroke.md} />,
  type: 'relation',
  searchConfig: {
    query: SEARCH_COMPANY_QUERY,
    template: (searchString: string, currentSelectedId?: string) => ({
      OR: [
        {
          name: {
            contains: `%${searchString}%`,
            mode: QueryMode.Insensitive,
          },
        },
        {
          id: currentSelectedId ? { equals: currentSelectedId } : undefined,
        },
      ],
    }),
    resultMapper: (data) => ({
      value: data,
      render: (company: { name: string }) => company.name,
    }),
  },
  selectedValueRender: (company) => company.name || '',
  operands: [
    {
      label: 'Is',
      id: 'is',
      whereTemplate: (company: { name: string }) => ({
        company: { is: { name: { equals: company.name } } },
      }),
    },
    {
      label: 'Is not',
      id: 'is_not',
      whereTemplate: (company: { name: string }) => ({
        NOT: [{ company: { is: { name: { equals: company.name } } } }],
      }),
    },
  ],
} satisfies FilterConfigType<Company>;

export const phoneFilter = {
  key: 'phone',
  label: 'Phone',
  icon: <IconPhone size={icon.size.md} stroke={icon.stroke.md} />,
  type: 'text',
  operands: [
    {
      label: 'Contains',
      id: 'like',
      whereTemplate: (searchString: string) => ({
        phone: { contains: `%${searchString}%`, mode: QueryMode.Insensitive },
      }),
    },
    {
      label: "Doesn't contain",
      id: 'not_like',
      whereTemplate: (searchString: string) => ({
        NOT: [
          {
            phone: {
              contains: `%${searchString}%`,
              mode: QueryMode.Insensitive,
            },
          },
        ],
      }),
    },
  ],
} satisfies FilterConfigType<string>;

export const createdAtFilter = {
  key: 'createdAt',
  label: 'Created At',
  icon: <IconCalendarEvent size={icon.size.md} stroke={icon.stroke.md} />,
  type: 'date',
  operands: [
    {
      label: 'Greater than',
      id: 'greater_than',
      whereTemplate: (searchString: string) => ({
        createdAt: {
          gte: searchString,
        },
      }),
    },
    {
      label: 'Less than',
      id: 'less_than',
      whereTemplate: (searchString: string) => ({
        createdAt: {
          lte: searchString,
        },
      }),
    },
  ],
} satisfies FilterConfigType<string>;

export const cityFilter = {
  key: 'city',
  label: 'City',
  icon: <IconMap size={icon.size.md} stroke={icon.stroke.md} />,
  type: 'text',
  operands: [
    {
      label: 'Contains',
      id: 'like',
      whereTemplate: (searchString: string) => ({
        city: { contains: `%${searchString}%`, mode: QueryMode.Insensitive },
      }),
    },
    {
      label: "Doesn't contain",
      id: 'not_like',
      whereTemplate: (searchString: string) => ({
        NOT: [
          {
            city: {
              contains: `%${searchString}%`,
              mode: QueryMode.Insensitive,
            },
          },
        ],
      }),
    },
  ],
} satisfies FilterConfigType<string>;

export const availableFilters = [
  fullnameFilter,
  emailFilter,
  companyFilter,
  phoneFilter,
  createdAtFilter,
  cityFilter,
];
