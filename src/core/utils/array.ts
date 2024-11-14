export const generateArray = <T>(
  length = 0,
  format: (i: number) => T = index => index as T,
): T[] => {
  return Array.from(Array(length || 0).keys()).map((_, index) => format(index))
}

export const filterArrayUniq = <T>(
  array: T[] = [],
  field: keyof T = '' as keyof T,
): T[] => {
  const uniq: any = {}
  return (array.filter(item => {
    if (uniq[item[field]]) return false
    uniq[item[field]] = true
    return true
  }) ?? []) as T[]
}
