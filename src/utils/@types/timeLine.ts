export interface Layer {
  id: string
  transform: string
  duration: number
}

export interface TimeLine {
  layers: Layer[]
}
