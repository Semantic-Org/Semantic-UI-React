const debugRule = ({ name, color, style }) => ({
  position: 'relative',
  border: `2px ${style} ${color}`,
  '::before': {
    content: `'${name}'`,
    position: 'absolute',
    padding: '1px 4px 1px',
    top: '-2px',
    left: '-2px',
    fontSize: '8px',
    fontWeight: 900,
    lineHeight: 1,
    letterSpacing: '1px',
    color: '#fff',
    background: color,
  },
})

export const debugRoot = () => ({
  ...debugRule({ name: 'LAYOUT', color: 'cornflowerblue', style: 'solid' }),
  padding: '16px',
})

export const debugArea = () => ({
  ...debugRule({ name: 'AREA', color: 'lightsalmon', style: 'dashed' }),
  padding: '8px',
})

export const debugGap = ({ vertical }) => ({
  display: 'grid',
  background: '#ccc',
  // border: '2px solid gray',
  '::before': {
    content: '"GAP"',
    ...(vertical
      ? {
        letterSpacing: '1px',
      }
      : {
        textOrientation: 'upright',
        writingMode: 'tb',
      }),
    alignSelf: 'center',
    justifySelf: 'center',
    fontSize: '8px',
    fontWeight: 900,
    lineHeight: 0,
    color: '#fff',
  },
})
