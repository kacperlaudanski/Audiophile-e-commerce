import React, {ReactEventHandler, useEffect, useRef} from 'react'

interface Modal {
    openModal: boolean; 
    closeModal: ReactEventHandler; 
}

const SummaryModal: React.FC<Modal> = ({openModal, closeModal}) => {
    const ref = useRef<HTMLDialogElement | null>(null); 

    useEffect(() => {
      if(openModal){
        ref.current?.showModal()
      }else{
        ref.current?.close()
      }
    }, [openModal])
    return (
        <dialog className='summary-modal-container' ref={ref} onCancel={closeModal}>
           <h1>THANK YOU FOR YOUR ORDER</h1>
        </dialog>
    )
}

export default SummaryModal; 