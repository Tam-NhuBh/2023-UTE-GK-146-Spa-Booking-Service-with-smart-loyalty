/* eslint-disable react/prop-types */
import Modal from '@mui/material/Modal';


const ImageViewer = ({img, isOpen, onClose}) => {
  return (
    <Modal open={isOpen} onClose={onClose} className='flex items-center justify-center'>
      <img src={img} alt="image viewer" className='object-contain max-w-[60vw] max-h-[80vh]' />
    </Modal>
  )
}

export default ImageViewer