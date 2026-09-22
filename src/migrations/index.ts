import * as migration_20260922_091312_initial_payload_schema from './20260922_091312_initial_payload_schema';
import * as migration_20260923_003500_add_media_blob_object_key from './20260923_003500_add_media_blob_object_key';

export const migrations = [
  {
    up: migration_20260922_091312_initial_payload_schema.up,
    down: migration_20260922_091312_initial_payload_schema.down,
    name: '20260922_091312_initial_payload_schema'
  },
  {
    up: migration_20260923_003500_add_media_blob_object_key.up,
    down: migration_20260923_003500_add_media_blob_object_key.down,
    name: '20260923_003500_add_media_blob_object_key'
  },
];
