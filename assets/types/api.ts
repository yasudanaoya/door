export type Tag = {
  id: string
  title: string
  color: string
  textColor: string
}

export type OGP = {
  href: string
  src: string
  title: string
  description: string
}

export type Trend = {
  id: string
  tags: Tag[]
  ogp: OGP
  comment: string
}
