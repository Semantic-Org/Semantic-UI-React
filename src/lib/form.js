
export const settings = {
  onValid: () => {},
  onInvalid: () => {},
  onSuccess: () => true,
  onFailure: () => false,

  // @see html5pattern.com
  patterns: new Map([
    ['password', '(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$'],
    ['username', '^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/'],
  ]),

  prompt: new Map([
    ['empty', '{name} must have a value'],
    ['checked', '{name} must be checked'],
    ['email', '{name} must be a valid e-mail'],
    ['url', '{name} must be a valid url'],
    ['regExp', '{name} is not formatted correctly'],
    ['integer', '{name} must be an integer'],
    ['decimal', '{name} must be a decimal number'],
    ['number', '{name} must be set to a number'],
    ['is', '{name} must be "{ruleValue}"'],
    ['isExactly', '{name} must be exactly "{ruleValue}"'],
    ['not', '{name} cannot be set to "{ruleValue}"'],
    ['notExactly', '{name} cannot be set to exactly "{ruleValue}"'],
    ['contain', '{name} cannot contain "{ruleValue}"'],
    ['containExactly', '{name} cannot contain exactly "{ruleValue}"'],
    ['doesntContain', '{name} must contain  "{ruleValue}"'],
    ['doesntContainExactly', '{name} must contain exactly "{ruleValue}"'],
    ['minLength', '{name} must be at least {ruleValue} characters'],
    ['length', '{name} must be at least {ruleValue} characters'],
    ['exactLength', '{name} must be exactly {ruleValue} characters'],
    ['maxLength', '{name} cannot be longer than {ruleValue} characters'],
    ['match', '{name} must match {ruleValue} field'],
    ['different', '{name} must have a different value than {ruleValue} field'],
    ['creditCard', '{name} must be a valid credit card number'],
    ['minCount', '{name} must have at least {ruleValue} choices'],
    ['exactCount', '{name} must have exactly {ruleValue} choices'],
    ['maxCount', '{name} must have {ruleValue} or less choices'],
  ]),
};
