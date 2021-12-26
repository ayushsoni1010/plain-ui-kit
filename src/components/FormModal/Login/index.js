import ReactModal from "react-modal";

ReactModal.setAppElement('#root');

export default function Login(LoginModalProps) {
  return (
    <ReactModal {...LoginModalProps} 
      isOpen={LoginModalProps.modalState}
      onRequestClose={() => LoginModalProps.modalStateMethod(false)}
      >
      Test
    </ReactModal>
  )
}