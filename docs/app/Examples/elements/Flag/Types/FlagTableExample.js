import React, { Component } from 'react'
import { Table } from 'stardust'

const countries = [
  {
    name: 'afghanistan',
    country_code: 'af',
    alias: '',
  },
  {
    name: 'aland.islands',
    country_code: 'ax',
    alias: '',
  },
  {
    name: 'albania',
    country_code: 'al',
    alias: '',
  },
  {
    name: 'algeria',
    country_code: 'dz',
    alias: '',
  },
  {
    name: 'american.samoa',
    country_code: 'as',
    alias: '',
  },
  {
    name: 'andorra',
    country_code: 'ad',
    alias: '',
  },
  {
    name: 'angola',
    country_code: 'ao',
    alias: '',
  },
  {
    name: 'anguilla',
    country_code: 'ai',
    alias: '',
  },
  {
    name: 'antigua',
    country_code: 'ag',
    alias: '',
  },
  {
    name: 'argentina',
    country_code: 'ar',
    alias: '',
  },
  {
    name: 'armenia',
    country_code: 'am',
    alias: '',
  },
  {
    name: 'aruba',
    country_code: 'aw',
    alias: '',
  },
  {
    name: 'australia',
    country_code: 'au',
    alias: '',
  },
  {
    name: 'austria',
    country_code: 'at',
    alias: '',
  },
  {
    name: 'azerbaijan',
    country_code: 'az',
    alias: '',
  },
  {
    name: 'bahamas',
    country_code: 'bs',
    alias: '',
  },
  {
    name: 'bahrain',
    country_code: 'bh',
    alias: '',
  },
  {
    name: 'bangladesh',
    country_code: 'bd',
    alias: '',
  },
  {
    name: 'barbados',
    country_code: 'bb',
    alias: '',
  },
  {
    name: 'belarus',
    country_code: 'by',
    alias: '',
  },
  {
    name: 'belgium',
    country_code: 'be',
    alias: '',
  },
  {
    name: 'belize',
    country_code: 'bz',
    alias: '',
  },
  {
    name: 'benin',
    country_code: 'bj',
    alias: '',
  },
  {
    name: 'bermuda',
    country_code: 'bm',
    alias: '',
  },
  {
    name: 'bhutan',
    country_code: 'bt',
    alias: '',
  },
  {
    name: 'bolivia',
    country_code: 'bo',
    alias: '',
  },
  {
    name: 'bosnia',
    country_code: 'ba',
    alias: '',
  },
  {
    name: 'botswana',
    country_code: 'bw',
    alias: '',
  },
  {
    name: 'bouvet.island',
    country_code: 'bv',
    alias: '',
  },
  {
    name: 'brazil',
    country_code: 'br',
    alias: '',
  },
  {
    name: 'british.virgin.islands',
    country_code: 'vg',
    alias: '',
  },
  {
    name: 'brunei',
    country_code: 'bn',
    alias: '',
  },
  {
    name: 'bulgaria',
    country_code: 'bg',
    alias: '',
  },
  {
    name: 'burkina.faso',
    country_code: 'bf',
    alias: '',
  },
  {
    name: 'burma',
    country_code: 'mm',
    alias: 'myanmar',
  },
  {
    name: 'burundi',
    country_code: 'bi',
    alias: '',
  },
  {
    name: 'caicos.islands',
    country_code: 'tc',
    alias: '',
  },
  {
    name: 'cambodia',
    country_code: 'kh',
    alias: '',
  },
  {
    name: 'cameroon',
    country_code: 'cm',
    alias: '',
  },
  {
    name: 'canada',
    country_code: 'ca',
    alias: '',
  },
  {
    name: 'cape.verde',
    country_code: 'cv',
    alias: '',
  },
  {
    name: 'cayman.islands',
    country_code: 'ky',
    alias: '',
  },
  {
    name: 'central.african.republic',
    country_code: 'cf',
    alias: '',
  },
  {
    name: 'chad',
    country_code: 'td',
    alias: '',
  },
  {
    name: 'chile',
    country_code: 'cl',
    alias: '',
  },
  {
    name: 'china',
    country_code: 'cn',
    alias: '',
  },
  {
    name: 'christmas.island',
    country_code: 'cx',
    alias: '',
  },
  {
    name: 'cocos.islands',
    country_code: 'cc',
    alias: '',
  },
  {
    name: 'colombia',
    country_code: 'co',
    alias: '',
  },
  {
    name: 'comoros',
    country_code: 'km',
    alias: '',
  },
  {
    name: 'congo',
    country_code: 'cd',
    alias: '',
  },
  {
    name: 'congo.brazzaville',
    country_code: 'cg',
    alias: '',
  },
  {
    name: 'cook.islands',
    country_code: 'ck',
    alias: '',
  },
  {
    name: 'costa.rica',
    country_code: 'cr',
    alias: '',
  },
  {
    name: 'cote.divoire',
    country_code: 'ci',
    alias: '',
  },
  {
    name: 'croatia',
    country_code: 'hr',
    alias: '',
  },
  {
    name: 'cuba',
    country_code: 'cu',
    alias: '',
  },
  {
    name: 'cyprus',
    country_code: 'cy',
    alias: '',
  },
  {
    name: 'czech.republic',
    country_code: 'cz',
    alias: '',
  },
  {
    name: 'denmark',
    country_code: 'dk',
    alias: '',
  },
  {
    name: 'djibouti',
    country_code: 'dj',
    alias: '',
  },
  {
    name: 'dominica',
    country_code: 'dm',
    alias: '',
  },
  {
    name: 'dominican.republic',
    country_code: 'do',
    alias: '',
  },
  {
    name: 'ecuador',
    country_code: 'ec',
    alias: '',
  },
  {
    name: 'egypt',
    country_code: 'eg',
    alias: '',
  },
  {
    name: 'el.salvador',
    country_code: 'sv',
    alias: '',
  },
  {
    name: 'equatorial.guinea',
    country_code: 'gq',
    alias: '',
  },
  {
    name: 'eritrea',
    country_code: 'er',
    alias: '',
  },
  {
    name: 'estonia',
    country_code: 'ee',
    alias: '',
  },
  {
    name: 'ethiopia',
    country_code: 'et',
    alias: '',
  },
  {
    name: 'european union',
    country_code: 'eu',
    alias: '',
  },
  {
    name: 'falkland.islands',
    country_code: 'fk',
    alias: '',
  },
  {
    name: 'faroe.islands',
    country_code: 'fo',
    alias: '',
  },
  {
    name: 'fiji',
    country_code: 'fj',
    alias: '',
  },
  {
    name: 'finland',
    country_code: 'fi',
    alias: '',
  },
  {
    name: 'france',
    country_code: 'fr',
    alias: '',
  },
  {
    name: 'french.guiana',
    country_code: 'gf',
    alias: '',
  },
  {
    name: 'french.polynesia',
    country_code: 'pf',
    alias: '',
  },
  {
    name: 'french.territories',
    country_code: 'tf',
    alias: '',
  },
  {
    name: 'gabon',
    country_code: 'ga',
    alias: '',
  },
  {
    name: 'gambia',
    country_code: 'gm',
    alias: '',
  },
  {
    name: 'georgia',
    country_code: 'ge',
    alias: '',
  },
  {
    name: 'germany',
    country_code: 'de',
    alias: '',
  },
  {
    name: 'ghana',
    country_code: 'gh',
    alias: '',
  },
  {
    name: 'gibraltar',
    country_code: 'gi',
    alias: '',
  },
  {
    name: 'greece',
    country_code: 'gr',
    alias: '',
  },
  {
    name: 'greenland',
    country_code: 'gl',
    alias: '',
  },
  {
    name: 'grenada',
    country_code: 'gd',
    alias: '',
  },
  {
    name: 'guadeloupe',
    country_code: 'gp',
    alias: '',
  },
  {
    name: 'guam',
    country_code: 'gu',
    alias: '',
  },
  {
    name: 'guatemala',
    country_code: 'gt',
    alias: '',
  },
  {
    name: 'guinea',
    country_code: 'gn',
    alias: '',
  },
  {
    name: 'guinea-bissau',
    country_code: 'gw',
    alias: '',
  },
  {
    name: 'guyana',
    country_code: 'gy',
    alias: '',
  },
  {
    name: 'haiti',
    country_code: 'ht',
    alias: '',
  },
  {
    name: 'heard.island',
    country_code: 'hm',
    alias: '',
  },
  {
    name: 'honduras',
    country_code: 'hn',
    alias: '',
  },
  {
    name: 'hong.kong',
    country_code: 'hk',
    alias: '',
  },
  {
    name: 'hungary',
    country_code: 'hu',
    alias: '',
  },
  {
    name: 'iceland',
    country_code: 'is',
    alias: '',
  },
  {
    name: 'india',
    country_code: 'in',
    alias: '',
  },
  {
    name: 'indian.ocean.territory',
    country_code: 'io',
    alias: '',
  },
  {
    name: 'indonesia',
    country_code: 'id',
    alias: '',
  },
  {
    name: 'iran',
    country_code: 'ir',
    alias: '',
  },
  {
    name: 'iraq',
    country_code: 'iq',
    alias: '',
  },
  {
    name: 'ireland',
    country_code: 'ie',
    alias: '',
  },
  {
    name: 'israel',
    country_code: 'il',
    alias: '',
  },
  {
    name: 'italy',
    country_code: 'it',
    alias: '',
  },
  {
    name: 'jamaica',
    country_code: 'jm',
    alias: '',
  },
  {
    name: 'jan.mayen',
    country_code: 'sj',
    alias: 'svalbard',
  },
  {
    name: 'japan',
    country_code: 'jp',
    alias: '',
  },
  {
    name: 'jordan',
    country_code: 'jo',
    alias: '',
  },
  {
    name: 'kazakhstan',
    country_code: 'kz',
    alias: '',
  },
  {
    name: 'kenya',
    country_code: 'ke',
    alias: '',
  },
  {
    name: 'kiribati',
    country_code: 'ki',
    alias: '',
  },
  {
    name: 'kuwait',
    country_code: 'kw',
    alias: '',
  },
  {
    name: 'kyrgyzstan',
    country_code: 'kg',
    alias: '',
  },
  {
    name: 'laos',
    country_code: 'la',
    alias: '',
  },
  {
    name: 'latvia',
    country_code: 'lv',
    alias: '',
  },
  {
    name: 'lebanon',
    country_code: 'lb',
    alias: '',
  },
  {
    name: 'lesotho',
    country_code: 'ls',
    alias: '',
  },
  {
    name: 'liberia',
    country_code: 'lr',
    alias: '',
  },
  {
    name: 'libya',
    country_code: 'ly',
    alias: '',
  },
  {
    name: 'liechtenstein',
    country_code: 'li',
    alias: '',
  },
  {
    name: 'lithuania',
    country_code: 'lt',
    alias: '',
  },
  {
    name: 'luxembourg',
    country_code: 'lu',
    alias: '',
  },
  {
    name: 'macau',
    country_code: 'mo',
    alias: '',
  },
  {
    name: 'macedonia',
    country_code: 'mk',
    alias: '',
  },
  {
    name: 'madagascar',
    country_code: 'mg',
    alias: '',
  },
  {
    name: 'malawi',
    country_code: 'mw',
    alias: '',
  },
  {
    name: 'malaysia',
    country_code: 'my',
    alias: '',
  },
  {
    name: 'maldives',
    country_code: 'mv',
    alias: '',
  },
  {
    name: 'mali',
    country_code: 'ml',
    alias: '',
  },
  {
    name: 'malta',
    country_code: 'mt',
    alias: '',
  },
  {
    name: 'marshall.islands',
    country_code: 'mh',
    alias: '',
  },
  {
    name: 'martinique',
    country_code: 'mq',
    alias: '',
  },
  {
    name: 'mauritania',
    country_code: 'mr',
    alias: '',
  },
  {
    name: 'mauritius',
    country_code: 'mu',
    alias: '',
  },
  {
    name: 'mayotte',
    country_code: 'yt',
    alias: '',
  },
  {
    name: 'mexico',
    country_code: 'mx',
    alias: '',
  },
  {
    name: 'micronesia',
    country_code: 'fm',
    alias: '',
  },
  {
    name: 'moldova',
    country_code: 'md',
    alias: '',
  },
  {
    name: 'monaco',
    country_code: 'mc',
    alias: '',
  },
  {
    name: 'mongolia',
    country_code: 'mn',
    alias: '',
  },
  {
    name: 'montenegro',
    country_code: 'me',
    alias: '',
  },
  {
    name: 'montserrat',
    country_code: 'ms',
    alias: '',
  },
  {
    name: 'morocco',
    country_code: 'ma',
    alias: '',
  },
  {
    name: 'mozambique',
    country_code: 'mz',
    alias: '',
  },
  {
    name: 'namibia',
    country_code: 'na',
    alias: '',
  },
  {
    name: 'nauru',
    country_code: 'nr',
    alias: '',
  },
  {
    name: 'nepal',
    country_code: 'np',
    alias: '',
  },
  {
    name: 'netherlands',
    country_code: 'nl',
    alias: '',
  },
  {
    name: 'netherlands antilles',
    country_code: 'an',
    alias: '',
  },
  {
    name: 'new.caledonia',
    country_code: 'nc',
    alias: '',
  },
  {
    name: 'new.guinea',
    country_code: 'pg',
    alias: '',
  },
  {
    name: 'new.zealand',
    country_code: 'nz',
    alias: '',
  },
  {
    name: 'nicaragua',
    country_code: 'ni',
    alias: '',
  },
  {
    name: 'niger',
    country_code: 'ne',
    alias: '',
  },
  {
    name: 'nigeria',
    country_code: 'ng',
    alias: '',
  },
  {
    name: 'niue',
    country_code: 'nu',
    alias: '',
  },
  {
    name: 'norfolk.island',
    country_code: 'nf',
    alias: '',
  },
  {
    name: 'north.korea',
    country_code: 'kp',
    alias: '',
  },
  {
    name: 'northern.mariana.islands',
    country_code: 'mp',
    alias: '',
  },
  {
    name: 'norway',
    country_code: 'no',
    alias: '',
  },
  {
    name: 'oman',
    country_code: 'om',
    alias: '',
  },
  {
    name: 'pakistan',
    country_code: 'pk',
    alias: '',
  },
  {
    name: 'palau',
    country_code: 'pw',
    alias: '',
  },
  {
    name: 'palestine',
    country_code: 'ps',
    alias: '',
  },
  {
    name: 'panama',
    country_code: 'pa',
    alias: '',
  },
  {
    name: 'paraguay',
    country_code: 'py',
    alias: '',
  },
  {
    name: 'peru',
    country_code: 'pe',
    alias: '',
  },
  {
    name: 'philippines',
    country_code: 'ph',
    alias: '',
  },
  {
    name: 'pitcairn.islands',
    country_code: 'pn',
    alias: '',
  },
  {
    name: 'poland',
    country_code: 'pl',
    alias: '',
  },
  {
    name: 'portugal',
    country_code: 'pt',
    alias: '',
  },
  {
    name: 'puerto.rico',
    country_code: 'pr',
    alias: '',
  },
  {
    name: 'qatar',
    country_code: 'qa',
    alias: '',
  },
  {
    name: 'reunion',
    country_code: 're',
    alias: '',
  },
  {
    name: 'romania',
    country_code: 'ro',
    alias: '',
  },
  {
    name: 'russia',
    country_code: 'ru',
    alias: '',
  },
  {
    name: 'rwanda',
    country_code: 'rw',
    alias: '',
  },
  {
    name: 'saint.helena',
    country_code: 'sh',
    alias: '',
  },
  {
    name: 'saint.kitts.and.nevis',
    country_code: 'kn',
    alias: '',
  },
  {
    name: 'saint.lucia',
    country_code: 'lc',
    alias: '',
  },
  {
    name: 'saint.pierre',
    country_code: 'pm',
    alias: '',
  },
  {
    name: 'saint.vincent',
    country_code: 'vc',
    alias: '',
  },
  {
    name: 'samoa',
    country_code: 'ws',
    alias: '',
  },
  {
    name: 'san.marino',
    country_code: 'sm',
    alias: '',
  },
  {
    name: 'sandwich.islands',
    country_code: 'gs',
    alias: '',
  },
  {
    name: 'sao.tome',
    country_code: 'st',
    alias: '',
  },
  {
    name: 'saudi.arabia',
    country_code: 'sa',
    alias: '',
  },
  {
    name: 'scotland',
    country_code: 'gb.sct',
    alias: '',
  },
  {
    name: 'senegal',
    country_code: 'sn',
    alias: '',
  },
  {
    name: 'serbia',
    country_code: 'cs',
    alias: '',
  },
  {
    name: 'serbia',
    country_code: 'rs',
    alias: '',
  },
  {
    name: 'seychelles',
    country_code: 'sc',
    alias: '',
  },
  {
    name: 'sierra.leone',
    country_code: 'sl',
    alias: '',
  },
  {
    name: 'singapore',
    country_code: 'sg',
    alias: '',
  },
  {
    name: 'slovakia',
    country_code: 'sk',
    alias: '',
  },
  {
    name: 'slovenia',
    country_code: 'si',
    alias: '',
  },
  {
    name: 'solomon.islands',
    country_code: 'sb',
    alias: '',
  },
  {
    name: 'somalia',
    country_code: 'so',
    alias: '',
  },
  {
    name: 'south.africa',
    country_code: 'za',
    alias: '',
  },
  {
    name: 'south.korea',
    country_code: 'kr',
    alias: '',
  },
  {
    name: 'spain',
    country_code: 'es',
    alias: '',
  },
  {
    name: 'sri.lanka',
    country_code: 'lk',
    alias: '',
  },
  {
    name: 'sudan',
    country_code: 'sd',
    alias: '',
  },
  {
    name: 'suriname',
    country_code: 'sr',
    alias: '',
  },
  {
    name: 'swaziland',
    country_code: 'sz',
    alias: '',
  },
  {
    name: 'sweden',
    country_code: 'se',
    alias: '',
  },
  {
    name: 'switzerland',
    country_code: 'ch',
    alias: '',
  },
  {
    name: 'syria',
    country_code: 'sy',
    alias: '',
  },
  {
    name: 'taiwan',
    country_code: 'tw',
    alias: '',
  },
  {
    name: 'tajikistan',
    country_code: 'tj',
    alias: '',
  },
  {
    name: 'tanzania',
    country_code: 'tz',
    alias: '',
  },
  {
    name: 'thailand',
    country_code: 'th',
    alias: '',
  },
  {
    name: 'timorleste',
    country_code: 'tl',
    alias: '',
  },
  {
    name: 'togo',
    country_code: 'tg',
    alias: '',
  },
  {
    name: 'tokelau',
    country_code: 'tk',
    alias: '',
  },
  {
    name: 'tonga',
    country_code: 'to',
    alias: '',
  },
  {
    name: 'trinidad',
    country_code: 'tt',
    alias: '',
  },
  {
    name: 'tunisia',
    country_code: 'tn',
    alias: '',
  },
  {
    name: 'turkey',
    country_code: 'tr',
    alias: '',
  },
  {
    name: 'turkmenistan',
    country_code: 'tm',
    alias: '',
  },
  {
    name: 'tuvalu',
    country_code: 'tv',
    alias: '',
  },
  {
    name: 'uae',
    country_code: 'ae',
    alias: 'united arab emirates',
  },
  {
    name: 'uganda',
    country_code: 'ug',
    alias: '',
  },
  {
    name: 'ukraine',
    country_code: 'ua',
    alias: '',
  },
  {
    name: 'united.kingdom',
    country_code: 'gb',
    alias: '',
  },
  {
    name: 'united.states',
    country_code: 'us',
    alias: 'america',
  },
  {
    name: 'uruguay',
    country_code: 'uy',
    alias: '',
  },
  {
    name: 'us.minor.islands',
    country_code: 'um',
    alias: '',
  },
  {
    name: 'us.virgin.islands',
    country_code: 'vi',
    alias: '',
  },
  {
    name: 'uzbekistan',
    country_code: 'uz',
    alias: '',
  },
  {
    name: 'vanuatu',
    country_code: 'vu',
    alias: '',
  },
  {
    name: 'vatican.city',
    country_code: 'va',
    alias: '',
  },
  {
    name: 'venezuela',
    country_code: 've',
    alias: '',
  },
  {
    name: 'vietnam',
    country_code: 'vn',
    alias: '',
  },
  {
    name: 'wales',
    country_code: 'gb.wls',
    alias: '',
  },
  {
    name: 'wallis.and.futuna',
    country_code: 'wf',
    alias: '',
  },
  {
    name: 'western.sahara',
    country_code: 'eh',
    alias: '',
  },
  {
    name: 'yemen',
    country_code: 'ye',
    alias: '',
  },
  {
    name: 'zambia',
    country_code: 'zm',
    alias: '',
  },
  {
    name: 'zimbabwe',
    country_code: 'zw',
    alias: '',
  },
]

export default class FlagTableExample extends Component {

  render() {
    return (
      <Table data={countries}>
        <Table.Column dataKey='name' />
        <Table.Column dataKey='country_code' />
        <Table.Column dataKey='alias' />
      </Table>
    )
  }
}
