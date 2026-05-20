import { createFileRoute } from '@tanstack/react-router'
import { WikiPage } from '../features/wiki/WikiPage'

export const Route = createFileRoute('/wiki')({
  component: WikiPage,
})
