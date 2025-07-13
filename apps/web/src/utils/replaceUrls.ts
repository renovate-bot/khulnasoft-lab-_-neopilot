import {
  landingPageHostname,
  landingPageFramerHostname,
  blogFramerHostname,
} from '@/app/hostnames'

export function replaceUrls(text: string, urlPathName: string, prefix: string = '', suffix: string = ''): string {
  const pattern = suffix ? `(?<url>${prefix}https://neopilot-[^${suffix}]*)/${suffix}` : `(?<url>${prefix}https://neopilot-.*)/$`

  return text.replaceAll(
    new RegExp(pattern, 'g'),
    (_, url) => url + suffix,
  )
    .replaceAll(
      `${prefix}${landingPageHostname}`,
      `${prefix}https://neopilot.dev`
    )
    .replaceAll(
      `${prefix}${landingPageFramerHostname}`,
      `${prefix}https://neopilot.dev`
    )
    .replaceAll(
      `${prefix}${blogFramerHostname}`,
      // The default url on framer does not have /blog in the path but the custom domain does,
      // so we need to handle this explicitly.
      urlPathName === '/'
        ? `${prefix}https://neopilot.dev/blog`
        : `${prefix}https://neopilot.dev`
    )
}