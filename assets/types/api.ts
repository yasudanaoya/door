export type Tag = {
  id: string
  title: string
  color: string
  textColor: string
}

export type ORG = {
  href: string
  src: string
  title: string
  description: string
}

export type Trend = {
  id: string
  tags: Tag[]
  org: ORG
  comment: string
}
