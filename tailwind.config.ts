import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Global Colors
        white: '#ffffff',
        black: '#000000',

        // Neutral Colors
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

        // Primary Colors
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

        // Success Colors
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

        // Warning Colors
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

        // Danger Colors
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
      textColor: {
        // Neutral Text Colors
        neutral_text: '#0F172A',
        neutral_text_weak: '#475569',
        neutral_text_disabled: '#A7AFBC',
        neutral_text_inverted: '#ffffff',

        // Primary Text Colors
        primary_text: '#2563EB',
        primary_text_strong: '#1E3A8A',
        primary_text_hover: '#1E40AF',
        primary_text_disabled: '#60A5FA',
        primary_text_link: '#2563EB',
        primary_text_active: '#3B82F6',

        // Success Text Colors
        success_text: '#2E844A',
        success_text_strong: '#194E31',
        success_text_hover: '#0E3522',

        // Warning Text Colors
        warning_text: '#EA580C',
        warning_text_hover: '#C2410C',
        warning_text_strong: '#7C2D12',

        // Danger Text Colors
        danger_text: '#EA001E',
        danger_text_hover: '#BA0517',
        danger_text_strong: '#640103',
      },
      backgroundColor: {
        // Neutral Background Colors
        neutral_background: '#ffffff',
        neutral_background_weak: '#F8FAFC',
        neutral_background_medium: '#F1F5F9',
        neutral_background_strong: '#E2E8F0',
        neutral_background_hover: '#A7AFBC',
        neutral_background_active: '#A7AFBC',

        // Primary Background Colors
        primary_background: '#EFF6FF',
        primary_background_hover: '#DBEAFE',
        primary_background_active: '#BFDBFE',
        primary_background_strong: '#2563EB',
        primary_background_strong_hover: '#1D4ED8',
        primary_background_strong_active: '#1E40AF',
        primary_background_very_strong: '#1E3A8A',

        // Success Background Colors
        success_background: '#EBF7E6',
        success_background_hover: '#CDEFC4',
        success_background_active: '#91DB8B',
        success_background_strong: '#2E844A',
        success_background_strong_hover: '#22683E',
        success_background_strong_active: '#22683E',

        // Warning Background Colors
        warning_background: '#FFF7ED',
        warning_background_hover: '#FFEDD5',
        warning_background_active: '#FED7AA',
        warning_background_strong: '#F97316',
        warning_background_strong_hover: '#EA580C',
        warning_background_strong_active: '#EA580C',

        // Danger Background Colors
        danger_background: '#FEF1EE',
        danger_background_hover: '#FEDED8',
        danger_background_active: '#FEB8AB',
        danger_background_strong: '#FE5C4C',
        danger_background_strong_hover: '#EA001E',
        danger_background_strong_active: '#EA001E',
      },
      borderColor: {
        // Neutral Border Colors
        neutral_border_weak: '#E2E8F0',
        neutral_border: '#CBD5E1',
        neutral_border_strong: '#A7AFBC',
        neutral_border_hover: '#64748B',
        neutral_border_active: '#475569',

        // Primary Border Colors
        primary_border: '#BFDBFE',
        primary_border_strong: '#60A5FA',
        primary_border_hover: '#3B82F6',
        primary_border_active: '#3B82F6',

        // Success Border Colors
        success_border: '#91DB8B',
        success_border_strong: '#41B658',
        success_border_hover: '#3BA755',
        success_border_active: '#3BA755',

        // Warning Border Colors
        warning_border: '#FED7AA',
        warning_border_strong: '#FB923C',
        warning_border_hover: '#F97316',
        warning_border_active: '#F97316',

        // Danger Border Colors
        danger_border: '#FEB8AB',
        danger_border_strong: '#FE7765',
        danger_border_hover: '#FE5C4C',
        danger_border_active: '#FE5C4C',
      },
    },
  },
  plugins: [],
}
export default config
