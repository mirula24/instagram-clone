import { createFont, createTamagui } from 'tamagui';
import { config } from '@tamagui/config';

const styleScriptFont = createFont({
  family: 'StyleScript-Regular',
  size: {
    1:32
  },
  lineHeight: {
    1:16
  },
  weight: {
    normal: '400',
  },
  face: {
    normal: { normal: 'StyleScript-Regular' },
  },
});

const tamaguiConfig = createTamagui({
  ...config,
  fonts: {
    ...config.fonts,
    styleScript: styleScriptFont,
  },
});

export default tamaguiConfig;