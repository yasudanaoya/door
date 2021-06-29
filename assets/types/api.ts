export type Tag = {
  id: string
  title: string
  color: string
  textColor: string
  createdAt: string
  updatedAt: string
}

export type OGP = {
  href: string
  src: string
  title: string
  description: string
  createdAt: string
  updatedAt: string
}

export type ResponseTrend = {
  id: string
  comment: string
  ogp: OGP
  tags: Tag[]
  createdAt: string
  updatedAt: string
}
