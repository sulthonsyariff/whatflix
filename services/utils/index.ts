// eslint-disable-next-line import/prefer-default-export
export function getLanguage(language:string) {
  switch (language) {
    case 'en':
      return 'English';

    default:
      return language;
  }
}
