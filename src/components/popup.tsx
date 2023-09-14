import { AnimatePresence } from 'framer-motion';
import { FC } from 'react'
interface PopupProps {
    onConfirm: () => void;
    children?: React.ReactNode;
}
const Popup: FC<PopupProps> = ({ onConfirm, children }) => {
    const preference = {
        modalOverlay: !onConfirm ? 'hidden' : 'absolute h-full flex justify-center items-center bg-gray-300 inset-0 z-50 shadow-lg bg-opacity-50',
        modalContent: 'w-2/5 p-4 flex items-center justify-center',
    };
    return (
        <div>
            <div className={preference.modalOverlay}>
                <AnimatePresence>
                    <div className={preference.modalContent}>
                        {children}
                    </div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Popup