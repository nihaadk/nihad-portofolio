import { ImageResponse } from 'next/og';

export const alt = 'Nihad Kerić - Software Engineer in Zurich';
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
          background: '#1a237e',
          color: '#fff',
        }}
      >
        <div style={{ fontSize: 40, color: '#C6FF00' }}>Software Engineer</div>
        <div style={{ fontSize: 96, fontWeight: 700, marginTop: 16 }}>Nihad Kerić</div>
        <div style={{ fontSize: 36, marginTop: 24, color: '#ffffffcc' }}>
          Frontend · Backend · AI-assisted development
        </div>
        <div style={{ fontSize: 32, marginTop: 12, color: '#ffffff99' }}>Zurich, Switzerland</div>
      </div>
    ),
    size,
  );
}
