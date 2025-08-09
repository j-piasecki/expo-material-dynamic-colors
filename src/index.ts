// Reexport the native module. On web, it will be resolved to ExpoMaterialDynamicColorsModule.web.ts
// and on native platforms to ExpoMaterialDynamicColorsModule.ts
export { default } from './ExpoMaterialDynamicColorsModule';
export { default as ExpoMaterialDynamicColorsView } from './ExpoMaterialDynamicColorsView';
export * from  './ExpoMaterialDynamicColors.types';
