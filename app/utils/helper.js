export const validateEmail = (email) => {
  const regexEmail = new RegExp(
    [
      '^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>(),[\\]\\.,;:\\s@\\"]+)*)',
      '|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.',
      '[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+',
      '[a-zA-Z]{2,}))$',
      ,
    ].join(''),
  );

  return regexEmail.test(String(email).toLowerCase());
};