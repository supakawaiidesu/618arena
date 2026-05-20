import { goldAugments } from './goldAugments.generated'
import { prismaticAugments } from './prismaticAugments.generated'
import { silverAugments } from './silverAugments.generated'
import type { Augment, AugmentTier } from './types'

export type { Augment, AugmentLevel, AugmentReferences, AugmentText, AugmentTier } from './types'
export { goldAugments, prismaticAugments, silverAugments }

export const AUGMENT_TIERS = ['Silver', 'Gold', 'Prismatic'] as const satisfies readonly AugmentTier[]

export const augmentsByTier = {
  Silver: silverAugments,
  Gold: goldAugments,
  Prismatic: prismaticAugments,
} satisfies Record<AugmentTier, Augment[]>

export const allAugments = [...silverAugments, ...goldAugments, ...prismaticAugments].sort((a, b) =>
  a.name.localeCompare(b.name),
)

export function getAugmentById(id: string) {
  return allAugments.find((augment) => augment.id === id) ?? null
}
