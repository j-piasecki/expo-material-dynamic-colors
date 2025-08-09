import { NativeModule, requireNativeModule } from 'expo';
import { MaterialPalette } from './ExpoMaterialDynamicColors.types';

declare class ExpoMaterialDynamicColorsModule extends NativeModule {
  supported: boolean
  getMaterialColors(): MaterialPalette
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoMaterialDynamicColorsModule>('ExpoMaterialDynamicColors');
