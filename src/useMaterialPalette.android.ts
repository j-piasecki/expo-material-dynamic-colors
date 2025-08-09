import { MaterialPalette } from './ExpoMaterialDynamicColors.types'
import MaterialColorsModule from './ExpoMaterialDynamicColorsModule'
import { useEffect, useState } from 'react'
import { AppState } from 'react-native'

export const materialYouSupported = MaterialColorsModule.supported

function arePalettesEqual(
  palette1: MaterialPalette | null,
  palette2: MaterialPalette | null
): boolean {
  if (!palette1 || !palette2) {
    return false
  }

  return (
    palette1.systemAccent1.join(',') === palette2.systemAccent1.join(',') &&
    palette1.systemAccent2.join(',') === palette2.systemAccent2.join(',') &&
    palette1.systemAccent3.join(',') === palette2.systemAccent3.join(',') &&
    palette1.systemNeutral1.join(',') === palette2.systemNeutral1.join(',') &&
    palette1.systemNeutral2.join(',') === palette2.systemNeutral2.join(',')
  )
}

export function useMaterialPalette(): MaterialPalette | null {
  const [materialYou, setMaterialYou] = useState<MaterialPalette | null>(
    MaterialColorsModule.getMaterialColors()
  )

  useEffect(() => {
    if (!materialYouSupported) {
      return
    }

    const subscription = AppState.addEventListener('change', (state) => {
      if (state === 'active') {
        const newPalette = MaterialColorsModule.getMaterialColors()
        if (!arePalettesEqual(materialYou, newPalette)) {
          setMaterialYou(newPalette)
        }
      }
    })

    return () => {
      subscription.remove()
    }
  }, [materialYou])

  return materialYou
}
