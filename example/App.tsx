import { useEvent } from 'expo'
import { MaterialColors, MaterialPalette, useMaterialPalette, useMaterialTheme } from 'expo-material-dynamic-colors'
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native'

function NotSupported() {
  return (
    <View>
      <Text>Material Dynamic Colors are not supported on this platform.</Text>
    </View>
  )
}

function Palette({ palette }: { palette: MaterialPalette }) {
  function ColorRow({ colors }: { colors: string[] }) {
    return (
      <View style={{ flexDirection: 'row' }}>
        {colors.map((color) => (
          <View key={color} style={{ backgroundColor: color, flex: 1, height: 50 }} />
        ))}
      </View>
    )
  }

  return (
    <View style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 8, padding: 16 }}>
      <Text style={{ fontSize: 18, marginBottom: 16 }}>Material Palette</Text>
      <ColorRow colors={palette.systemAccent1} />
      <ColorRow colors={palette.systemAccent2} />
      <ColorRow colors={palette.systemAccent3} />
      <ColorRow colors={palette.systemNeutral1} />
      <ColorRow colors={palette.systemNeutral2} />
    </View>
  )
}

type ColorGroup = {
  name: string
  color: string
  textColor: string
}

function ColorBox({ color }: { color: ColorGroup }) {
  return (
    <View style={{ padding: 16, backgroundColor: color.color }}>
      <Text style={{ color: color.textColor }}>{color.name}</Text>
    </View>
  )
}

function ColorGroup({ group }: { group: ColorGroup[] }) {
  return (
    <View style={{}}>
      {group.map((color) => (
        <ColorBox key={color.name} color={color} />
      ))}
    </View>
  )
}

function ColorScheme({ colors }: { colors: MaterialColors }) {

  const primaryColors: ColorGroup[] = [
    { name: 'primary', color: colors.primary, textColor: colors.onPrimary },
    { name: 'onPrimary', color: colors.onPrimary, textColor: colors.primary },
    { name: 'primaryContainer', color: colors.primaryContainer, textColor: colors.onPrimaryContainer },
    { name: 'onPrimaryContainer', color: colors.onPrimaryContainer, textColor: colors.primaryContainer },
  ]

  const secondaryColors: ColorGroup[] = [
    { name: 'secondary', color: colors.secondary, textColor: colors.onSecondary },
    { name: 'onSecondary', color: colors.onSecondary, textColor: colors.secondary },
    { name: 'secondaryContainer', color: colors.secondaryContainer, textColor: colors.onSecondaryContainer },
    { name: 'onSecondaryContainer', color: colors.onSecondaryContainer, textColor: colors.secondaryContainer },
  ]

  const tertiaryColors: ColorGroup[] = [
    { name: 'tertiary', color: colors.tertiary, textColor: colors.onTertiary },
    { name: 'onTertiary', color: colors.onTertiary, textColor: colors.tertiary },
    { name: 'tertiaryContainer', color: colors.tertiaryContainer, textColor: colors.onTertiaryContainer },
    { name: 'onTertiaryContainer', color: colors.onTertiaryContainer, textColor: colors.tertiaryContainer },
  ]

  const errorColors: ColorGroup[] = [
    { name: 'error', color: colors.error, textColor: colors.onError },
    { name: 'onError', color: colors.onError, textColor: colors.error },
    { name: 'errorContainer', color: colors.errorContainer, textColor: colors.onErrorContainer },
    { name: 'onErrorContainer', color: colors.onErrorContainer, textColor: colors.errorContainer },
  ]

  const surfaceColors: ColorGroup[] = [
    { name: 'surfaceDim', color: colors.surfaceDim, textColor: colors.onSurface },
    { name: 'surface', color: colors.surface, textColor: colors.onSurface },
    { name: 'surfaceBright', color: colors.surfaceBright, textColor: colors.onSurface },
    { name: 'surfaceContainerLowest', color: colors.surfaceContainerLowest, textColor: colors.onSurface },
    { name: 'surfaceContainerLow', color: colors.surfaceContainerLow, textColor: colors.onSurface },
    { name: 'surfaceContainer', color: colors.surfaceContainer, textColor: colors.onSurface },
    { name: 'surfaceContainerHigh', color: colors.surfaceContainerHigh, textColor: colors.onSurface },
    { name: 'surfaceContainerHighest', color: colors.surfaceContainerHighest, textColor: colors.onSurface },
  ]

  const outlineColors: ColorGroup[] = [
    { name: 'onSurface', color: colors.onSurface, textColor: colors.surface },
    { name: 'onSurfaceVariant', color: colors.onSurfaceVariant, textColor: colors.surface },
    { name: 'outline', color: colors.outline, textColor: colors.surface },
    { name: 'outlineVariant', color: colors.outlineVariant, textColor: colors.onSurface },
  ]

  const inverseColors: ColorGroup[] = [
    { name: 'inverseSurface', color: colors.inverseSurface, textColor: colors.inverseOnSurface },
    { name: 'inversePrimary', color: colors.inversePrimary, textColor: colors.inverseOnSurface },
    { name: 'inverseOnSurface', color: colors.inverseOnSurface, textColor: colors.inverseSurface },
  ]



  return (
    <View style={{ padding: 16, backgroundColor: colors.surface, borderRadius: 8, borderWidth: 1, borderColor: 'gray', gap: 16 }}>
      <Text style={{ fontSize: 18}}>Material Color Scheme</Text>
      <ColorGroup group={primaryColors} />
      <ColorGroup group={secondaryColors} />
      <ColorGroup group={tertiaryColors} />
      <ColorGroup group={errorColors} />
      <ColorGroup group={surfaceColors} />
      <ColorGroup group={outlineColors} />
      <ColorGroup group={inverseColors} />
    </View>
  )
}

export default function App() {
  const palette = useMaterialPalette()
  const colors = useMaterialTheme()

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 64 }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ gap: 16, padding: 12 }}>
        {!palette && <NotSupported />}
        {palette && <Palette palette={palette} />}
        {colors && <ColorScheme colors={colors.light} />}
      </ScrollView>
    </SafeAreaView>
  )
}
