import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortName',
      title: 'Short Name',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'addressLine1',
      title: 'Address Line 1',
      type: 'string',
    }),
    defineField({
      name: 'addressLine2',
      title: 'Address Line 2',
      type: 'string',
    }),
    defineField({
      name: 'mapUrl',
      title: 'Map URL',
      type: 'url',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
    }),
    defineField({
      name: 'heroSubhead',
      title: 'Hero Subhead',
      type: 'string',
    }),
    defineField({
      name: 'descriptionShort',
      title: 'Description (Short)',
      type: 'text',
    }),
    defineField({
      name: 'descriptionLong',
      title: 'Description (Long)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'badgeLabel',
      title: 'Badge Label',
      type: 'string',
    }),
    defineField({
      name: 'hours',
      title: 'Hours',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'happyHourNote',
      title: 'Happy Hour Note',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'onlineOrderUrl',
      title: 'Online Order URL',
      type: 'url',
    }),
    defineField({
      name: 'menuUrl',
      title: 'Menu URL',
      type: 'url',
    }),
    defineField({
      name: 'accentColor',
      title: 'Accent Color',
      type: 'string',
      description: 'CSS color value e.g. #d4720e',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'tagline',
    },
  },
})
