export interface buttonInterface {
    condition: boolean
    label: string
    onClick ?: <T>(arg: T) => void
  }