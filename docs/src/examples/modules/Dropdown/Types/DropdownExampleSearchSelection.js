import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
{ key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },

{ key: 'ax', value: 'ax', flag: 'ax', text: 'Åland Islands' },

{ key: 'al', value: 'al', flag: 'al', text: 'Albania' },

{ key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },

{ key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },

{ key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },

{ key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },

{ key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },

{ key: 'aq', value: 'aq', flag: 'aq', text: 'Antarctica' },

{ key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua and Barbuda' },

{ key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },

{ key: 'am', value: 'am', flag: 'am', text: 'Armenia' },

{ key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },

{ key: 'au', value: 'au', flag: 'au', text: 'Australia' },

{ key: 'at', value: 'at', flag: 'at', text: 'Austria' },

{ key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },

{ key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },

{ key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },

{ key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },

{ key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },

{ key: 'by', value: 'by', flag: 'by', text: 'Belarus' },

{ key: 'be', value: 'be', flag: 'be', text: 'Belgium' },

{ key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },

{ key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },

{ key: 'bm', value: 'bm', flag: 'bm', text: 'Bermuda' },

{ key: 'bt', value: 'bt', flag: 'bt', text: 'Bhutan' },

{ key: 'bo', value: 'bo', flag: 'bo', text: 'Bolivia (Plurinational State of)' },

{ key: 'bq', value: 'bq', flag: 'bq', text: 'Bonaire, Sint Eustatius and Saba' },

{ key: 'ba', value: 'ba', flag: 'ba', text: 'Bosnia and Herzegovina' },

{ key: 'bw', value: 'bw', flag: 'bw', text: 'Botswana' },

{ key: 'bv', value: 'bv', flag: 'bv', text: 'Bouvet Island' },

{ key: 'br', value: 'br', flag: 'br', text: 'Brazil' },

{ key: 'io', value: 'io', flag: 'io', text: 'British Indian Ocean Territory' },

{ key: 'um', value: 'um', flag: 'um', text: 'United States Minor Outlying Islands' },

{ key: 'vg', value: 'vg', flag: 'vg', text: 'Virgin Islands (British)' },

{ key: 'vi', value: 'vi', flag: 'vi', text: 'Virgin Islands (U.S.)' },

{ key: 'bn', value: 'bn', flag: 'bn', text: 'Brunei Darussalam' },

{ key: 'bg', value: 'bg', flag: 'bg', text: 'Bulgaria' },

{ key: 'bf', value: 'bf', flag: 'bf', text: 'Burkina Faso' },

{ key: 'bi', value: 'bi', flag: 'bi', text: 'Burundi' },

{ key: 'kh', value: 'kh', flag: 'kh', text: 'Cambodia' },

{ key: 'cm', value: 'cm', flag: 'cm', text: 'Cameroon' },

{ key: 'ca', value: 'ca', flag: 'ca', text: 'Canada' },

{ key: 'cv', value: 'cv', flag: 'cv', text: 'Cabo Verde' },

{ key: 'ky', value: 'ky', flag: 'ky', text: 'Cayman Islands' },

{ key: 'cf', value: 'cf', flag: 'cf', text: 'Central African Republic' },

{ key: 'td', value: 'td', flag: 'td', text: 'Chad' },

{ key: 'cl', value: 'cl', flag: 'cl', text: 'Chile' },

{ key: 'cn', value: 'cn', flag: 'cn', text: 'China' },

{ key: 'cx', value: 'cx', flag: 'cx', text: 'Christmas Island' },

{ key: 'cc', value: 'cc', flag: 'cc', text: 'Cocos (Keeling) Islands' },

{ key: 'co', value: 'co', flag: 'co', text: 'Colombia' },

{ key: 'km', value: 'km', flag: 'km', text: 'Comoros' },

{ key: 'cg', value: 'cg', flag: 'cg', text: 'Congo' },

{ key: 'cd', value: 'cd', flag: 'cd', text: 'Congo (Democratic Republic of the)' },

{ key: 'ck', value: 'ck', flag: 'ck', text: 'Cook Islands' },

{ key: 'cr', value: 'cr', flag: 'cr', text: 'Costa Rica' },

{ key: 'hr', value: 'hr', flag: 'hr', text: 'Croatia' },

{ key: 'cu', value: 'cu', flag: 'cu', text: 'Cuba' },

{ key: 'cw', value: 'cw', flag: 'cw', text: 'Curaçao' },

{ key: 'cy', value: 'cy', flag: 'cy', text: 'Cyprus' },

{ key: 'cz', value: 'cz', flag: 'cz', text: 'Czech Republic' },

{ key: 'dk', value: 'dk', flag: 'dk', text: 'Denmark' },

{ key: 'dj', value: 'dj', flag: 'dj', text: 'Djibouti' },

{ key: 'dm', value: 'dm', flag: 'dm', text: 'Dominica' },

{ key: 'do', value: 'do', flag: 'do', text: 'Dominican Republic' },

{ key: 'ec', value: 'ec', flag: 'ec', text: 'Ecuador' },

{ key: 'eg', value: 'eg', flag: 'eg', text: 'Egypt' },

{ key: 'sv', value: 'sv', flag: 'sv', text: 'El Salvador' },

{ key: 'gq', value: 'gq', flag: 'gq', text: 'Equatorial Guinea' },

{ key: 'er', value: 'er', flag: 'er', text: 'Eritrea' },

{ key: 'ee', value: 'ee', flag: 'ee', text: 'Estonia' },

{ key: 'et', value: 'et', flag: 'et', text: 'Ethiopia' },

{ key: 'fk', value: 'fk', flag: 'fk', text: 'Falkland Islands (Malvinas)' },

{ key: 'fo', value: 'fo', flag: 'fo', text: 'Faroe Islands' },

{ key: 'fj', value: 'fj', flag: 'fj', text: 'Fiji' },

{ key: 'fi', value: 'fi', flag: 'fi', text: 'Finland' },

{ key: 'fr', value: 'fr', flag: 'fr', text: 'France' },

{ key: 'gf', value: 'gf', flag: 'gf', text: 'French Guiana' },

{ key: 'pf', value: 'pf', flag: 'pf', text: 'French Polynesia' },

{ key: 'tf', value: 'tf', flag: 'tf', text: 'French Southern Territories' },

{ key: 'ga', value: 'ga', flag: 'ga', text: 'Gabon' },

{ key: 'gm', value: 'gm', flag: 'gm', text: 'Gambia' },

{ key: 'ge', value: 'ge', flag: 'ge', text: 'Georgia' },

{ key: 'de', value: 'de', flag: 'de', text: 'Germany' },

{ key: 'gh', value: 'gh', flag: 'gh', text: 'Ghana' },

{ key: 'gi', value: 'gi', flag: 'gi', text: 'Gibraltar' },

{ key: 'gr', value: 'gr', flag: 'gr', text: 'Greece' },

{ key: 'gl', value: 'gl', flag: 'gl', text: 'Greenland' },

{ key: 'gd', value: 'gd', flag: 'gd', text: 'Grenada' },

{ key: 'gp', value: 'gp', flag: 'gp', text: 'Guadeloupe' },

{ key: 'gu', value: 'gu', flag: 'gu', text: 'Guam' },

{ key: 'gt', value: 'gt', flag: 'gt', text: 'Guatemala' },

{ key: 'gg', value: 'gg', flag: 'gg', text: 'Guernsey' },

{ key: 'gn', value: 'gn', flag: 'gn', text: 'Guinea' },

{ key: 'gw', value: 'gw', flag: 'gw', text: 'Guinea-Bissau' },

{ key: 'gy', value: 'gy', flag: 'gy', text: 'Guyana' },

{ key: 'ht', value: 'ht', flag: 'ht', text: 'Haiti' },

{ key: 'hm', value: 'hm', flag: 'hm', text: 'Heard Island and McDonald Islands' },

{ key: 'va', value: 'va', flag: 'va', text: 'Holy See' },

{ key: 'hn', value: 'hn', flag: 'hn', text: 'Honduras' },

{ key: 'hk', value: 'hk', flag: 'hk', text: 'Hong Kong' },

{ key: 'hu', value: 'hu', flag: 'hu', text: 'Hungary' },

{ key: 'is', value: 'is', flag: 'is', text: 'Iceland' },

{ key: 'in', value: 'in', flag: 'in', text: 'India' },

{ key: 'id', value: 'id', flag: 'id', text: 'Indonesia' },

{ key: 'ci', value: 'ci', flag: 'ci', text: 'Côte d'Ivoire' },

{ key: 'ir', value: 'ir', flag: 'ir', text: 'Iran (Islamic Republic of)' },

{ key: 'iq', value: 'iq', flag: 'iq', text: 'Iraq' },

{ key: 'ie', value: 'ie', flag: 'ie', text: 'Ireland' },

{ key: 'im', value: 'im', flag: 'im', text: 'Isle of Man' },

{ key: 'il', value: 'il', flag: 'il', text: 'Israel' },

{ key: 'it', value: 'it', flag: 'it', text: 'Italy' },

{ key: 'jm', value: 'jm', flag: 'jm', text: 'Jamaica' },

{ key: 'jp', value: 'jp', flag: 'jp', text: 'Japan' },

{ key: 'je', value: 'je', flag: 'je', text: 'Jersey' },

{ key: 'jo', value: 'jo', flag: 'jo', text: 'Jordan' },

{ key: 'kz', value: 'kz', flag: 'kz', text: 'Kazakhstan' },

{ key: 'ke', value: 'ke', flag: 'ke', text: 'Kenya' },

{ key: 'ki', value: 'ki', flag: 'ki', text: 'Kiribati' },

{ key: 'kw', value: 'kw', flag: 'kw', text: 'Kuwait' },

{ key: 'kg', value: 'kg', flag: 'kg', text: 'Kyrgyzstan' },

{ key: 'la', value: 'la', flag: 'la', text: 'Lao People's Democratic Republic' },

{ key: 'lv', value: 'lv', flag: 'lv', text: 'Latvia' },

{ key: 'lb', value: 'lb', flag: 'lb', text: 'Lebanon' },

{ key: 'ls', value: 'ls', flag: 'ls', text: 'Lesotho' },

{ key: 'lr', value: 'lr', flag: 'lr', text: 'Liberia' },

{ key: 'ly', value: 'ly', flag: 'ly', text: 'Libya' },

{ key: 'li', value: 'li', flag: 'li', text: 'Liechtenstein' },

{ key: 'lt', value: 'lt', flag: 'lt', text: 'Lithuania' },

{ key: 'lu', value: 'lu', flag: 'lu', text: 'Luxembourg' },

{ key: 'mo', value: 'mo', flag: 'mo', text: 'Macao' },

{ key: 'mk', value: 'mk', flag: 'mk', text: 'Macedonia (the former Yugoslav Republic of)' },

{ key: 'mg', value: 'mg', flag: 'mg', text: 'Madagascar' },

{ key: 'mw', value: 'mw', flag: 'mw', text: 'Malawi' },

{ key: 'my', value: 'my', flag: 'my', text: 'Malaysia' },

{ key: 'mv', value: 'mv', flag: 'mv', text: 'Maldives' },

{ key: 'ml', value: 'ml', flag: 'ml', text: 'Mali' },

{ key: 'mt', value: 'mt', flag: 'mt', text: 'Malta' },

{ key: 'mh', value: 'mh', flag: 'mh', text: 'Marshall Islands' },

{ key: 'mq', value: 'mq', flag: 'mq', text: 'Martinique' },

{ key: 'mr', value: 'mr', flag: 'mr', text: 'Mauritania' },

{ key: 'mu', value: 'mu', flag: 'mu', text: 'Mauritius' },

{ key: 'yt', value: 'yt', flag: 'yt', text: 'Mayotte' },

{ key: 'mx', value: 'mx', flag: 'mx', text: 'Mexico' },

{ key: 'fm', value: 'fm', flag: 'fm', text: 'Micronesia (Federated States of)' },

{ key: 'md', value: 'md', flag: 'md', text: 'Moldova (Republic of)' },

{ key: 'mc', value: 'mc', flag: 'mc', text: 'Monaco' },

{ key: 'mn', value: 'mn', flag: 'mn', text: 'Mongolia' },

{ key: 'me', value: 'me', flag: 'me', text: 'Montenegro' },

{ key: 'ms', value: 'ms', flag: 'ms', text: 'Montserrat' },

{ key: 'ma', value: 'ma', flag: 'ma', text: 'Morocco' },

{ key: 'mz', value: 'mz', flag: 'mz', text: 'Mozambique' },

{ key: 'mm', value: 'mm', flag: 'mm', text: 'Myanmar' },

{ key: 'na', value: 'na', flag: 'na', text: 'Namibia' },

{ key: 'nr', value: 'nr', flag: 'nr', text: 'Nauru' },

{ key: 'np', value: 'np', flag: 'np', text: 'Nepal' },

{ key: 'nl', value: 'nl', flag: 'nl', text: 'Netherlands' },

{ key: 'nc', value: 'nc', flag: 'nc', text: 'New Caledonia' },

{ key: 'nz', value: 'nz', flag: 'nz', text: 'New Zealand' },

{ key: 'ni', value: 'ni', flag: 'ni', text: 'Nicaragua' },

{ key: 'ne', value: 'ne', flag: 'ne', text: 'Niger' },

{ key: 'ng', value: 'ng', flag: 'ng', text: 'Nigeria' },

{ key: 'nu', value: 'nu', flag: 'nu', text: 'Niue' },

{ key: 'nf', value: 'nf', flag: 'nf', text: 'Norfolk Island' },

{ key: 'kp', value: 'kp', flag: 'kp', text: 'Korea (Democratic People's Republic of)' },

{ key: 'mp', value: 'mp', flag: 'mp', text: 'Northern Mariana Islands' },

{ key: 'no', value: 'no', flag: 'no', text: 'Norway' },

{ key: 'om', value: 'om', flag: 'om', text: 'Oman' },

{ key: 'pk', value: 'pk', flag: 'pk', text: 'Pakistan' },

{ key: 'pw', value: 'pw', flag: 'pw', text: 'Palau' },

{ key: 'ps', value: 'ps', flag: 'ps', text: 'Palestine, State of' },

{ key: 'pa', value: 'pa', flag: 'pa', text: 'Panama' },

{ key: 'pg', value: 'pg', flag: 'pg', text: 'Papua New Guinea' },

{ key: 'py', value: 'py', flag: 'py', text: 'Paraguay' },

{ key: 'pe', value: 'pe', flag: 'pe', text: 'Peru' },

{ key: 'ph', value: 'ph', flag: 'ph', text: 'Philippines' },

{ key: 'pn', value: 'pn', flag: 'pn', text: 'Pitcairn' },

{ key: 'pl', value: 'pl', flag: 'pl', text: 'Poland' },

{ key: 'pt', value: 'pt', flag: 'pt', text: 'Portugal' },

{ key: 'pr', value: 'pr', flag: 'pr', text: 'Puerto Rico' },

{ key: 'qa', value: 'qa', flag: 'qa', text: 'Qatar' },

{ key: 'xk', value: 'xk', flag: 'xk', text: 'Republic of Kosovo' },

{ key: 're', value: 're', flag: 're', text: 'Réunion' },

{ key: 'ro', value: 'ro', flag: 'ro', text: 'Romania' },

{ key: 'ru', value: 'ru', flag: 'ru', text: 'Russian Federation' },

{ key: 'rw', value: 'rw', flag: 'rw', text: 'Rwanda' },

{ key: 'bl', value: 'bl', flag: 'bl', text: 'Saint Barthélemy' },

{ key: 'sh', value: 'sh', flag: 'sh', text: 'Saint Helena, Ascension and Tristan da Cunha' },

{ key: 'kn', value: 'kn', flag: 'kn', text: 'Saint Kitts and Nevis' },

{ key: 'lc', value: 'lc', flag: 'lc', text: 'Saint Lucia' },

{ key: 'mf', value: 'mf', flag: 'mf', text: 'Saint Martin (French part)' },

{ key: 'pm', value: 'pm', flag: 'pm', text: 'Saint Pierre and Miquelon' },

{ key: 'vc', value: 'vc', flag: 'vc', text: 'Saint Vincent and the Grenadines' },

{ key: 'ws', value: 'ws', flag: 'ws', text: 'Samoa' },

{ key: 'sm', value: 'sm', flag: 'sm', text: 'San Marino' },

{ key: 'st', value: 'st', flag: 'st', text: 'Sao Tome and Principe' },

{ key: 'sa', value: 'sa', flag: 'sa', text: 'Saudi Arabia' },

{ key: 'sn', value: 'sn', flag: 'sn', text: 'Senegal' },

{ key: 'rs', value: 'rs', flag: 'rs', text: 'Serbia' },

{ key: 'sc', value: 'sc', flag: 'sc', text: 'Seychelles' },

{ key: 'sl', value: 'sl', flag: 'sl', text: 'Sierra Leone' },

{ key: 'sg', value: 'sg', flag: 'sg', text: 'Singapore' },

{ key: 'sx', value: 'sx', flag: 'sx', text: 'Sint Maarten (Dutch part)' },

{ key: 'sk', value: 'sk', flag: 'sk', text: 'Slovakia' },

{ key: 'si', value: 'si', flag: 'si', text: 'Slovenia' },

{ key: 'sb', value: 'sb', flag: 'sb', text: 'Solomon Islands' },

{ key: 'so', value: 'so', flag: 'so', text: 'Somalia' },

{ key: 'za', value: 'za', flag: 'za', text: 'South Africa' },

{ key: 'gs', value: 'gs', flag: 'gs', text: 'South Georgia and the South Sandwich Islands' },

{ key: 'kr', value: 'kr', flag: 'kr', text: 'Korea (Republic of)' },

{ key: 'ss', value: 'ss', flag: 'ss', text: 'South Sudan' },

{ key: 'es', value: 'es', flag: 'es', text: 'Spain' },

{ key: 'lk', value: 'lk', flag: 'lk', text: 'Sri Lanka' },

{ key: 'sd', value: 'sd', flag: 'sd', text: 'Sudan' },

{ key: 'sr', value: 'sr', flag: 'sr', text: 'Suriname' },

{ key: 'sj', value: 'sj', flag: 'sj', text: 'Svalbard and Jan Mayen' },

{ key: 'sz', value: 'sz', flag: 'sz', text: 'Swaziland' },

{ key: 'se', value: 'se', flag: 'se', text: 'Sweden' },

{ key: 'ch', value: 'ch', flag: 'ch', text: 'Switzerland' },

{ key: 'sy', value: 'sy', flag: 'sy', text: 'Syrian Arab Republic' },

{ key: 'tw', value: 'tw', flag: 'tw', text: 'Taiwan' },

{ key: 'tj', value: 'tj', flag: 'tj', text: 'Tajikistan' },

{ key: 'tz', value: 'tz', flag: 'tz', text: 'Tanzania, United Republic of' },

{ key: 'th', value: 'th', flag: 'th', text: 'Thailand' },

{ key: 'tl', value: 'tl', flag: 'tl', text: 'Timor-Leste' },

{ key: 'tg', value: 'tg', flag: 'tg', text: 'Togo' },

{ key: 'tk', value: 'tk', flag: 'tk', text: 'Tokelau' },

{ key: 'to', value: 'to', flag: 'to', text: 'Tonga' },

{ key: 'tt', value: 'tt', flag: 'tt', text: 'Trinidad and Tobago' },

{ key: 'tn', value: 'tn', flag: 'tn', text: 'Tunisia' },

{ key: 'tr', value: 'tr', flag: 'tr', text: 'Turkey' },

{ key: 'tm', value: 'tm', flag: 'tm', text: 'Turkmenistan' },

{ key: 'tc', value: 'tc', flag: 'tc', text: 'Turks and Caicos Islands' },

{ key: 'tv', value: 'tv', flag: 'tv', text: 'Tuvalu' },

{ key: 'ug', value: 'ug', flag: 'ug', text: 'Uganda' },

{ key: 'ua', value: 'ua', flag: 'ua', text: 'Ukraine' },

{ key: 'ae', value: 'ae', flag: 'ae', text: 'United Arab Emirates' },

{ key: 'gb', value: 'gb', flag: 'gb', text: 'United Kingdom of Great Britain and Northern Ireland' },

{ key: 'us', value: 'us', flag: 'us', text: 'United States of America' },

{ key: 'uy', value: 'uy', flag: 'uy', text: 'Uruguay' },

{ key: 'uz', value: 'uz', flag: 'uz', text: 'Uzbekistan' },

{ key: 'vu', value: 'vu', flag: 'vu', text: 'Vanuatu' },

{ key: 've', value: 've', flag: 've', text: 'Venezuela (Bolivarian Republic of)' },

{ key: 'vn', value: 'vn', flag: 'vn', text: 'Viet Nam' },

{ key: 'wf', value: 'wf', flag: 'wf', text: 'Wallis and Futuna' },

{ key: 'eh', value: 'eh', flag: 'eh', text: 'Western Sahara' },

{ key: 'ye', value: 'ye', flag: 'ye', text: 'Yemen' },

{ key: 'zm', value: 'zm', flag: 'zm', text: 'Zambia' },

{ key: 'zw', value: 'zw', flag: 'zw', text: 'Zimbabwe' },
  
]

const DropdownExampleSearchSelection = () => (
  <Dropdown
    placeholder='Select Country'
    fluid
    search
    selection
    options={countryOptions}
  />
)

export default DropdownExampleSearchSelection
