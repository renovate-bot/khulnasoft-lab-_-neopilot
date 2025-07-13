import * as sdk from 'neopilot'

export function sortTemplatesAliases<
  E extends sdk.components['schemas']['Template']['aliases'],
>(aliases: E) {
  aliases?.sort()
}
