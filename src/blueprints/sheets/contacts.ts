import { Flatfile } from '@flatfile/api'

export const contactsSheet: Flatfile.SheetConfig = {
  name: 'Contacts',
  slug: 'contacts',
  fields: [
    {
      key: 'firstName',
      type: 'string',
      label: 'First Name',
    },
    {
      key: 'lastName',
      type: 'string',
      label: 'Last Name',
    },
    {
      key: 'email',
      type: 'string',
      label: 'Email',
    },
    {
      key: 'company',
      type: 'reference',
      label: 'Company',
      config: {
        key: 'email',
        ref: 'companies',
        relationship: 'has-one',
      },
    },
  ],
  actions: [
    {
      operation: 'duplicateSheet',
      mode: 'foreground',
      label: 'Duplicate',
      description: 'Duplicate this sheet.',
      primary: true,
    },
    {
      operation: 'dedupeEmail',
      mode: 'background',
      label: 'Dedupe emails',
      description: 'Remove duplicate emails',
    },
  ],
}