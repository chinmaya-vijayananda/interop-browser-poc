import WedbushLoader from './WedbushLoader'

interface Props {
  size?: number
  loadingText?: string | JSX.Element
  isFullPageLoader?: boolean
}
const Loader = ({
  size = 24,
  loadingText = 'Loading...',
  isFullPageLoader = false,
}: Props) => {
  return (
    <>
      {isFullPageLoader ? (
        <div className='flex justify-center items-center h-[80vh]'>
          <div className='flex justify-center items-center gap-2 pt-7'>
            <WedbushLoader height={size} width={size} />
            {loadingText}
          </div>
        </div>
      ) : (
        <div className='flex justify-center items-center gap-2 pt-7'>
          <WedbushLoader height={size} width={size} />
          {loadingText}
        </div>
      )}
    </>
  )
}

export default Loader
