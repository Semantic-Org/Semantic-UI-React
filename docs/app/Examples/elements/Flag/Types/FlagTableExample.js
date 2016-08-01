import React, { Component } from 'react'
import { Flag, Table, Divider } from 'stardust'

const countries = [
  {
    "name": "afghanistan",
    "country_Code": "af",
    "alias": ""
  },
  {
    "name": "aland.islands",
    "country_Code": "ax",
    "alias": ""
  },
  {
    "name": "albania",
    "country_Code": "al",
    "alias": ""
  },
  {
    "name": "algeria",
    "country_Code": "dz",
    "alias": ""
  },
  {
    "name": "american.samoa",
    "country_Code": "as",
    "alias": ""
  },
  {
    "name": "andorra",
    "country_Code": "ad",
    "alias": ""
  },
  {
    "name": "angola",
    "country_Code": "ao",
    "alias": ""
  },
  {
    "name": "anguilla",
    "country_Code": "ai",
    "alias": ""
  },
  {
    "name": "antigua",
    "country_Code": "ag",
    "alias": ""
  },
  {
    "name": "argentina",
    "country_Code": "ar",
    "alias": ""
  },
  {
    "name": "armenia",
    "country_Code": "am",
    "alias": ""
  },
  {
    "name": "aruba",
    "country_Code": "aw",
    "alias": ""
  },
  {
    "name": "australia",
    "country_Code": "au",
    "alias": ""
  },
  {
    "name": "austria",
    "country_Code": "at",
    "alias": ""
  },
  {
    "name": "azerbaijan",
    "country_Code": "az",
    "alias": ""
  },
  {
    "name": "bahamas",
    "country_Code": "bs",
    "alias": ""
  },
  {
    "name": "bahrain",
    "country_Code": "bh",
    "alias": ""
  },
  {
    "name": "bangladesh",
    "country_Code": "bd",
    "alias": ""
  },
  {
    "name": "barbados",
    "country_Code": "bb",
    "alias": ""
  },
  {
    "name": "belarus",
    "country_Code": "by",
    "alias": ""
  },
  {
    "name": "belgium",
    "country_Code": "be",
    "alias": ""
  },
  {
    "name": "belize",
    "country_Code": "bz",
    "alias": ""
  },
  {
    "name": "benin",
    "country_Code": "bj",
    "alias": ""
  },
  {
    "name": "bermuda",
    "country_Code": "bm",
    "alias": ""
  },
  {
    "name": "bhutan",
    "country_Code": "bt",
    "alias": ""
  },
  {
    "name": "bolivia",
    "country_Code": "bo",
    "alias": ""
  },
  {
    "name": "bosnia",
    "country_Code": "ba",
    "alias": ""
  },
  {
    "name": "botswana",
    "country_Code": "bw",
    "alias": ""
  },
  {
    "name": "bouvet.island",
    "country_Code": "bv",
    "alias": ""
  },
  {
    "name": "brazil",
    "country_Code": "br",
    "alias": ""
  },
  {
    "name": "british.virgin.islands",
    "country_Code": "vg",
    "alias": ""
  },
  {
    "name": "brunei",
    "country_Code": "bn",
    "alias": ""
  },
  {
    "name": "bulgaria",
    "country_Code": "bg",
    "alias": ""
  },
  {
    "name": "burkina.faso",
    "country_Code": "bf",
    "alias": ""
  },
  {
    "name": "burma",
    "country_Code": "mm",
    "alias": "myanmar"
  },
  {
    "name": "burundi",
    "country_Code": "bi",
    "alias": ""
  },
  {
    "name": "caicos.islands",
    "country_Code": "tc",
    "alias": ""
  },
  {
    "name": "cambodia",
    "country_Code": "kh",
    "alias": ""
  },
  {
    "name": "cameroon",
    "country_Code": "cm",
    "alias": ""
  },
  {
    "name": "canada",
    "country_Code": "ca",
    "alias": ""
  },
  {
    "name": "cape.verde",
    "country_Code": "cv",
    "alias": ""
  },
  {
    "name": "cayman.islands",
    "country_Code": "ky",
    "alias": ""
  },
  {
    "name": "central.african.republic",
    "country_Code": "cf",
    "alias": ""
  },
  {
    "name": "chad",
    "country_Code": "td",
    "alias": ""
  },
  {
    "name": "chile",
    "country_Code": "cl",
    "alias": ""
  },
  {
    "name": "china",
    "country_Code": "cn",
    "alias": ""
  },
  {
    "name": "christmas.island",
    "country_Code": "cx",
    "alias": ""
  },
  {
    "name": "cocos.islands",
    "country_Code": "cc",
    "alias": ""
  },
  {
    "name": "colombia",
    "country_Code": "co",
    "alias": ""
  },
  {
    "name": "comoros",
    "country_Code": "km",
    "alias": ""
  },
  {
    "name": "congo",
    "country_Code": "cd",
    "alias": ""
  },
  {
    "name": "congo.brazzaville",
    "country_Code": "cg",
    "alias": ""
  },
  {
    "name": "cook.islands",
    "country_Code": "ck",
    "alias": ""
  },
  {
    "name": "costa.rica",
    "country_Code": "cr",
    "alias": ""
  },
  {
    "name": "cote.divoire",
    "country_Code": "ci",
    "alias": ""
  },
  {
    "name": "croatia",
    "country_Code": "hr",
    "alias": ""
  },
  {
    "name": "cuba",
    "country_Code": "cu",
    "alias": ""
  },
  {
    "name": "cyprus",
    "country_Code": "cy",
    "alias": ""
  },
  {
    "name": "czech.republic",
    "country_Code": "cz",
    "alias": ""
  },
  {
    "name": "denmark",
    "country_Code": "dk",
    "alias": ""
  },
  {
    "name": "djibouti",
    "country_Code": "dj",
    "alias": ""
  },
  {
    "name": "dominica",
    "country_Code": "dm",
    "alias": ""
  },
  {
    "name": "dominican.republic",
    "country_Code": "do",
    "alias": ""
  },
  {
    "name": "ecuador",
    "country_Code": "ec",
    "alias": ""
  },
  {
    "name": "egypt",
    "country_Code": "eg",
    "alias": ""
  },
  {
    "name": "el.salvador",
    "country_Code": "sv",
    "alias": ""
  },
  {
    "name": "equatorial.guinea",
    "country_Code": "gq",
    "alias": ""
  },
  {
    "name": "eritrea",
    "country_Code": "er",
    "alias": ""
  },
  {
    "name": "estonia",
    "country_Code": "ee",
    "alias": ""
  },
  {
    "name": "ethiopia",
    "country_Code": "et",
    "alias": ""
  },
  {
    "name": "european union",
    "country_Code": "eu",
    "alias": ""
  },
  {
    "name": "falkland.islands",
    "country_Code": "fk",
    "alias": ""
  },
  {
    "name": "faroe.islands",
    "country_Code": "fo",
    "alias": ""
  },
  {
    "name": "fiji",
    "country_Code": "fj",
    "alias": ""
  },
  {
    "name": "finland",
    "country_Code": "fi",
    "alias": ""
  },
  {
    "name": "france",
    "country_Code": "fr",
    "alias": ""
  },
  {
    "name": "french.guiana",
    "country_Code": "gf",
    "alias": ""
  },
  {
    "name": "french.polynesia",
    "country_Code": "pf",
    "alias": ""
  },
  {
    "name": "french.territories",
    "country_Code": "tf",
    "alias": ""
  },
  {
    "name": "gabon",
    "country_Code": "ga",
    "alias": ""
  },
  {
    "name": "gambia",
    "country_Code": "gm",
    "alias": ""
  },
  {
    "name": "georgia",
    "country_Code": "ge",
    "alias": ""
  },
  {
    "name": "germany",
    "country_Code": "de",
    "alias": ""
  },
  {
    "name": "ghana",
    "country_Code": "gh",
    "alias": ""
  },
  {
    "name": "gibraltar",
    "country_Code": "gi",
    "alias": ""
  },
  {
    "name": "greece",
    "country_Code": "gr",
    "alias": ""
  },
  {
    "name": "greenland",
    "country_Code": "gl",
    "alias": ""
  },
  {
    "name": "grenada",
    "country_Code": "gd",
    "alias": ""
  },
  {
    "name": "guadeloupe",
    "country_Code": "gp",
    "alias": ""
  },
  {
    "name": "guam",
    "country_Code": "gu",
    "alias": ""
  },
  {
    "name": "guatemala",
    "country_Code": "gt",
    "alias": ""
  },
  {
    "name": "guinea",
    "country_Code": "gn",
    "alias": ""
  },
  {
    "name": "guinea-bissau",
    "country_Code": "gw",
    "alias": ""
  },
  {
    "name": "guyana",
    "country_Code": "gy",
    "alias": ""
  },
  {
    "name": "haiti",
    "country_Code": "ht",
    "alias": ""
  },
  {
    "name": "heard.island",
    "country_Code": "hm",
    "alias": ""
  },
  {
    "name": "honduras",
    "country_Code": "hn",
    "alias": ""
  },
  {
    "name": "hong.kong",
    "country_Code": "hk",
    "alias": ""
  },
  {
    "name": "hungary",
    "country_Code": "hu",
    "alias": ""
  },
  {
    "name": "iceland",
    "country_Code": "is",
    "alias": ""
  },
  {
    "name": "india",
    "country_Code": "in",
    "alias": ""
  },
  {
    "name": "indian.ocean.territory",
    "country_Code": "io",
    "alias": ""
  },
  {
    "name": "indonesia",
    "country_Code": "id",
    "alias": ""
  },
  {
    "name": "iran",
    "country_Code": "ir",
    "alias": ""
  },
  {
    "name": "iraq",
    "country_Code": "iq",
    "alias": ""
  },
  {
    "name": "ireland",
    "country_Code": "ie",
    "alias": ""
  },
  {
    "name": "israel",
    "country_Code": "il",
    "alias": ""
  },
  {
    "name": "italy",
    "country_Code": "it",
    "alias": ""
  },
  {
    "name": "jamaica",
    "country_Code": "jm",
    "alias": ""
  },
  {
    "name": "jan.mayen",
    "country_Code": "sj",
    "alias": "svalbard"
  },
  {
    "name": "japan",
    "country_Code": "jp",
    "alias": ""
  },
  {
    "name": "jordan",
    "country_Code": "jo",
    "alias": ""
  },
  {
    "name": "kazakhstan",
    "country_Code": "kz",
    "alias": ""
  },
  {
    "name": "kenya",
    "country_Code": "ke",
    "alias": ""
  },
  {
    "name": "kiribati",
    "country_Code": "ki",
    "alias": ""
  },
  {
    "name": "kuwait",
    "country_Code": "kw",
    "alias": ""
  },
  {
    "name": "kyrgyzstan",
    "country_Code": "kg",
    "alias": ""
  },
  {
    "name": "laos",
    "country_Code": "la",
    "alias": ""
  },
  {
    "name": "latvia",
    "country_Code": "lv",
    "alias": ""
  },
  {
    "name": "lebanon",
    "country_Code": "lb",
    "alias": ""
  },
  {
    "name": "lesotho",
    "country_Code": "ls",
    "alias": ""
  },
  {
    "name": "liberia",
    "country_Code": "lr",
    "alias": ""
  },
  {
    "name": "libya",
    "country_Code": "ly",
    "alias": ""
  },
  {
    "name": "liechtenstein",
    "country_Code": "li",
    "alias": ""
  },
  {
    "name": "lithuania",
    "country_Code": "lt",
    "alias": ""
  },
  {
    "name": "luxembourg",
    "country_Code": "lu",
    "alias": ""
  },
  {
    "name": "macau",
    "country_Code": "mo",
    "alias": ""
  },
  {
    "name": "macedonia",
    "country_Code": "mk",
    "alias": ""
  },
  {
    "name": "madagascar",
    "country_Code": "mg",
    "alias": ""
  },
  {
    "name": "malawi",
    "country_Code": "mw",
    "alias": ""
  },
  {
    "name": "malaysia",
    "country_Code": "my",
    "alias": ""
  },
  {
    "name": "maldives",
    "country_Code": "mv",
    "alias": ""
  },
  {
    "name": "mali",
    "country_Code": "ml",
    "alias": ""
  },
  {
    "name": "malta",
    "country_Code": "mt",
    "alias": ""
  },
  {
    "name": "marshall.islands",
    "country_Code": "mh",
    "alias": ""
  },
  {
    "name": "martinique",
    "country_Code": "mq",
    "alias": ""
  },
  {
    "name": "mauritania",
    "country_Code": "mr",
    "alias": ""
  },
  {
    "name": "mauritius",
    "country_Code": "mu",
    "alias": ""
  },
  {
    "name": "mayotte",
    "country_Code": "yt",
    "alias": ""
  },
  {
    "name": "mexico",
    "country_Code": "mx",
    "alias": ""
  },
  {
    "name": "micronesia",
    "country_Code": "fm",
    "alias": ""
  },
  {
    "name": "moldova",
    "country_Code": "md",
    "alias": ""
  },
  {
    "name": "monaco",
    "country_Code": "mc",
    "alias": ""
  },
  {
    "name": "mongolia",
    "country_Code": "mn",
    "alias": ""
  },
  {
    "name": "montenegro",
    "country_Code": "me",
    "alias": ""
  },
  {
    "name": "montserrat",
    "country_Code": "ms",
    "alias": ""
  },
  {
    "name": "morocco",
    "country_Code": "ma",
    "alias": ""
  },
  {
    "name": "mozambique",
    "country_Code": "mz",
    "alias": ""
  },
  {
    "name": "namibia",
    "country_Code": "na",
    "alias": ""
  },
  {
    "name": "nauru",
    "country_Code": "nr",
    "alias": ""
  },
  {
    "name": "nepal",
    "country_Code": "np",
    "alias": ""
  },
  {
    "name": "netherlands",
    "country_Code": "nl",
    "alias": ""
  },
  {
    "name": "netherlands antilles",
    "country_Code": "an",
    "alias": ""
  },
  {
    "name": "new.caledonia",
    "country_Code": "nc",
    "alias": ""
  },
  {
    "name": "new.guinea",
    "country_Code": "pg",
    "alias": ""
  },
  {
    "name": "new.zealand",
    "country_Code": "nz",
    "alias": ""
  },
  {
    "name": "nicaragua",
    "country_Code": "ni",
    "alias": ""
  },
  {
    "name": "niger",
    "country_Code": "ne",
    "alias": ""
  },
  {
    "name": "nigeria",
    "country_Code": "ng",
    "alias": ""
  },
  {
    "name": "niue",
    "country_Code": "nu",
    "alias": ""
  },
  {
    "name": "norfolk.island",
    "country_Code": "nf",
    "alias": ""
  },
  {
    "name": "north.korea",
    "country_Code": "kp",
    "alias": ""
  },
  {
    "name": "northern.mariana.islands",
    "country_Code": "mp",
    "alias": ""
  },
  {
    "name": "norway",
    "country_Code": "no",
    "alias": ""
  },
  {
    "name": "oman",
    "country_Code": "om",
    "alias": ""
  },
  {
    "name": "pakistan",
    "country_Code": "pk",
    "alias": ""
  },
  {
    "name": "palau",
    "country_Code": "pw",
    "alias": ""
  },
  {
    "name": "palestine",
    "country_Code": "ps",
    "alias": ""
  },
  {
    "name": "panama",
    "country_Code": "pa",
    "alias": ""
  },
  {
    "name": "paraguay",
    "country_Code": "py",
    "alias": ""
  },
  {
    "name": "peru",
    "country_Code": "pe",
    "alias": ""
  },
  {
    "name": "philippines",
    "country_Code": "ph",
    "alias": ""
  },
  {
    "name": "pitcairn.islands",
    "country_Code": "pn",
    "alias": ""
  },
  {
    "name": "poland",
    "country_Code": "pl",
    "alias": ""
  },
  {
    "name": "portugal",
    "country_Code": "pt",
    "alias": ""
  },
  {
    "name": "puerto.rico",
    "country_Code": "pr",
    "alias": ""
  },
  {
    "name": "qatar",
    "country_Code": "qa",
    "alias": ""
  },
  {
    "name": "reunion",
    "country_Code": "re",
    "alias": ""
  },
  {
    "name": "romania",
    "country_Code": "ro",
    "alias": ""
  },
  {
    "name": "russia",
    "country_Code": "ru",
    "alias": ""
  },
  {
    "name": "rwanda",
    "country_Code": "rw",
    "alias": ""
  },
  {
    "name": "saint.helena",
    "country_Code": "sh",
    "alias": ""
  },
  {
    "name": "saint.kitts.and.nevis",
    "country_Code": "kn",
    "alias": ""
  },
  {
    "name": "saint.lucia",
    "country_Code": "lc",
    "alias": ""
  },
  {
    "name": "saint.pierre",
    "country_Code": "pm",
    "alias": ""
  },
  {
    "name": "saint.vincent",
    "country_Code": "vc",
    "alias": ""
  },
  {
    "name": "samoa",
    "country_Code": "ws",
    "alias": ""
  },
  {
    "name": "san.marino",
    "country_Code": "sm",
    "alias": ""
  },
  {
    "name": "sandwich.islands",
    "country_Code": "gs",
    "alias": ""
  },
  {
    "name": "sao.tome",
    "country_Code": "st",
    "alias": ""
  },
  {
    "name": "saudi.arabia",
    "country_Code": "sa",
    "alias": ""
  },
  {
    "name": "scotland",
    "country_Code": "gb.sct",
    "alias": ""
  },
  {
    "name": "senegal",
    "country_Code": "sn",
    "alias": ""
  },
  {
    "name": "serbia",
    "country_Code": "cs",
    "alias": ""
  },
  {
    "name": "serbia",
    "country_Code": "rs",
    "alias": ""
  },
  {
    "name": "seychelles",
    "country_Code": "sc",
    "alias": ""
  },
  {
    "name": "sierra.leone",
    "country_Code": "sl",
    "alias": ""
  },
  {
    "name": "singapore",
    "country_Code": "sg",
    "alias": ""
  },
  {
    "name": "slovakia",
    "country_Code": "sk",
    "alias": ""
  },
  {
    "name": "slovenia",
    "country_Code": "si",
    "alias": ""
  },
  {
    "name": "solomon.islands",
    "country_Code": "sb",
    "alias": ""
  },
  {
    "name": "somalia",
    "country_Code": "so",
    "alias": ""
  },
  {
    "name": "south.africa",
    "country_Code": "za",
    "alias": ""
  },
  {
    "name": "south.korea",
    "country_Code": "kr",
    "alias": ""
  },
  {
    "name": "spain",
    "country_Code": "es",
    "alias": ""
  },
  {
    "name": "sri.lanka",
    "country_Code": "lk",
    "alias": ""
  },
  {
    "name": "sudan",
    "country_Code": "sd",
    "alias": ""
  },
  {
    "name": "suriname",
    "country_Code": "sr",
    "alias": ""
  },
  {
    "name": "swaziland",
    "country_Code": "sz",
    "alias": ""
  },
  {
    "name": "sweden",
    "country_Code": "se",
    "alias": ""
  },
  {
    "name": "switzerland",
    "country_Code": "ch",
    "alias": ""
  },
  {
    "name": "syria",
    "country_Code": "sy",
    "alias": ""
  },
  {
    "name": "taiwan",
    "country_Code": "tw",
    "alias": ""
  },
  {
    "name": "tajikistan",
    "country_Code": "tj",
    "alias": ""
  },
  {
    "name": "tanzania",
    "country_Code": "tz",
    "alias": ""
  },
  {
    "name": "thailand",
    "country_Code": "th",
    "alias": ""
  },
  {
    "name": "timorleste",
    "country_Code": "tl",
    "alias": ""
  },
  {
    "name": "togo",
    "country_Code": "tg",
    "alias": ""
  },
  {
    "name": "tokelau",
    "country_Code": "tk",
    "alias": ""
  },
  {
    "name": "tonga",
    "country_Code": "to",
    "alias": ""
  },
  {
    "name": "trinidad",
    "country_Code": "tt",
    "alias": ""
  },
  {
    "name": "tunisia",
    "country_Code": "tn",
    "alias": ""
  },
  {
    "name": "turkey",
    "country_Code": "tr",
    "alias": ""
  },
  {
    "name": "turkmenistan",
    "country_Code": "tm",
    "alias": ""
  },
  {
    "name": "tuvalu",
    "country_Code": "tv",
    "alias": ""
  },
  {
    "name": "uae",
    "country_Code": "ae",
    "alias": "united arab emirates"
  },
  {
    "name": "uganda",
    "country_Code": "ug",
    "alias": ""
  },
  {
    "name": "ukraine",
    "country_Code": "ua",
    "alias": ""
  },
  {
    "name": "united.kingdom",
    "country_Code": "gb",
    "alias": ""
  },
  {
    "name": "united.states",
    "country_Code": "us",
    "alias": "america"
  },
  {
    "name": "uruguay",
    "country_Code": "uy",
    "alias": ""
  },
  {
    "name": "us.minor.islands",
    "country_Code": "um",
    "alias": ""
  },
  {
    "name": "us.virgin.islands",
    "country_Code": "vi",
    "alias": ""
  },
  {
    "name": "uzbekistan",
    "country_Code": "uz",
    "alias": ""
  },
  {
    "name": "vanuatu",
    "country_Code": "vu",
    "alias": ""
  },
  {
    "name": "vatican.city",
    "country_Code": "va",
    "alias": ""
  },
  {
    "name": "venezuela",
    "country_Code": "ve",
    "alias": ""
  },
  {
    "name": "vietnam",
    "country_Code": "vn",
    "alias": ""
  },
  {
    "name": "wales",
    "country_Code": "gb.wls",
    "alias": ""
  },
  {
    "name": "wallis.and.futuna",
    "country_Code": "wf",
    "alias": ""
  },
  {
    "name": "western.sahara",
    "country_Code": "eh",
    "alias": ""
  },
  {
    "name": "yemen",
    "country_Code": "ye",
    "alias": ""
  },
  {
    "name": "zambia",
    "country_Code": "zm",
    "alias": ""
  },
  {
    "name": "zimbabwe",
    "country_Code": "zw",
    "alias": ""
  }
];

export default class FlagTableExample extends Component {

  render() {
    return (
      <Table data={countries}>
        <Table.Column dataKey='name' />
        <Table.Column dataKey='country_Code' />
        <Table.Column dataKey='alias' />
      </Table>
    )
  }
}
