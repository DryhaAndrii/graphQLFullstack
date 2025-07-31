import 'dotenv/config'; // Загружаем .env автоматически
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_API_URL as string, // Теперь переменная доступна
  documents: 'graphql/**/*.graphql',
  generates: {
    './generated/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;