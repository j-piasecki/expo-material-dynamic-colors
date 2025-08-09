import { registerWebModule, NativeModule } from 'expo';

import { ExpoMaterialDynamicColorsModuleEvents } from './ExpoMaterialDynamicColors.types';

class ExpoMaterialDynamicColorsModule extends NativeModule<ExpoMaterialDynamicColorsModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoMaterialDynamicColorsModule, 'ExpoMaterialDynamicColorsModule');
