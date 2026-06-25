import type { Metadata } from 'next'
import BookDemoForm from './BookDemoForm'

export const metadata: Metadata = {
  title: 'Book a demo — See Rolla in action',
  description:
    'Book a 20-minute demo and see how Rolla helps you hire, onboard and pay your global team across 190+ countries.',
}

export default function BookDemoPage() {
  return <BookDemoForm />
}
