const mode = process.env.NEXT_PUBLIC_ENV_MODE
// make sure you add "NEXT_PUBLIC_ENV_MODE=development" in .env.local while running app locally

const localConfig = {
  envName: process.env.NEXT_PUBLIC_ENV_NAME,
  appName: process.env.NEXT_PUBLIC_APP_NAME,
  appDomain: process.env.NEXT_PUBLIC_APP_DOMAIN,
  apiEndPoint: process.env.NEXT_PUBLIC_API_ENDPOINT,
  b2cDomain: process.env.NEXT_PUBLIC_B2C_DOMAIN,
  b2cDomainMfa: process.env.NEXT_PUBLIC_B2C_DOMAIN_MFA,
  b2cClientId: process.env.NEXT_PUBLIC_B2C_CLIENT_ID,
  b2cDomainPwdReset: process.env.NEXT_PUBLIC_B2C_DOMAIN_PASSWORD_RESET,
  b2cDomainProfEdit: process.env.NEXT_PUBLIC_B2C_DOMAIN_PROFILE_EDIT,
  b2cScope: process.env.NEXT_PUBLIC_B2C_SCOPE,
}

const serverConfig = {
  envName: 'Your azure env - Dev, Uat',
  appName: 'Application name AIW next starter app',
  appDomain: 'your application domain name - aiwnextstarter-dev.azurewebsites.net or .wedbush.com',
  apiEndPoint: 'api endpoint used for application',
  b2cDomain: 'b2c domain value which is policy of application',
  b2cDomainMfa: 'b2c domain mfa value',
  b2cClientId: 'b2c client id',
  b2cDomainPwdReset: 'b2c password reset url',
  b2cDomainProfEdit: 'b2c edit profile url',
  b2cScope: 'b2c scope of application',
  //b2c secret is now not used in any of application due to security issue
}

const appConfig = mode === 'development' ? localConfig : serverConfig

export default appConfig
