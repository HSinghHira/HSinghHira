import { readFileSync } from 'fs';
import { join } from 'path';
export function getIconName(iconName: string): string {
  if (!iconName) return 'mdi:link-variant';
  if (iconName.includes(':')) return iconName;
  const iconSets = ['simple-icons', 'mdi'];
  for (const set of iconSets) {
    try {
      const iconSetPath = join(process.cwd(), 'node_modules', `@iconify-json/${set}/icons.json`);
      const iconSetData = JSON.parse(readFileSync(iconSetPath, 'utf-8'));
      if (iconSetData.icons && iconName in iconSetData.icons) {
        console.log(`✓ Found ${iconName} in ${set}`);
        return `${set}:${iconName}`;
      }
    } catch (error) {
      continue;
    }
  }
  console.warn(`✗ Icon "${iconName}" not found in any icon set, using fallback`);
  return 'mdi:link-variant';
}