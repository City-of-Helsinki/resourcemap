import React from 'react';

export default () => (
  <span
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{
      __html: `<?xml version="1.0" encoding="utf-8"?><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%"><path d="M256 76.76a66.62 66.62 0 1 1-66.62 66.62A66.69 66.69 0 0 1 256 76.76m0-32a98.59 98.59 0 1 0 98.59 98.59A98.59 98.59 0 0 0 256 44.78zM341.27 300.59a64 64 0 0 1 64 64v64H106.78v-64.04a64 64 0 0 1 64-64h170.49m0-32H170.74a95.93 95.93 0 0 0-95.94 96v95.92h362.4v-95.93a95.93 95.93 0 0 0-95.93-95.93z"/></svg>`,
    }}
  />
);
