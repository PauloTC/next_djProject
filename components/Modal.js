import { useEffect,useState } from 'react'
import ReactDOM from 'react-dom'
import { FaTimes } from 'react-icons/fa'
import style from '@/styles/Modal.module.css'

export default function Modal({show,onClose, children, title}) {

  const [isBrowser, setIsBrowser] = useState(false)
  
  const handleClose = (e) => {
    e.preventDefault()
    onClose()
  }


  useEffect(()=> setIsBrowser(true))

  const modalContent = show ? (
    <div className={style.overlay}>
      <div className={style.modal}>
        <div className={style.header}>
          <a href="#" onClick={handleClose}>
            <FaTimes />
          </a>
        </div>
        {title && <div>{title}</div>}
        <div  className={style.body}>{children}</div>
      </div>
    </div>
  ) : null
  
  if(isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'))
  } else {
    return null
  }
}
