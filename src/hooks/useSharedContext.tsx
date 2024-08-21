import useIOConnect from './useIOConnect'

const useSharedContext = (name: string) => {
  const ioConnect = useIOConnect()

  async function getSharedContextData<T>() {
    try {
      const result = await ioConnect?.contexts?.get(name)
      console.log('🚀 ~ file: useSharedContext.tsx:14 ~ result:', result)
      return result
    } catch (error) {
      console.log('🚀 ~ file: useSharedContext ~ error:', error)
    }
  }

  const isSharedContextAvailable = () => {
    try {
      const result = ioConnect?.contexts?.all()
      const isAvailable = result?.includes(name)
      return isAvailable
    } catch (error) {
      console.log('🚀 ~ file: useSharedContext.tsx:26 ~ error:', error)
      return false
    }
  }

  return { getSharedContextData, isSharedContextAvailable }
}

export default useSharedContext
