import { MaterialPalette } from './ExpoMaterialDynamicColors.types'
import MaterialColorsModule from './ExpoMaterialDynamicColorsModule'
import { useEffect, useState } from 'react'
import { AppState } from 'react-native'

export const materialYouSupported = MaterialColorsModule.supported

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
        setMaterialYou(MaterialColorsModule.getMaterialColors())
      }
    })

    return () => {
      subscription.remove()
    }
  }, [])

  return materialYou
}
