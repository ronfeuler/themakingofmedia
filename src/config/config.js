import { EnvironmentNames, PropertyNames, URLNames, VariableNames } from 'data/enum/configNames';

let environment = EnvironmentNames.PRODUCTION;
const { host } = document.location;

switch (host.split(':').shift()) {
  case 'localhost': {
    environment = EnvironmentNames.LOCAL;
    break;
  }
  default: {
    environment = EnvironmentNames.PRODUCTION;
    break;
  }
}

const config = {
  environments: {
    [EnvironmentNames.PRODUCTION]: {
      variables: {},
      urls: {},
    },
    [EnvironmentNames.STAGING]: {
      extends: EnvironmentNames.PRODUCTION,
      variables: {},
      urls: {},
    },
    [EnvironmentNames.DEVELOPMENT]: {
      extends: EnvironmentNames.STAGING,
      variables: {},
      urls: {},
    },
    [EnvironmentNames.LOCAL]: {
      extends: EnvironmentNames.DEVELOPMENT,
      variables: {},
      urls: {},
    },
  },
  variables: {
    [VariableNames.LOCALE_ENABLED]: false,
    [VariableNames.LOCALE_ROUTING_ENABLED]: false,
    [VariableNames.VERSIONED_STATIC_ROOT]:
      (window.webpackPublicPath || process.env.PUBLIC_PATH) + process.env.VERSIONED_STATIC_ROOT,
    [VariableNames.STATIC_ROOT]:
      (window.webpackPublicPath || process.env.PUBLIC_PATH) + process.env.STATIC_ROOT,
    [VariableNames.PUBLIC_PATH]: window.webpackPublicPath || process.env.PUBLIC_PATH,
  },
  urls: {
    // [URLNames.LOCALE]: `${process.env.VERSIONED_STATIC_ROOT}locale/{locale}.json`,
    // [URLNames.API]: `${process.env.PUBLIC_PATH}api/`,
    [URLNames.LOCALE]: `${process.env.VERSIONED_STATIC_ROOT}locale/{locale}.json`,
    [URLNames.API]: (environment === EnvironmentNames.LOCAL) ? 'http://localhost:8080/api' :
      'http://www.themakingofmedia.nl/api',
    [URLNames.BASE]: (environment === EnvironmentNames.LOCAL) ? 'http://localhost:8080' :
      'http://www.themakingofmedia.nl',
  },
  properties: {
    [PropertyNames.DEFAULT_LOCALE]: 'en-gb',
    [PropertyNames.AVAILABLE_LOCALES]: ['en-gb'],
    [PropertyNames.WHITELISTED_QUERY_PARAMS]: [],
  },
};

export default {
  config,
  environment,
};
