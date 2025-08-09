# expo-material-dynamic-colors

A module providing access to the dynamic material 3 colors on Android.

## API

### `MATERIAL_YOU_SUPPORTED`

A `boolean` value which is `true` when the device supports dynamic material theming and `false` otherwise.

### `useMaterialPalette`

On Android returns the [dynamic color palette](https://developer.android.com/reference/android/R.color#system_accent1_0):

```ts
export interface MaterialPalette {
  systemAccent1: string[]
  systemAccent2: string[]
  systemAccent3: string[]
  systemNeutral1: string[]
  systemNeutral2: string[]
}
```

On other platforms returns `null`.

### `useMaterialTheme`

On Android returns the [color theme built upon the color palette](https://m3.material.io/styles/color/system/how-the-system-works#7e1088b5-2667-4bf1-b731-cb7eb290babe):

```ts
export interface MaterialColors {
  primary: string
  onPrimary: string
  primaryContainer: string
  onPrimaryContainer: string

  secondary: string
  onSecondary: string
  secondaryContainer: string
  onSecondaryContainer: string

  tertiary: string
  onTertiary: string
  tertiaryContainer: string
  onTertiaryContainer: string

  error: string
  onError: string
  errorContainer: string
  onErrorContainer: string

  surfaceDim: string
  surface: string
  surfaceBright: string
  surfaceContainerLowest: string
  surfaceContainerLow: string
  surfaceContainer: string
  surfaceContainerHigh: string
  surfaceContainerHighest: string

  onSurface: string
  onSurfaceVariant: string
  outline: string
  outlineVariant: string

  inverseSurface: string
  inversePrimary: string
  inverseOnSurface: string
}
```

On other platforms returns `null`.