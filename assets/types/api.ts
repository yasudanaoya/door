export type Tag = {
  id: string
  title: string
  color: string
  textColor: string
}

export type Ogp = {
  href: string
  src: string
  title: string
  description: string
}

export type Trend = {
  id: string
  tags: Tag[]
  ogp: Ogp
  comment: string
}
