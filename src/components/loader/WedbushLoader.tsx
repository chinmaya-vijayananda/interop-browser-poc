import Image from "next/image"

const WedbushLoader = ({
  height = 24,
  width = 24,
}: {
  height?: number
  width?: number
}) => {
  return (
    <div style={{ height, width }}>
      <Image src='/wedbush-loader-single-color.gif' alt="Loading" width={width} height={width} />
    </div>
  )
}

export default WedbushLoader
