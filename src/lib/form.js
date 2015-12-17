import ReactDOM from 'react-dom';

export const settings = {
  onValid: () => {},
  onInvalid: () => {},
  onSuccess: () => true,
  onFailure: () => false,

  // TODO: Create `pattern` rule to dynamically apply pattern attributes to controls
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

  rules: new Map([
    // is not empty or blank string
    ['empty', $control => {
      const el = ReactDOM.findDOMNode($control);
      if (!el) {
        return false;
      }
      // TODO: throw invariant if $control not a React Component
      const value = el.value;
      return !(value === undefined || value === '' || Array.isArray(value) && value.length === 0);
    }],

    // checkbox checked
    ['checked', () => {
      return undefined; // TODO: ($(this).filter(':checked').length > 0);
    }],

    // is at least string length
    ['minLength', (value, requiredLength) => {
      return (value !== undefined)
        ? (value.length >= requiredLength)
        : false
      ;
    }],

    ['minCount', (value, minCount) => {
      if (minCount === 0) {
        return true;
      }
      if (minCount === 1) {
        return (value !== '');
      }
      return (value.split(',').length >= minCount);
    }],
  ]),
};
