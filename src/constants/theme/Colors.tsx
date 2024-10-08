export const COLORS = {
  Global_Colors: {
    white: '#ffffff',
    black: '#000000',
  },
  Global_Neutral: {
    neutral_05: '#F8FAFC',
    neutral_10: '#F1F5F9',
    neutral_20: '#E2E8F0',
    neutral_30: '#CBD5E1',
    neutral_40: '#A7AFBC',
    neutral_50: '#64748B',
    neutral_60: '#475569',
    neutral_70: '#334155',
    neutral_80: '#1E293B',
    neutral_90: '#0F172A',
  },
  Global_Primary: {
    primary_05: '#EFF6FF',
    primary_10: '#DBEAFE',
    primary_20: '#BFDBFE',
    primary_30: '#93C5FD',
    primary_40: '#60A5FA',
    primary_50: '#3B82F6',
    primary_60: '#2563EB',
    primary_70: '#1D4ED8',
    primary_80: '#1E40AF',
    primary_90: '#1E3A8A',
  },
  Global_Success: {
    success_05: '#EBF7E6',
    success_10: '#CDEFC4',
    success_20: '#91DB8B',
    success_30: '#45C65A',
    success_40: '#41B658',
    success_50: '#3BA755',
    success_60: '#2E844A',
    success_70: '#22683E',
    success_80: '#194E31',
    success_90: '#0E3522',
  },
  Global_Warning: {
    warning_05: '#FFF7ED',
    warning_10: '#FFEDD5',
    warning_20: '#FED7AA',
    warning_30: '#FDBA74',
    warning_40: '#FB923C',
    warning_50: '#F97316',
    warning_60: '#EA580C',
    warning_70: '#C2410C',
    warning_80: '#9A3412',
    warning_90: '#7C2D12',
  },
  Global_Danger: {
    danger_05: '#FEF1EE',
    danger_10: '#FEDED8',
    danger_20: '#FEB8AB',
    danger_30: '#FE8F7D',
    danger_40: '#FE7765',
    danger_50: '#FE5C4C',
    danger_60: '#EA001E',
    danger_70: '#BA0517',
    danger_80: '#8E030F',
    danger_90: '#640103',
  },
}
export const NEUTRAL = {
  Text: {
    neutral_text: COLORS.Global_Neutral.neutral_90,
    neutral_text_weak: COLORS.Global_Neutral.neutral_60,
    neutral_text_disabled: COLORS.Global_Neutral.neutral_40,
    neutral_text_inverted: COLORS.Global_Colors.white,
  },
  Backgrounds: {
    neutral_background: COLORS.Global_Colors.white,
    neutral_background_weak: COLORS.Global_Neutral.neutral_05,
    neutral_background_medium: COLORS.Global_Neutral.neutral_10,
    neutral_background_strong: COLORS.Global_Neutral.neutral_20,
    neutral_background_hover: COLORS.Global_Neutral.neutral_40,
    neutral_background_active: COLORS.Global_Neutral.neutral_40,
  },
  Borders: {
    neutral_border_weak: COLORS.Global_Neutral.neutral_20,
    neutral_border: COLORS.Global_Neutral.neutral_30,
    neutral_border_strong: COLORS.Global_Neutral.neutral_40,
    neutral_border_hover: COLORS.Global_Neutral.neutral_50,
    neutral_border_active: COLORS.Global_Neutral.neutral_60,
  },
  Icons: {
    neutral_icon_inverted: COLORS.Global_Colors.white,
    neutral_icon_disabled: COLORS.Global_Neutral.neutral_40,
    neutral_icon: COLORS.Global_Neutral.neutral_60,
    neutral_icon_hover: COLORS.Global_Neutral.neutral_70,
    neutral_icon_active: COLORS.Global_Neutral.neutral_80,
  },
}
export const PRIMARY = {
  Text: {
    primary_text: COLORS.Global_Primary.primary_60,
    primary_text_strong: COLORS.Global_Primary.primary_90,
    primary_text_hover: COLORS.Global_Primary.primary_80,
    primary_text_disabled: COLORS.Global_Primary.primary_40,
    primary_text_link: COLORS.Global_Primary.primary_60,
    primary_text_active: COLORS.Global_Primary.primary_50,
  },
  Backgrounds: {
    primary_background: COLORS.Global_Primary.primary_05,
    primary_background_hover: COLORS.Global_Primary.primary_10,
    primary_background_active: COLORS.Global_Primary.primary_20,
    primary_background_strong: COLORS.Global_Primary.primary_60,
    primary_background_strong_hover: COLORS.Global_Primary.primary_70,
    primary_background_strong_active: COLORS.Global_Primary.primary_80,
    primary_background_very_strong: COLORS.Global_Primary.primary_90,
  },
  Borders: {
    primary_border: COLORS.Global_Primary.primary_20,
    primary_border_strong: COLORS.Global_Primary.primary_40,
    primary_border_hover: COLORS.Global_Primary.primary_60,
    primary_border_active: COLORS.Global_Primary.primary_60,
  },
  Icons: {
    primary_icon_disabled: COLORS.Global_Primary.primary_30,
    primary_icon: COLORS.Global_Primary.primary_60,
    primary_icon_active: COLORS.Global_Primary.primary_80,
    primary_icon_hover: COLORS.Global_Primary.primary_90,
  },
}
export const SUCCESS = {
  Text: {
    success_text: COLORS.Global_Success.success_60,
    success_text_strong: COLORS.Global_Success.success_80,
    success_text_hover: COLORS.Global_Success.success_90,
  },
  Backgrounds: {
    success_background: COLORS.Global_Success.success_05,
    success_background_hover: COLORS.Global_Success.success_10,
    success_background_active: COLORS.Global_Success.success_20,
    success_background_strong: COLORS.Global_Success.success_60,
    success_background_strong_hover: COLORS.Global_Success.success_70,
    success_background_strong_active: COLORS.Global_Success.success_70,
  },
  Borders: {
    success_border: COLORS.Global_Success.success_20,
    success_border_strong: COLORS.Global_Success.success_40,
    success_border_hover: COLORS.Global_Success.success_60,
    success_border_active: COLORS.Global_Success.success_60,
  },
  Icons: {
    success_icon_disabled: COLORS.Global_Success.success_20,
    success_icon: COLORS.Global_Success.success_50,
    success_icon_hover: COLORS.Global_Success.success_60,
    success_icon_active: COLORS.Global_Success.success_70,
  },
}
export const WARNING = {
  Text: {
    warning_text: COLORS.Global_Warning.warning_70,
    warning_text_hover: COLORS.Global_Warning.warning_80,
    warning_text_strong: COLORS.Global_Warning.warning_90,
  },
  Backgrounds: {
    warning_background: COLORS.Global_Warning.warning_05,
    warning_background_hover: COLORS.Global_Warning.warning_10,
    warning_background_active: COLORS.Global_Warning.warning_20,
    warning_background_strong: COLORS.Global_Warning.warning_50,
    warning_background_strong_hover: COLORS.Global_Warning.warning_60,
    warning_background_strong_active: COLORS.Global_Warning.warning_60,
  },
  Borders: {
    warning_border: COLORS.Global_Warning.warning_20,
    warning_border_strong: COLORS.Global_Warning.warning_40,
    warning_border_hover: COLORS.Global_Warning.warning_60,
    warning_border_active: COLORS.Global_Warning.warning_60,
  },
  Icons: {
    warning_icon_disabled: COLORS.Global_Warning.warning_30,
    warning_icon: COLORS.Global_Warning.warning_50,
    warning_icon_hover: COLORS.Global_Warning.warning_60,
    warning_icon_active: COLORS.Global_Warning.warning_70,
  },
}
export const DANGER = {
  Text: {
    danger_text: COLORS.Global_Danger.danger_70,
    danger_text_hover: COLORS.Global_Danger.danger_80,
    danger_text_strong: COLORS.Global_Danger.danger_90,
  },
  Backgrounds: {
    danger_background: COLORS.Global_Danger.danger_05,
    danger_background_hover: COLORS.Global_Danger.danger_10,
    danger_background_active: COLORS.Global_Danger.danger_20,
    danger_background_strong: COLORS.Global_Danger.danger_60,
    danger_background_strong_hover: COLORS.Global_Danger.danger_70,
    danger_background_strong_active: COLORS.Global_Danger.danger_70,
  },
  Borders: {
    danger_border: COLORS.Global_Danger.danger_20,
    danger_border_strong: COLORS.Global_Danger.danger_40,
    danger_border_hover: COLORS.Global_Danger.danger_60,
    danger_border_active: COLORS.Global_Danger.danger_60,
  },
  Icons: {
    danger_icon_disabled: COLORS.Global_Danger.danger_30,
    danger_icon: COLORS.Global_Danger.danger_60,
    danger_icon_hover: COLORS.Global_Danger.danger_70,
    danger_icon_active: COLORS.Global_Danger.danger_80,
  },
}
