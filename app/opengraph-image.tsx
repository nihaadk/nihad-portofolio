import { ImageResponse } from 'next/og';

export const alt = 'Nihad Kerić - Senior Frontend Engineer in Zurich';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: '#1c1c22',
          color: '#fff',
        }}
      >
        <div style={{ fontSize: 40, color: '#00ff99' }}>Senior Frontend Engineer</div>
        <div style={{ fontSize: 96, fontWeight: 700, marginTop: 16 }}>Nihad Kerić</div>
        <div style={{ fontSize: 36, marginTop: 24, color: '#ffffffcc' }}>
          Angular · NgRx · TypeScript · React · Next.js
        </div>
        <div style={{ fontSize: 32, marginTop: 12, color: '#ffffff99' }}>Zurich, Switzerland</div>
      </div>
    ),
    size,
  );
}
