import {
  createEmailField,
  createTextField,
  createBooleanField,
  createAvatarField,
  createJSONField,
  createDateTimeField,
  createUrlField,
} from 'tushan';
import { createFileSizeField } from './components/field/filesize';

export const userFields = [
  createTextField('id', {
    label: 'ID',
    list: {
      sort: true,
    },
  }),
  createEmailField('email', {
    label: 'Email',
  }),
  createTextField('nickname', {
    label: 'Nickname',
  }),
  createTextField('discriminator', {
    label: 'Discriminator',
  }),
  createBooleanField('temporary', {
    label: 'Temporary',
  }),
  createAvatarField('avatar', {
    label: 'Avatar',
  }),
  createJSONField('settings', {
    label: 'Settings',
    list: {
      width: 200,
    },
  }),
  createDateTimeField('createdAt', {
    format: 'iso',
    edit: {
      hidden: true,
    },
  }),
];

export const messageFields = [
  createTextField('id', {
    label: 'ID',
  }),
  createTextField('content', {
    label: 'Content',
  }),
  createTextField('author', {
    label: 'Author',
  }),
  createTextField('groupId'),
  createTextField('converseId'),
  createBooleanField('hasRecall'),
  createJSONField('reactions'),
  createDateTimeField('createdAt', {
    format: 'iso',
    edit: {
      hidden: true,
    },
  }),
];

export const groupFields = [
  createTextField('id', {
    label: 'ID',
  }),
  createTextField('name'),
  createTextField('owner'),
  createTextField('members.length', {
    edit: {
      hidden: true,
    },
  }),
  createTextField('panels.length', {
    edit: {
      hidden: true,
    },
  }),
  createJSONField('roles'),
  createJSONField('fallbackPermissions'),
  createDateTimeField('createdAt', {
    format: 'iso',
    edit: {
      hidden: true,
    },
  }),
];

export const fileFields = [
  createTextField('objectName'),
  createUrlField('url'),
  createFileSizeField('size', {
    list: {
      width: 120,
    },
  }),
  createTextField('metaData.content-type', {
    label: 'Content Type',
  }),
  createTextField('etag'),
  createTextField('userId'),
  createDateTimeField('createdAt'),
];
