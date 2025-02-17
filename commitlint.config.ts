import type { UserConfig } from '@commitlint/types';
import { RuleConfigSeverity } from '@commitlint/types';

const Configuration: UserConfig = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ['@commitlint/config-conventional'],
  /*
   * Resolve and load conventional-changelog-atom from node_modules.
   * Referenced packages must be installed
   */
  // parserPreset: 'conventional-changelog-atom',
  /*
   * Resolve and load @commitlint/format from node_modules.
   * Referenced package must be installed
   */
  formatter: '@commitlint/format',
  /*
   * Any rules defined here will override rules from @commitlint/config-conventional
   */
  rules: {
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'init',
        'build',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
    // // Тело коммита должно начинаться с пустой строки
    'body-leading-blank': [RuleConfigSeverity.Error, 'always'],

    // // Нижний колонтитул коммита должен начинаться с пустой строки
    'footer-leading-blank': [RuleConfigSeverity.Error, 'always'],

    // Максимальная длина заголовка 72 символа
    'header-max-length': [RuleConfigSeverity.Error, 'always', 72],

    // Область всегда только в нижнем регистре
    'scope-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],

    // Описание не может быть пустым
    'subject-empty': [RuleConfigSeverity.Error, 'never'],

    // Описание не должно заканчиваться '.'
    'subject-full-stop': [RuleConfigSeverity.Error, 'never', '.'],

    // Тип всегда только в нижнем регистре
    'type-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],

    // Тип не может быть пустым
    'type-empty': [RuleConfigSeverity.Error, 'never'],
  },
  /*
   * Functions that return true if commitlint should ignore the given message.
   */
  // ignores: [(commit) => commit === ''],
  /*
   * Whether commitlint uses the default ignore rules.
   */
  defaultIgnores: true,
  /*
   * Custom URL to show upon failure
   */
  helpUrl:
    'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
  /*
   * Custom prompt configs
   */
  // prompt: {
  //   messages: {},
  //   questions: {
  //     type: {
  //       description: 'please input type:',
  //     },
  //   },
  // },
};

module.exports = Configuration;
