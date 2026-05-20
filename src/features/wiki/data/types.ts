export type AugmentTier = 'Silver' | 'Gold' | 'Prismatic'

export type AugmentText = {
  raw: string
  text: string
}

export type AugmentLevel = AugmentText & {
  level: 1 | 2 | 3
}

export type AugmentReferences = {
  augments: string[]
  champions: string[]
  items: string[]
  runes: string[]
}

export type Augment = {
  id: string
  name: string
  tier: AugmentTier
  description: AugmentText
  levels: AugmentLevel[]
  notes: AugmentText | null
  references: AugmentReferences
  tags: string[]
}
