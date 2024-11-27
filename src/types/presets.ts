export interface ColorItem {
  name: string;
  desc: string;
  textClass?: string;
  bgClass?: string;
}

export interface ColorGroup {
  group: string;
  colors: ColorItem[];
}

export interface ValueGroup {
  group: string;
  values: string[];
}

export type PresetExample = string | ColorGroup | ValueGroup;

export interface PresetValue {
  type: 'fixed' | 'arbitrary';
  examples: PresetExample[] | string[];
  description: string;
}

export interface PresetCategory {
  name: string;
  prefix: string;
  values: PresetValue[];
  arbitraryValueExample?: string;
}
