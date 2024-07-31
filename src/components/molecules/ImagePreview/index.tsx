import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { CloseIcon } from '@/components/atoms/IconButton'
import Box from '@/components/layout/Box'
import Flex from '@/components/layout/Flex'
import Dropzone from '@/components/molecules/Dropzone'

const ImagePreviewContainer = styled(Box)`
  position: relative;
`

const CloseBox = styled(Flex)`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 0 6px 0 6px;
  background-color: rgba(44, 44, 44, 0.66);
  cursor: pointer;
`

interface ImagePreviewProps {
  /**
   * 이미지 URL
   */
  src?: string
  /**
   * 대체 텍스트
   */
  alt?: string
  /**
   * 세로폭
   */
  height?: string
  /**
   * 가로폭
   */
  width?: string
  /**
   * 삭제 버튼을 클릭했을 떄의 이벤트 핸들러
   */
  onRemove?: (src: string) => void
}

/**
 * 이미지 미리보기
 */
const ImagePreview = ({
  src,
  alt,
  height,
  width,
  onRemove,
}: ImagePreviewProps) => {
  // 닫기 버튼을 클릭하면 onRemove를 호출한다
  const handleCloseClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    onRemove && src && onRemove(src)

    return false
  }

  return (
    <ImagePreviewContainer height={height} width={width}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} height={height} width={width} />
      <CloseBox
        alignItems="center"
        justifyContent="center"
        onClick={handleCloseClick}
      >
        <CloseIcon size={24} color="white" />
      </CloseBox>
    </ImagePreviewContainer>
  )
}

// 커스텀
const Container = styled.div`
  width: 288px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;
  
  `
interface Image {
  file?: File
  src?: string
}
export default ImagePreview

export const ImagePreviewCustom = (args: ImagePreviewProps) => {
  const [files, setFiles] = useState<File[]>([])
  const [images, setImages] = useState<Image[]>([])

  useEffect(() => {
    const newImages = [...images]

    for (const f of files) {
      const index = newImages.findIndex((img: Image) => img.file === f)

      if (index === -1) {
        newImages.push({
          file: f,
          src: URL.createObjectURL(f),
        })
      }
    }
    setImages(newImages)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  const handleRemove = (src: string) => {
    const image = images.find((img: Image) => img.src === src)

    if (image !== undefined) {
      setImages((images) => images.filter((img) => img.src !== image.src))
      setFiles((files) => files.filter((file: File) => file !== image.file))
    }

    args && args.onRemove && args.onRemove(src)
  }

  return (
    <Container>
      <Dropzone value={files} onDrop={(fileList) => setFiles(fileList)} />
      {images.map((image, i) => (
        <ImagePreview
          key={i}
          src={image.src}
          width="100px"
          {...args}
          onRemove={handleRemove}
        />
      ))}
    </Container>
  )
}
