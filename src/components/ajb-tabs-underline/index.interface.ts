interface Tab {
  label: string
  content: JSX.Element | JSX.Element[]
}

export interface TabsUnderline {
  keys: string[]
  tabs: {
    [key: string]: Tab
  }
  tabActive: string
  handleSetActive: (prevActiveKey: string, nextActiveKey: string) => void
}