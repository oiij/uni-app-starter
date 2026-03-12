import { oiijPreset } from '@oiij/unocss-preset'
import { presetUni } from '@uni-helper/unocss-preset-uni'
import { defineConfig, presetAttributify, presetIcons, presetTypography, presetWebFonts, transformerAttributifyJsx, transformerCompileClass, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  rules: [

  ],
  shortcuts: {

  },
  presets: [
    presetUni({
      attributify: {
        ignoreAttributes: ['border'],
      },
    }),
    presetAttributify({}),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),

    oiijPreset(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributifyJsx(),
    transformerCompileClass(),
  ],
})
