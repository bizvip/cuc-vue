export default {
  storage: {
    LOCAL: import.meta.env.VITE_APP_BASE_URL,
    OSS: '',
    COS: '',
    QINIU: '',
  },

  storageMode: {
    '1': 'LOCAL',
    '2': 'OSS',
    '3': 'QINIU',
    '4': 'COS',
  },
};