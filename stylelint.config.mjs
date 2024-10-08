import config from '@kubosho/configs/stylelint/index.mjs';

export default {
  extends: [...config.extends, 'stylelint-config-recess-order'],
  ignoreFiles: ['dist/**/*.css'],
};
