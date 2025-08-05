import React from 'react';

export default function NomorSuratIframe({ range = 'B3:D7', height = 120 }) {
  const baseUrl =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQA8I7zGhIWYTGoKcDEXuJzvnR2DawiXBp58l-Z3tjg52Ady0nGBFoxfcvllZ7Y8RTXuk9GVjEphDZ4/pubhtml';
  const queryParams = [
    'gid=637836701',
    `range=${range}`,
    'single=true',
    'widget=true',
    'headers=false',
    `cachebuster=${Date.now()}`
  ].join('&');

  return (
    <iframe
      src={`${baseUrl}?${queryParams}`}
      width="100%"
      height={height}
      style={{ border: 'none' }}
      title="Nomor Surat"
      loading="lazy"
    />
  );
}
